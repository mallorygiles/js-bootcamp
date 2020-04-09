const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/scripts'), //needs to be absolute patch
        filename: 'bundle.js'
    }
}


//C:\Users\Mallory\Documents\GitHub\js-bootcamp\boilerplate\public\scripts