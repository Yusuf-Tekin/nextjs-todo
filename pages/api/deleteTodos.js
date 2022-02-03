import { deleteATodo } from "./todos";
import {promisify} from 'util'
import bodyParser from 'body-parser';

const getBody = promisify(bodyParser.urlencoded())

export default async function deleteTodo(req,res) {
    if(req.method === "POST") {
        await getBody(req,res);


        const {todo} = req.body 
        deleteATodo(todo);


        res.json({
            success:true,
            message:"Todo deleted"
        })

    }
}