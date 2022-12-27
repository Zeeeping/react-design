import { useDispatch, useSelector } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import reduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'

import app from './modules/app'

const reducer = combineReducers({
  app
})

const reduxMiddleWares = [reduxThunk, reduxPromise]
const store = configureStore({
  reducer,
  middleware: reduxMiddleWares
})

export {
  useDispatch,
  useSelector
}

export default store
