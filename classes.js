class Employee {
    constructor(name, id, email){
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return `Employee`
    }
}
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
    }
    getGithub(){
        return this.github
    }
    getRole(){
        return `Engineer`
    }
}
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.github = github
    }
    getSchool(){
        return this.github
    }
    getRole(){
        return `Intern`
    }
}
class Engineer extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getOfficeNumber(){
        return this.officeNumber
    }
    getRole(){
        return `Manager`
    }
}