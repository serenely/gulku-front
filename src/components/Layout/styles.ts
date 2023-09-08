import styled from "styled-components"
import Link from "@mui/material/Link"

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: linear-gradient(-5deg, #23d5ab,  #23a6d5, #e73c7e, #ee7752);
  background-size: 350% 350%;
  animation: gradient 10s ease infinite;
      .left{
      display: flex;
      margin: 20px;
      width: 16%;
      justify-content: space-between;
    }
    .right{
        display: flex;
        margin: 20px;
        width: 20%;
        justify-content: space-between;
    }
`
export const NavStyledLink = styled(Link)`
 && {
    color: black;
    border: 1px solid white;
    border-radius: 60px;
    text-decoration: none;
    background-color: white;
    padding: 20px;
 }
`

export const NavStyledLinkSignUp = styled(Link)`
  && {
    color: white;
    border: 1px solid white;
    border-radius: 60px;
    text-decoration: none;
    padding: 20px;
  }
`

export const LogOutBtn = styled.button`
  color: black;
  border: 1px solid white;
  border-radius: 60px;
  text-decoration: none;
  background-color: white;
  padding: 20px;
  font-size: 14px;
  cursor: pointer;
`;

export const RoleContainer = styled.div`
  color: white;
  border: 1px solid white;
  border-radius: 60px;
  text-decoration: none;
  background-color: none;
  padding: 20px;
  font-size: 14px;
  `