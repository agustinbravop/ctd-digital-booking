package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface ReservaRepository extends JpaRepository<Reserva, Long> {
    @Query("from Reserva r where r.producto.idProducto = ?1")
    Iterable<Reserva> findAllByProductoId(Long Id);

    @Query("from Reserva r where r.usuario.idUsuario = ?1")
    Iterable<Reserva> findAllByUsuarioId(Long Id);

    @Query("from Reserva r where (r.producto.idProducto = ?1) " +
            "AND (r.usuario.idUsuario = ?2)")
    Reserva findByProductoUsuario(Long idProducto, Long idUsuario);

    @Query("SELECT CASE WHEN (count(r) > 0) THEN true ELSE false END " +
            "FROM Reserva AS r " +
            "WHERE (r.producto.idProducto = :idProducto) " +
            "AND ((:fechaInicio BETWEEN r.fechaInicio AND r.fechaFin) " +
            "OR (r.fechaInicio BETWEEN :fechaInicio AND :fechaFin))")
    Boolean isRangoFechasReservado(Long idProducto, Date fechaInicio, Date fechaFin);
}