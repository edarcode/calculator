import { useState } from "react";
import css from "./css.module.css";
import { FormEvent } from "../../types";
import { getResult } from "./getResult";
import { NUMBERS, OPERATORS } from "./consts";

const initReq: Req = [];
export type Req = (string | number)[];

export default function Calculator() {
	const [result, setResult] = useState("0");
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
		setResult("0");
		setReq([]);
	};

	const btns = [...NUMBERS, ...OPERATORS].map(btn => (
		<button type="button" key={btn.value} onClick={() => changeReq(btn.value)}>
			{btn.display}
		</button>
	));
	return (
		<main className={css.calc}>
			<section className={css.viewfinder}>
				<div className={css.req}>▸ {req.join(" ")}</div>
				<div className={css.result}>{result}</div>
			</section>
			<form className={css.form} onSubmit={calculate}>
				{btns}

				<button type="button" onClick={deleteOneReq}>
					Borrar
				</button>

				<button type="button" onClick={cleanAll}>
					Limpiar
				</button>

				<button>🟰</button>
			</form>
		</main>
	);
}
