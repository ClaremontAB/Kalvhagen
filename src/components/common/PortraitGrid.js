import React from 'react';
import {Image, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import PropTypes from 'prop-types';

const fillBlank = (idx) => {
  let retObject;
  if (idx % 4 === 0 && idx !== 0) {
    retObject = <Clearfix visibleMdBlock visibleLgBlock visibleSmBlock/>;
  } else if (idx % 2 === 0 && idx !== 0) {
    retObject = <Clearfix visibleSmBlock/>;
  }

  return retObject;
};

const imageClicked = (e) => {
  e.preventDefault();
  let target = e.target;
  if (target.className !== "clicked-image") {
      target.className = "clicked-image";
  } else {
    target.className = "image-container";
  }
};

const PortraitGrid = ({portraits}) => {

  return (
      <Grid style={{paddingTop: "20px"}}>
        <Row className="show-grid">
          {portraits.map((portrait, idx) =>
            (<div key={idx}>
              {fillBlank(idx)}
              <Col sm={6} md={3} xsOffset={0} mdOffset={0} smOffset={0}>
                <div className="image-container" onClick={imageClicked}>
                  <Image src={portrait.imgSrc} responsive  className="image-container" />
                </div>
                <div style={{marginRight: ""}}>
                  <h4> {portrait.name} </h4>
                  <p> {portrait.desc} </p>
                </div>
              </Col>
            </div>)
          )}
        </Row>
      </Grid>
  );
};

PortraitGrid.propTypes = {
  portraits: PropTypes.array.isRequired
};

export default PortraitGrid;
