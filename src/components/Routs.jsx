import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import AboutUs from "./pages/about_us/AboutUs";

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
            }
        ]
    },
]);

export { router }