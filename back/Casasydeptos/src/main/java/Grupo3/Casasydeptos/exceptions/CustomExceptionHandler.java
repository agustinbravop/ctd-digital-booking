package Grupo3.Casasydeptos.exceptions;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.persistence.EntityNotFoundException;
import javax.servlet.http.HttpServletRequest;

@RestControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler({ResourceNotFoundException.class, EntityNotFoundException.class})
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<?> resourceNotFoundExceptionHandler(ResourceNotFoundException ex, HttpServletRequest request) {
        return new ResponseEntity<>(
                new ErrorResponse(
                        "El recurso solicitado no fue encontrado",
                        ex.getMessage(),
                        request.getRequestURI()
                ),
                HttpStatus.NOT_FOUND
        );
    }

    @ExceptionHandler(BadRequestException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public ResponseEntity<?> badRequestExceptionHandler(BadRequestException ex, HttpServletRequest request) {
        return new ResponseEntity<>(
                new ErrorResponse(
                        "Error al procesar la petición",
                        ex.getMessage(),
                        request.getRequestURI()
                ),
                HttpStatus.BAD_REQUEST
        );
    }

    @ExceptionHandler(authFeedbackException.class)
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<?> authFeedbackExceptionHandler(authFeedbackException ex, HttpServletRequest request) {
        return new ResponseEntity<>(
                new ErrorResponse(
                        ex.getMessage(),
                        "Error al autenticar las credenciales",
                        request.getRequestURI()
                ),
                HttpStatus.OK
        );
    }
}
