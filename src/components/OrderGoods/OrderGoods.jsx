import style from "./OrderGoods.module.css";

export const OrderGoods = ({ item }) => (
  <div className={style.goods}>
    <h3 className={style.title}>{item}</h3>

    <p className={style.weight}>512г</p>

    <p className={style.price}>
      1279
      <span className="currency">₽</span>
    </p>
  </div>
);
