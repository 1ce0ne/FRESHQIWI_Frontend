import {combineReducers, legacy_createStore} from 'redux';
import valutesReducer from './valutes-reducer';

let reducers = combineReducers({
  valutesPage: valutesReducer
});

let store = legacy_createStore(reducers);

window.store = store;

export default store;