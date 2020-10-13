import axios from "axios";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";

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

export const registerActions = (value, event, history) => (dispatch) => {
  event.preventDefault();
  console.log("tes param", value);

  return axios
    .post("https://zan-exgen-moongoose.herokuapp.com/student", value)
    .then((response) => {
      console.log("res", response);
      dispatch(registerFunct(response.data.student));
      history.push("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};
