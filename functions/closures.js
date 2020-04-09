/* const myFunction = () => {
    const message = 'This is a message'
    const printMessage = () => {
        console.log(message);
        
    }
    return printMessage
}

const myPrintMessage = myFunction()
myPrintMessage() */



const createCounter = () => {
    let count = 0

    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get(){
            return count
        }
    }
}

//counter cannot access count
const counter = createCounter()
counter.increment()
counter.decrement()
counter.decrement()
counter.count = 0
console.log(counter.get())

//Curried
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}
const add10  = createAdder(10)
console.log(add10(-2));
console.log(add10(20));
const add100 = createAdder(100)
console.log(add100(-90))

//Tipper Challange
const tipper = (tipPercent) => {
    return (amount) => {
        return amount * tipPercent
    }
}

const tip18 = tipper(.18)
const tip20 = tipper(.20)

console.log(`Tipping 18% of $100 is: $${tip18(100)}`);

console.log(`Tipping 20% of $150 is: $${tip20(150)}`);



