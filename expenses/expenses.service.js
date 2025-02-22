const expenseModel = require("../models/expense.model")
const usersModel = require("../models/users.model")

const getAllExpense = async(req,res)=>{
    const expenses = await expenseModel.find().populate("user");
    res.json(expenses)
}

const getExpenseById = async(req,res)=>{
    const {id} = req.params
    const expense = await expenseModel.findById(id)
    res.json(expense)
}

const createExpense = async(req,res)=>{
    const {title, price, quantity} = req.body
    if(!title || !price || !quantity) return res.status(400).json({message: "title, price or quantity is required"})
    const newExpense = await expenseModel.create({title, price, quantity, user: req.userId})
    await usersModel.findByIdAndUpdate(req.userId, {$push: {expenses: newExpense._id}})
    res.status(201).json(newExpense)
}

const deleteExpenseById = async (req, res) => {
    const { id } = req.params;
    const expense = await expenseModel.findById(id).populate("user");
    if (expense.user._id.toString() !== req.userId) {
        return res.status(403).json({ message: "You don't have permission to delete this expense!" });
    }
    await expenseModel.findByIdAndDelete(id);
    res.json({ message: "Expense deleted successfully!" });

};


const updateExpenseById = async (req, res) => {
        const { id } = req.params;
        const expense = await expenseModel.findById(id).populate("user");
        if (!expense) {
            return res.status(404).json({ message: "Expense not found!" });
        }
        if (expense.user._id.toString() !== req.userId) {
            return res.status(403).json({ message: "You cant update this expense!" });
        }
        const updatedExpense = await expenseModel.findByIdAndUpdate(id, req.body);
        res.json(updatedExpense);
};


module.exports = {getAllExpense, deleteExpenseById, createExpense, updateExpenseById, getExpenseById}