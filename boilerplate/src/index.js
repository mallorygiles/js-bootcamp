const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    const playersStr = players.join(', ')
    console.log(`Players: ${playersStr}`)
}

const team = {
    name: 'Cowboys',
    coach: 'McCarthy',
    players: ['Prescott', 'Cooper', 'Elliott', 'Lawrence']
}

printTeam(team.name, team.coach, ...team.players )

const cities = ['Miami', 'San Diego', 'Chicago']
//clones array
const citiesCopy = ['New, York', ...cities]

cities.push('D.C.')

console.log(cities)
console.log(citiesCopy)

let house = {
    bedrooms: 2,
    bathrooms: 1.5,
    yearBuilt: 2019
}

let newHouse = {
    basement: true,
    ...house,
    bedrooms: 3
}

newHouse.yearBuilt = 2020
console.log(house)
console.log(newHouse)


let person = {
    name: 'Mallory',
    age: '30'
}

let location = {
    city: 'Silver Spring',
    country: 'U.S.'
}

let overview = {
    ...person,
    ...location
}

console.log(overview)