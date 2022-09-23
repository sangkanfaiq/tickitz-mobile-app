import axios from "axios";

const GetMoviesRequest = () => {
  return {
    type: "GET_MOVIES_REQUEST",
  };
};

const GetMoviesSuccess = (data) => {
  return {
    type: "GET_MOVIES_SUCCESS",
    payload: data,
  };
};

const GetAllMoviesSuccess = (dataAll) => {
  return {
    type: "GET_ALL_MOVIES_SUCCESS",
    payload: dataAll,
  };
};

const GetMoviesError = (error) => {
  return {
    type: "GET_MOVIES_ERROR",
    payload: error,
  };
};

export const GetAllMovies = () => {
  return (dispatch) => {
    dispatch(GetMoviesRequest());
    axios({
      method: "GET",
      url: `https://tickitz-backend-1st.herokuapp.com/api/v1/movies`,
    })
      .then((res) => {
        dispatch(GetAllMoviesSuccess(res.data));
        // console.log(res)
      })
      .catch((err) => {
        dispatch(GetMoviesError(err.response));
        // console.log(err)
      });
  };
};

export const GetMovies = (form) => {
  return (dispatch) => {
    dispatch(GetMoviesRequest());
    axios({
      method: "GET",
      url: `https://tickitz-backend-1st.herokuapp.com/api/v1/movies?title=${form.title}&genre=${form.genre}`,
    })
      .then((res) => {
        dispatch(GetMoviesSuccess(res.data));
      })
      .catch((err) => {
        dispatch(GetMoviesError(err.response));
      });
  };
};
