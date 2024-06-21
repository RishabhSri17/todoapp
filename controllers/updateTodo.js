//import the model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res) => {
    try{
        //fetch all todo object
        /* const id = req.params.id; */
        const {id} = req.params;
        const {title,description} = req.body;

        const todos = await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        );
        
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Todo data is updated",
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
