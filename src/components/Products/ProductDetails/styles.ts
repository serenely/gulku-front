import { Card, Typography } from "@mui/material";
import { Image } from "antd";
import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  display:flex;
  flex-direction: column;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 350% 350%;
  animation: gradient 10s ease infinite;
  height: 160vh;

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
export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: row;
  min-width: 280px;
  height: 100%;
  padding: 10px;
  margin: 5px;
  border: 1px solid white;
  border-radius: 20px;
  background-color: #fffafe;
    .description_div{
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      width: 90%;
      margin: 0 100px;
    }
`
export const StyledTypography = styled(Typography)`
  background-color: white;
  color: black;
  border-radius: 20px;
`
