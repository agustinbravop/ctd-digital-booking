package Grupo3.Casasydeptos.services;


import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Caracteristica;
import Grupo3.Casasydeptos.repository.CaracteristicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CaracteristicaService {

    private final CaracteristicaRepository repository;

    @Autowired
    public CaracteristicaService(CaracteristicaRepository repository) {
        this.repository = repository;
    }

    public Caracteristica save(Caracteristica caract) {
        if (caract.getNombre().isBlank()) {
            throw new BadRequestException("El nombre de una característica no puede estar vacío");
        }

        caract = repository.save(caract);
        return caract;
    }

    public Caracteristica findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra característica con ese id")
        );
    }

    public Iterable<Caracteristica> findAll() {
        return repository.findAll();
    }

    public Caracteristica delete(Long id) {
        final Caracteristica oldCaracteristica = findById(id);
        repository.delete(oldCaracteristica);
        return oldCaracteristica;
    }
}
