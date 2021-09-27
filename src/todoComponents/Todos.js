import React from 'react'
import { TodoItem } from './TodoItem'

export const Todos = (props) => {

    let customStyle={
        minHeight: "70vh",
        margin: "10px auto",
    }


    return (
        <div className="container" style={customStyle}>
            <h3 className= "my-4">Todo list</h3>
            {props.todos.length===0 ?  "Create a todo item"  : props.todos.map((todo)=>{
                return (
                    <>
                <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
                </>
                )
            })}
        </div>
    )
} 
