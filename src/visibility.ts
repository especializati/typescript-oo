export class User {
  private name: string // public|protected|private
  private email: string
  private address: Address[] = []
  private active: boolean = false

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active

    // this.validation()
  }

  public addAddress(newAddress: Address): void {
    this.address.push(newAddress)
  }

  public changeName(newName: string): void {
    if (newName.length < 3) {
      throw new Error('invalid name')
    }
    
    this.name = newName
  }

  public getName(): string {
    return this.name
  }
}

const user1 = new User('User 01', 'user1@email.com')
console.log(user1.getName())
user1.changeName('new name')
console.log(user1.getName())
