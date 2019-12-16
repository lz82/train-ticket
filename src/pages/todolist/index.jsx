import React, { useState } from 'react'
import './index.css'
import { Input, Button } from 'antd'

function TodoList() {
  const [newTodo, setNewTodo] = useState('')

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value)
  }

  const handleAddTodo = () => {
    console.log(newTodo)
  }

  return (
    <div className="todolist-container">
      <div className="row">
        <Input
          onChange={handleNewTodoChange}
          allowClear
        />
        <Button 
          type="primary" 
          className="btn add"
          onClick={handleAddTodo}
        >
          Add
        </Button>
      </div>
    </div>
  )
}

export default TodoList
