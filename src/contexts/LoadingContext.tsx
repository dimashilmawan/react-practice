/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

type LoadingContextType = {
	loading: boolean;
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoadingContext = createContext<LoadingContextType>(
	{} as LoadingContextType
);

export default function LoadingContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [loading, setLoading] = useState<boolean>(false);
	return (
		<LoadingContext.Provider value={{ loading, setLoading }}>
			{children}
		</LoadingContext.Provider>
	);
}

export function useLoadingContext() {
	return useContext(LoadingContext);
}
