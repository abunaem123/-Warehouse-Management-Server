import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import Social from '../Social/Social';

const Login = () => {
    const emailRef = useRef ('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ]= useSignInWithEmailAndPassword(auth);

    const [sendPasswordReserEmail, sending]=useSendPasswordResetEmail(auth);
    if(loading){
        return <Loading></Loading>
    }
    if (error) {
        errorElement =
        <div>
            <p className='text-danger'> Error: {error.message}</p>
        </div>
    }

    const handleSubmit =event=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email,password)
    }

    const navigateRegister =event=>{
        navigate('/register')
    }

    const resetPassword =async () =>{
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordReserEmail(email);
            toast('Sent Email');
        }
        else{
            toast('Please enter your email address')
        }

    }


    return (
        <div className=' w-50 mx-auto my-4 bg-light shadow p-3 mb-5  p-4 border rounded text-black'>
            <h2 className='text-center'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>You don't have an account? <Link to='/register ' className='text-danger pe-auto text-decoration-none ' onClick={navigateRegister}>Please Register</Link></p>
            <p>Forget your password? <button to='/register ' className='btn btn-link text-danger pe-auto text-decoration-none ' onClick={resetPassword}>Reset Password</button></p>
            <Social></Social>
            <ToastContainer />
        </div>
    );
};

export default Login;