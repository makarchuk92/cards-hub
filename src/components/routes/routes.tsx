import { createBrowserRouter, useParams } from "react-router-dom";
import App from "../../App";
import { useAppSelector } from "../../hooks/redux";
import CardForm from "../Cards/CardForm";
import CardContainer from "../Cards/CardContainer";
import CardDetails from "../Cards/CardDetails";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/products',
                element: <CardContainer  />
            },
            {
                path: '/create-product',
                element: <CardForm />
            },
            {
                path: '/products/:id',
                element: <CardDetails />
            }
        ]
    }
])