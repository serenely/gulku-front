import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  color: white;
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 10s ease infinite;
	width: 100%;
	height: 150vh;

/* @keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
} */
`