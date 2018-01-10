export const INITIAL_STATE = {
  value: 0,
  warning: false
};

const bookings = (state = INITIAL_STATE, action) => {
  let newState = INITIAL_STATE;
  switch (action.type) {
    case 'booking/ADD_BOOKING':
      newState =
        Object.assign({}, state,
        {
          value: state.value - 1
        });
      break;
      case 'booking/REMOVE_BOOKING':
      newState =
        Object.assign({}, state,
        {
          value: state.value + 1
        });
        break;
    default:
      return state;
  }
  newState =
      Object.assign({}, newState,
        { warning: newState.value <= 0 }
  );
  return newState;
};

export default bookings;
