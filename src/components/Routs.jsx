import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import AboutUs from "./pages/about_us/AboutUs";
import Automotive from "./pages/automotive/Automotive";

let router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                Component: Home

            },
            {
                path: 'about-us',
                Component: AboutUs
            },
            {
                path: 'automotive',
                Component: Automotive
            }
        ]
    },
]);

export { router }