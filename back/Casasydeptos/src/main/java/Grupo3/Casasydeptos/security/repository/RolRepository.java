package Grupo3.Casasydeptos.security.repository;

import Grupo3.Casasydeptos.security.Entity.Rol;
import Grupo3.Casasydeptos.security.enums.RolNombre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RolRepository extends JpaRepository<Rol, Long> {

    Rol findByRolNombre(RolNombre rolNombre);

    Boolean existsByRolNombre(RolNombre rolNombre);
}