import mongoose from 'mongoose';

const ccpdSchema = new mongoose.Schema({
    id:{
        type : String,
        required : true,
        unique : true
    },

    image : {
        type : String,
        default : ""
    },

    caption : {
        type : String,
        required : [true , "Provide the caption"]
    },

    contact : {
        type : Number,
        required : [true , " Please provide the contact number"]
    },

    company_name : {
        type : String,
        required : [true , "Provide the company name"]
    }
},
{
    timestamps : true
})

const ccpdModel = mongoose.model('ccpd' , ccpdSchema);
export default ccpdModel;