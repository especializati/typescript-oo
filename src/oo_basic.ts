class User {
  name: string
  email: string
  active: boolean = false

  constructor(name: string, email: string, active: boolean = false) {
    console.log('constructor called')
    this.name = name
    this.email = email
    this.active = active
  }
} 

const carlos = new User('Carlos', 'carlos@email.com')
console.log(carlos.name)
const user2 = new User('User2', 'user2@email.com', true)
console.log(user2)
const user3 = new User('User3', 'user3@email.com')
console.log(user3)
