/* const product = {
    name: 'Influence'
} */

//Same as
// const producet = new Object()
// product.name = 'Rest'

//Object.prototype.hasOwnProperty = () => 'This is a new function'
//Object.prototype.someNewMethod = () => 'This is a new function'

//hasOwnProperty
//console.log(product.hasOwnProperty('hasOwnProperty'));
//console.log(product.someNewMethod());

//Object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunc --> Function.protorype --> Object.prototype --> null
//String: myString --> String.prototype --> Object.prototype --> null
//Number: myNum --> Number.prototype --> Object.prototype --> null
//Boolean: myBool --> Boolean.prototype --> Object.prototype --> null


/* const team = ['Larry', 'Jim', 'Bill', 'John']
console.log(team);

const getScore = () => 1
console.log(getScore); */


const product = 'Computer'

console.log(product);

const otherProduct = new String('Phone')
console.log(otherProduct);



getCountryDetails("GB").then((country) => {
    console.log(country.name);
}
).catch((err) => {
    console.log(`Some Error Occurred: ${err}`)
})

getLocation().then((data) => {
console.log(`You are in ${data.city} ${data.region} in ${data.country}`);
}).catch((err) => {
console.log(err)
})

/* getCurrentCountry().then((country) => {
    console.log(`Current country: ${country.name}`)
}).catch((err) => {
    console.log(`Some Error Occurred: ${err}`)
}) */

/* getLocation().then((location) => {
    return getCountryDetails(location.country)
}).then((country) => {
    console.log(`Full name of your country: ${country.name}`);
}
).catch((err) => {
    console.log(`Some Error Occurred: ${err}`)
}) */

/* fetch('http://puzzle.mead.io/puzzle?wordCount=2', {}).then((response) => {
    if(response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
})
.then((data) => {
    console.log(data.puzzle);
    
}
)
.catch((err) => {
    console.log(err);
    
}) */


/* const puzzle = getNewPuzzleSync()
console.log(puzzle)
console.log('Do something else'); */



//const request = new XMLHttpRequest()

/* request.addEventListener('readystatechange', (e) => {
    if(e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data);
        
    } else if(e.target.readyState ===4){
        console.log('An error has taken place');
        
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send() */

// request.addEventListener('readystatechange', (e) => {
//     if(e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText)
//         const myCounrty = data.find((country) => country.alpha2Code === 'US')
//         console.log(myCounrty.name)
//     } else if(e.target.readyState === 4) {
//         console.log('Hmmm. There must have been an error.');        
//     }
// })

// request.open('GET', 'http://restcountries.eu/rest/v2/all')
// request.send()
