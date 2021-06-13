import React, { useState, useEffect } from 'react'
import { getAllTasks } from '../services/firestore'
import TaskCard from '../components/TaskCard'
import TaskForm from '../components/TaskForm'

export const Home = () => {
  const [tasks, setTasks] = useState([])

  useEffect(async () => {
    getAllTasks(setTasks)
  }, [])

  return (
    <div className='App pb-5'>
      <h1 className='text-white text-4xl text-center mb-3'>To Do App</h1>
      <div className='flex justify-center gap-4'>
        <TaskForm />
        <div className='w-1/2'>
          {
            tasks.map(task => <TaskCard key={task.id} task={task} />)
          }
        </div>
      </div>
    </div>
  )
}
