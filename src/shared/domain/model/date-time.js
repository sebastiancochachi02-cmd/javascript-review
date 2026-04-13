export class DateTime {
    #date;
    constructor(date=new Date()) {
        const parseDate = date instanceof Date ? new Date(date);
        if (isNaN(parseDate.getTime())) {
            throw new ValidationError('Invalid date format: $(parseDate)');
            this.#date = parseDate;
        }
    }
    get date() {
        return this.#date;
    }
    toISOString() {
        return this.#date.toISOString();
    }
    toString() {
        let options={year:'numeric', month: 'long', day:'numeric'
        hour: '2-digit', minute: '2-digit', hour12: true};
        return this.#date.toLocalString('en-US', options);
    }
    equals(other) {
        return other instanceof DateTime &&
            this.#date.getTime() === other.getTime();
    }
}