import {useState} from "react";
import {TodoList} from "./components/TodoList.jsx";
import {TodoInput} from "./components/TodoInput.jsx";

export function App() {
    const [todos, setTodos] = useState([
        {id: 1, text: 'Task 1', completed: false},
        {id: 2, text: 'Task 2', completed: false}
    ]);

    const addTodo = (text) => {
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        );
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>To-Do App</h1>
                <TodoList todos={todos} toggleTodo={toggleTodo}/>
                <TodoInput addTodo={addTodo}/>
            </header>
        </div>
    );
}