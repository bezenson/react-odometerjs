import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Odometer from 'odometer';

export default class ReactOdometer extends Component {
  static defaultProps = {
    options: {},
  };

  static propTypes = {
    value: PropTypes.number.isRequired,
    options: PropTypes.object,
  };

  componentDidMount() {
    const { value, options } = this.props;
    this.odometer = new Odometer({
      el: this.node,
      value,
      ...options,
    });
  }

  componentDidUpdate() {
    this.odometer.update(this.props.value);
  }

  render() {
    return React.createElement('div', {
      ref: (node) => {
        this.node = node;
      },
    });
  }
}
