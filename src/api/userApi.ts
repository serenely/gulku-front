import { UserLog, UserReg } from "../utils/interface";

export const fetchUserDataReg = async (data: Array<UserReg>) =>{
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
        
        console.log('Успешно отправлено на сервер:', responseData);
        return responseData;
      } else {
        console.error('Ошибка при отправке на сервер:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке на сервер:', error);
    }
  }

  export const fetchUserDataLog = async (data: Array<UserLog>) => {
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
        
        console.log('Успешно отправлено на сервер:', responseData );
        console.log('responseData', responseData );
        return responseData;
      } else {
        console.error('Ошибка при отправке на сервер:', response.statusText);
      }
    } catch (error) {
      console.error('Ошибка при отправке на сервер:', error);
    }
  }

  export const fetchUserData = async (_id: string, token: string) => {
    try {
      const response = await fetch(`http://localhost:4000/users/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      const responseData = await response.json();
      console.log('Response Data:', responseData);
    } else {
      console.error('Ошибка при отправке на сервер:', response.statusText);
    }
    } catch (error) {
      console.error('Ошибка при отправке на сервер:', error);
    }
  }

  export const fetchProductDeleteData = async (productId: string, token: string) => {
    try {
      const response = await fetch(`http://localhost:4000/products/${productId}`, {
        method: 'DELETE',
        headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    
    if (response.ok) {
      console.log('Продукт успешно удален');
    } else {
      console.error('Ошибка при удалении продукта:', response.statusText);
    }
  } catch (error) {
    console.error('Ошибка при отправке запроса:', error);
  }
}