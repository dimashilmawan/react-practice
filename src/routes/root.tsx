// import { NavLink, Outlet } from "react-router-dom";
// import { useLoadingContext } from "../contexts/LoadingContext";

// export const Root = () => {
// 	const { loading } = useLoadingContext();
// 	return (
// 		<>
// 			<header>
// 				<nav className="h-16 flex items-center justify-between max-w-5xl mx-auto">
// 					<ul className="flex items-center gap-5">
// 						<li>
// 							<NavLink
// 								className={({ isActive }) =>
// 									(isActive ? "text-blue-600 " : "") +
// 									" font-semibold transition-all"
// 								}
// 								to="/"
// 							>
// 								Home
// 							</NavLink>
// 						</li>
// 						<li>
// 							<NavLink
// 								to="upload"
// 								className={({ isActive }) =>
// 									(isActive ? "text-blue-600 " : "") +
// 									" font-semibold transition-all"
// 								}
// 							>
// 								Upload
// 							</NavLink>
// 						</li>
// 						<li>
// 							<NavLink
// 								to="form"
// 								className={({ isActive }) =>
// 									(isActive ? "text-blue-600 " : "") +
// 									" font-semibold transition-all"
// 								}
// 							>
// 								Form
// 							</NavLink>
// 						</li>
// 					</ul>
// 					{loading && <span>Loading...</span>}
// 				</nav>
// 			</header>
// 			<main className="flex justify-center items-center  h-[calc(100vh-4rem)]">
// 				<Outlet />
// 			</main>
// 		</>
// 	);
// };
//////////////////////////////////////////////////////////
import { NavLink, Outlet } from "react-router-dom";
import { useLoadingStore } from "../store/loadingStore";

export const Root = () => {
	const { loading } = useLoadingStore();
	return (
		<>
			<header>
				<nav className="h-16 flex items-center justify-between max-w-5xl mx-auto">
					<ul className="flex items-center gap-5">
						<li>
							<NavLink
								className={({ isActive }) =>
									(isActive ? "text-blue-600 " : "") +
									" font-semibold transition-all"
								}
								to="/"
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="upload"
								className={({ isActive }) =>
									(isActive ? "text-blue-600 " : "") +
									" font-semibold transition-all"
								}
							>
								Upload
							</NavLink>
						</li>
						<li>
							<NavLink
								to="count-up"
								className={({ isActive }) =>
									(isActive ? "text-blue-600 " : "") +
									" font-semibold transition-all"
								}
							>
								Count up
							</NavLink>
						</li>
						<li>
							<NavLink
								to="filter"
								className={({ isActive }) =>
									(isActive ? "text-blue-600 " : "") +
									" font-semibold transition-all"
								}
							>
								Filter
							</NavLink>
						</li>
						<li>
							<NavLink
								to="form"
								className={({ isActive }) =>
									(isActive ? "text-blue-600 " : "") +
									" font-semibold transition-all"
								}
							>
								Form
							</NavLink>
						</li>
						<li>
							<NavLink
								to="todos"
								className={({ isActive }) =>
									(isActive ? "text-blue-600 " : "") +
									" font-semibold transition-all"
								}
							>
								Todos
							</NavLink>
						</li>
						<li>
							<NavLink
								to="dropdown"
								className={({ isActive }) =>
									(isActive ? "text-blue-600 " : "") +
									" font-semibold transition-all"
								}
							>
								Dropdown
							</NavLink>
						</li>
					</ul>
					{loading && <span>Loading...</span>}
				</nav>
			</header>
			<main className="flex justify-center items-center  h-[calc(100vh-4rem)]">
				<Outlet />
			</main>
		</>
	);
};
