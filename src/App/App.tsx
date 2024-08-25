import Btn from "../components/buttons/Btn/Btn";
import IconBtn from "../components/buttons/IconBtn/IconBtn";
import InputNumber from "../components/inputs/InputNumber/InputNumber";
import InputText from "../components/inputs/InputText/InputText";
import Select from "../components/inputs/Select/Select";
import css from "./css.module.css";

function App() {
	return (
		<div className={css.app}>
			<Btn>Enviar</Btn>
			<InputText title="Title" />
			<InputNumber />
			<Select
				title="Title"
				opt={[
					{ value: ".js", display: "JavaScript" },
					{ value: ".rs", display: "Rust" }
				]}
			></Select>
			<IconBtn />
		</div>
	);
}

export default App;
