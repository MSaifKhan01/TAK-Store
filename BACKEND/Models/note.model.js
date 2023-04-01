const mongoose = require("mongoose")

//note schema
const noteSchema = mongoose.Schema({
    //    schema of products
    description: String,
    image: String,
    stars: Number,
    new_price: Number,
    size: String,
    // qty:Number,
    userID: String

},
    {
        versionKey: false
    });

const NoteModel = mongoose.model("cart", noteSchema)

module.exports = {
    NoteModel
}