package Grupo3.Casasydeptos.services;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Imagen;
import Grupo3.Casasydeptos.repository.ImagenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImagenService {

    private final ImagenRepository repository;

    @Autowired
    public ImagenService(ImagenRepository repository) {
        this.repository = repository;
    }

    public Imagen save(Imagen imagen) {
        if (imagen.getUrlImagen() == null) {
            throw new BadRequestException("La url de la imagen no puede ser nula");
        }
        if (imagen.getUrlImagen().isBlank()) {
            throw new BadRequestException("La url de la imagen no puede estar vacía");
        }

        imagen = repository.save(imagen);
        return imagen;
    }

    public Imagen findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra imagen con ese id")
        );
    }

    public Iterable<Imagen> findAll() {
        return repository.findAll();
    }

    public Imagen delete(Long id) {
        final Imagen oldImagenes = findById(id);
        repository.delete(oldImagenes);
        return oldImagenes;
    }
}