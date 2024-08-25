import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { addCartItem } from "../../cart/model/cartSlice";
import { FaCartPlus, FaStar } from "react-icons/fa";
import { IItem } from "../../../entities/item/model/types";

type Props = { item: IItem };

const ItemCard = (props: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const toCart = () => {
    dispatch(addCartItem(props.item));
  };
  const rating = () => {
    const elements: React.ReactNode[] = [];
    for (let i = 1; i <= 5; i++) {
      if (props.item.rating >= i) {
        elements.push(<FaStar fill="#ffaa00" />);
      } else {
        elements.push(<FaStar fill="#ADADAD" />);
      }
    }
    return elements;
  };
  return (
    <div className="item-card">
      <img
        src={props.item.image}
        alt="product image"
        className="item-card__image"
      />
      <h1 className="item-card__title">{props.item.name}</h1>
      <div className="item-card__rating">
        {rating()}
        <span>({props.item.rating})</span>
      </div>
      <div className="item-card__purchase-info">
        <span className="item-card__purchase-info__price">
          <span className="item-card__purchase-info__price__discount">
            {Math.round(
              props.item.price - props.item.price * props.item.discount
            )}
            ₽
          </span>
          <span className="item-card__purchase-info__price__actual">
            {props.item.price}
          </span>
        </span>

        <button onClick={toCart} className="item-card__purchase-info__buy">
          <FaCartPlus fill="#fff" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
