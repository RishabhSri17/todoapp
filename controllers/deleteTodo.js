//import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res) => {
    try{
        //fetch all todo object
        const id = req.params.id;
        const todos = await Todo.findByIdAndDelete({_id : id});
        
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:`Data by id - ${id} is deleted`,
        })
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
}

