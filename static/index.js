import { React } from "./not-react.js";
const todos = [
    {
        message: "tidy bedroom",
        done: false
    },
    {
        message: "feed cat",
        done: false
    },
    {
        message: "make a milkshake",
        done: true
    }
];
const TodoListItem = (todo)=>/*#__PURE__*/ React.createElement("li", null, todo.done ? /*#__PURE__*/ React.createElement("s", null, todo.message) : todo.message, /*#__PURE__*/ React.createElement("input", {
        type: "checkbox",
        checked: todo.done,
        onclick: ()=>{
            todo.done = !todo.done;
            render();
        }
    }));
const App = (todos)=>/*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("h1", null, "Todos"), /*#__PURE__*/ React.createElement("ul", null, todos.map(TodoListItem)));
const appEl = document.getElementById("app");
if (appEl === null) throw new Error("Missing app elements");
const render = ()=>{
    while(appEl.firstChild)appEl.removeChild(appEl.firstChild);
    appEl.appendChild(App(todos));
};
render();
