const SET_VALUTES = 'SET_VALUTES';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SET_DATE = 'SET_DATE';
const SET_PREVIOUS_DATE = 'SET_PREVIOUS_DATE';

let initialState = {
  valutes: [],
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
    default:
      return state
  }
}

export const setValutes = (valutes) => ({ type: SET_VALUTES, valutes });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const setDate = (date) => ({ type: SET_DATE, date });
export const setPreviousDate = (date) => ({ type: SET_PREVIOUS_DATE, date });

export default valutesReducer;