import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    id: {
        type : String,
        required : true,
        unique : true
    },

    image : {
        type : String,
        default : ""
    },

    name : {
        type : String,
        required : [true , "Provide name"]
    },

    email : {
        type : String,
        required : [true , "Provide email"],
    },

    password : {
        type : String,
        required : [true , "Provide password"],
    },

    contact : {
        type : Number,
        required : [true , "Provide contact number"],
        unique : true,
    },

    branch : {
        type : String,
        required : [true , "Provide bramch name"],
    },

    roll_no : {
        type : String,
        required : true,
        unique : true
    },

    description : {
        type : String,
        required : [true , "Provide the description about yourself"]
    }, 

    techstack  :{
        type : mongoose.Schema.ObjectId,
        ref  : 'TechStack'
    },
    
    status : {
        type : ['Active' , 'Inactive'],
        default : 'Inactive'
    }
},
{
    timestamps : true
}
)

const studentModel = mongoose.model("Student" , studentSchema);
export default studentModel;