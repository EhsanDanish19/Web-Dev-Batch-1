import React from 'react';

const SignUp = () => {
    return (
        <div>
           <form className='register'>
            <h2>Register Here</h2>
            <label>First Name:
                <input type='text'/>
            </label>
            <label>Last Name:
                <input type='text'/>
            </label>
            <label>Username:
                <input type='text'/>
            </label>
            <label>Email:
                <input type='email'/>
            </label>
            <label>Password:
                <input type='password'/>
            </label>
            <button>SignIn</button>
           </form>
        </div>
    );
}

export default SignUp;
