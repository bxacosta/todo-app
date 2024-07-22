import PropTypes from "prop-types";

export function TodoItem({todo}) {
    return (
        <li
            style={{textDecoration: todo.completed ? 'line-through' : 'none'}}
        >
            {todo.text}
        </li>
    );
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired
};