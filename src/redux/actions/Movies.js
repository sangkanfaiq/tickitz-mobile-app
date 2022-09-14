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

const GetMoviesError = (error) => {
  return {
    type: "GET_MOVIES_ERROR",
    payload: error,
  };
};

export const GetMovies = () => {
  return (dispatch) => {
    dispatch(GetMoviesRequest());
    axios({
      method: "GET",
      url: "https://tickitz-backend-1st.herokuapp.com/api/v1/movies",
    })
      .then((res) => {
        dispatch(GetMoviesSuccess(res.data));
        console.log(res)
      })
      .catch((err) => {
        dispatch(GetMoviesError(err.response));
        console.log(err)
      });
  };
};

// return (dispatch) => {
//     try {
//         const result = axios({
//             method: "GET",
//             url: "http://localhost:3006/api/v1/movies",
//             dispatch(GetMoviesSuccess(result.data))
//         })
//     } catch (error) {
//         dispatch(GetMoviesError(error.response))
//     }
// }
