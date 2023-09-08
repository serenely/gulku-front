import { ListItemText, Card, Link} from "@mui/material";
import styled from "styled-components";

export const ProductContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 20px;
margin: 20px;
width: 1200px;
border-radius: 20px;
`

export const CardStyledOne = styled(Card)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px white solid;
  border-radius: 20px;
`

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 280px;
  min-width: 280px;
  height: 250px;
  padding: 10px;
  margin: 5px;
  border: 1px solid white;
  border-radius: 20px;
`
export const StyledImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
`
export const LinkStyled = styled(Link)`
  && {
    text-decoration: none;
  }
`
export const ListItemTextPrimary = styled(ListItemText)`
  padding: 5px;
  margin: 5px;
  text-transform: none;
`
export const ListItemTextSecondary = styled(ListItemText)`
  padding: 5px;
  margin: 5px;
  font-size: 4;
  text-transform: none;
`
export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: 8px;
  margin: 0px 10px 30px 10px;
  color: black;
  background-color: #fafaff;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 7px 7px 2px 1px #e1eef5;
  width: 50%;
    &:hover{
      background-color: #67a375;
      color: white;
      box-shadow: 10px 10px 2px 1px #879aa3;
    }
`
export const ButtonStyledRemoved = styled.button`
  cursor: pointer;
  margin: 10px;
  background-color: #fafaff;
  border: 1px solid white;
  border-radius: 10px;
  box-shadow: 7px 7px 2px 1px #e1eef5;
  width: 10%;
  float: right; 
  
  &:hover {
    background-color: #B22222;
    color: white;
    box-shadow: 10px 10px 2px 1px #879aa3;
  }
`