package Grupo3.Casasydeptos.security.service;

import Grupo3.Casasydeptos.security.Entity.Usuario;
import Grupo3.Casasydeptos.security.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UsuarioService {

    @Autowired
    UsuarioRepository repository;

    public Usuario getByEmail(String email) {
        return repository.findByEmail(email);
    }

    public Boolean existsByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public void save(Usuario usuario) {
        repository.save(usuario);
    }

    public String getEmailUserSession() {
        Authentication user = SecurityContextHolder.getContext().getAuthentication();
        return user.getName();
    }
}
