package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Imagen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImagenRepository extends JpaRepository<Imagen, Long> {
}
