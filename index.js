function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text:text, isCompleted: false}];
    setTodos(newTodos);
  }

  const removeTodo = i => {
    let newList = [...todos];
    newList.splice(i);
    setTodos(newList);
  }

  return(<>
    <div className="app">
        <div className="todo-list">
            {todos.map((todo, i) => 
              <Todo i={i} key={i} todo={todo} remove={removeTodo}/>)
            }
            <TodoForm addTodo={addTodo}/>
        </div>
      </div>
    </>
    )
  }

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
