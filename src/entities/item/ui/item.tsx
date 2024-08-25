type Props = { item: IItem; type: "large" | "card" };
import { IItem } from "../model/types";
import "./item.scss";
import ItemCard from "../../../widgets/item/ui/itemCard";
import ItemLarge from "../../../widgets/item/ui/itemLarge";

const Item = (props: Props) => {
  switch (props.type) {
    case "card":
      return <ItemCard item={props.item} />;
    case "large":
      return <ItemLarge item={props.item} />;
  }
};

export default Item;
