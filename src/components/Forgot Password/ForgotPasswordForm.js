import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { isVaildUser, updatePassword } from '../../lib/api';

import OrContainer from '../UI/OrContainer';
import classes from './ForgotPasswordForm.module.css'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string().email(`Please enter the valid email format`).required('Email is required'),
  password: Yup.string().required('Password should conatin more than 6 characters.').min(6)
})

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState(false);
  const [showVisibility, setShowVisibility] = useState(false);
  const showVisibilityHandler = () => setShowVisibility((prev) => !prev);
  const [initial, setInitial] = useState(false);
  const formHandler = () => setInitial(true);

  const onSubmit = async values => {
    if (await isVaildUser(values) === 'email') setEmailValid(true);
    else {
      await updatePassword(values);
      navigate('/');
    }
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  const errors = !formik.errors.email && !formik.errors.password && initial;
  console.log(errors, formik.values);
  const btnClasses = `${classes.btn} ${errors ? classes.disabled : ''}`;

  return (
    <div className={classes.box}>
      <span className={classes.img}></span>
      <h4>Trouble Logging In?</h4>
      <p>Enter your email and we'll get back <br />into your account.</p>
      <form onSubmit={formik.handleSubmit} onChange={formHandler}>
        <TextField name='email' {...formik.getFieldProps('email')} id="filled-basic" type='email' label="Email" variant="filled" size='small' sx={{
          width: '20rem',
          border: '1px solid rgba(219, 219, 219, 1)',
          margin: '1rem 0',
          borderRadius: '6px'
        }} InputProps={{
          disableUnderline: true,
        }} />
        {formik.touched.email && formik.errors.email && <div className={classes.errors}>{formik.errors.email}</div>}
        {emailValid && <div className={classes.errors}>The email you entered doesn't belong to an account. Please check your email and try again.</div>}
        <TextField name='password' {...formik.getFieldProps('password')} id="password" label="Password" size='small' variant='filled' type={showVisibility ? null : "password"} sx={{
          border: '1px solid rgba(219, 219, 219, 1)',
          borderRadius: '6px',
          margin: '1rem 0',
        }}
          InputProps={{
            disableUnderline: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={showVisibilityHandler}>
                  {!showVisibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {formik.touched.password && formik.errors.password && <div className={classes.errors}>{formik.errors.password}</div>}
        <button disabled={!errors} type='submit' className={btnClasses}>Update Password</button>
      </form>
      <OrContainer />
      <a href='/emailsignup'>Create New Account</a>
      <a href='/' className={classes.login}>Back To Login</a>
    </div>
  )
}

export default ForgotPasswordForm;