import axios from "axios";
// import jwt from "jwt-decode";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const GET_DATA_REQUEST = "GET_DATA_REQUEST";
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";
export const GET_DATA_FAILED = "GET_DATA_FAILED";


export const registerFunct = (value) => {
  return {
    type: REGISTER,
    payload: value,
  };
};

export const loginFunct = (value) => {
  return {
    type: LOGIN,
    payload: value,
  };
};

export const getUserRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  };
};

export const getUserSuccess = (result) => {
  return {
    type: GET_DATA_SUCCESS,
    result,
  };
};

export const getUserFailed = (error) => {
  return {
    type: GET_DATA_FAILED,
    error,
  };
};


export const registerActions = (value, event, history) => (dispatch) => {
  event.preventDefault();
  console.log("register value", value);

  const uriUsers = "https://jwt-learn.herokuapp.com/users";

  return axios
    .post(uriUsers, value)
    .then((response) => {
      console.log("res", response);
      dispatch(registerFunct(response.data.student));
      history.push("/sign-in");
    })
    .catch((error) => {
      console.log(error);
    });
};

export const loginActions = (value, event, history) => (dispatch) => {
  event.preventDefault();
  // console.log("value", value);
  const uriLogin = "https://jwt-learn.herokuapp.com/login";

  return axios
    .post(uriLogin, value)
    .then((response) => {
      console.log(response);
      if(response.data.token !== undefined) {
        localStorage.setItem("token", response.data.token);
        // let decodeJwt = jwt(response.data.token);
        // console.log("decodeJwt",decodeJwt);
        dispatch(loginFunct(response.data.token))
        history.push("/profile")
      }
    })
    .catch((error) => {
      console.log(error);
    });

  // trial async axios
  // const postUser = async () => {
  //   try {
  //     const postUserData = await axios.post(uriUsers, value);
  //     console.log("postUserData", postUserData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
};

// export const getUserAction = () => (dispatch) => {
//   dispatch(getUserRequest());
//   const 
// }