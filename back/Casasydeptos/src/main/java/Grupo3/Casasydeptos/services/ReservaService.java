package Grupo3.Casasydeptos.services;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Reserva;
import Grupo3.Casasydeptos.repository.ReservaRepository;
import Grupo3.Casasydeptos.security.Entity.Usuario;
import Grupo3.Casasydeptos.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class ReservaService {

    public final ReservaRepository repository;
    public final UsuarioRepository usuarioRepository;

    @Autowired
    public ReservaService(ReservaRepository repository, UsuarioRepository usuarioRepository) {
        this.repository = repository;
        this.usuarioRepository = usuarioRepository;
    }

    public Reserva crear(Reserva res) {
        if (res.getUsuario().getCiudad() != null) {
            Usuario usuario = usuarioRepository.getById(res.getUsuario().getIdUsuario());
            usuario.setCiudad(res.getUsuario().getCiudad());
            usuarioRepository.save(usuario);
        }
        if (res.getFechaInicio() == null || res.getFechaFin() == null) {
            throw new BadRequestException("No puede faltar ni la fecha inicial ni la final");
        }
        // fechaInicio menor a la fecha de ayer
        if (res.getFechaInicio().before(new Date(new Date().getTime() - 24 * 60 * 60 * 1000))) {
            throw new BadRequestException("El check-in no puede ser una fecha ya pasada");
        }
        if (res.getFechaInicio().after(res.getFechaFin())) {
            throw new BadRequestException("El check-in no puede ser posterior al check-out");
        }
        if (isRangoFechasReservado(res.getProducto().getIdProducto(), res.getFechaInicio(), res.getFechaFin())) {
            throw new BadRequestException("Hay fechas ya reservadas entre ese rango de fechas");
        }
        res = repository.save(res);
        return res;
    }

    public Reserva modificar(Reserva reserva) {
        if (reserva.getUsuario().getCiudad() != null) {
            Usuario usuario = usuarioRepository.getById(reserva.getUsuario().getIdUsuario());
            usuario.setCiudad(reserva.getUsuario().getCiudad());
            usuarioRepository.save(usuario);
        }
        if (reserva.getFechaInicio() == null || reserva.getFechaFin() == null) {
            throw new BadRequestException("No puede faltar ni la fecha inicial ni la final");
        }
        if (reserva.getFechaInicio().before(new Date())) {
            throw new BadRequestException("El check-in no puede ser una fecha ya pasada");
        }
        if (reserva.getFechaInicio().after(reserva.getFechaFin())) {
            throw new BadRequestException("El check-in no puede ser posterior al check-out");
        }

        reserva = repository.save(reserva);
        return reserva;
    }

    public Reserva findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra reserva con ese id")
        );
    }

    public Iterable<Reserva> findAll() {
        return repository.findAll();
    }

    public Iterable<Reserva> findAllByProductoId(Long id) {
        return repository.findAllByProductoId(id);
    }

    public Iterable<Reserva> findAllByUsuarioId(Long id) {
        return repository.findAllByUsuarioId(id);
    }

    public Reserva delete(Long id) {
        final Reserva oldReserva = findById(id);
        repository.delete(oldReserva);
        return oldReserva;
    }

    public Reserva findByUserProducto(Long idProducto, Long idUsuario) {
        return repository.findByProductoUsuario(idProducto, idUsuario);
    }

    public Boolean isRangoFechasReservado(Long idProducto, Date fechaInicio, Date fechaFin) {
        return repository.isRangoFechasReservado(idProducto, fechaInicio, fechaFin);
    }
}
