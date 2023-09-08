import React from 'react';
import { LoginContainer, LoginForm } from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { fetchUserLog, login } from '../../redux/actions/actions';
import { UserLog } from '../../utils/interface';

const LoginPage: React.FC = () => {
  const { register, handleSubmit } = useForm<UserLog>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmitForm = async (data: UserLog) => {
    dispatch(fetchUserLog(data));
    dispatch(login());
    // navigate("/");
  };

  return (
    <LoginContainer>
      <h2>Log in</h2>
      <LoginForm onSubmit={handleSubmit(onSubmitForm)}>
        <label htmlFor="email">Email</label>
        <input type="email"{...register('email')} required />

        <label htmlFor="password">Password</label>
        <input type="password" {...register('password')} required />

        <button className="login__btn" type="submit">
          Submit
        </button>
      </LoginForm>
    </LoginContainer>
  );
};

export default LoginPage;
