import { useEffect, useState } from "react";

function formatTime(second: number) {
	const formattedMinute = Math.floor(second / 60);
	const formattedSecond = second % 60;
	// return formattedMinute

	return `${(formattedMinute + "").padStart(2, "0")}:${(
		formattedSecond + ""
	).padStart(2, "0")}`;
}

export const CountUp = () => {
	const [second, setSecond] = useState(0);
	const [play, setPlay] = useState(false);

	useEffect(() => {
		if (!play) return;
		const interval = setInterval(() => {
			setSecond(prevSecond => prevSecond + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, [play]);

	function handlePlay() {
		setPlay(prevState => !prevState);
	}
	function handleReset() {
		setSecond(0);
	}

	return (
		<div className="flex flex-col gap-4">
			<p>{formatTime(second)}</p>
			<div className="flex items-center gap-3">
				<button
					onClick={handlePlay}
					className={`inline-block px-4 py-1.5 rounded-md text-white ${
						play ? "bg-red-600" : "bg-blue-600"
					}`}
				>
					{play ? "Stop" : "Start"}
				</button>
				<button
					onClick={handleReset}
					className={`inline-block px-4 py-1.5 rounded-md text-white bg-emerald-600`}
				>
					Reset
				</button>
			</div>
		</div>
	);
};
