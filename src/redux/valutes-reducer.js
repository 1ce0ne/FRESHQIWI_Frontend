import { valutesAPI } from "../api/api";

const SET_VALUTES = 'SET_VALUTES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_DATE = 'SET_DATE';
const SET_PREVIOUS_DATE = 'SET_PREVIOUS_DATE';
const SET_CURRENT_VALUTE = 'SET_CURRENT_VALUTE';

let initialState = {
  valutes: [],
  currentValute: null,
  date: '',
  previousDate: '', 
  isFetching: false
}

const valutesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUTES:
      return {
        ...state,
        valutes: action.valutes
      }
    case SET_DATE:
      return {
        ...state, 
        date: action.date
      }
    case SET_PREVIOUS_DATE:
      return {
        ...state,
        previousDate: action.date
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      }
    case SET_CURRENT_VALUTE:
      return {
        ...state,
        currentValute: action.code
      }
    default:
      return state
  }
}

const setValutes = (valutes) => ({ type: SET_VALUTES, valutes });
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
const setDate = (date) => ({ type: SET_DATE, date });
const setPreviousDate = (date) => ({ type: SET_PREVIOUS_DATE, date });
export const setCurrentValute = (code) => ({ type: SET_CURRENT_VALUTE, code });

// Thunk
export const getValutes = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    valutesAPI.getValutes().then(data => {
      dispatch(setValutes(data.Valute));
      dispatch(setDate(data.Date));
      dispatch(setPreviousDate(data.PreviousDate));
      dispatch(toggleIsFetching(false));
    })
  }
}

export default valutesReducer;