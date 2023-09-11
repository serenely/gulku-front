import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchUserDataRequest, loadProductsFromCart, login, logout } from "../../redux/actions/actions";
import { LogOutBtn, NavContainer, NavStyledLink, NavStyledLinkSignUp, RoleContainer } from "./styles";
import { HomeOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LayoutProps } from "../../utils/interface";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartQuantity = useSelector((state: RootState) => state.cart.cartQuantity);
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  const user = useSelector((state: RootState) => state.user?.user);
  
  function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return decodeURIComponent(parts.pop()!.split(';').shift()!);
  }

  const handleLogout = () => {
    navigate("/register");
    dispatch(logout());
  };

  useEffect(() => {
    dispatch(loadProductsFromCart());
    dispatch(fetchUserDataRequest())
    const userCookie = getCookie("user");
  if (userCookie) {
    dispatch(login());
  }
  }, [dispatch]);

    return (
      <>
        <NavContainer>
          <div className="left">
            <NavStyledLink href="/"><HomeOutlined /></NavStyledLink>
            <NavStyledLink href="/cart">
              <Badge badgeContent={cartQuantity} color="primary">
                <ShoppingCartOutlined style={{ color: "black", fontSize: 20 }} />
              </Badge>
            </NavStyledLink>
          </div>
          <div className="right">
            {isAuthenticated ? (
              <>
                {user?.isAdministrator ? (
                  <RoleContainer>You are Admin</RoleContainer>
                ) : (
                  <RoleContainer>You are User</RoleContainer>
                )}
                <LogOutBtn onClick={handleLogout}>Log out</LogOutBtn>
              </>
            ) : (
              <>
                <NavStyledLink href="/login">Sign in</NavStyledLink>
                <NavStyledLinkSignUp href="/register">Sign up</NavStyledLinkSignUp>
              </>
            )}
          </div>
        </NavContainer>
        <div>{children}</div>
      </>
    );
  };
export default Layout;
