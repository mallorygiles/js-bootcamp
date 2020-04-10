const getNewPuzzle = async (wordCount) =>  {
    const respone = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    if (respone.status === 200) {
        const data = await respone.json()
        return data.puzzle
    } else {
        throw new Error('Unable to fetch the puzzle')
    }
}

const getCountryDetails = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
    if(response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    }
    else {
        throw new Error('Hmmm. There must have been an error.')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=c3cf1028abb541')
    if(response.status === 200) {
        return  response.json()
    } else {
        throw new Error('Could not get location info')
    }
    
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountryDetails(location.country)
}

export { getNewPuzzle as default}