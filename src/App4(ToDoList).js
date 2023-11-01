import { useState } from "react";

function App() {
    const [toDo, setTodo] = useState("");
    const [toDos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(toDo === "") {
            return;
        }
        setTodos((currentArray) => [...currentArray, toDo]); //새로운 배열로 반환
        setTodo("");
    };


    return (<div>
        <h1>My To Dos ({toDos.length})</h1>
        <form onSubmit={onSubmit}>
            <input
                onChange={onChange} 
                value={toDo} 
                type="text" 
                placeholder="Write your to do..."/>
                <button>Add To Do</button>
        </form>
        <hr/>
        {/* key값은 unique 해야한다 */}
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>);
}

export default App;