
import { UPDATE_SELECTED_HEX, UPDATE_FILE_HEX } from './actions';

const initialState = {
  data: [],
  selectedKeys: [],
};

const hex = (state=initialState, action)  => {
  console.log({ action });

  switch (action.type) {
    case UPDATE_SELECTED_HEX: {
      return({...state, selectedKeys: action.selectedKeys });
    }
    case UPDATE_FILE_HEX: {
      return({...state, data: action.data });
    }
    default:
      return state;
  }
};

export default hex;