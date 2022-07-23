import { Fragment, useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { addUser, isValidUserSignup } from '../../lib/api';
import Logo from '../../images/logo.png';
import Download from '../UI/Download';
import Footer from '../UI/Footer';
import classes from './EmailSignUp.module.css';
import OrContainer from '../UI/OrContainer'; // username mei cross ni aa rha line 27 35 console

const initialValues = {
    email: '',
    name: '',
    username: '',
    password: ''
};

const EmailSignUp = () => {
    const navigate = useNavigate();
    const [inputType, setInputType] = useState('password');
    const [initial, setInitial] = useState(false);

    const validate = async values => {
        let errors = {};
        const error = await isValidUserSignup(values);
        console.log(error);

        if (!values.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email) || error.email)
            errors.email = `The email you entered doesn't belong to an account. Please check your email and try again.`;

        if (!values.name) errors.name = 'Enter your full name';

        if (!values.username || error.username) errors.username = `Username you entered isn't available (try something else)`;
        console.log(errors.username, errors.email);
        if (!values.password || values.password.length < 6) errors.password = 'Please enter valid password ( > 6 characters)';

        return errors;
    };

    const onSubmit = async values => {
        try {
            await addUser(values);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    const changeHAndler = () => setInitial(true);

    const showHideHandler = () => {
        if (inputType === 'password') setInputType('text');
        else setInputType('password');
    }

    const errors = !formik.errors.email && !formik.errors.name && !formik.errors.username && !formik.errors.password && initial;
    const btnClasses = `${classes.btn} ${errors ? classes.disabled : ''}`;

    return (
        <Fragment>
            <div className={classes.contain}>
                <div className={classes.box}>
                    <img alt='Error' src={Logo} className={classes.logo} />

                    <form className={classes.signup} onSubmit={formik.handleSubmit} onChange={changeHAndler}>
                        <p className={classes.para1}>Sign up to see photos and videos from your friends.</p>
                        <button type='button' className={classes.fbBtn}>
                            <img alt='Error' src='https://cdn.icon-icons.com/icons2/1826/PNG/512/4202107facebookfblogosocialsocialmedia-115710_115591.png' />
                            <span className={classes.fb}>Log in with Facebook</span>
                        </button>
                        <OrContainer />

                        <div className={classes['input-container']}>
                            <input className={classes.input} type='email' name='email' placeholder='Email'  {...formik.getFieldProps('email')} />
                            {formik.values.email.length > 0 && !formik.errors.email && <span className={`${classes.validity} ${!formik.errors.email ? classes.tick : ''}`}></span>}
                            {formik.values.email.length > 0 && formik.errors.email && <span className={`${classes.validity} ${formik.errors.email ? classes.cross : ''}`}></span>}
                        </div>
                        <div className={classes['input-container']}>
                            <input className={classes.input} type='text' name='name' placeholder='Full Name' {...formik.getFieldProps('name')} />
                            {formik.values.name.length > 0 && !formik.errors.name && <span className={`${classes.validity} ${!formik.errors.name ? classes.tick : ''}`}></span>}
                            {formik.values.name.length > 0 && formik.errors.name && <span className={`${classes.validity} ${formik.errors.name ? classes.cross : ''}`}></span>}
                        </div>
                        <div className={classes['input-container']}>
                            <input className={classes.input} type='text' name='username' placeholder='Username' {...formik.getFieldProps('username')} />
                            {formik.values.username.length > 0 && !formik.errors.username && <span className={`${classes.validity} ${!formik.errors.username ? classes.tick : ''}`}></span>}
                            {formik.values.username.length > 0 && formik.errors.username && <span className={`${classes.validity} ${formik.errors.username ? classes.cross : ''}`}></span>}
                        </div>
                        <div className={`${classes['input-container']} ${classes.password}`}>
                            <input className={classes.input} type={inputType} name='password' placeholder='Password' {...formik.getFieldProps('password')} />
                            {formik.values.password.length !== 0 && <span className={classes.password} onClick={showHideHandler}>{inputType === 'password' ? 'Show' : 'Hide'}</span>}
                        </div>

                        <p className={classes.para2}>People who use our service may have uploaded your contact information to Instagram. <a href='https://www.facebook.com/help/instagram/261704639352628'>Learn More</a></p>
                        <p className={classes.para2}>By signing up, you agree to our <a href='https://help.instagram.com/581066165581870'>Terms</a> , <a href='https://help.instagram.com/519522125107875/?maybe_redirect_pol=0'>Data Policy </a>and <a href='https://help.instagram.com/1896641480634370?ref=ig'>Cookies Policy</a> .</p>
                        <button disabled={!errors} type='submit' className={btnClasses}>Sign Up</button>
                    </form>
                </div>
                <div className={classes.box2}>
                    <span>Have an account? <a href='/'>Log in</a></span>
                </div>
                <Download />
            </div>
            <Footer />
        </Fragment>
    )
};

export default EmailSignUp;