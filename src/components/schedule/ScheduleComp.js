import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';

class ScheduleComp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showInfo: false,
      showBooking: false
    };
  }
  closeInfo = (e) => {
    e.preventDefault();
    this.setState({ showInfo: false });
  }

  openInfo = (e) => {
    e.preventDefault();
    this.setState({ showInfo: true });
  }

  openBooking = (e) => {
    e.preventDefault();
    this.setState({ showBooking: true });
  }

  closeBooking = (e) => {
    e.preventDefault();
    this.setState({ showBooking: false });
  }

  render () {
    const infoModal = (
      <Modal show={this.state.showInfo} onHide={this.closeInfo}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.pass.title}</Modal.Title>
            <h4> <b> {this.props.pass.time} </b> </h4>
          </Modal.Header>
          <Modal.Body>
            <h4><b> Tänk på:<br/> </b></h4>
            <p> Klipp tå och fingernaglar, ta med vettiga kläder.</p>
            <ul>
              <li>Kom i tid, 15 min innan passet.</li>
              <li>Du kan delta på alla våra pass oavsett erfarenhet.</li>
              <li>Utrustning finns att låna, du kan även köpa egna skydd på plats.</li>
              <li>Klädsel: Shorts/träningsbyxa och T-shirt/linne. Vi kör barfota (klipp finger/tå-naglarna. Smart att ta med en svetthandduk.</li>
              <li>Omklädningsrum och duschar finns.</li>
            </ul>

            <hr />

            <h4><b> Beskrivning av passet:</b></h4>
            <p>Vi kickas och boxas så det står härliga till</p>
            <p>Sparka, flyg, roundhouse.</p>
            <p>Till och med Patrick Swayze kommer vara avundsjuk när ni är klara med passet</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeInfo}>Close</Button>
          </Modal.Footer>
        </Modal>
    );

    const bookingModal = (
      <Modal show={this.state.showBooking} onHide={this.closeBooking}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.pass.title}</Modal.Title>
            <h4> <b> {this.props.pass.time} </b> </h4>
          </Modal.Header>
          <Modal.Body>
          <p> Antal platser kvar :  {this.props.pass.slot > 0 ? "Lediga platser: " + this.props.pass.slot : "Fullbokat"} </p>
            First name: <input type="text" name="FirstName" placeholder="Förnamn"/><br/>
            Last name: <input type="text" name="LastName" placeholder="Efternamn"/><br/>
            <button onClick={this.props.book}>Skicka </button>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.closeBooking}>Stäng</Button>
          </Modal.Footer>
        </Modal>
    );


    return (
      <div className="schedule-comp-container">
        <h3> {this.props.pass.title}</h3>
        <h4> {this.props.pass.time}</h4>
        <h4> {this.props.pass.slot > 0 ? "Lediga platser: " + this.props.pass.slot : "Fullbokat"}</h4>
        <Link to="/trainers"> <h3>Sten Hård </h3></Link>
        <Button className="schedule-button" onClick={this.openInfo} > Mer info </Button>
        {infoModal}
         {this.props.pass.slot ? <Button className="schedule-button" onClick={this.openBooking} > Boka </Button> : ""}
        {bookingModal}
      </div>
    );
  }

}

ScheduleComp.propTypes = {
  pass: PropTypes.object.isRequired,
  moreInfo: PropTypes.func,
  book: PropTypes.func
};

export default ScheduleComp;
