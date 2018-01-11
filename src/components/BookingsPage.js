import React from 'react';
import ScheduleComp from './schedule/ScheduleComp';
import PropTypes from 'prop-types';

const BookingsPage = props =>
(
  <div className={'redux' + (props.bookings.warning ? ' warning' : '')}>
    <ScheduleComp
      pass={{"title":props.bookings.title,
       "time": props.bookings.time,
       "slot": props.bookings.value,
        "trainer": props.bookings.trainer}}
      book={props.addBooking}
      moreInfo={props.removeBooking}
      />
  </div>
);

BookingsPage.propTypes = {
 bookings: PropTypes.shape({
    warning: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired
  }),
  addBooking: PropTypes.func.isRequired,
  removeBooking: PropTypes.func.isRequired
};

export default BookingsPage;
