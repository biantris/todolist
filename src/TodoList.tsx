import React, { useState } from 'react';
import { TextField, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
interface TodoItem {
    id: number
    value: string
}

let count = 1

export const TodoList: React.FC = () => {
    const [list, setList] = useState<TodoItem[]>([{ id: 0, value: '' }])

    const handleChange = (value: string, id: TodoItem['id']) => {
        setList(prev => prev.map(item => item.id === id ? { ...item, value } : item ))
    }

    const handleDelete = (id: TodoItem['id']) => {
        setList(prev => prev.filter(item => item.id !== id))
    }

    const handleAdd = (index: number) => {
        const newItem = { id: count ++, value: '' }
        setList(prev => [...prev.slice(0, index + 1), newItem, ...prev.slice(index + 1)])
    }

    return (
        <div>
          {list.map((item, index) => (
            <div key={item.id}>
              <TextField
                value={item.value}
                onChange={e => handleChange(e.currentTarget.value, item.id)}
              />
              <IconButton onClick={() => handleAdd(index)}>
                <AddIcon />
              </IconButton>
              
              {list.length > 1 && (
                <IconButton onClick={() => handleDelete(item.id)}>
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}
        </div>
      )
    }