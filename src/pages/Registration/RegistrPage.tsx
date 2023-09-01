import React, { useState } from 'react';
import { RegistrationContainer, RegistrationForm } from './styles';
import {  useForm } from 'react-hook-form';
import { User } from '../../utils/interface';
import { useDispatch } from 'react-redux';
import { fetchUser, login } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

const RegistrPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<User>();
  const [isAdministrator, setIsAdministrator] = useState(false);

  const handleUserRoleButtonClick = (isAdmin: boolean) => {
    setIsAdministrator(isAdmin);
  };

  const handleLogin = () => {
    dispatch(login());
  };

  const onSubmitForm = async (data: any) => {
    data.isAdministrator = isAdministrator;
    dispatch(fetchUser(data)); 
    navigate("/");
  };

  return (
    <RegistrationContainer>
      <h2>Registration</h2>
      <RegistrationForm onSubmit={handleSubmit(onSubmitForm)}>
        <label>Full name</label>
        <input type="text" {...register('fullName')} required />
        <label>Email</label>
        <input type="email" {...register('email')} required />
        <label>Password</label>
        <input type="password" {...register('password')} required />
        <label>Home address</label>
        <input type="text" {...register('address')} required />
        <button type="button" onClick={() => handleUserRoleButtonClick(true)}>
          Admin
        </button>
        <button type="button" onClick={() => handleUserRoleButtonClick(false)}>
          User
        </button>
        <h5>You are {isAdministrator ? 'Admin' : 'User'}</h5>
        <button type="submit" className="registration__btn" onClick={handleLogin}>
          Submit
        </button>
      </RegistrationForm>
    </RegistrationContainer>
  );
};

export default RegistrPage;
