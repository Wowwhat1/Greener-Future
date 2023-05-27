const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://tester:test@greenerfuture.gzuurhu.mongodb.net/GreenerFuture?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connect successfully!!!')
    } catch (error) {
        console.log('Connect failure!!!')
    }
}

module.exports = { connect }