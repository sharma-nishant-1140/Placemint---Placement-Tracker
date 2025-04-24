import mongoose from 'mongoose';

const companySchema = new mongoose.Schema({
    id : {
        type : Number,
        require: true,
        unique : true
    },

    name : {
        type : String,
        required : [true , "Provide company name"]
    },

    job_description : {
        type : String,
        required : [true , "Please provide the company name"]
    },

    package : {
        type : String ,
        required : [true , "Please provide the comapny name"]
    },

    location : {
        type : String,
        required : [true , "Pleae provide the location"]
    },

    Type : {
        type : String,
        required : [true , "Please provide the type of mode REmote or Hybrid"]
    },

    Internship : {
        type : String,
        required : [true , "Plesae specify whether u will provide the internship or not"]
    },

    Bond : {
        type : String,
        required : [true , "Specify the bond if any"]
    }
},
{
    timestamps : true
})

const companyModel = mongoose.model("company" , companySchema);
export default companyModel;