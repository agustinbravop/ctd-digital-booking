package Grupo3.Casasydeptos.security.Controller;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.exceptions.authFeedbackException;
import Grupo3.Casasydeptos.models.Producto;
import Grupo3.Casasydeptos.models.Puntuacion;
import Grupo3.Casasydeptos.security.Entity.ConfirmationToken;
import Grupo3.Casasydeptos.security.Entity.Rol;
import Grupo3.Casasydeptos.security.Entity.Usuario;
import Grupo3.Casasydeptos.security.Entity.UsuarioMain;
import Grupo3.Casasydeptos.security.dto.JwtDto;
import Grupo3.Casasydeptos.security.dto.LoginUsuario;
import Grupo3.Casasydeptos.security.dto.NuevoUsuario;
import Grupo3.Casasydeptos.security.enums.RolNombre;
import Grupo3.Casasydeptos.security.jwt.JwtProvider;
import Grupo3.Casasydeptos.security.repository.ConfirmationTokenRepository;
import Grupo3.Casasydeptos.security.service.RolService;
import Grupo3.Casasydeptos.security.service.UsuarioService;
import Grupo3.Casasydeptos.services.EmailSenderService;
import Grupo3.Casasydeptos.services.ProductoService;
import Grupo3.Casasydeptos.services.PuntuacionService;
import Grupo3.Casasydeptos.services.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/auth") // este es el auth de los permisos del main security
@CrossOrigin
public class AuthController {
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final UsuarioService usuarioService;
    private final RolService rolService;
    private final JwtProvider jwtProvider;
    private final ProductoService productoService;
    private final PuntuacionService puntuacionService;
    private final ReservaService reservaService;
    private final ConfirmationTokenRepository confirmationTokenRepository;
    private final EmailSenderService emailSenderService;

    @Autowired
    public AuthController(PasswordEncoder passwordEncoder, AuthenticationManager authenticationManager, UsuarioService usuarioService, RolService rolService, JwtProvider jwtProvider, ProductoService productoService, PuntuacionService puntuacionService, ReservaService reservaService, ConfirmationTokenRepository confirmationTokenRepository, EmailSenderService emailSenderService) {
        this.passwordEncoder = passwordEncoder;
        this.authenticationManager = authenticationManager;
        this.usuarioService = usuarioService;
        this.rolService = rolService;
        this.jwtProvider = jwtProvider;
        this.productoService = productoService;
        this.puntuacionService = puntuacionService;
        this.reservaService = reservaService;
        this.confirmationTokenRepository = confirmationTokenRepository;
        this.emailSenderService = emailSenderService;
    }

    @RequestMapping(value = "/confirm-account/{confirmationToken}", method = {RequestMethod.GET, RequestMethod.POST})
    public ResponseEntity<String> confirmUserAccount(@PathVariable String confirmationToken) {
        ConfirmationToken token = confirmationTokenRepository.findByConfirmationToken(confirmationToken);
        if (token != null) {
            Usuario user = usuarioService.getByEmail(token.getUsuario().getEmail());
            user.setEnabled(true);

            Set<Rol> roles = new HashSet<>();
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER));
            user.setRoles(roles);
            usuarioService.save(user);

            return new ResponseEntity<>("Email validado exitosamente!", HttpStatus.OK);
        }

        return new ResponseEntity<>("Es obligatorio un confirmationToken en el path", HttpStatus.BAD_REQUEST);
    }

    //Espera un json y lo convierte a tipo clase NuevoUsuario
    @PostMapping("/nuevoUsuario")
    public ResponseEntity<JwtDto> nuevoUsuario(@Valid @RequestBody NuevoUsuario nuevo, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            throw new BadRequestException("petición no válida");
        }
        if (usuarioService.existsByEmail(nuevo.getEmail())) {
            throw new authFeedbackException("Ese email ya se encuentra registrado");
        }

        Usuario usuario = new Usuario(
                nuevo.getNombre(),
                nuevo.getApellido(),
                nuevo.getEmail(),
                passwordEncoder.encode(nuevo.getContrasena()),
                nuevo.getCiudad()
        );

        if (usuario.isEnabled()) {
            Set<Rol> roles = new HashSet<>();
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_USER));

            usuario.setRoles(roles);
            usuarioService.save(usuario);

            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    nuevo.getEmail(),
                    nuevo.getContrasena()
            );
            Authentication authentication = authenticationManager.authenticate(authToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtProvider.generateToken(authentication);
            UsuarioMain usuarioMain = (UsuarioMain) authentication.getPrincipal();

            JwtDto jwtDto = new JwtDto(
                    jwt,
                    usuarioMain.getIdUsuario(),
                    usuarioMain.getUsername(),
                    usuarioMain.getNombre(),
                    usuarioMain.getApellido(),
                    usuarioMain.getAuthorities()
            );
            return new ResponseEntity<>(jwtDto, HttpStatus.CREATED);
        } else {
            usuarioService.save(usuario);
            ConfirmationToken confirmationToken = new ConfirmationToken(usuario);

            confirmationTokenRepository.save(confirmationToken);

            SimpleMailMessage mailMessage = new SimpleMailMessage();
            mailMessage.setTo(usuario.getEmail());
            mailMessage.setSubject("Link de verificación de correo - Digital Booking");
            mailMessage.setFrom("pdb.grupo3@gmail.com");
            mailMessage.setText("Tu cuenta ha sido creada exitosamente, ¡Bienvenido!" +
                    "\n\nFalta un solo paso, validar tu dirección de correo electrónico." +
                    "\nPor favor, entrá al siguiente link: " +
                    "http://ec2-18-234-148-80.compute-1.amazonaws.com/auth/confirm-account/" +
                    confirmationToken.getConfirmationToken() +
                    "\n\nDigital Booking");

            emailSenderService.sendEmail(mailMessage);

            Set<Rol> roles = new HashSet<>();
            roles.add(rolService.getByRolNombre(RolNombre.ROLE_PROVISORIO));

            usuario.setRoles(roles);
            usuarioService.save(usuario);

            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    nuevo.getEmail(),
                    nuevo.getContrasena()
            );
            Authentication authentication = authenticationManager.authenticate(authToken);

            SecurityContextHolder.getContext().setAuthentication(authentication);
            String jwt = jwtProvider.generateToken(authentication);
            UsuarioMain usuarioMain = (UsuarioMain) authentication.getPrincipal();

            JwtDto jwtDto = new JwtDto(
                    jwt,
                    usuarioMain.getIdUsuario(),
                    usuarioMain.getUsername(),
                    usuarioMain.getNombre(),
                    usuarioMain.getApellido(),
                    usuarioMain.getAuthorities()
            );

            return new ResponseEntity<>(jwtDto, HttpStatus.OK);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUsuario loginUsuario, BindingResult bindingResult) {
        System.out.println(loginUsuario);
        if (bindingResult.hasErrors()) {
            throw new BadRequestException("Campos malos");
        }

        UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                loginUsuario.getEmail(),
                loginUsuario.getContrasena()
        );
        Authentication authentication = authenticationManager.authenticate(authToken);

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtProvider.generateToken(authentication);
        UsuarioMain usuarioMain = (UsuarioMain) authentication.getPrincipal();

        JwtDto jwtDto = new JwtDto(
                jwt,
                usuarioMain.getIdUsuario(),
                usuarioMain.getUsername(),
                usuarioMain.getNombre(),
                usuarioMain.getApellido(),
                usuarioMain.getAuthorities()
        );

        return new ResponseEntity<>(jwtDto, HttpStatus.OK);
    }

    @GetMapping("/favs/")
    public ResponseEntity<Set<Producto>> getAllFavs() {
        Usuario user = usuarioService.getByEmail(usuarioService.getEmailUserSession());

        Set<Producto> favs = user.getFavoritos();
        return new ResponseEntity<>(favs, HttpStatus.OK);
    }

    @PostMapping("/favs/eliminar/{idProducto}")
    public ResponseEntity<Set<Producto>> eliminarFavs(@PathVariable Long idProducto) {
        Usuario user = usuarioService.getByEmail(usuarioService.getEmailUserSession());

        Set<Producto> favs = user.getFavoritos();
        favs.removeIf(producto -> producto.getIdProducto().equals(idProducto));
        user.setFavoritos(favs);

        usuarioService.save(user);
        return new ResponseEntity<>(favs, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/favs/agregar/{idProducto}")
    public ResponseEntity<Set<Producto>> agregarFavs(@PathVariable Long idProducto) {
        Usuario user = usuarioService.getByEmail(usuarioService.getEmailUserSession());
        Set<Producto> favs = user.getFavoritos();
        Producto fav = productoService.findById(idProducto);
        favs.add(fav);
        user.setFavoritos(favs);
        usuarioService.save(user);
        return new ResponseEntity<>(favs, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping("/puntuaciones/{idReserva}")
    public ResponseEntity<Puntuacion> agregarPuntuacion(@RequestBody Puntuacion puntuacion, @PathVariable Long idReserva) {
        Long idUser = puntuacion.getUsuario().getIdUsuario();
        Long idProd = puntuacion.getProducto().getIdProducto();
        Date nowDate = new Date();

        if (puntuacion.getPuntuacion() > 6 || puntuacion.getPuntuacion() < 1) {
            throw new BadRequestException("La puntuacion solo puede ir de 1 a 5");
        }
        if (nowDate.before(reservaService.findById(idReserva).getFechaFin())) {
            throw new BadRequestException("La puntuacion solo puede asignarse en una fecha posterior a la reserva");
        }
        if (puntuacionService.findByUserProducto(idProd, idUser).size() > 0) {
            throw new BadRequestException("Ya has puntuado este producto");
        }
        puntuacion = puntuacionService.save(puntuacion);
        Producto prod = productoService.findById(idProd);
        prod.setPromedio(puntuacionService.getPromedioPuntuacionProd(idProd));
        productoService.save(prod);
        URI uri = URI.create("/api/ciudades/" + puntuacion.getIdPuntuacion());
        return ResponseEntity.created(uri).body(puntuacion);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/puntuaciones/{idPuntuacion}")
    public ResponseEntity<Puntuacion> modificarPuntuacion(@PathVariable Long idPuntuacion, @RequestBody Puntuacion puntuacion) {
        if (!idPuntuacion.equals(puntuacion.getIdPuntuacion())) {
            throw new BadRequestException("Id de la Puntuacion no coincide con el del path");
        }
        puntuacion = puntuacionService.save(puntuacion);

        Long idProd = puntuacion.getProducto().getIdProducto();
        Producto prod = productoService.findById(idProd);
        prod.setPromedio(puntuacionService.getPromedioPuntuacionProd(idProd));
        productoService.save(prod);

        return new ResponseEntity<>(puntuacion, HttpStatus.OK);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/puntuaciones/{idPuntuacion}")
    public ResponseEntity<Puntuacion> eliminarPuntuacion(@PathVariable Long idPuntuacion) {
        Usuario user = usuarioService.getByEmail(usuarioService.getEmailUserSession());
        if (!user.getIdUsuario().equals(puntuacionService.findById(idPuntuacion).getUsuario().getIdUsuario())) {
            throw new BadRequestException("No puede eliminar puntuaciones de otros usuarios");
        }
        Puntuacion puntuacion = puntuacionService.delete(idPuntuacion);

        Long idProd = puntuacion.getProducto().getIdProducto();
        Producto prod = productoService.findById(idProd);
        prod.setPromedio(puntuacionService.getPromedioPuntuacionProd(idProd));
        productoService.save(prod);

        return new ResponseEntity<>(puntuacion, HttpStatus.OK);
    }

    @GetMapping("/puntuaciones/{idUser}")
    public ResponseEntity<List<Puntuacion>> getPuntuacioneByUser(@PathVariable Long idUser) {
        List<Puntuacion> puntuaciones = puntuacionService.findPuntuacionByUser(idUser);
        return new ResponseEntity<>(puntuaciones, HttpStatus.OK);
    }
}
