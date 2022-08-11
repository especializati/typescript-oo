class Address {
  constructor(
    public address: string,
    public readonly zipCode: string,
    public number?: number
  ) {}

  changeZipCode(newZipCode: string): void {
    // this.zipCode = newZipCode
  }
}

const address1 = new Address('Rua x', '75702-050', 187)
console.log(address1.zipCode)
