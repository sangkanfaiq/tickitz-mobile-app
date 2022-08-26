const initialState = {
    loading: false,
    data: {
      results: [],
    },
  };
  
  const Cinema = (state = initialState, action = {}) => {
    switch (action.type) {
      case "GET_CINEMA_REQUEST":
        return { ...state, loading: true };
      case "GET_CINEMA_ERROR":
        return { ...state, loading: false, error: action.payload };
      case "GET_CINEMA_SUCCESS":
        return { ...state, loading: false, data: action.payload };
  
      default:
        return state
    }
  };
  
  export default Cinema
  