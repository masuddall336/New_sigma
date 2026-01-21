import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import AboutUs from "./pages/about_us/AboutUs";
import Automotive from "./pages/automotive/Automotive";
import Motorcycle from "./pages/motorcycle/Motorcycle";

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
            },
            {
                path: '/automotive/motorcycle',
                loader: async () => {
                    const response = await fetch('../../public/motorcycle.json'); // JSON in public folder
                    return response.json(); // response is now defined
                },
                Component: Motorcycle
            }
        ]
    },
]);

export { router }