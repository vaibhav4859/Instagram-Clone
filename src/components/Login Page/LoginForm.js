import { Fragment } from "react";

import SignInFrom from './SignInForm';
import SignUpBox from '../Sign Up/SignUpBox';
import Download from '../UI/Download';
import classes from './LoginForm.module.css';

const LoginForm = () => {

    return (
        <Fragment>
            <div className={classes.boxes}>
                <SignInFrom />
                <SignUpBox />
                <Download />
            </div>
        </Fragment>
    );
};

export default LoginForm;