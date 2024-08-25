import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import {
  addCartItem,
  removeCartItem,
} from "../../../entities/cart/model/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IItem } from "../../../entities/item/model/types";

type Props = { item: IItem };

const ItemLarge = (props: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const toCart = () => {
    dispatch(addCartItem(props.item));
  };
  const fromCart = () => {
    dispatch(removeCartItem(props.item));
  };

  return (
    <div className="item-large">
      <img
        src={props.item.image}
        alt="product image"
        className="item-large__image"
      />
      <div className="item-large__info">
        <h1 className="item-large__info__title">{props.item.name}</h1>
        <p className="item-large__info__description">
          {props.item.description}
        </p>
      </div>
      <div className="item-large__purchase-info">
        <div className="item-large__purchase-info__buy">
          <button onClick={toCart}>
            <FaPlus />
          </button>
          <span>{cart[props.item.id].amount}</span>
          <button onClick={fromCart}>
            <FaMinus />
          </button>
        </div>
        <span className="item-large__purchase-info__price">
          <span className="item-large__purchase-info__price__discount">
            {Math.round(
              props.item.price - props.item.price * props.item.discount
            )}
            ₽
          </span>
        </span>
      </div>
    </div>
  );
};

export default ItemLarge;
