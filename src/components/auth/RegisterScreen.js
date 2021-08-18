import React from 'react';
import {Link} from "react-router-dom";

function RegisterScreen(props) {
    return (
        <div>
            <h3 className='auth_title'>Register</h3>

            <form>
                <input
                    className="auth_input"
                    type="text"
                    placeholder="Name"
                    name="name"

                />


                <input
                    className="auth_input"
                    type="text"
                    placeholder="Email"
                    name="email"

                />


                <input
                    className="auth_input"
                    type="password"
                    placeholder="Password"
                    name="password"

                />


                <input
                    className="auth_input"
                    type="confirm"
                    placeholder="Confirm Password"
                    name="confirm"

                />

                <button type="submit" className="btn btn-primary btn-block">Register</button>




                <Link to="/auth/login">Already registered</Link>



            </form>








        </div>
    );
}

export default RegisterScreen;