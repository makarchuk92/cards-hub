import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import CardForm from "../CardForm";
import CardContainer from "../Cards/CardContainer";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/products',
                element: <CardContainer />
            },
            {
                path: '/create-product',
                element: <CardForm />
            }
        ]
    }
])