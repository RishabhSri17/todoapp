//import the model
const Todo = require("../models/Todo");

//define route handler

exports.getTodo = async(req,res) => {
    try{
        //fetch all todo object
        const todos = await Todo.find({});
        
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Entire Todo data is fetch",
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



exports.getTodobyId = async(req,res) => {
    try{
        //fetch all todo object
        const id = req.params.id;
        const todos = await Todo.findById({_id : id});
        
        //response
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Todo data is fetched by Id",
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

