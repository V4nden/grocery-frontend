import { FaHome, FaStore } from "react-icons/fa";
import { FaLeaf, FaPeopleGroup } from "react-icons/fa6";
import "./navBar.scss";
import { Link } from "react-router-dom";
import Search from "@/features/navbar/ui/Search";
import CartButton from "@/features/cart/ui/CartButton";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <div className="navbar__logo">
          <FaLeaf size={24} />
          <span>Plants</span>
        </div>
        <Search />
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
