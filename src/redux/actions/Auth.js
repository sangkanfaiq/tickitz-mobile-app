import axios from "axios";
import { ToastAndroid } from "react-native";

const LoginRequest = () => {
  return {
    type: "LOGIN_REQUEST",
  };
};

const LoginSuccess = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

const LoginError = (error) => {
  return {
    type: "LOGIN_ERROR",
    payload: error,
  };
};

export const AuthLogin = (formData) => {
  return (dispatch) => {
    dispatch(LoginRequest());
    axios({
      method: "POST",
      url: "https://tickitz-backend-1st.herokuapp.com/api/v1/auth/login",
      data: {
        email: formData.email,
        password: formData.password,
      }
    })
      .then((res) => {
        ToastAndroid.showWithGravity('Login Success', ToastAndroid.SHORT, ToastAndroid.CENTER)
        dispatch(LoginSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(LoginError(err.response.data));
      });
  };
};

export const AuthLogout = () => {
    return {
        type: "AUTH_LOGOUT",
    };
  };
