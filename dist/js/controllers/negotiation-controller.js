import { Negotiation } from "../models/negotiation";
export class NegotiationController {
    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantity");
        this.inputValue = document.querySelector("#value");
    }
    add() {
        const negotiation = this.createNegotiation();
        console.log(negotiation);
        this.clearForm();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputData.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputData.focus();
    }
}
