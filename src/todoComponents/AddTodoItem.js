import React from 'react'
import { useState } from "react";

export const AddTodoItem = (props) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc) {
            alert("Title or description of a todo item cannot be blank")
        }
        props.addTodo(title, desc);
    }
    return (
        <div className="container my-3">
            <h3>Add a todo item</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="title">Todo item title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="item title" />
                </div>
                <div className="form-group">
                    <label htmlFor="description">todo item description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="description" placeholder="item description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add todo</button>
            </form>
        </div>
    )
}
