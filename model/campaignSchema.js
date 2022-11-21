const mongoose = require('mongoose')

const campaignSchema = new mongoose.Schema({
    leadsName : {
        type : String
    },
    productName :{
        type:String,
        required : true
    },
    productImg : { 
       type: String,
       required : true
    },
    budget : {
        type : String,
        required : true
    },
    location : {
        type : String,
        required : true
    },
    location_radius : {
         type : String
    },
    start_date : {
        type : Date,
        required : true
    },
    end_date : {
        type : Date,
        required : true
    }
})
const campaign = new mongoose.model('campaign', campaignSchema)
module.exports = campaign;