import { Checkbox, IconButton, Paper } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../hooks/redux";
import { cardApi } from "../services/CardService";
import { IPost } from "../models/models";



const label = { inputProps: { "aria-label": "Checkbox demo" } };

type PropsType = {
    id: any;
    titile: string
    
    
}

const TodoItem = (props: PropsType) => {
    const dispatch = useAppDispatch()
    const [deleteTodo, {}] = cardApi.useDeletePostMutation()
    const handleDeleteTodo =  (todo: IPost) => {
       deleteTodo(todo)
    }

  return ( 
    <Paper elevation={5}>
    <li >
      <div className="todo-tasks">
       
        <h3>{props.titile}</h3>
        <IconButton
          aria-label="delete"
            onClick={() => handleDeleteTodo(props.id)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </li>
  </Paper>
  );
};

export default TodoItem;
