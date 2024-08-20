import { useSearchParams } from "react-router-dom";
import { useGetItemsQuery } from "../../../app/store/services/itemsApi";
import Item from "../../../entities/item/ui/item";
import "./store.scss";
type Props = {};

const Store = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading } = useGetItemsQuery({
    sort: searchParams.get("sort") || "price",
    filter: searchParams.get("filter") ?? undefined,
  });
  return (
    <div className="store">
      <div className="store__title">
        {searchParams.get("filter") ? (
          <h1>Результаты поиска "{searchParams.get("filter")}"</h1>
        ) : (
          <h1>Каталог товаров</h1>
        )}
        <select
          className="store__title__sort"
          onChange={(e) => {
            setSearchParams((prev) => {
              prev.set("sort", e.currentTarget.value);
              return prev;
            });
          }}
        >
          {[
            { val: "price", title: "Цена" },
            { val: "nutrients", title: "Элементы" },
            { val: "discount", title: "Скидка" },
          ].map((el) => {
            return (
              <option value={el.val} className="store__title__sort-option">
                {el.title}
              </option>
            );
          })}
        </select>
      </div>
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
          <div>Ничего не найдено :(</div>
        ))
      )}
    </div>
  );
};

export default Store;
