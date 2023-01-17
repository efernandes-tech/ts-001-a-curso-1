export class Negotiation {
  constructor(
    public readonly data: Date,
    public readonly quantity: number,
    public readonly value: number
  ) {}

  get volume(): number {
    return this.quantity * this.value;
  }
}
