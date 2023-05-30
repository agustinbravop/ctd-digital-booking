package Grupo3.Casasydeptos.controllers;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.models.Reserva;
import Grupo3.Casasydeptos.services.EmailSenderService;
import Grupo3.Casasydeptos.services.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api")
public class ReservaController {

    @Autowired
    public ReservaService service;

    @Autowired
    private EmailSenderService emailSenderService;

    @PreAuthorize("hasRole('ROLE_USER')")
    @PostMapping(value = "/reservas/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Reserva> agregarReserva(@RequestBody Reserva reserva) {
        reserva = service.crear(reserva);

        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(SecurityContextHolder.getContext().getAuthentication().getName());
        mailMessage.setSubject("Detalle de tu Reserva - Digital Booking");
        mailMessage.setFrom("pdb.grupo3@gmail.com");
        mailMessage.setText("¡Tu reserva se ha registrado con éxito!" +
                "\n\nCheck-in: " + reserva.getFechaInicio().toGMTString() +
                "\nCheck-out: " + reserva.getFechaFin().toGMTString() +
                "\nHora de ingreso: " + reserva.getHoraIngreso() +
                "\nDirección del departamento: " + reserva.getProducto().getDireccion() +
                "\nObservaciones: " + reserva.getObservaciones() +
                "\n\n¡Muchas gracias!"
        );
        emailSenderService.sendEmail(mailMessage);

        URI uri = URI.create("/api/reservas/" + reserva.getIdReserva());
        return ResponseEntity.created(uri).body(reserva);
    }

    @GetMapping("/reservas/{id}")
    public Reserva obtenerReserva(@PathVariable Long id) {
        return service.findById(id);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @PutMapping("/reservas/{id}")
    public Reserva actualizarReserva(@PathVariable Long id, @RequestBody Reserva reserva) {
        if (!id.equals(reserva.getIdReserva())) {
            throw new BadRequestException("Id de la reserva no coincide con el del path");
        }
        return service.modificar(reserva);
    }

    @GetMapping("/reservas/")
    public Iterable<Reserva> listarReservas() {
        return service.findAll();
    }

    @GetMapping("/reservas/porProducto/{id}")
    public Iterable<Reserva> listarReservasPorProductoId(@PathVariable Long id) {
        return service.findAllByProductoId(id);
    }

    @GetMapping("/reservas/porUsuario/{id}")
    public Iterable<Reserva> listarReservasPorUsuarioId(@PathVariable Long id) {
        return service.findAllByUsuarioId(id);
    }

    @PreAuthorize("hasRole('ROLE_USER')")
    @DeleteMapping("/reservas/{id}")
    public Reserva borrarReserva(@PathVariable Long id) {
        return service.delete(id);
    }
}