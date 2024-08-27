import css from "./css.module.css";
import Calculator from "./Calculator/Calculator";

export default function App() {
	return (
		<div className={css.calc}>
			<Calculator />
		</div>
	);
}
