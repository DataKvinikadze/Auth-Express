const { default: mongoose } = require("mongoose");

const expenseSchema = mongoose.Schema({
    title:{
        type: String,
    },
    price: {
        type: Number
    },
    quantity:{
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: "user"
    }
})

module.exports = mongoose.model("expense", expenseSchema)
