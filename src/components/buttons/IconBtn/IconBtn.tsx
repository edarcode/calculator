import css from "./css.module.css";
import { joinClass } from "./utils/joinClass";
import { Props } from "./types";
import { KINDS } from "./kinds";
import Cross from "./icons/Cross";

export default function IconBtn(props: Props) {
	const { isVisible = true, kind, className, Icon, ...extraProps } = props;

	const finalClass = joinClass([css.btn, KINDS[kind ?? "primary"], className]);

	if (!isVisible) return null;
	return (
		<button {...extraProps} className={finalClass}>
			{Icon ? <Icon className={css.icon} /> : <Cross className={css.icon} />}
		</button>
	);
}
