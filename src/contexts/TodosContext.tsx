/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

type TodosContextType = {
	todos: InitialStateType;
	dispatch: React.Dispatch<ACTIONTYPE>;
};

const TodosContext = createContext<TodosContextType>({} as TodosContextType);

type ACTIONTYPE =
	| { type: "create"; payload: { title: string } }
	| { type: "update"; payload: { id: number; title: string } }
	| { type: "check"; payload: { id: number } }
	| { type: "delete"; payload: { id: number } };

type InitialStateType = {
	id: number;
	title: string;
	checked: boolean;
}[];

const initialState: InitialStateType = [];

function todosReducer(
	state: InitialStateType,
	action: ACTIONTYPE
): InitialStateType {
	switch (action.type) {
		case "create":
			return [
				...state,
				{
					id: Math.random() * 1000,
					title: action.payload.title,
					checked: false,
				},
			];
		case "update":
			return state.map(todo =>
				todo.id === action.payload.id
					? { ...todo, title: action.payload.title }
					: todo
			);
		case "check":
			return state.map(todo =>
				todo.id === action.payload.id
					? { ...todo, checked: !todo.checked }
					: todo
			);
		case "delete":
			return state.filter(todo => todo.id !== action.payload.id);
		default:
			return state;
	}
}

export default function TodosContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [todos, dispatch] = useReducer(todosReducer, initialState);
	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodosContext.Provider>
	);
}

export function useTodosContext() {
	return useContext(TodosContext);
}
