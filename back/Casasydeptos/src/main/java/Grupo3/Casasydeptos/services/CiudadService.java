package Grupo3.Casasydeptos.services;


import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Ciudad;
import Grupo3.Casasydeptos.repository.CiudadRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CiudadService {

    private final CiudadRepository repository;

    @Autowired
    public CiudadService(CiudadRepository repository) {
        this.repository = repository;
    }

    public Ciudad save(Ciudad ciudad) {
        if (ciudad.getNombre().isBlank() || ciudad.getPais().isBlank()) {
            throw new BadRequestException("El nombre o país de una ciudad no puede estar vacío");
        }
        ciudad = repository.save(ciudad);
        return ciudad;
    }

    public Ciudad findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra ciudad con ese id")
        );
    }

    public Iterable<Ciudad> findAll() {
        return repository.findAll();
    }

    public Ciudad delete(Long id) {
        final Ciudad oldCiudad = findById(id);
        repository.delete(oldCiudad);
        return oldCiudad;
    }
}
