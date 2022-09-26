const initialState = {
    loading: false,
    data: []
  };
  
  const Booking = (state=initialState, action={})=> {
    switch (action.type) {
        case "GET_BOOKING_REQUEST":
          return { ...state, loading: true };
        case "GET_BOOKING_ERROR":
          return { ...state, loading: false, error: action.payload };
        case "GET_BOOKING_SUCCESS":
          return { ...state, loading: false, data: action.payload };
    
        default:
          return state
      }
  } 
  
  export default Booking;
  