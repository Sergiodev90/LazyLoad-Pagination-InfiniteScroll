import { createBrowserRouter } from "react-router-dom";
import LazyloadPage from "../pages/Lazyload";
import InfiniteScrollPage from "../pages/InfinitScrolling/Index";
import PaginationPage from "../pages/Pagination/Index";

const routers = createBrowserRouter([

    {
        path:'/Lazyload',
        element:<LazyloadPage/>
    },
    {
        path:'/InfinitScrolling',
        element:<InfiniteScrollPage/>
    },
    {
        path:'/Pagination',
        element:<PaginationPage/>
    }
])

export default routers