import axios from "axios";

const GetCinemaRequest = () => {
  return {
    type: "GET_CINEMA_REQUEST",
  };
};

const GetCinemaSuccess = (data) => {
  return {
    type: "GET_CINEMA_SUCCESS",
    payload: data,
  };
};

const GetCinemaError = (error) => {
  return {
    type: "GET_CINEMA_ERROR",
    payload: error,
  };
};

export const GetCinema = () => {
  return (dispatch) => {
    dispatch(GetCinemaRequest());
    axios({
      method: "GET",
      url: "http://192.168.100.39:3006/api/v1/cinema/",
    })
      .then((res) => {
        dispatch(GetCinemaSuccess(res.data));
      })
      .catch((err) => {
        dispatch(GetCinemaError(err.response));
      });
  };
};