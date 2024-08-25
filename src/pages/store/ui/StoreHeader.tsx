import Dropdown from "@/shared/ui/dropdown/Dropdown";
import React from "react";
import { useSearchParams } from "react-router-dom";

type Props = {};

const StoreHeader = (props: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = (e: React.FormEvent<HTMLSelectElement>) => {
    setSearchParams((prev) => {
      prev.set("sort", e.currentTarget.value);
      return prev;
    });
  };
  return (
    <div className="store__title">
      {searchParams.get("filter") ? (
        <h1>Результаты поиска "{searchParams.get("filter")}"</h1>
      ) : (
        <h1>Каталог товаров</h1>
      )}
      <Dropdown onChange={search}>
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
      </Dropdown>
    </div>
  );
};

export default StoreHeader;
