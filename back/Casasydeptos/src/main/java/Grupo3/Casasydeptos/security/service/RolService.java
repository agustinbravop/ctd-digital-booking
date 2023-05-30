package Grupo3.Casasydeptos.security.service;

import Grupo3.Casasydeptos.security.Entity.Rol;
import Grupo3.Casasydeptos.security.enums.RolNombre;
import Grupo3.Casasydeptos.security.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class RolService {

    private final RolRepository repository;

    @Autowired
    public RolService(RolRepository repository) {
        this.repository = repository;
    }

    public Rol getByRolNombre(RolNombre rolNombre) {
        return repository.findByRolNombre(rolNombre);
    }

    public Boolean existsByRolNombre(RolNombre rolNombre) {
        return repository.existsByRolNombre(rolNombre);
    }

    public void save(Rol rol) {
        repository.save(rol);
    }

}