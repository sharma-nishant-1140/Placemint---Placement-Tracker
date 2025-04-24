import mongoose from 'mongoose';

const techstackSchema = new mongoose.Schema({
    id : {
        type : Number,
        reuired : true,
        unique  :true
    },

    skills:[
        {
            type : String,
            required  : [true , "Specify a skill"]
        }
    ],

    desc : [
        {
            type : String,
            required : [true ,  "Describe about the skill"]
        }
    ]
},
{
    timestamps:true
})

const techStackModel = mongoose.model("TechStack" , techstackSchema);
export default techStackModel;