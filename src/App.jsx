import { useState } from "react";
import Form from "./components/Form/Form"
import TodoItem from "./components/TodoItem/TodoItem"
import { getSubheading } from "./utils/getSubheading";

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([
    { name: "Zapłacić rachunki", done: false, id: 1 },
    { name: "Posprzątać", done: true, id: 2 }
  ]);
  
  function addItem(newTodoName) {
    if (newTodoName.trim() == "") return;
    setTodos( prevTodos => [...prevTodos, {
      name: newTodoName, done: false, id: prevTodos.length > 0 ? prevTodos.at(-1).id + 1 : 0
    }]);
    setIsFormShown(false);
  }

  function deleteItem(id) {
    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== id))
  }

  function finishItem(id) {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id !== id) {
        return todo;
      }

      return {...todo, done: true}
    }))
  }

  function editItem(id, newTodoName) {
    setTodos((prevTodos) => prevTodos.map((todo) => {
      if (todo.id !== id) return todo;
      console.log(newTodoName);
      return { ...todo, name:newTodoName };
    }))
  }

  return (
  <div className=" bg-white m-2 rounded-lg p-6 text-black max-w-md w-full flex flex-col gap-6">
    <header className="flex gap-24 items-center justify-between">
      <div>
        <h1 className="font-bold text-xl">Do zrobienia</h1>
        <h2 className="font-semibold">{getSubheading(todos.length)}</h2>
      </div>
      {!isFormShown && <button onClick={() => setIsFormShown(true)} className="bg-cyan-950 rounded-full w-12 text-white text-4xl flex items-baseline justify-center aspect-square">+</button>}
    </header>
    {isFormShown && <Form onFormSubmit={(newTodoName) => addItem(newTodoName)}/>}
    <ul>
      {todos.map(({id, name, done}) => (
        <TodoItem key={id} name={name} done={done} onDeleteButtonClick={() => deleteItem(id)}
        onDoneButtonClick={() => finishItem(id)} onEditDoneClick={(newTodoName) => editItem(id, newTodoName)}/>
      ))}
    </ul>
  </div>
  )
}

export default App
