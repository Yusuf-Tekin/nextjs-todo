import { getAllTodos } from "./todos";


export default function getTodos(req,res) {
    if(req.method === "GET") {
        const todos = getAllTodos();
        res.json({
            success:true,
            data:todos
        })
    }
}