import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

import './sign-in-and-sign-out.styles.scss';

const SignInAndSignOut = () => (
    <div className='sign-in-and-sign-out'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignOut;