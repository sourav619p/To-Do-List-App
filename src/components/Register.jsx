import React, { useContext, useEffect, useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { TodoContext } from '../context/TodoContext'

function Register() {
  const [task, setTask] = useState('');
  const [todos, setTodos]= useContext( TodoContext );
  const [comp, setComp] = useState(false);
    
  function addTodo(e){
    e.preventDefault();

    if('' === task || undefined === task){
      alert( 'Field can not be blank');
      return;
    }

    const newTodos = [ ...todos, { id: uuidv4(), task: task, completed: false}]
    console.log(newTodos,"newtodos");
    setTodos( newTodos );
    setTask('')
  }

  function completeTodo(id) {
    console.log(id,"id")
    console.log(todos,"todos")
    setComp(!comp)
    const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: comp } : todo
  );
  setTodos(updatedTodos)
  }

  function onDeleteClick (id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify( todos ));
  },[todos])

  return (
    <div className=' h-screen bg-blue-100 flex flex-col pt-5'>
        <h1 className='text-5xl font-extrabold mx-auto'>To-Do-App</h1>
        <div className='flex flex-row mx-auto w-6/12 mt-5'>
        <input value={task} onChange={ev => setTask(ev.target.value)} className='w-full h-10' type="text" />
        <button onClick={addTodo} className='h-10 bg-red-500 w-72 ms-2 text-white'>Add</button>
        </div>
        {todos.length > 0 ? (
                  <h1 className='mx-auto mt-5 text-3xl md:text-5xl'>Pending Task</h1>
                ):(
                 <h1 className='mx-auto mt-5 text-3xl md:text-5xl'>Currently No Tasks....</h1>
        )}
         <div className='mx-auto mt-5'>
        {todos.length > 0 ?  (
          todos.map((item) => ( 
          <div key={item.id} className='w-3/4 md:min-w-full mx-auto border-2 p-2 mt-3 border-orange-700 rounded flex flex-row'>
            <p className='text-sm md:text-lg'>{item.task}</p>
            <button onClick={() => completeTodo(item.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={`w-8 h-8 md:w-10 md:h-10 border-2 border-orange-700 ${item.completed ? 'bg-green-400' : 'bg-white'} rounded-full p-1`}>
            <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            </button>
            <button onClick={() => onDeleteClick(item.id)} className='ms-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 md:w-10 md:h-10 border-2 border-orange-700 rounded-full p-1">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
            </button>
          </div>
         ))
         ) : (
           <div></div>
         )}
          </div>
    </div>
  )
}

export default Register