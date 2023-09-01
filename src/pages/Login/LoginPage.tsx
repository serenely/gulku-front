import React from 'react';
import { LoginContainer, LoginForm } from './styles';

const LoginPage: React.FC = ()=>{
  return(
    <LoginContainer>
        <h2> Log in</h2>
      <LoginForm>
        <label>Email</label>
        <input type="email" id='email' name='email' required/>
        <label> Password </label>
        <input type="password" id='paswordHash' name='paswordHash' required />
        <button className='login__btn'> Submit </button>
      </LoginForm>
    </LoginContainer>
    )
}

export default LoginPage;