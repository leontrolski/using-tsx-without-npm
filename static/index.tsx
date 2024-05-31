import { React } from "./not-react.js"

type Todo = {
    message: string,
    done: boolean,
}
const todos: Todo[] = [
    {message: "tidy bedroom", done: false},
    {message: "feed cat", done: false},
    {message: "make a milkshake", done: true},
]

const TodoListItem = (todo: Todo) => <li>
    {todo.done
        ? <s>{todo.message}</s>
        : todo.message}
    <input
        type="checkbox"
        checked={todo.done}
        onclick={() => {
            todo.done = !todo.done
            render()
        }}
    />
</li>

const App = (todos: Todo[]) => <div>
    <h1>Todos</h1>
    <ul>
        {todos.map(TodoListItem)}
    </ul>
</div>

// Render it on the page
const appEl = document.getElementById("app")
if (appEl === null) throw new Error("Missing app elements")
const render = () => {
    while (appEl.firstChild) appEl.removeChild(appEl.firstChild)
    appEl.appendChild(App(todos))
}
render()
