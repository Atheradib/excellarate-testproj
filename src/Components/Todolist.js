import { Button } from "@mui/material";
import React, { useState } from "react";
import { ListComponent } from "./ListComponent";
import './Todolist.css'


export const Todolist = () => {
  const [newtodo, setNewtodo] = useState("");
  const [todolist, setTodolist] = useState([]);

  const todoHandler = (e) => {
    setNewtodo(e.target.value);
  };

  const AddtodoHandler=()=>{
    setTodolist((prevItem)=>{
        return [...prevItem,newtodo]})
    setNewtodo('')
  }
  return (
    <>
    <div className="main-div">
    <div className="center-div">
        <br/>
        <h1>To-do list</h1>
      <input
        type="text"
        placeholder="Add task here..."
        value={newtodo}
        onChange={todoHandler}
      />
      <br/>
      <br/>
      <Button variant="outlined"onClick={AddtodoHandler} className='btn'>
        Add    
      </Button>
      <br/>
    <ol>
        {todolist.map((item,index)=>{
            return <ListComponent key={index} text={item}/>
        })}
    </ol>

    </div>
    </div>
    </>
  );
};
