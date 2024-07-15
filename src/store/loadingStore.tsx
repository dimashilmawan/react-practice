import { create } from "zustand";

type LoadingStoreType = {
	loading: boolean;
	setLoading: (bool: boolean) => void;
};

export const useLoadingStore = create<LoadingStoreType>(set => ({
	loading: false,
	setLoading: bool => set(() => ({ loading: bool })),
}));
