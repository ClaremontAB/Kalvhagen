export const addBooking = () => ({
  type: 'booking/ADD_BOOKING'
});

export const removeBooking = () => ({
  type: 'booking/REMOVE_BOOKING'
});

export const bindIndexToActionCreator =
  (actionCreator, index) =>
    (...args) =>
      Object.assign(actionCreator(...args), { index });
