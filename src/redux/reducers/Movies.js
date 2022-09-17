const initialState = {
  loading: false,
  data: {
    results: [],
  },
  dataAll: {
    results: [],
  },
};

const Movies = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'GET_MOVIES_REQUEST':
      return {...state, loading: true};
    case 'GET_MOVIES_ERROR':
      return {...state, loading: false, error: action.payload};
    case 'GET_MOVIES_SUCCESS':
      return {...state, loading: false, data: action.payload};
    case 'GET_ALL_MOVIES_SUCCESS':
      return {...state, loading: false, dataAll: action.payload};

    default:
      return state;
  }
};

export default Movies;
