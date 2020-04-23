
import { SELECT_HEX } from './actions';

let data = [];
for (let i = 0; i < 295; i++) {
	data.push(parseInt(Math.random() * 255))
}

const initialState = {
  data,
  selectedKeys: [],
};

const hex = (state=initialState, action)  => {
  switch (action.type) {
    case SELECT_HEX: {
      console.log({ action });
      return({...state, selectedKeys: action.selectedKeys });
    }
    default:
      return state;
  }
};

export default hex;