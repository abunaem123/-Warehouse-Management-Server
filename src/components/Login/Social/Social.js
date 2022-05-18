import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user,loading,error]=useSignInWithGoogle(auth)
    const navigate =useNavigate();
    let errorElement ;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement =
        <div>
            <p className='text-danger'> Error: {error.message}</p>
        </div>
    }
    if (user) {
        navigate ('/')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-info w-50'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info text-white fw-bold w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src='https://i.ibb.co/LPnzz9v/google-b31361249fb7518952ee.png' alt="" />
                    <span className='px-2'>Google Sign in</span>
                </button>
            </div>
        </div>
    );
};

export default Social;