import { useState } from "react";
import Btn from "../components/Btn/Btn";
import css from "./css.module.css";
import { FormEvent } from "../types";
import { getResult } from "./getResult";
import { NUMBERS, OPERATORS } from "./consts";

const initReq: Req = [];
export type Req = (string | number)[];

export default function App() {
	const [result, setResult] = useState(0);
	const [req, setReq] = useState(initReq);

	const calculate = (e: FormEvent) => {
		e.preventDefault();
		const result = getResult(req);
		setResult(result);
	};

	const changeReq = (value: number | string) => {
		setReq([...req, value]);
	};

	const deleteOneReq = () => {
		const newReq = [...req];
		newReq.pop();
		setReq(newReq);
	};

	const cleanAll = () => {
		setResult(0);
		setReq([]);
	};

	const btns = [...NUMBERS, ...OPERATORS].map(btn => (
		<Btn
			type="button"
			kind="secondary"
			key={btn.value}
			onClick={() => changeReq(btn.value)}
		>
			{btn.display}
		</Btn>
	));

	return (
		<div className={css.app}>
			<div>{req.join(" ")}</div>
			<div className={css.result}>{result}</div>
			<form className={css.form} onSubmit={calculate}>
				{btns}

				<Btn type="button" onClick={deleteOneReq}>
					B
				</Btn>

				<Btn type="button" onClick={cleanAll}>
					L
				</Btn>

				<Btn>=</Btn>
			</form>
		</div>
	);
}
