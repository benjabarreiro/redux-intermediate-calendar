export const iterateArray = (state, action) => {
  let newState = [...state.value];
  let findElement = findValue(newState, action);
  newState[findElement] = action.payload;
  state.value = newState;
};

export const findValue = (newState, action) =>
  newState.findIndex((value) => value.day === action.payload.day);
