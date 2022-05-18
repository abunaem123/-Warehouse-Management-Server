import { useState } from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import auth from "../../../firebase.init";
import Social from "../../Login/Social/Social";
import Loading from "../Loading/Loading";
import { sendEmailVerification } from "firebase/auth";

import './Register.css'


const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate();
    

    const navigateLogin = () => {
        navigate('/login')
    }

    if (loading) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');

        toast('Please verify Your Email')

    }
    return (
        <div className=' register-form '>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name='name' placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept terms and conditions</label>
                <input
                    disabled={!agree}
                    className='btn btn-primary w-50 mx-auto d-block my-2 '
                    type="submit"
                    value="Register" />
            </form>
            <p>Already have an account? <Link to='/login ' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
            <Social></Social>
            <ToastContainer></ToastContainer>
        </div>
    );
};
export default Register;