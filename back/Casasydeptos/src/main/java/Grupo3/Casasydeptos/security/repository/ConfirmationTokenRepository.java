package Grupo3.Casasydeptos.security.repository;

import Grupo3.Casasydeptos.security.Entity.ConfirmationToken;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository//capaz esta notacion no hace falta
public interface ConfirmationTokenRepository extends CrudRepository<ConfirmationToken, String> {
    ConfirmationToken findByConfirmationToken(String confirmationToken);
}
