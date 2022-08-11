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
  address: Address
  active: boolean = false

  constructor(name: string, email: string, address: Address, active: boolean = false) {
    this.name = name
    this.email = email
    this.address = address
    this.active = active
  }
} 
const address1 = new Address('Rua x', '75702-050', 187);
const user1 = new User('User 01', 'user1@email.com', address1)
console.log(user1)

const address2 = new Address('Rua y', '75702-051', 188);
const user2 = new User('User 02', 'user2@email.com', address2)
console.log(user2.address)
