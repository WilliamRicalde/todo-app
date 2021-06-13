import React from 'react'
import { deleteTaskById } from '../../services/firestore'

const TaskCard = ({ task }) => {
  const { taskName, description, responsible, importance, id } = task

  const textColor = {
    High: 'text-red-800',
    Medium: 'text-yellow-600',
    Low: 'text-black'
  }

  return (
    <div className='flex flex-col bg-gray-100 w-full p-2 rounded my-2'>
      <section className='text-xl font-bold'>
        {taskName}
      </section>
      <section className='font-normal text-md text-gray-700'>
        {description}
      </section>
      <section className='font-bold text-md text-blue-900'>
        Responsible: {responsible}
      </section>
      <section className={`font-bold text-sm ${textColor[importance]}`}>
        Importance: {importance}
      </section>
      <section className='flex justify-end text-white'>
        <button
          className='bg-red-600 m-1 px-3 py-1 rounded focus:outline-none hover:bg-red-800'
          onClick={() => deleteTaskById(id)}
        >
          Delete
        </button>
      </section>
    </div>
  )
}

export default TaskCard
