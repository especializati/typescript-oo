export class User {
  protected name: string // public|protected|private
  private email: string
  private active: boolean = false

  constructor(name: string, email: string, active: boolean = false) {
    this.name = name
    this.email = email
    this.active = active

    // this.validation()
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

  public getNumber(): number {
    return 123
  }
}

class Manager extends User {
  constructor(name: string, email: string, active: boolean, code: string) {
    console.log(code)
    super(name, email, active)
  }

  public getName(): string {
    return `Manager: ${this.name}`
  }

  public getNumber(): number {
    return super.getNumber() + 10
  }
}
class Admin extends User {
  public getName(): string {
    return `Adm: ${this.name} $ `
  }

  public getNumber(): number {
    return 55342
  }
}

const manager1 = new Manager('Manager1', 'manager1@email.com', true, 'sdf')
console.log(manager1.getNumber())
