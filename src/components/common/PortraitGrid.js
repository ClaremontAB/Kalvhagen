import React from 'react';
import {Image, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import PropTypes from 'prop-types';

let fillBlank = (idx) => {
  let retObject;
  if (idx % 4 === 0 && idx !== 0) {
    retObject = <Clearfix visibleMdBlock visibleLgBlock visibleSmBlock/>;
  } else if (idx % 2 === 0 && idx !== 0) {
    retObject = <Clearfix visibleSmBlock/>;
  }

  return retObject;
};

const PortraitGrid = ({trainers}) => {

  return (
    <Grid>
      <Row className="show-grid">
        {trainers.map((trainer, idx) =>
          (<div  key={idx}>
            {fillBlank(idx)}
            <Col sm={6} md={3} xsOffset={1} mdOffset={0} smOffset={0}>
              <h4> Instruktör: {trainer.name} </h4>
              <Image src={trainer.imgSrc} responsive thumbnail />
              <p> {trainer.desc} </p>
            </Col>
          </div>)
        )}
      </Row>
    </Grid>
  );
};

PortraitGrid.propTypes = {
  trainers: PropTypes.array.isRequired
};

export default PortraitGrid;
