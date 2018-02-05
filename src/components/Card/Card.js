import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { coins } = this.props;

    return (
      <div className="card-wrapper">
        <div className="card">
          <div className="card-header">
            <h2></h2>
          </div>
        </div>
      </div>
    )
  }
}

export default Card;