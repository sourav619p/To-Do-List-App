import React from 'react'

function AddTodo() {
  return (
    <>
        <h1 className='text-5xl font-extrabold mx-auto'>To-Do-App</h1>
        <div className='flex flex-row mx-auto w-6/12 mt-5'>
        <input value={task} onChange={ev => setTask(ev.target.value)} className='w-full h-10' type="text" />
        <button onClick={handleClick} className='h-10 bg-red-500 w-72 ms-2 text-white'>Add</button>
        </div>
    </>
  )
}

export default AddTodo