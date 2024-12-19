const TodoCard = (props) => {
  const { children, handleDeleteTodo, handleEditTodos, index } = props;

  return (
    <li className="todoItem">
      <div className="actionsContainer">
        {children}
        <button
          onClick={() => {
            handleEditTodos(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTodo(index);
          }}
        >
          <i className="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
