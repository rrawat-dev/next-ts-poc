import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper'
import news from './news.reducer';
import fullPageLoader from './fullpageLoader.reducer';
import {Action} from '../actions/news.actions';

const combinedReducer = combineReducers({
    news,
    fullPageLoader
})


export default (state:any, action:Action) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state, // use previous state
        ...action.payload, // apply delta from hydration
      }

      return nextState
    } else {
      return combinedReducer(state, action)
    }
  }