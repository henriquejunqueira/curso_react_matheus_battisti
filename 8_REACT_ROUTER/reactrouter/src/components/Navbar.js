// 2 - links com react router
import './Navbar.css';

// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}
      <NavLink
        to="/"
        // className={({ isActive }) => (isActive ? 'esta-ativo' : 'noa-ativo')}
      >
        Home
      </NavLink>
      <NavLink to="/about">Sobre</NavLink>
    </nav>
  );
};

export default Navbar;
