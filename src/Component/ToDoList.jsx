import React from "react";
import { ToDoListAtom } from "../Atom/ToDoListData";
import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { useState } from "react";

const ToDoList = () => {
  const [list, setList] = useState("");
  const [text, setText] = useRecoilState(ToDoListAtom);
  const ToDoListValue = useRecoilValue(ToDoListAtom);

  const handleChange = (e) => {
    setList(e.target.value);
  };

  const handleSubmit = () => {
    setText([...text, list]);
    setList("");
  };


  const handleFilter = (Data)=>{
   const result =  text.filter((da)=>{
      return  Data !== da
    })

   setText(result)
  }
  return (
    <>
      <p>To Do List - {ToDoListValue.length}</p>
      <input type="text" value={list} onChange={handleChange} />
      {text &&
        text.map((Data) => {
          return (
            <>
              <p>{Data && Data} - <button onClick={() =>handleFilter(Data)}>X</button></p>
            </>
          );
        })}
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
};

export default ToDoList;
