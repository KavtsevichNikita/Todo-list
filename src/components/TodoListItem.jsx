import React from "react";
import './TodoListItem';

const TodoListItem = ({ label, important = false }) => {
    
    const style = {
        color: important ? 'tomato' : 'black'
    }

    return (
        
        <span className='todo-list-item-label' 
        style={style}>{label}
    
        <button type="button"
                className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>

        <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
        </span>
    )
}

export default TodoListItem;