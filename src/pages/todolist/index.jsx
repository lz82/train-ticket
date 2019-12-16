import React, { useState, useRef, useEffect } from 'react'
import './index.css'
import { Input, Button, List, Icon, Checkbox } from 'antd'
import uuid from 'uuid'

function TodoList() {
  const refNewTodo = useRef()

  const localStorageKey = '_todolist_'

  const [todoList, setTodoList] = useState([])

  // 从localStorage中获取初始化todolist
  // 只执行一次
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem(localStorageKey) || '[]')
    setTodoList(list)
  }, [])

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todoList || []))
  }, [todoList])

  // 这里选择用ref来做
  // 其实也可以用state + onChange，但是没什么必要
  // 因为其实并不关心中间值，只需要在add的时候拿到最新结果即可
  const handleAddTodo = () => {
    const temp = refNewTodo.current.input.value.trim()
    if (temp) {
      setTodoList((list) => [
        ...list,
        {
          id: uuid(),
          text: temp,
          complete: false
        }
      ])

      refNewTodo.current.handleReset()
    }
  }

  const handleDelete = (id) => {
    const temp = todoList.filter((item) => item.id !== id)
    setTodoList(temp)
  }

  const handleCompleteChange = (id) => {
    setTodoList(
      todoList.map((item) => {
        return {
          ...item,
          complete: item.id === id ? !item.complete : item.complete
        }
      })
    )
  }

  return (
    <div className="todolist-container">
      <h2 className="title">Todo List</h2>
      <div className="row">
        <Input
          // onChange={handleNewTodoChange}
          ref={refNewTodo}
          allowClear
        />
        <Button type="primary" className="btn add" onClick={handleAddTodo}>
          Add
        </Button>
      </div>
      <List
        className="todoList-content"
        size="small"
        bordered
        dataSource={todoList}
        renderItem={(item) => {
          return (
            <List.Item>
              <div className="list-row">
                <div className="txt">
                  <Checkbox onChange={() => handleCompleteChange(item.id)} checked={item.complete} />
                  <span className={'label' + (item.complete ? ' complete' : '')}>{item.text}</span>
                </div>
                <Icon className="del" type="delete" onClick={() => handleDelete(item.id)} />
              </div>
            </List.Item>
          )
        }}
      ></List>
    </div>
  )
}

export default TodoList
