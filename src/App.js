import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';


const defaultTodos = [
  { text: 'Estudiar ingles', completed: true },
  { text: 'Trabajar', completed: false },
  { text: 'cocinar', completed: false },
  { text: 'hacer ejercicios', completed: false },
  { text: 'lavar', completed: false },

]

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}  
            completed={todo.completed}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton />
    </React.Fragment>
  );
}


export default App;
