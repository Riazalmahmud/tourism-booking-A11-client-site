import React from 'react';

import useFirebase from '../../Hooks/useFirebase'

import googleLogo from '../../images/icon/search.png'
import './Login.css'
const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <div className="contaiener py-5">
                <div className="from-section bg-light w-50 mx-auto shadow-lg p-3 mb-5 bg-body rounded">
                    <h3>please signIn with </h3>
                    <button className="primar-custom-color text-white fw-bold px-5 " onClick={signInWithGoogle} > <img src={googleLogo} alt="" />  signIn with google</button>
                </div>

            </div>

        </div>
    );
};

export default Login;