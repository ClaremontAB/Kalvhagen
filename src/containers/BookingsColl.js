import React from 'react';
import { connect } from 'react-redux';
import BookingsPage from '../components/BookingsPage';
import { bindIndexToActionCreator, addBooking, removeBooking } from '../actions';
import PropTypes from 'prop-types';
import {Grid, Row, Col} from 'react-bootstrap';

const mapStateToProps = state => ({
  pass: state
});

const counterDispatchProperties =
  index =>
    dispatch => ({
      removeBooking() {
        dispatch(bindIndexToActionCreator(removeBooking, index)());
      },
      addBooking() {
        dispatch(bindIndexToActionCreator(addBooking, index)());
      }
    });

const BookingsColl = props =>
  (
    <div className="container">
      <Grid style={{paddingTop: "20px"}}>
        <Row className="show-grid">
          {props.pass.bookingColl.map((value, index) =>
          (
            <Col key={index} sm={4} md={3} xsOffset={0} mdOffset={0} smOffset={0}>
               <BookingsPage bookings={value} key={index}
              {...counterDispatchProperties(index)(props.dispatch)}
              />
            </Col>
          )
          )}
        </Row>
      </Grid>
  </div>
);

BookingsColl.propTypes = {
  pass: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};
export default connect(mapStateToProps)(BookingsColl);
