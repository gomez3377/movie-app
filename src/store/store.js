import { createStore, compose, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { RootReducer } from './root-reducer';

const middleWares = [logger]
const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(RootReducer, undefined, composeEnhancers);


