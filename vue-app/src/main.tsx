import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import Home from "./pages/Home.tsx";
import Cooking from "./pages/Cooking.tsx";
import Music from "./pages/Music.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Recipe from "./pages/Recipe.tsx";
import NavBar2 from "./components/NavBar2.tsx";
import {Recipes} from "./pages/Recipes.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <NavBar2/>,
        errorElement: <ErrorPage/>,
        children: [
            {path: '', element: <Home/>,},
            {path: 'cooking', element: <Cooking/>,},
            {path: 'recipes', element: <Recipes/>,},
            {path: 'recipes/:name', element: <Recipe/>,},
            {path: 'music', element: <Music/>,},
        ]
    }
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
