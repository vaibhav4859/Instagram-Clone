import { Fragment } from "react"
import LoginForm from "../components/Login Page/LoginForm";
import SlidingImage from "../components/Login Page/SlidingImage";
import Footer from '../components/UI/Footer';

const Login = () => {

    return(
        <Fragment>
            <div className="container">
            <SlidingImage />
            <LoginForm />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Login;