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
    /* .then((response) => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Hmmm. There must have been an error.')
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode)) */
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=c3cf1028abb541')
    if(response.status === 200) {
        return  response.json()
    } else {
        throw new Error('Could not get location info')
    }
    /* .then((response) => {
        //debugger
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Could not get location info')
        }
    }) */
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountryDetails(location.country)
}

/* const getNewPuzzleOld = (wordCount) =>  {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response)  => {
        if(response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch the puzzle')
        }
    }
    ).then((data) => {
        return data.puzzle
    })
} */

/* new Promise((resolve, reject) => {
    let data
    const request = new XMLHttpRequest()
    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            data = JSON.parse(e.target.responseText)
            resolve(data.find((country) => country.alpha2Code === countryCode))
        } else if(e.target.readyState === 4) {
            reject('Hmmm. There must have been an error.');        
        }
    })
    request.open('GET', 'http://restcountries.eu/rest/v2/all')
    request.send()
}) */




/* const getNewPuzzleSync = () => {
    let data
      const request = new XMLHttpRequest() 
     
  
      request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3', false)
      request.send()

      if(request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText)
        return data.puzzle
        
        } else if(request.readyState ===4){
            throw new Error('An error has taken place');
            
        }
  } */