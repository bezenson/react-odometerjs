import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Odometer from 'odometer';

export default class ReactOdometer extends React.Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    options: PropTypes.object,
  };

  componentDidMount() {
    this.odometer = new Odometer({
      el: ReactDOM.findDOMNode(this),
      value: this.props.value,
      ...this.props.options,
    });
  }

  componentDidUpdate() {
    this.odometer.update(this.props.value);
  }

  render() {
    return React.createElement('div');
  }
}
