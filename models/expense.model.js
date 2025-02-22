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
})

module.exports = mongoose.model("expense", expenseSchema)
