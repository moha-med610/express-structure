export class AppError extends Error {
    constructor() {
        super();
    }

    error(statusCode, statusMessage, message) {
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
        this.message = message;
        return this;
    }
}
