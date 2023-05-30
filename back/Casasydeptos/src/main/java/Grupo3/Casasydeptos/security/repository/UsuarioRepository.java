package Grupo3.Casasydeptos.security.repository;

import Grupo3.Casasydeptos.security.Entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {

    @Query("from Usuario u where u.email = ?1")
    Usuario findByEmail(String email);

    Boolean existsByEmail(String email);
}