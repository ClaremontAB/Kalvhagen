import React, { Component } from 'react';
import {Image, Grid, Row, Col, Clearfix} from 'react-bootstrap';
import PropTypes from 'prop-types';


class PortraitGrid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      portraits: props.portraits,
    };
  }
  fillBlank = (idx) => {
    let retObject;
    if (idx % 4 === 0 && idx !== 0) {
      retObject = <Clearfix visibleMdBlock visibleLgBlock visibleSmBlock/>;
    } else if (idx % 2 === 0 && idx !== 0) {
      retObject = <Clearfix visibleSmBlock/>;
    }

    return retObject;
  };

  imageClicked = (idx) => {
    let portraits = {...this.state.portraits};
    portraits[idx].flip = portraits[idx].flip ? false : true;

    this.setState({
      portraits: portraits,
    });
  };

  render () {
    return (
        <Grid style={{paddingTop: "20px"}}>
          <Row className="show-grid">
            {this.props.portraits.map((portrait, idx) =>
              (<div key={idx}>
                {this.fillBlank(idx)}
                <Col sm={6} md={3} xsOffset={0} mdOffset={0} smOffset={0}>
                  <div className="portrait-wrapper" onClick={() => this.imageClicked(idx)}>
                    {portrait.flip ?
                      (<div style={{width:"inherit", height:"auto", paddingBottom: "100%"}}>
                        <Image src={portrait.imgSrc} responsive  className="image-container" />
                        <div className="overlay" />
                        <h4 className="portrait-name"> {portrait.name} </h4>
                        <p className="text-box"> {portrait.desc} </p>
                      </div>
                    )
                      : <Image src={portrait.imgSrc} responsive  className="image-container" />}
                  </div>
                  <div style={{marginRight: ""}} />
                </Col>
              </div>)
            )}
          </Row>
        </Grid>
    );
  }
}

PortraitGrid.propTypes = {
  portraits: PropTypes.array.isRequired
};

export default PortraitGrid;
