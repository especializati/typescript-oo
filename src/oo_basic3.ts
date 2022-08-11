class Address {
  constructor(
    public address: string,
    public zipCode: string,
    public number?: number
  ) {}
}

export class User {
  name: string
  email: string
  address: Address[] = []
  active: boolean = false

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active
  }

  addAddress(newAddress: Address): void {
    this.address.push(newAddress)
  }

  getAddress(): Address[] {
    return this.address
  }
} 

const address1 = new Address('Rua x', '75702-050', 187);
const user1 = new User('User 01', 'user1@email.com')
console.log(user1)
user1.addAddress(address1)
user1.addAddress(address1)
user1.addAddress(address1)
console.log(user1)
