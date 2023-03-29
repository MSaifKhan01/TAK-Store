const mongoose = require("mongoose")

//note schema
const noteSchema = mongoose.Schema({
//    schema of products
    userID: String
},
    {
        versionKey: false
});

const NoteModel = mongoose.model("notes", noteSchema)

module.exports = {
    NoteModel
}