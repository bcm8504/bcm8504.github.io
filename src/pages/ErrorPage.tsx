import {useRouteError} from "react-router-dom";
import {Container} from "@mui/material";
import NavBar from "../components/NavBar.tsx";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavBar/>
            <Container maxWidth={'lg'}>
                <div className={'container'} style={{paddingTop: '64px' , textAlign:'center'}}>
                    <h4>oops!</h4>
                    <p>sorry, an unexpected error has occurred.</p>
                </div>
            </Container>
        </>
    )
}

export default ErrorPage;