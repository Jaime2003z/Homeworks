const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        mongoose.connect(process.env.DB_CONNECTION, {
            autoIndex: true
        })
    }catch(error) {
        console.log(error)
        throw new Error('Opps! Something went wrong');
    }
}
module.exports = { dbConnection}