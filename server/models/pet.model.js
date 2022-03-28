const mongoose = require('mongoose');

    
//use mongoose to create a table (aka collection, aka model). Below are just the instructions for creating a table 
const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: [true, "Pet name is required!"],
        minlength: [3, "Pet name must be at least 3 characters long!"]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required!"],
        minlength: [3, "Pet type must be 3 characters long!"]
    },
    description: {
        type: String,
        required: [true, "Description is required!"],
        minlength: [3, "Description must have at least 3 characters!"]
    },
    skill1: {
        type: String,
        required: [true, "Pet skill is required!"],
        minlength: [3, "Skill must have at least 3 characters!"]
    },
    skill2: {
        type: String
    },
    },
    {timestamps:true}
)

//register the table instructions above to be use as a table in mongodb
const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;