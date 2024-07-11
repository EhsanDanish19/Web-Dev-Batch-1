import React, { useState } from 'react';

const SignUp = () => {
    const [Data, setData] = useState({
        f_name: '',
        l_name:'',
        username:'',
        email: '',
        password: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(Data, null, 2));
    };
    return (
        <div>
            <h2>Register Here</h2>
            <form onSubmit={handleSubmit}>
                <label>First Name:
                    <input type='text'
                        name='f_name'
                        value={Data.f_name}
                        onChange={handleChange} />

                </label>
                <label>Last Name:
                    <input type='text'
                        name='l_name'
                        value={Data.l_name}
                        onChange={handleChange}
                    />
                </label>
                <label>Username:
                    <input type='text'
                        name='username'
                        value={Data.username}
                        onChange={handleChange}
                    />
                </label>
                <label>Email:
                    <input type='email'
                        name='email'
                        value={Data.email}
                        onChange={handleChange}
                    />
                </label>
                <label>Password:
                    <input type='password'
                        name='password'
                        value={Data.password}
                        onChange={handleChange}
                    />
                </label>
                <label>Phone No:
                    <input type='number'
                        name='number'
                        value={Data.number}
                        onChange={handleChange}
                    />
                </label>
                <button>SignIn</button>
            </form>
        </div>
    );
}

export default SignUp;
