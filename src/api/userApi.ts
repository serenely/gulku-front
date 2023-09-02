import { UserLog, UserReg } from "../utils/interface";

export const fetchUserData = async (data: Array<UserReg>) =>{
    try {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },);
  
      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token; 
        console.log('Token:', token);
        console.log('Data:', data);
        
        console.log('Успешно отправлено на сервер:', responseData);
      } else {
        console.error('Ошибка при отправке на сервер:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке на сервер:', error);
    }
  }

  export const fetchUserDataLog = async (data: Array<UserLog>) =>{
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },);
  
      if (response.ok) {
        const responseData = await response.json();
        const token = responseData.token; 
        console.log('Token:', token);
        console.log('Data:', data);
        
        console.log('Успешно отправлено на сервер:', responseData);
      } else {
        console.error('Ошибка при отправке на сервер:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке на сервер:', error);
    }
  }