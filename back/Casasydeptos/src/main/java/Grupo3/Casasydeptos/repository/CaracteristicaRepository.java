package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CaracteristicaRepository extends JpaRepository<Caracteristica, Long> {
}
