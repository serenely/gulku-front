import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  color: white;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
	height: 100vh;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22%;
  border-radius: 20px;
  color: white;

  padding: 20px;
  margin: 10px;

  border: 1px white solid;
  border-radius: 20px;
    input{
      border: none;
      border-radius: 5px;
      height: 15px;
    }
    .login__btn{
      padding: 5px;
      cursor: pointer;
      color: white;
      background: linear-gradient(-45deg, #23d5ab,  #ee7752, #23a6d5,#e73c7e);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}      font-weight: bold;
      border: none;
      border-radius: 20px;
      margin: 10px;
      width: 120px;
    }
    .registration__btn:hover{
      background-color: #d6d6d6;
      border: none;
      border-radius: 20px;
      margin: 10px;
      width: 120px;
    }

    background: linear-gradient(-45deg, #23d5ab, #23a6d5, #e73c7e, #ee7752);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}
`