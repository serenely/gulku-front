import React, { useState } from 'react';
import { RegistrationContainer, RegistrationForm } from './styles';
import {  useForm } from 'react-hook-form';
import { UserReg } from '../../utils/interface';
import { useDispatch } from 'react-redux';
import { fetchUser, login } from '../../redux/actions/actions';
import { useNavigate } from 'react-router-dom';

const RegistrPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<UserReg>();
  const [isAdministrator, setIsAdministrator] = useState(false);
  const validationSchema = {
    fullName: {
      required: "Full name is required",
    },
    email: {
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must be at least 8 characters long",
      },
    },
    address: {
      required: "Home address is required",
    },
  };

  const handleUserRoleButtonClick = (isAdmin: boolean) => {
    setIsAdministrator(isAdmin);
  };

  const onSubmitForm = async (data: any) => {
    data.isAdministrator = isAdministrator;
    dispatch(fetchUser(data));
    dispatch(login());
    navigate("/");
  };
  

  return (
    <RegistrationContainer>
      <h2>Registration</h2>
      <RegistrationForm onSubmit={handleSubmit(onSubmitForm)}>
        <label>Full name</label>
        <input type="text" {...register('fullName', { required: validationSchema.fullName.required })}  />
        {errors.fullName && <p>{errors.fullName.message}</p>}
        <label>Email</label>
        <input type="email" {...register('email')}  />
        <label>Password</label>
        <input type="password" {...register('password', { required: validationSchema.password.required })} required />
        {errors.password && <p>{errors.password.message}</p>}
        <label>Home address</label>
        <input type="text" {...register('address')} required />
        <button type="button" onClick={() => handleUserRoleButtonClick(true)}>
          Admin
        </button>
        <button type="button" onClick={() => handleUserRoleButtonClick(false)}>
          User
        </button>
        <h5>You are {isAdministrator ? 'Admin' : 'User'}</h5>
        <button type="submit" className="registration__btn">
          Submit
        </button>
      </RegistrationForm>
    </RegistrationContainer>
  );
};

export default RegistrPage;
