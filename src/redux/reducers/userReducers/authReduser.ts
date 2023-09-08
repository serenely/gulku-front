import { LOGIN, LOGOUT } from "../../../utils/constants";
import { login, logout } from "../../actions/actions";

type AuthState = {
    isAuthenticated: boolean;
  };
  
  const initialState: AuthState = {
    isAuthenticated: false,
  };
  
  type AuthAction = ReturnType<typeof login> | ReturnType<typeof logout>;

  const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
      case LOGIN:
        return { ...state, isAuthenticated: true };
      case LOGOUT:
        return { ...state, isAuthenticated: false };
      default:
        return state;
    }
  };
  
  export default authReducer;