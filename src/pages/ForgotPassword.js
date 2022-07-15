import { Fragment } from 'react';
import ForgotPasswordForm from '../components/Forgot Password/ForgotPasswordForm';
import Footer from '../components/UI/Footer';
import Header from '../components/UI/Header';

function ForgotPassword() {
    return (
        <Fragment>
            <Header />
            <ForgotPasswordForm />
            <Footer />
        </Fragment>
    )
}

export default ForgotPassword;