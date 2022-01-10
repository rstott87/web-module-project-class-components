import React from "react";

const Todo = props => {
    const handleClick = () => {
        console.log("got clicked")
    }
        return (
        <div onClick={handleClick}>
            <p>{props.task}</p>
        </div>)
    };


export default Todo; 