package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CiudadRepository extends JpaRepository<Ciudad, Long> {
}
