import { StyledNavbarBrand } from "./navbar-brand.style";
import { StyledNavbarNav } from "./navbar-nav.style";

export const Navbar = ({ className }) => {
    return (
        <nav className={className + ' navbar-expand-lg navbar-light bg-light mb-5 sticky-top'}>
            <div className="container-fluid">
                <StyledNavbarBrand className="navbar-brand" />
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavAltMarkup">
                    <StyledNavbarNav className="navbar-nav" />
                </div>
            </div>
        </nav>
    )
}