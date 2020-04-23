import { createStore } from 'redux'

import hex from './reducers';

const store = createStore(hex);

export default store;
