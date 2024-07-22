import {TodoItem} from "./TodoItem.jsx";
import PropTypes from "prop-types";

export function TodoList({todos}) {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired
};
