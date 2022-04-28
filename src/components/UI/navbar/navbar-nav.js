import { NavLink } from "react-router-dom";
export const NavbarNav = ({ className }) => {
    return (
        <div className={className}>
            <NavLink
                to="/coffees"
                className="nav-link active"
                aria-current="page" >
                Coffees
            </NavLink>
            <NavLink
                to="/roasteries"
                className="nav-link active"
                aria-current="page" >
                Roasteries
            </NavLink>
            <NavLink
                to="/methods"
                className="nav-link active"
                aria-current="page" >
                Methods
            </NavLink>
        </div>
    )
}