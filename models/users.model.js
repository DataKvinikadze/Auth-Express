const { default: mongoose } = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
    },
    email:{
        type: String, 
        lowercase: true
    },
    password: {
        type: String
    },
    posts: {type: [mongoose.Schema.Types.ObjectId], ref: "expenses", default: []}
})

module.exports = mongoose.model("user", userSchema)
