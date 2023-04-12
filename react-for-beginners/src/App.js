import { useState } from "react";

function App() {
	const [toDo, setToDo] = useState("");
	const [toDoList, setToDoList] = useState([]);
	const onChange = (e) => {
		setToDo(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (toDo === "") return;

		setToDoList((currentArray) => [toDo, ...currentArray]);
		setToDo("");
	};
	return (
		<div>
			<h1>My To-Do List ({toDoList.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					type="text"
					placeholder="Write your to-do..."
					value={toDo}
					onChange={onChange}
				/>
				<button>Add To Do</button>
			</form>
			<hr />
			<ul>
				{toDoList.map((toDoItem, idx) => (
					<li key={idx}>{toDoItem}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
