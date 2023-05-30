package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    @Query("from Producto p where p.categoria.idCategoria = ?1")
    Iterable<Producto> findAllByCategoriaId(Long Id);

    @Query("from Producto p where p.ciudad.idCiudad = ?1")
    Iterable<Producto> findAllByCiudadId(Long Id);

    @Query("SELECT p " +
            "FROM Producto AS p " +
            "INNER JOIN Categoria AS cat " +
            "ON p.categoria.idCategoria = cat.idCategoria " +
            "INNER JOIN Ciudad AS ciud " +
            "ON p.ciudad.idCiudad = ciud.idCiudad " +
            "WHERE " +
            "(?1 IS null OR p.categoria.titulo = ?1) " +
            "AND (?2 IS null OR p.ciudad.idCiudad = ?2) " +
            "AND ((?3 IS null AND ?4 IS null) OR p.idProducto NOT IN ( " +
            "   SELECT p.idProducto " +
            "   FROM Producto AS p " +
            "   LEFT OUTER JOIN Reserva AS r " +
            "   ON p.idProducto = r.producto.idProducto " +
            "   WHERE (?3 IS null OR ?3 BETWEEN r.fechaInicio AND r.fechaFin) " +
            "   OR (?4 IS null OR ?4 BETWEEN r.fechaInicio AND r.fechaFin)" +
            "   OR ((?3 IS null OR ?4 IS null) OR r.fechaInicio BETWEEN ?3 AND ?4)" +
            "))"
    )
    Iterable<Producto> findAllByFilters(String categoria, Long idCiudad, Date fechaInicio, Date fechaFin);
}
