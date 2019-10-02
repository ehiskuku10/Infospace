import { createStore, combineReducers } from 'redux'
import reducers from '../Reducers'

export default function configureStore() {
    return createStore(
      combineReducers({
        ...reducers
      })
    );
}