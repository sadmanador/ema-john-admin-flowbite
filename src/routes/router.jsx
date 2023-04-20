import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import DashBoard from "../layouts/DashBoardLayouts";
import DashHome from "../pages/DashBoards/DashHome";
import NewOrders from "../pages/Orders/NewOrders/NewOrders";
import Processing from "../pages/Orders/Processing/Processing";
import ReadyToDeliver from "../pages/Orders/ReadyToDeliver/ReadyToDeliver";
import Delivered from "../pages/Orders/Delivered/Delivered";
import Returns from "../pages/Orders/Returns/Returns";

export const  router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dashboard',
                element: <DashBoard></DashBoard>,
                children:[
                    {
                        path:'/dashboard',
                        element: <DashHome></DashHome>
                    },
                    {
                        path:'/dashboard/new_orders',
                        element: <NewOrders></NewOrders>
                    },
                    {
                        path:'/dashboard/precessing',
                        element: <Processing></Processing>
                    },
                    {
                        path:'/dashboard/ready_to_deliver',
                        element: <ReadyToDeliver></ReadyToDeliver>
                    },
                    {
                        path:'/dashboard/delivered',
                        element: <Delivered></Delivered>
                    },
                    {
                        path:'/dashboard/returns',
                        element: <Returns></Returns>
                    },
                ]
            },
        ]
    }
])