import { REGISTER, LOGIN } from "../actions/users.action";

const jwtToken = localStorage.getItem("token");

const initialState = jwtToken
  ? {
      isLoggedIn: true,
      data: [],
    }
  : {
      isLoggedIn: false,
      data: [],
      registerData: [],
    };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        registerData: action.payload,
      };
    // case LOGIN:
    //   return {
    //     isLoggedIn: true,
    //   };
    default:
      return {
        state,
      };
  }
};

export default userReducer