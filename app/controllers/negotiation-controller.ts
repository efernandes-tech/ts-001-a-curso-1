import { Negotiation } from "../models/negotiation";

export class NegotiationController {
  private inputData: HTMLInputElement;
  private inputQuantity: HTMLInputElement;
  private inputValue: HTMLInputElement;

  constructor() {
    this.inputData = document.querySelector("#data");
    this.inputQuantity = document.querySelector("#quantity");
    this.inputValue = document.querySelector("#value");
  }

  add(): void {
    const negotiation = this.createNegotiation();
    console.log(negotiation);
    this.clearForm();
  }

  createNegotiation(): Negotiation {
    const exp = /-/g;
    const date = new Date(this.inputData.value.replace(exp, ","));
    const quantity = parseInt(this.inputQuantity.value);
    const value = parseFloat(this.inputValue.value);

    return new Negotiation(date, quantity, value);
  }

  clearForm(): void {
    this.inputData.value = "";
    this.inputQuantity.value = "";
    this.inputValue.value = "";
    this.inputData.focus();
  }
}
