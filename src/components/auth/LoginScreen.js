import React from 'react';
import {Link} from "react-router-dom";
import {useForm} from "../../Hooks/useForm";
import {useDispatch} from 'react-redux';
import {authGoogleLogin} from "../../action/auth";


const initial = {
    email: '',
    password: ''
}


function LoginScreen(props) {
    const[FormValues, handleInputChange, reset ] = useForm(initial);
    const dispatch = useDispatch();

    const {email, password} = FormValues;

    const handleSubmitLogin=(event)=>{
     event.preventDefault();


    }

    const HandleGoogleLogin=()=>{
        dispatch(authGoogleLogin())

    }



    return (
        <div>
            <h3 className='auth_title'>Login</h3>

            <form onSubmit={handleSubmitLogin}>
                <input
                   className="auth_input"
                    type="text"
                    placeholder="Email"
                    name="email"
                   value={email}
                   onChange={handleInputChange}

                />
                <input
                    className="auth_input"
                    type="password"
                    placeholder="Password"
                    name="password"
                   value={password}
                    onChange={handleInputChange}
                />

                <button type="submit" className="btn btn-primary btn-block">Login</button>


                <div className="auth__social_network">
                    <p>Login with social network</p>

                    <div className="google-btn">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b onClick={HandleGoogleLogin}>Sign in with google</b>
                        </p>
                    </div>

                </div>


                <Link to="/auth/register">Create new account</Link>



            </form>






        </div>
    );
}

export default LoginScreen;