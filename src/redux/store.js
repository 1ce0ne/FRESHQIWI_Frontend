import {applyMiddleware, combineReducers, legacy_createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import valutesReducer from './valutes-reducer';

let reducers = combineReducers({
  valutesPage: valutesReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;