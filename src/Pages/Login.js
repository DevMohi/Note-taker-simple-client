import React from 'react';
import auth from '../Firebase/Firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';


const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center mt-3'>Login to Try our app 😎</h1> <br />
            <div className='d-flex justify-content-center'>
                <button className='btn btn-dark' onClick={() => signInWithGoogle()}>Google Login</button>
            </div>
        </div>
    );
};

export default Login;