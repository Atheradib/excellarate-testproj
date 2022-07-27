import React,{useState} from "react";


import DeleteIcon from "@mui/icons-material/Delete";

export const ListComponent = (props) => {
  const [line, setLine] = useState(false);
  const cutLine=()=>{
    setLine(true)
  }
  return (
    <div className="todolist">
      <span onClick={cutLine}>
        <DeleteIcon className="deleteIcon"></DeleteIcon>
      </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>{props.text}</li>
    </div>
  );
};
