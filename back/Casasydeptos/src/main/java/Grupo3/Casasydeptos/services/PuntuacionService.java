package Grupo3.Casasydeptos.services;

import Grupo3.Casasydeptos.exceptions.ResourceNotFoundException;
import Grupo3.Casasydeptos.models.Puntuacion;
import Grupo3.Casasydeptos.repository.PuntuacionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PuntuacionService {

    private final PuntuacionRepository repository;

    @Autowired
    public PuntuacionService(PuntuacionRepository repository) {
        this.repository = repository;
    }

    public Puntuacion save(Puntuacion puntuacion) {
        puntuacion = repository.save(puntuacion);
        return puntuacion;
    }

    public Puntuacion findById(Long id) {
        return repository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("No se encuentra puntuacion con ese id")
        );
    }

    public Iterable<Puntuacion> findAll() {
        return repository.findAll();
    }

    public Puntuacion delete(Long id) {
        final Puntuacion oldPuntuacion = findById(id);
        repository.delete(oldPuntuacion);
        return oldPuntuacion;
    }

    public List<Puntuacion> findByUserProducto(Long idProducto, Long idUsuario) {
        return repository.findByProductoUsuario(idProducto, idUsuario);
    }

    public Double getPromedioPuntuacionProd(Long idProducto) {
        List<Puntuacion> puntuaciones = repository.findPuntuacionByProducto(idProducto);
        Double sumaPuntos = 0.0;

        for (Puntuacion puntuacion : puntuaciones) {
            sumaPuntos += puntuacion.getPuntuacion();
        }
        sumaPuntos = sumaPuntos / puntuaciones.size();
        return sumaPuntos;
    }

    public List<Puntuacion> findPuntuacionByUser(Long idUser) {
        return repository.findProdByUser(idUser);
    }
}
