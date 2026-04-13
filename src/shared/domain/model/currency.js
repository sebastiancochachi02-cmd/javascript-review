export class Currency {
    static #VALID_CODES = ['USD', 'EUR', 'GBP','JPY'];
    #code;
    constructor(code) {
        if (!Currency.#VALID_CODES.includes(code)) {
            throw new ValidationError('Invalid currency code: $(code). It must be a number');
        }
    }
        get code() {
        return this.#code;
        }
        equals(other) {
        return other instanceof Currency && this.#code === other.code;
        }
}