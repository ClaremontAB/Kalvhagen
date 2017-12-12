import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ButtonToolbar, Button, Modal } from 'react-bootstrap';

class ScheduleComp extends Component {

  constructor (props) {
    super(props);
    this.state = {
      showModal: false
    }
  }
  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  moreInfoClick = () => {
    console.log('more info om inget');
  }

  bookClick = () => {
    console.log('bokat typ kind of');
  }

  render () {
    const modalComp = (
      <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
            <h4> <b> {this.props.time} </b> </h4>
          </Modal.Header>
          <Modal.Body>
            <h4><b> Tänk på:<br/> </b></h4>
            <p> Klipp tå och fingernaglar, ta med vettiga kläder.</p>
            <ul>
              <li>Kom i tid, 15 min innan passet.</li>
              <li>Du kan delta på alla våra pass oavsett erfarenhet.</li>
              <li>Utrustning finns att låna, du kan även köpa egna skydd på plats.</li>
              <li>Klädsel: Shorts/träningsbyxa och T-shirt/linne. Vi kör barfota (klipp finger/tår-naglarna. Smart att ta med en svetthandduk.</li>
              <li>Omklädningsrum och duschar finns.</li>
            </ul>

            <hr />

            <h4><b> Beskrivning av passet:</b></h4>
            <p>Vi kickas och boxas så det står härliga till</p>
            <p>Sparka, flyg, roundhouse.</p>
            <p>Till och med Patrick Swayze kommer vara avundsjuk när ni är klara med passet</p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );



    return (
      <div className="schedule-comp-container">
        <h3> {this.props.title}</h3>
        <h4> {this.props.time}</h4>
        <Link to='/trainers'> <h3>Sten Hård </h3></Link>
        <ButtonToolbar>
          <Button onClick={this.open} > Mer info </Button>
          {modalComp}
          <Button onClick={this.bookClick} > Boka </Button>
        </ButtonToolbar>
      </div>
    )
  }

}

export default ScheduleComp;
