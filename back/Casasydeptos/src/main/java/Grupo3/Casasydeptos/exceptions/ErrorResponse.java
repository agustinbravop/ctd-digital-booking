package Grupo3.Casasydeptos.exceptions;

public class ErrorResponse {
    private final String message;
    private final String detail;
    private final String path;

    public ErrorResponse(String message, String detail, String path) {
        this.message = message;
        this.detail = detail;
        this.path = path;
    }

    public String getMessage() {
        return message;
    }

    public String getDetail() {
        return detail;
    }

    public String getPath() {
        return path;
    }
}
