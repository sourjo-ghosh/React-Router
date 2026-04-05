import { NavLink } from "react-router";
import "./Header.css";
import Ispending from "../Ispending/Ispending";
const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/">
          {({ isPending }) => (
            <span>Home {isPending && <Ispending></Ispending>}</span>
          )}
        </NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/blogs">Blog</NavLink>
        <NavLink to="/posts">{({ isPending }) => <span>Posts {isPending && <Ispending></Ispending>}</span>}</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </div>
  );
};

export default Header;
