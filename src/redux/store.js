import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reduser = () => {};
export const store = createStore(reduser, composeWithDevTools(applyMiddleware(thunk)));