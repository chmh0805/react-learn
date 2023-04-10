import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
	const [counter, setCounter] = useState(0);
	const onClick = () => setCounter((prev) => prev + 1);
	console.log("I run all the time");
	useEffect(() => {
		console.log("I run only once.");
	}, []);
	return (
		<div>
			<h1 className={styles.title}>{counter}</h1>
			<Button onclick={onClick} text={"Continue"} />
		</div>
	);
}

export default App;
