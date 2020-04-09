//Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
    if(typeof num === 'number'){
        callback(undefined, num * 2)
    } else {
        callback('Number must be provided')
    }
    }, 2000)
}

getDataCallback(2, (error, data) => {
    if(error){

    }
    else {
        getDataCallback(data, (error, data) => {
            if(error) {
                console.log(error)
            } else {
                console.log(data)
            }
        })
        
    }
})

//Promise
/* const getDataPromise = (data) => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            resolve(`Success data: ${data}`)
            //reject('This is a promise error')
        }, 2000))
    
const myPromise = getDataPromise('Hello')

myPromise.then((data) =>{
    console.log(data);
    
}, (err) => {
    console.log(err);
    
}) */

const getDataPromise = (num) => 
    new Promise((resolve, reject) => 
        setTimeout(() => {
            typeof num === 'number' ? resolve(num *2) : reject('Number must be provided')
        }, 2000))
    
getDataPromise(2).then((data) => {
    getDataPromise(data).then((data) => {
        console.log(`Promise data: ${data}`)
    }, (err) => {
        console.log(err)
    })
}, (err) => {
    console.log(err);
    
})

//Promise Chaining
getDataPromise(10)
    .then((data) => {
        return getDataPromise(data)
    }).then((data) => {
        return getDataPromise(data)
    }).then((data) => {
        console.log(data)
    }).catch((err) => {
        console.log(err)
    })
