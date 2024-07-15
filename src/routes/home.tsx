import { useEffect } from "react";

export const Home = () => {
	useEffect(() => {
		const getGames = async () => {
			const res = await fetch("http://localhost:4000", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					// query: `
					// 	query getAllGame{
					// 		games{
					// 			id
					// 			title
					// 			platform
					// 		}
					// 	}
					// `,
					////////////////////////////////////
					// query: `
					// 	query getSingleGame($id: ID!){
					// 		game(id: $id) {
					// 			id
					// 			title
					// 			platform
					// 		}
					// 	}
					// `,
					// variables: {
					// 	id: "3",
					// },
					////////////////////////////////////
					// query: `
					// 	mutation deleteGame($id: ID!){
					// 		deleteGame(id: $id) {
					// 			id
					// 			title
					// 			platform
					// 		}
					// 	}
					// `,
					// variables: {
					// 	id: "3",
					// },
					////////////////////////////////////
				}),
			});
			const data = await res.json();
			console.log(data.data);
		};
		getGames();
	}, []);

	return <div></div>;
};
