import { useEffect, useState } from "react";

export const Form = () => {
	const [searchValue, setSearchValue] = useState<string>("");
	const [debounceSearchValue, setDebouncSearchValue] = useState<string>("");

	useEffect(() => {
		const timer = setTimeout(() => {
			setDebouncSearchValue(searchValue);
		}, 500);

		return () => clearTimeout(timer);
	}, [searchValue]);

	function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearchValue(e.target.value);
	}

	return (
		<div>
			<form>
				<div className="flex flex-col gap-1.5">
					<label htmlFor="search">Search</label>
					<input
						type="text"
						id="search"
						autoComplete="off"
						onChange={handleSearchChange}
						className="outline-none px-3 py-1 rounded-md ring-1 ring-blue-600"
					/>
				</div>
			</form>
			<p className="mt-5">
				{debounceSearchValue ? debounceSearchValue : "Start Typing..."}
			</p>
		</div>
	);
};
