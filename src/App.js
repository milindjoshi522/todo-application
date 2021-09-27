import logo from './logo.svg';
import './App.css';
import Header from "./todoComponents/Header";
import { Todos } from "./todoComponents/Todos";
import { Footer } from "./todoComponents/Footer";
import { AddTodoItem } from "./todoComponents/AddTodoItem";
import React, { useState } from 'react';


function App() {

  const onDelete=(todo)=>{
    console.log("func on delete of todo ", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo ;
    }))
  }

  const addTodo=(title, desc) => {
    console.log("adding a todo")
    let sno;
    if(todos.length==0) {
      sno=0;
    } else {
     sno = todos[todos.length-1].sno + 1;
    }


    const addedTodo={
      sno: sno,
      title: title,
      desc: desc,
    }
setTodos([...todos, addedTodo]);
    console.log("adding ", addedTodo);
  }
 

  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "todo item 1",
      descritption: "todo description 1",
    },
    {
      sno:2,
      title: "todo item 2",
      descritption: "todo description 2",
    },{
      sno:3,
      title: "todo item 3",
      descritption: "todo description 3",
    },
  ])

  return (
    <>
    <Header title="Todo List" searchBar={true}/>
    <AddTodoItem addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
    
  );
}

export default App;
