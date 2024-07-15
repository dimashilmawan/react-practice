import { ChangeEvent, FormEvent, useState } from "react";
import { useTodosContext } from "../contexts/TodosContext";

export const Todos = () => {
	const { todos, dispatch } = useTodosContext();
	const [titleInput, setTitleInput] = useState("");

	function handleCreateTodo(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (titleInput === "") return;

		dispatch({ type: "create", payload: { title: titleInput } });
		setTitleInput("");
	}

	function handleTitleChange(e: ChangeEvent<HTMLInputElement>) {
		setTitleInput(e.target.value);
	}

	function handleCheckTodo(id: number) {
		dispatch({ type: "check", payload: { id } });
	}

	function handleDeleteTodo(id: number) {
		dispatch({ type: "delete", payload: { id } });
	}

	return (
		<div>
			<form onSubmit={handleCreateTodo}>
				<label htmlFor="title">Title</label>
				<input
					type="text"
					value={titleInput}
					onChange={handleTitleChange}
					className="px-3 py-1.5 rounded-md ring-1 outline-none"
				/>
			</form>
			<ul className="space-y-3 mt-8">
				{todos.map(todo => {
					return (
						<li
							className={`px-3 py-1.5 justify-between transition-all items-center flex rounded-md bg-blue-600 text-white ${
								todo.checked ? "bg-gray-400" : ""
							}`}
							key={todo.id}
						>
							<div className="flex gap-3">
								<button onClick={() => handleCheckTodo(todo.id)}>O</button>
								<span
									className={`${
										todo.checked ? "line-through" : ""
									} transition-all`}
								>
									{todo.title}
								</span>
							</div>
							<button onClick={() => handleDeleteTodo(todo.id)}>x</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
