package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Puntuacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PuntuacionRepository extends JpaRepository<Puntuacion, Long> {

    @Query("from Puntuacion p where p.producto.idProducto = ?1 " +
            "AND p.usuario.idUsuario = ?2")
    List<Puntuacion> findByProductoUsuario(Long idProducto, Long idUsuario);

    @Query("from Puntuacion p where p.producto.idProducto = ?1 ")
    List<Puntuacion> findPuntuacionByProducto(Long idProducto);

    @Query("from Puntuacion p where p.usuario.idUsuario = ?1")
    List<Puntuacion> findProdByUser(Long idProd);
}