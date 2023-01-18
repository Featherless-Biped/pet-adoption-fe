import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        
        <nav >
            <ul>
                <li>
                    <NavLink to="/" exact activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/search" activeClassName="active">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink>
                </li>
            </ul>
        </nav>
  
    );
};

export default Navbar