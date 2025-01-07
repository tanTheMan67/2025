import Login from "./Components/Login";
import Browsen from "./Browse";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Browse from "./Browse";

const Body = ()=>{
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/Browse",
            element:<Browse/>
        }
    ]
  )
    return(
    <div>
       <RouterProvider router={appRouter}/>
    </div>
    )
};
export default Body;