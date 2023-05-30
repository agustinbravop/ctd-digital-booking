package Grupo3.Casasydeptos.security.Entity;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;


public class UsuarioMain implements UserDetails {

    private final Long idUsuario;
    private final String nombre;
    private final String apellido;
    private final String email;
    private final String contrasena;
    private final String ciudad;
    private final Collection<? extends GrantedAuthority> authorities;

    public UsuarioMain(Long idUsuario, String nombre, String apellido, String email, String contrasena,
                       String ciudad, Collection<? extends GrantedAuthority> authorities) {
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.contrasena = contrasena;
        this.ciudad = ciudad;
        this.authorities = authorities;
    }

    public static UsuarioMain build(Usuario usuario) {
        //Convertimos la clase Rol a la clase GrantedAuthority
        List<GrantedAuthority> authorities =
                usuario.getRoles()
                        .stream()
                        .map(rol -> new SimpleGrantedAuthority(rol.getRolNombre().name()))
                        .collect(Collectors.toList());
        return new UsuarioMain(
                usuario.getIdUsuario(),
                usuario.getNombre(),
                usuario.getApellido(),
                usuario.getEmail(),
                usuario.getContrasena(),
                usuario.getCiudad(),
                authorities);
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return contrasena;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public String getNombre() {
        return nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public String getCiudad() {
        return ciudad;
    }

    public Long getIdUsuario() {
        return idUsuario;
    }
}
