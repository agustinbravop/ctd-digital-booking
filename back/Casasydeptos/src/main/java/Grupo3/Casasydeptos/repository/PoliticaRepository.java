package Grupo3.Casasydeptos.repository;

import Grupo3.Casasydeptos.models.Politica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoliticaRepository extends JpaRepository<Politica, Long> {
}
