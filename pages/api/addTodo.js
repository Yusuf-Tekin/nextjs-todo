import { addnewTodo } from "./todos";


export default function addTodo(req,res){
    if(req.method === "POST"){

        const {todo} = req.body;
        addnewTodo(todo);

        res.json({
            success:true,
            message:"Todo eklendi"
        })
    }
}