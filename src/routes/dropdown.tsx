import { useEffect, useState } from "react";
import Select, { SingleValue } from "react-select";

type Options = { label: string; value: string }[];

export const Dropdown = () => {
	const [loading, setLoading] = useState(true);
	const [berries, setBerries] = useState<Options>([]);
	const [selectedBerry, setSelectedBerry] = useState("");

	async function getBerries() {
		try {
			const res = await fetch("https://pokeapi.co/api/v2/berry");
			const data = await res.json();

			if (!res.ok) throw new Error("Something went wrong");

			const formattedBerries = (data.results as { name: string }[]).map(
				berry => ({
					label: berry.name,
					value: berry.name,
				})
			) as Options;

			const ascBerries = formattedBerries.sort((a, b) =>
				a.value.localeCompare(b.value)
			);

			setBerries(ascBerries);
		} catch (error) {
			if (error instanceof Error) console.log(error.message);
		} finally {
			setLoading(false);
		}
	}
	function handleSelectChange(
		selected: SingleValue<{
			label: string;
			value: string;
		}>
	) {
		const selectedValue = selected ? selected.value : "";
		setSelectedBerry(selectedValue);
	}

	useEffect(() => {
		getBerries();
	}, []);

	return (
		<div>
			<div className="w-96">
				<Select
					options={berries}
					onChange={handleSelectChange}
					isClearable
					isDisabled={loading}
					isLoading={loading}
				/>
			</div>
			{selectedBerry && (
				<p className="text-center mt-6 text-3xl font-semibold">
					{selectedBerry}
				</p>
			)}
		</div>
	);
};
