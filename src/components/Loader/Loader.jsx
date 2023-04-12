import style from "./Loader.module.css";

export const Loader = () => {
	return (
		<div className={style.skCircle}>
			<div className={[style.skCircle1, style.skChild].join(" ")}></div>
			<div className={[style.skCircle2, style.skChild].join(" ")}></div>
			<div className={[style.skCircle3, style.skChild].join(" ")}></div>
			<div className={[style.skCircle4, style.skChild].join(" ")}></div>
			<div className={[style.skCircle5, style.skChild].join(" ")}></div>
			<div className={[style.skCircle6, style.skChild].join(" ")}></div>
			<div className={[style.skCircle7, style.skChild].join(" ")}></div>
			<div className={[style.skCircle8, style.skChild].join(" ")}></div>
			<div className={[style.skCircle9, style.skChild].join(" ")}></div>
			<div className={[style.skCircle10, style.skChild].join(" ")}></div>
			<div className={[style.skCircle11, style.skChild].join(" ")}></div>
			<div className={[style.skCircle12, style.skChild].join(" ")}></div>
		</div>
	);
};
