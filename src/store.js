import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { panelActiveReducer } from './reducers/panelReducer'

const reducer = combineReducers({ panelActive: panelActiveReducer })

const middleware = [thunk]

const initialState = {
  panelActive: {
    activeIndex: '3',
  },
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
