class DonationError {
    title: string;
    errors: Map<string, string[]>;

    constructor(json: any) {
        this.errors = new Map<string, string[]>();
        this.title = json.title;
        for(var field in json.errors){
            this.errors.set(field, json.errors[field]);
        }
    }

    errorList() {
        var errorList = '<ul>';
        this.errors.forEach((v, k) => {
            errorList += `<li>${v[0]}</li>`;
        })
        errorList += '</ul>';
        return errorList;
    }
}

export default DonationError;