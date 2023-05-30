package Grupo3.Casasydeptos.services;

import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Politica;
import Grupo3.Casasydeptos.repository.PoliticaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PoliticaService {

    private final PoliticaRepository repository;

    @Autowired
    public PoliticaService(PoliticaRepository repository) {
        this.repository = repository;
    }

    public Politica save(Politica politica) {
        politica = repository.save(politica);
        return politica;
    }

    public Politica findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra política con ese id")
        );
    }

    public Iterable<Politica> findAll() {
        return repository.findAll();
    }

    public Politica delete(Long id) {
        final Politica oldPolitica = findById(id);
        repository.delete(oldPolitica);
        return oldPolitica;
    }
}
