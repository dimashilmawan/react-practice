// import { useLoadingContext } from "../contexts/LoadingContext";

import { useLoadingStore } from "../store/loadingStore";

// export const Upload = () => {
// 	const { loading, setLoading } = useLoadingContext();
// 	async function mockApiCall() {
// 		return new Promise(resolve => setTimeout(resolve, 5000));
// 	}

// 	async function handleUpload() {
// 		try {
// 			setLoading(true);
// 			await mockApiCall();
// 		} catch (error) {
// 			if (error instanceof Error) {
// 				console.log(error.message);
// 			}
// 		} finally {
// 			setLoading(false);
// 		}
// 	}

// 	return (
// 		<div>
// 			<button
// 				onClick={handleUpload}
// 				disabled={loading}
// 				className={`px-4 py-1.5 rounded-md bg-blue-500 text-white font-semibold ${
// 					loading ? "bg-blue-500/25" : ""
// 				}`}
// 			>
// 				Upload
// 			</button>
// 		</div>
// 	);
// };

////////////////////////////////////////////////

export const Upload = () => {
	const { loading, setLoading } = useLoadingStore();
	async function mockApiCall() {
		return new Promise(resolve => setTimeout(resolve, 5000));
	}

	async function handleUpload() {
		try {
			setLoading(true);
			await mockApiCall();
		} catch (error) {
			if (error instanceof Error) {
				console.log(error.message);
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<div>
			<button
				onClick={handleUpload}
				disabled={loading}
				className={`px-4 py-1.5 rounded-md bg-blue-500 text-white font-semibold ${
					loading ? "bg-blue-500/25" : ""
				}`}
			>
				Upload
			</button>
		</div>
	);
};
