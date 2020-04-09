let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zin',
    pageCount: 723
}

let getSummary = function(book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)



let temperaturesObj = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * 5/9
    let kelvin = (fahrenheit + 459.67) * 5/9
    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

let temps = temperaturesObj(50)

console.log(`Fahrenheit: ${temps.fahrenheit} - Celsius: ${temps.celsius} - Kelvin:${temps.kelvin}`)

temps = temperaturesObj(70)

console.log(`Fahrenheit: ${temps.fahrenheit} - Celsius: ${temps.celsius} - Kelvin:${temps.kelvin}`)