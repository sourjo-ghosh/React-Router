import { NavLink } from "react-router"

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/blogs">Blog</NavLink>
        <NavLink to="/about">About</NavLink>
        
      </nav>
    </div>
  )
}

export default Header
