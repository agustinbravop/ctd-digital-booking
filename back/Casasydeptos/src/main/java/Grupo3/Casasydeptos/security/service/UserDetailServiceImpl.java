package Grupo3.Casasydeptos.security.service;

import Grupo3.Casasydeptos.security.Entity.Usuario;
import Grupo3.Casasydeptos.security.Entity.UsuarioMain;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    UsuarioService usuarioService;


    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Usuario usuario = usuarioService.getByEmail(email);

        return UsuarioMain.build(usuario);
    }
}
