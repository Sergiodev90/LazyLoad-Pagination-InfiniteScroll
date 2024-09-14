import { NavLink } from "react-router-dom";
import './Header.css'
function Header():JSX.Element{
    return(
        <div>
            <header className="container-header">
                <NavLink to="/Lazyload">Lazy Load</NavLink>
                <NavLink to="/InfiniteScroll">Infinite Scroll</NavLink>
                <NavLink to="/Pagination"> Pagination </NavLink>
            </header>
        </div>
    );
}

export {Header}