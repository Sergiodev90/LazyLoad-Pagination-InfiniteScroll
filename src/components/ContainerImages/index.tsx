import { useEffect } from "react";
import { Location, useLocation } from "react-router-dom";
import InfiniteScrollPage from "../../pages/InfinitScrolling/Index";
import LazyloadPage from "../../pages/Lazyload";
import PaginationPage from "../../pages/Pagination/Index";

function ContainerImages():JSX.Element{
    const location:Location = useLocation();
    useEffect(()=>{
        
    },[location])
    return(
        <div className="container-By-Props">
            {location.pathname === '/Lazyload' && <LazyloadPage/>}
            {location.pathname === '/InfiniteScroll' && <InfiniteScrollPage/>}
            {location.pathname === '/Pagination' && <PaginationPage/>}
        </div>
    );
}

export {ContainerImages}