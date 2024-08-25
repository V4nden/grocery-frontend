import { useSearchParams } from "react-router-dom";
import Item from "../../../entities/item/ui/Item";
import "./store.scss";
import StoreHeader from "./StoreHeader";
import { useGetItemsQuery } from "../../../entities/item/api/itemApi";
type Props = {};

const Store = (props: Props) => {
  let [searchParams] = useSearchParams();
  const { data, isLoading } = useGetItemsQuery({
    sort: searchParams.get("sort") || "price",
    filter: searchParams.get("filter") ?? undefined,
  });
  return (
    <div className="store">
      <StoreHeader />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data &&
        (!!data.length ? (
          <div className="store__items">
            {data.map((el) => {
              return <Item key={el.id} item={el} type="card" />;
            })}
          </div>
        ) : (
          <div>{"Ничего не найдено :("}</div>
        ))
      )}
    </div>
  );
};

export default Store;
