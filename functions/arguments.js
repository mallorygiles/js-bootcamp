let add = function(a, b, c){
    return a + b + c
}

let result = add(10, 1, 5)
console.log(result)

let getScoreText = function(name = 'Anonymous', score = 0){
    //return 'Name: ' + name + ' - Score: ' + score
    return `Name : ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


console.log('-------------')

let tipCalculator = function(total, tip = .2){
    let tipAmount = total * tip;
    let tipPercent = tip * 100
    return console.log(`A ${tipPercent}% tip on ${total} would be $${tipAmount}.`)
}

console.log(tipCalculator(60))

let name = 'Mallory'
let age = '21'
console.log(`Hey, My name is ${name}! I am ${age} years old`)


