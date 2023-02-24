import style from "./OrderGoods.module.css";

export const OrderGoods = ({ title, price, weight }) => {
  return (
    <div className={style.goods}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.weight}>{weight}г</p>
      <p className={style.price}>
        {price}
        <span className="currency">&nbsp;₽</span>
      </p>
    </div>
  );
};
