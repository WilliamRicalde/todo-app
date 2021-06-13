import React, { useState } from 'react'
import { createTask } from '../../services/firestore'

const TaskForm = () => {
  const initialState = {
    taskName: '',
    responsible: '',
    description: '',
    importance: 'Low'
  }

  const [formValues, setformValues] = useState(initialState)

  const handleChange = evt => {
    setformValues({ ...formValues, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    createTask(formValues)
    setformValues(initialState)
  }

  return (
    <form className='w-2/5 px-2' onSubmit={handleSubmit}>
      <div className='my-1 text-base'>
        <label className='block text-white'>Task</label>
        <input
          className='rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full'
          type='text'
          name='taskName'
          placeholder='Insert a task'
          autoComplete='off'
          value={formValues.taskName || ''}
          onChange={handleChange}
          autoFocus
        />
      </div>
      <div className='my-1 text-base'>
        <label className='block text-white'>Responsible</label>
        <input
          className='rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full'
          type='text'
          name='responsible'
          placeholder='Insert a responsible'
          autoComplete='off'
          value={formValues.responsible || ''}
          onChange={handleChange}
        />
      </div>
      <div className='my-1 text-base'>
        <label className='block text-white'>Description</label>
        <textarea
          className='rounded-sm p-2 mt-3 focus:outline-none bg-gray-100 w-full'
          cols='20'
          rows='5'
          name='description'
          placeholder='Description...'
          value={formValues.description || ''}
          onChange={handleChange}
        />
      </div>
      <div className='my-1 text-base'>
        <label className='block text-white'>Importance</label>
        <select
          className='rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full appearance-none'
          name='importance'
          value={formValues.importance}
          onChange={handleChange}
        >
          <option value='Low'>Low</option>
          <option value='Medium'>Medium</option>
          <option value='High'>High</option>
        </select>
      </div>

      <button className='block text-center text-white bg-green-600 my-4 p-3 rounded hover:bg-green-800 w-full focus:outline-none'>Submit</button>
    </form>
  )
}

export default TaskForm
