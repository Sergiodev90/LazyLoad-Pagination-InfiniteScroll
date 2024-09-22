import { NavLink } from "react-router-dom";
import './Header.css'
function Header():JSX.Element{

    return(
        <div>
            <header className="container-header">
                <NavLink className="Container-Button-Change-Page " to="/Lazyload">Lazy Load</NavLink>
                <NavLink className="Container-Button-Change-Page "  to="/InfiniteScroll">Infinite Scroll</NavLink>
                <NavLink className="Container-Button-Change-Page "  to="/Pagination"> Pagination </NavLink>
            </header>
        </div>
    );
}

export {Header}