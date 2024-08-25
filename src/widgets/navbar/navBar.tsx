import { FaHome, FaSearch, FaStore } from "react-icons/fa";
import { FaLeaf, FaPeopleGroup } from "react-icons/fa6";
import "./navBar.scss";
import CartButton from "../cart/ui/cartButton";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  const submitSearch = (value: string) => {
    value
      ? navigate(`store?filter=${encodeURIComponent(value)}`)
      : navigate(`store`);
  };
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <FaLeaf size={24} />
          <span>Plants</span>
        </div>
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
        <div className="navbar__content">
          <Link to={"/"}>
            <FaHome /> <span>Главная</span>
          </Link>
          <Link to={"/contacts"}>
            <FaPeopleGroup /> <span>Контакты</span>
          </Link>
          <Link to={"/store"}>
            <FaStore />
            <span>Магазин</span>
          </Link>
          <CartButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
