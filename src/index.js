import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export default class ReactOdometer extends Component {
  static propTypes = {
    value: PropTypes.number.isRequired,
    options: PropTypes.object,
  };

  componentDidMount() {
    const Odometer = require('odometer');
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
