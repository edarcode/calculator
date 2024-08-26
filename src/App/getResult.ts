import { multiply } from "../utils/multiply";
import { split } from "../utils/split";
import { subtract } from "../utils/subtract";
import { sum } from "../utils/sum";
import { Req } from "./App";

export const getResult = (req: Req) => {
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

	const userLocale = navigator.language || "en-US";
	return result.toLocaleString(userLocale);
};
