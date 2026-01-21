import {
    createBrowserRouter
} from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import AboutUs from "./pages/about_us/AboutUs";
import Automotive from "./pages/automotive/Automotive";
import Motorcycle from "./pages/motorcycle/Motorcycle";
import Soil from "./pages/soil/Soil";
import Sigma from "./pages/sigma/Sigma";
import NafArab from "./pages/naf arab/NafArab";

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
                path: 'automotive/motorcycle',
                loader: async () => {
                    const response = await fetch('/motorcycle.json'); // JSON in public folder
                    return response.json(); // response is now defined
                },
                Component: Motorcycle
            },
            {
                path: 'automotive/motorcycle/soil',
                loader: async () => {
                    const response = await fetch('/motorcycle.json'); // JSON in public folder
                    return response.json(); // response is now defined
                },
                Component: Soil
            },
            {
                path: 'automotive/motorcycle/sigma',
                loader: async () => {
                    const response = await fetch('/motorcycle.json'); // JSON in public folder
                    return response.json(); // response is now defined
                },
                Component: Sigma
            },
            {
                path: 'automotive/motorcycle/naf-arab',
                loader: async () => {
                    const response = await fetch('/motorcycle.json'); // JSON in public folder
                    return response.json(); // response is now defined
                },
                Component: NafArab
            }
        ]
    },
]);

export { router }