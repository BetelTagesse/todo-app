import TodoCard from "./TodoCard";

function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodos } = props;

  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            index={todoIndex}
            handleDeleteTodo={handleDeleteTodo}
            handleEditTodos={handleEditTodos}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}

export default TodoList;
