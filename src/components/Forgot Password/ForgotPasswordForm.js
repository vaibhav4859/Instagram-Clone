import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { updatePassword } from '../../lib/api';

import OrContainer from '../UI/OrContainer';
import classes from './ForgotPasswordForm.module.css'

const initialValues = {
  email: '',
  password: ''
}

const validationSchema = Yup.object({
  email: Yup.string().email('No users found'),
  password: Yup.string().required('Required').min(6)
})

function ForgotPasswordForm() {
  const navigate = useNavigate();
  const [showVisibility, setShowVisibility] = useState(false);
  const showVisibilityHandler = () => setShowVisibility((prev) => !prev);
  const [initial, setInitial] = useState(false);
  const formHandler = () => setInitial(true);

  const onSubmit = async values => {
    await updatePassword(values);
    navigate('/');
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  })

  const errors = !formik.errors.email && !formik.errors.password && initial;
  console.log(errors);
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
        <TextField name='password' {...formik.getFieldProps('password')} id="password" label="Password" size='small' variant='filled' type={showVisibility ? null : "password"} sx={{
          border: '1px solid rgba(219, 219, 219, 1)',
          borderRadius: '6px'
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
        <button disabled={!errors} type='submit' className={btnClasses}>Send Login Link</button>
      </form>
      <OrContainer />
      <a href='/emailsignup'>Create New Account</a>
      <a href='/' className={classes.login}>Back To Login</a>
    </div>
  )
}

export default ForgotPasswordForm;