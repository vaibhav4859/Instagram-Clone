import { useState } from 'react'; // error at 56
import { useFormik } from 'formik'

import { getUser, isVaildUser } from '../../lib/api';
import Logo from '../../images/logo.png'
import FbLogo from '../../images/fb-logo.png'
import classes from './SignInForm.module.css';
import { useNavigate } from 'react-router-dom';
import OrContainer from '../UI/OrContainer';

const initialValues = {
    email: '',
    password: ''
};

const validate = async values => {
    let errors = {};

    if (!values.password || values.password.length < 6)
        errors.password = 'Sorry, your password was incorrect. Please double-check your password.';

    if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
        errors.email = `The email you entered doesn't belong to an account. Please check your email and try again.`;

    return errors;
};

const SignInForm = () => {
    const navigate = useNavigate();
    const [inputType, setInputType] = useState('password');
    const [initial, setInitial] = useState(false);
    const [isBtnClicked, setIsBtnClicked] = useState(false);

    const onSubmit = async values => {
        const user = await getUser(values);
        console.log(user);
        if (user) navigate('/home');
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    const changeHAndler = () => setInitial(true);

    let errors = !formik.errors.email && !formik.errors.password && initial;
    const btnHandler = async () => {
        const error = await isVaildUser({
            email: formik.values.email,
            password: formik.values.password
        });
        if (error === 'password' || error === 'email') errors = true;
        console.log(errors);
        setIsBtnClicked(true);
    } // is se phle error true ho js isn't waiting aur user find kr rha h

    const showHideHandler = () => {
        if (inputType === 'password') setInputType('text');
        else setInputType('password');
    }


    // console.log(errors);
    const btnClasses = `${classes.disabled} ${errors ? classes.btn : ''}`

    return (
        <div className={classes.box}>
            <img alt='Error Loading Logo' src={Logo} />
            <form className={classes['sign-in-form']} onSubmit={formik.handleSubmit} onChange={changeHAndler}>
                <input className={classes.input} type='email' placeholder='Email' name='email' {...formik.getFieldProps('email')} />
                <div className={classes['password-container']}>
                    <input className={`${classes.input} ${formik.values.password.length !== 0 ? (inputType === 'password' ? classes.oops : classes.oops2) : ''}`} type={inputType} placeholder='Password' name='password' {...formik.getFieldProps('password')} />
                    {formik.values.password.length !== 0 && <span onClick={showHideHandler}>{inputType === 'password' ? 'Show' : 'Hide'}</span>}
                </div>
                <button onClick={btnHandler} disabled={!errors} className={btnClasses} type='submit'>Log In</button>
                <OrContainer />
                <button className={classes.fbBtn} type='button'>
                    <img alt='Error' src={FbLogo} />
                    <span className={classes.fb}>Log In With Facebook</span>
                </button>
                {isBtnClicked && formik.touched.email && formik.errors.email ? <div className={classes.error}>{formik.errors.email}</div> : null}
                {isBtnClicked && !formik.errors.email && formik.touched.password && formik.errors.password ? <div className={classes.error}>{formik.errors.password}</div> : null}
            </form>
            <a href='/password/reset' className={classes.forgot}>Forgot Password?</a>
        </div>
    )
};

export default SignInForm;