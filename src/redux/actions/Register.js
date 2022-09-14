import axios from "axios";
import { ToastAndroid } from "react-native";

const RegisterRequest = () => {
  return {
    type: "REGISTER_REQUEST",
  };
};

const RegisterSuccess = (data) => {
  return {
    type: "REGISTER_SUCCESS",
    payload: data,
  };
};

const RegisterError = (error) => {
  return {
    type: "REGISTER_ERROR",
    payload: error,
  };
};

export const AuthRegister = (formData) => {
  return (dispatch) => {
    dispatch(RegisterRequest());
    axios({
      method: "POST",
      url: "https://tickitz-backend-1st.herokuapp.com/api/v1/auth/register",
      data: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        phoneNumber: formData.phoneNumber,
        email: formData.email,
        password: formData.password,
      }
    })
      .then((res) => {
        ToastAndroid.showWithGravity('Register Success', ToastAndroid.SHORT, ToastAndroid.CENTER)
        dispatch(RegisterSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(RegisterError(err.response.data));
      });
  };
};
