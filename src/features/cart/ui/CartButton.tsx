import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../../app/appStore";
import { switchOpened } from "../../../entities/cart/model/cartSlice";

type Props = {};

const CartButton = (props: Props) => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.cart);
  const switchCart = () => {
    dispatch(switchOpened());
  };
  return (
    <button
      className="cart-button"
      onClick={(e) => {
        switchCart();
      }}
    >
      {!!Object.keys(cart).length && (
        <p className="cart-button__total">
          {Object.values(cart).reduce((acc, el) => acc + el.amount, 0)}
        </p>
      )}
      <FaShoppingBag size={24} />
    </button>
  );
};

export default CartButton;
