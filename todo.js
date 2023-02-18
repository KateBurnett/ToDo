function Todo ({todo, i, remove}) {

    function handle () {
        remove(i)
    }

    return <div className="todo" onClick={handle}> (-) {todo.text}</div>
}