// 中间件和store
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers'
import thunk from 'redux-thunk';
const middlewares = [
  thunk,
];

// 创建store
export default createStore(reducers, applyMiddleware(...middlewares));