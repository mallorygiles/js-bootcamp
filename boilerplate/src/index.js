const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('temperature', 0, 100, 88, 64))

const printTeam = (team, coach, ...players) => {
    console.log(`Team: ${team}`)
    console.log(`Coach: ${coach}`)
    const playersStr = players.join(', ')
    console.log(`Players: ${playersStr}`)
}

printTeam('Cowboys', 'McCarthy', 'Prescott', 'Cooper', 'Elliott', 'Lawrence')