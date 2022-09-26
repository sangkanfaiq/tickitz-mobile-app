import axios from "axios";

const GetBookingRequest = () => {
  return {
    type: "BOOKING_REQUEST",
  };
};

const GetBookingSuccess = (data) => {
  return {
    type: "BOOKING_SUCCESS",
    payload: data,
  };
};

const GetBookingError = (error) => {
  return {
    type: "BOOKING_ERROR",
    payload: error,
  };
};

export const GetBooking = () => {
  return (dispatch) => {
    dispatch(GetBookingRequest());
    axios({
      method: "GET",
      url: "https://tickitz-backend-1st.herokuapp.com/api/v1/booking",
    })
      .then((res) => {
        dispatch(GetBookingSuccess(res.data));
      })
      .catch((err) => {
        dispatch(GetBookingError(err.response));
      });
  };
};
