const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/demo?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=demo&authMechanism=SCRAM-SHA-256');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String,
},{
    collection:'account'
});

const AccountModel = mongoose.model('account', AccountSchema)
module.exports= AccountModel