import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../const";
import { orderRequestAsync } from "../../store/order/orderSlice";
import { Count } from "../Count/Count";
import { OrderGoods } from "../OrderGoods/OrderGoods";
import style from "./Order.module.css";

const orderList = ["Супер сырный", "Картошка фри", "Жгучий хот-дог"];
// const orderList = [...JSON.parse(localStorage.getItem("order"))];

// console.log(JSON.parse(localStorage.getItem("order")));

export const Order = () => {
  // const { orderList } = useSelector((state) => state.order);
  // console.log("orderList: ", orderList);
  const { totalPrice, totalCount, orderList, orderGoods } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderRequestAsync());
  }, [orderList.length]);

  return (
    <div className={style.order}>
      <section className={style.wrapper}>
        <div className={style.header} tabIndex="0" role="button">
          <h2 className={style.title}>Корзина</h2>

          <span className={style.count}>{totalCount}</span>
        </div>

        <div className={style.wrap_list}>
          <ul className={style.list}>
            {orderGoods.map((item) => (
              <li key={item.id} className={style.item}>
                <img className={style.image} src={`${API_URL}/${item.image}`} alt={item.title} />
                <OrderGoods {...item} />
                <Count count={item.count} id={item.id} />
              </li>
            ))}
          </ul>

          <div className={style.total}>
            <p>Итого</p>
            <p>
              <span className={style.amount}>{totalPrice}</span>
              <span className={style.currency}>&nbsp;₽</span>
            </p>
          </div>

          <button className={style.submit}>Оформить заказ</button>

          <div className={style.apeal}>
            <p className={style.text}>Бесплатная доставка</p>
            <button className={style.close}>Свернуть</button>
          </div>
        </div>
      </section>
    </div>
  );
};
