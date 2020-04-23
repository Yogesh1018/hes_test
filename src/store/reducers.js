let data = [];
for (let i = 0; i < 295; i++) {
	data.push(parseInt(Math.random() * 255))
}

const initialState = {
  data
};

const hex = (state=initialState, action)  => {
  return state;
};

export default hex;