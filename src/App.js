import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';



const defaultTodos = [
  { text: 'Estudiar ingles', completed: true },
  { text: 'Trabajar', completed: false },
  { text: 'cocinar', completed: false },
  { text: 'hacer ejercicios', completed: false },
  { text: 'lavar', completed: false },
  { text: 'dormir', completed: true },

]

function App() {
  
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue ] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  console.log('los usuarios buscan todos de ' + searchValue);
  return (
    <>

      <TodoCounter 
        completed={completedTodos} 
        total={totalTodos}/>
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

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
    </>
  );
}


export default App;
