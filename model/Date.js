const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DateSchema = new Schema({
   
    ImgUrl : String
})

const Date = mongoose.model('Date',DateSchema)
module.exports = Date;