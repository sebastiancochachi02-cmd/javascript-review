export class validationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}