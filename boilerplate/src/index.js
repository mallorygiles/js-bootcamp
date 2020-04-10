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


