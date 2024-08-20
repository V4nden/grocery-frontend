import { useAppDispatch, useAppSelector } from "../../../app/store";
import Popup from "../../../shared/popup/popup";
import { switchOpened } from "../../../app/store/slices/cartSlice";
import Item from "../../../entities/item/ui/item";
import "./cart.scss";

type Props = {};

const CartPopup = (props: Props) => {
  const state = useAppSelector((state) => state.cart.opened);
  const dispatch = useAppDispatch();
  const switchCart = () => {
    dispatch(switchOpened());
  };
  const cart = useAppSelector((state) => state.cart);
  return (
    <Popup
      className="cart-popup"
      actions={{ state: state, setState: switchCart }}
      title="Корзина"
    >
      {Object.values(cart.cart).map((el) => {
        return <Item item={el.item} type="large" />;
      })}
      {!!Object.keys(cart.cart).length && (
        <button className="cart-popup__buy-button">
          {`Всего: ${Object.values(cart.cart).reduce(
            (acc, el) =>
              acc +
              Math.round(el.item.price - el.item.price * el.item.discount) *
                el.amount,
            0
          )}`}
        </button>
      )}
    </Popup>
  );
};

export default CartPopup;
