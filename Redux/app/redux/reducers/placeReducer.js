// placeReducer.js

import {ADD_PLACE, DELETE_PLACE} from '../actions/types';

const initialState = {
  placeName: '',
  places: [],
};

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payloadData,
        }),
      };

    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter(place => {
          return place.key !== action.key;
        }),
      };

    default:
      return state;
  }
};

export default placeReducer;
