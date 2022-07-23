import classes from './SignUpBox.module.css';

const SignUpForm = () => {

    return (
        <div className={classes.box}>
            <span>Don't have an account?</span>
            <a href='/emailsignup' className={classes.signUp}>Sign up</a>
        </div>
    );
};

export default SignUpForm;