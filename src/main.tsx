import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { Root } from "./routes/root.tsx";
import ErrorPage from "./routes/error-page.tsx";
import { Upload } from "./routes/upload.tsx";
import { Home } from "./routes/home.tsx";
import LoadingContextProvider from "./contexts/LoadingContext.tsx";
import { Form } from "./routes/form.tsx";
import { CountUp } from "./routes/count-up.tsx";
import { Filter } from "./routes/filter.tsx";
import { Todos } from "./routes/todos.tsx";
import TodosContextProvider from "./contexts/TodosContext.tsx";
import { Dropdown } from "./routes/dropdown.tsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <ErrorPage />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "upload", element: <Upload /> },
			{ path: "form", element: <Form /> },
			{ path: "filter", element: <Filter /> },
			{ path: "todos", element: <Todos /> },
			{ path: "count-up", element: <CountUp /> },
			{ path: "dropdown", element: <Dropdown /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<TodosContextProvider>
			<LoadingContextProvider>
				<RouterProvider router={router}></RouterProvider>
			</LoadingContextProvider>
		</TodosContextProvider>
	</React.StrictMode>
);
