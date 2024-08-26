import { useState } from "react";
import Btn from "../components/Btn/Btn";
import css from "./css.module.css";
import { FormEvent } from "../types";

const initReq: (string | number)[] = [];

function App() {
	const [result, setResult] = useState(0);
	const [req, setReq] = useState(initReq);

	const calculate = (e: FormEvent) => {
		e.preventDefault();

		let currentNum = "";
		let oldNum = "";
		let operator = "";
		let result = 0;

		for (let i = 0; i < req.length; i++) {
			const item = req[i];

			if (typeof item == "number" || item == ".") {
				currentNum += item;
			} else {
				oldNum = currentNum;
				currentNum = "";
				operator = item;
			}

			if (
				currentNum &&
				oldNum &&
				operator &&
				!(typeof req[i + 1] == "number" || req[i + 1] == ".")
			) {
				if (operator === "+") {
					result = sum(Number(oldNum), Number(currentNum));
				} else if (operator === "*") {
					result = multiply(Number(oldNum), Number(currentNum));
				} else if (operator === "/") {
					result = split(Number(oldNum), Number(currentNum));
				} else {
					result = subtract(Number(oldNum), Number(currentNum));
				}

				currentNum = `${result}`;
				oldNum = "";
				operator = "";
			}
		}

		setResult(result);
	};

	const createReq = (value: number | string) => {
		setReq([...req, value]);
	};

	return (
		<div className={css.app}>
			<div>{req.join(" ")}</div>
			<div className={css.result}>{result}</div>
			<form className={css.form} onSubmit={calculate}>
				<Btn
					type="button"
					onClick={() => {
						const newReq = [...req];
						newReq.pop();
						setReq(newReq);
					}}
				>
					B
				</Btn>
				<Btn
					type="button"
					onClick={() => {
						setResult(0);
						setReq([]);
					}}
				>
					L
				</Btn>
				{[...NUMBERS, ...OPERATORS].map(btn => (
					<Btn
						type="button"
						kind="secondary"
						key={btn.value}
						onClick={() => createReq(btn.value)}
					>
						{btn.display}
					</Btn>
				))}
				<Btn>=</Btn>
			</form>
		</div>
	);
}

export default App;

const NUMBERS = [
	{ value: 0, display: "0" },
	{ value: 1, display: "1" },
	{ value: 2, display: "2" },
	{ value: 3, display: "3" },
	{ value: 4, display: "4" },
	{ value: 5, display: "5" },
	{ value: 6, display: "6" },
	{ value: 7, display: "7" },
	{ value: 8, display: "8" },
	{ value: 9, display: "9" },
	{ value: ".", display: "." }
];

const OPERATORS = [
	{ value: "+", display: "+" },
	{ value: "-", display: "-" },
	{ value: "*", display: "*" },
	{ value: "/", display: "/" }
];

const sum = (oldNum: number, currentNum: number) => {
	return oldNum + currentNum;
};

const subtract = (oldNum: number, currentNum: number) => {
	return oldNum - currentNum;
};

const multiply = (oldNum: number, currentNum: number) => {
	return oldNum * currentNum;
};

const split = (oldNum: number, currentNum: number) => {
	return oldNum / currentNum;
};
