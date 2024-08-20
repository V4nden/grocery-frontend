import { IItem } from "../../../app/types";
type Props = { item: IItem; type: "large" | "card" };
import "./item.scss";
import ItemCard from "./itemCard";
import ItemLarge from "./itemLarge";

const Item = (props: Props) => {
  switch (props.type) {
    case "card":
      return <ItemCard item={props.item} />;
    case "large":
      return <ItemLarge item={props.item} />;
  }
};

export default Item;
