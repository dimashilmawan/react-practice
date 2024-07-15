import { useEffect, useState } from "react";

type Todo = {
	id: number;
	userId: number;
	completed: boolean;
	title: string;
};

export const Filter = () => {
	const [loading, setLoading] = useState(true);
	const [fetchedTodos, setFetchedTodos] = useState<Todo[]>([]);
	const [searchValue, setSearchValue] = useState("");

	const filteredTodos = fetchedTodos.filter(todo =>
		todo.title.includes(searchValue)
	);

	useEffect(() => {
		const fetchTodos = async function () {
			try {
				const res = await fetch("https://jsonplaceholder.typicode.com/todos");
				const data = await res.json();

				if (!res.ok) throw new Error(data);

				setFetchedTodos(data.slice(0, 100));
			} catch (error) {
				if (error instanceof Error) {
					console.error("Error message:", error.message);
				}
			} finally {
				setLoading(false);
			}
		};

		fetchTodos();
	}, []);

	function handleSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value.trim());
	}

	function handleDeleteTodo(id: number) {
		const newTodos = fetchedTodos.filter(todo => todo.id !== id);
		setFetchedTodos(newTodos);
	}

	return (
		<div className="flex items-center justify-center flex-col">
			{loading && <p>Fetching...</p>}

			{!loading && (
				<>
					<form>
						<div className="flex flex-col gap-1.5">
							<label htmlFor="search">Search Todo</label>
							<input
								type="text"
								id="search"
								className="px-2 py-1.5 rounded-md outline-none ring-1"
								onChange={handleSearchInput}
								value={searchValue}
							/>
						</div>
					</form>
					<ul className="h-96 overflow-y-auto mt-8 space-y-2">
						{filteredTodos.map(item => (
							<li
								key={item.id}
								className="px-3 py-1.5 rounded-md flex items-center justify-between bg-blue-600 text-white"
							>
								<span>{item.title}</span>
								<button onClick={() => handleDeleteTodo(item.id)}>X</button>
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	);
};
