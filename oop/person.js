class Person {
    constructor(firstName, lastName, age, likes = []){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}. `
        this.likes.forEach((like) =>{
            bio += `${this.firstName} likes ${like}. `
        })
        return bio
    }
    set fullName(fullName) {
        const splitName = fullName.split(' ')
        this.firstName = splitName[0]
        this.lastName = splitName[1]
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, position, age, likes = []){
        super(firstName, lastName, age, likes)
        this.position = position
    }

    getBio() {
        return `${this.fullName} is a ${this.position}`
    }

    getYearsLeft() {
        return 65-this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, likes = [], grade) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }

    getBio() {
        return `${this.firstName} is ${this.grade >= 70 ? 'passing' : 'failing'} the class.`
    }

    updateGrade(delta) {
        this.grade += delta
    }
}

const me = new Employee('Mallory', 'Giles', 'Photographer', 21, ['Ice Skating', 'Swimming'])
me.fullName = 'Jane Doe'
console.log(me.getBio())

/* const student = new Student('Malia', 'Giles', 4, ['Shimmer', 'Shine'], 80)
console.log(student.getBio())

student.updateGrade(-15)
console.log(student.getBio())

student.updateGrade(25)
console.log(student.getBio()) */


/* const myPerson = new Person ('Ian', 'Giles', 34)
myPerson.setName('Robert Giles')
const myEmpl = new Employee ('Mallory', 'Giles', 'super hero', 34)

console.log(myPerson.getBio());
console.log(myEmpl.getBio());
console.log(myEmpl.getYearsLeft()); */






/* const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}. `
    this.likes.forEach((like) =>{
        bio += `${this.firstName} likes ${like}. `
    })
    return bio
}

Person.prototype.setName = function (fullName) {
    const splitName = fullName.split(' ')
    this.firstName = splitName[0]
    this.lasttName = splitName[1]
}

const me = new Person('Mallory', 'Clark', 34, ['music', 'running'])
me.lastName = 'Giles'
/* me.getBio = function(){
    return 'Fake Bio'
} 
console.log(me.getBio())

const person2 = new Person('Ian', 'Giles', 100)
person2.setName('Robert Giles')
console.log(person2.getBio()); */
