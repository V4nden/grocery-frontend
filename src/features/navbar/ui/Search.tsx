import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

type Props = {};

const Search = (props: Props) => {
  const navigate = useNavigate();
  const submitSearch = (value: string) => {
    value
      ? navigate(`store?filter=${encodeURIComponent(value)}`)
      : navigate(`store`);
  };
  return (
    <div className="navbar__search">
      <FaSearch />

      <input
        onKeyDown={(e) => {
          if (e.key == "Enter") {
            submitSearch(e.currentTarget.value);
          }
        }}
        className="navbar__search__field"
        type="text"
        name=""
        placeholder="Поиск по товарам"
      />
    </div>
  );
};

export default Search;
