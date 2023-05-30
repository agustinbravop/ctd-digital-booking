package Grupo3.Casasydeptos.controllers;

import Grupo3.Casasydeptos.exceptions.BadRequestException;
import Grupo3.Casasydeptos.models.Caracteristica;
import Grupo3.Casasydeptos.services.CaracteristicaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", methods = {RequestMethod.POST, RequestMethod.GET, RequestMethod.PUT, RequestMethod.DELETE})
public class CaracteristicaController {

    private final CaracteristicaService service;

    @Autowired
    public CaracteristicaController(CaracteristicaService service) {
        this.service = service;
    }

    @PostMapping(value = "/caracteristicas/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Caracteristica> agregarCaracteristica(@RequestBody Caracteristica caracteristica) {
        caracteristica = service.save(caracteristica);
        URI uri = URI.create("/api/caracteristicas/" + caracteristica.getIdCaracteristica());
        return ResponseEntity.created(uri).body(caracteristica);
    }

    @GetMapping("/caracteristicas/{id}")
    public Caracteristica obtenerCaracteristica(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/caracteristicas/{id}")
    public Caracteristica actualizarCaracteristica(@PathVariable Long id, @RequestBody Caracteristica caracteristicas) {
        if (!id.equals(caracteristicas.getIdCaracteristica())) {
            throw new BadRequestException("Id de la característica no coincide con el del path");
        }
        return service.save(caracteristicas);
    }

    @GetMapping("/caracteristicas/")
    public Iterable<Caracteristica> listarCaracteristicas() {
        return service.findAll();
    }

    @DeleteMapping("/caracteristicas/{id}")
    public Caracteristica borrarCaracteristicas(@PathVariable Long id) {
        return service.delete(id);
    }
}
