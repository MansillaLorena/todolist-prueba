import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]); // lista de tareas
	const [newTodo, setNewTodo] = useState(""); // texto que ingresa en input


	return (
		<div className="text-center container mt-5">

			<h1 className="opacity-25 fs-1 fst-italic">Todos</h1>
			<input type="text" name="todo" className="form-control border border-secondary rounded" value={newTodo} onChange={(e) => {
				setNewTodo(e.target.value);
			}}
				onKeyDown={(e) => {
					if (e.code === "Enter") {
						setTodos([...todos, newTodo]);
						setNewTodo("");
					}
				}}
			/>

			{todos.map((todo, index) => {
				return (<div key={index} className="d-flex container text-dark shadow-lg p-3 bg-body-tertiary border-bottom border-secondary border-opacity-25 "><h4 className="me-auto ">{todo}</h4>
					<button type="button" className="btn-close mt-2
					 me-3" aria-label="Close" onClick={() => {
							let copytodos = [...todos]
							copytodos.splice(index, 1)
							setTodos(copytodos)
						}}></button>
				</div>
				)
			})
			}
			< div className="footer d-flex fs-6 opacity-50 shadow-lg p-3 bg-body-tertiary rounded" >{todos.length} Tareas</div>
		</div>

	);
};

export default Home;