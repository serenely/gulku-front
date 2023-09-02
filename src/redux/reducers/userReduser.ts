import { SET_ERROR} from "../../utils/constants";
import { UserReg } from "../../utils/interface";

interface UserState {
  user: UserReg | null;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
};

const userReducer = (state = initialState, action: any): UserState => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
