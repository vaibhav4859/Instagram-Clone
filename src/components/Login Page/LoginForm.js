import { Fragment } from "react";

import SignInFrom from './SignInForm';
import SignUpForm from '../Sign Up/SignUpForm';
import Download from '../UI/Download';
import classes from './LoginForm.module.css';

const LoginForm = () => {

    return (
        <Fragment>
            <div className={classes.boxes}>
                <SignInFrom />
                <SignUpForm />
                <Download />
            </div>
        </Fragment>
    );
};

export default LoginForm;