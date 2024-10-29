import {useRouteError} from "react-router-dom";
import NavBar from "../components/NavBar.tsx";
import {Container} from "@mui/material";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavBar/>
            <Container maxWidth={'lg'}>
                <div className={'container'}>
                    <h2>Oops!</h2>
                    <p>Sorry, an unexpected error has occurred.</p>
                    <p>
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </Container>
        </>
    )
}

export default ErrorPage;