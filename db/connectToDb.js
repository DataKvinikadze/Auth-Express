const { default: mongoose } = require("mongoose");

module.exports =async () => {
    try {
        mongoose.connect("mongodb+srv://datakvinikadze07:admin@cluster0.3ixdj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Connected Successfully!")
    } catch (e) {
        console.log(e)
    }
}