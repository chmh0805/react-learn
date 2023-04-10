import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState("");

	const onClick = () => setCounter((prev) => prev + 1);
	const onChange = (e) => setKeyword(e.target.value);

	console.log("I run all the time");
	useEffect(() => {
		console.log("I run only once.");
	}, []);
	useEffect(() => {
		if (keyword) console.log("SEARCH FOR", keyword);
	}, [keyword]);
	return (
		<div>
			<input
				onChange={onChange}
				type="text"
				placeholder="Search..."
				value={keyword}
			/>
			<h1 className={styles.title}>{counter}</h1>
			<Button onclick={onClick} text={"Continue"} />
		</div>
	);
}

export default App;
