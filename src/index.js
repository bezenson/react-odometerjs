import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Odometer from 'odometer';

export default class ReactOdometer extends PureComponent {
  // Information about options can be found here:
  // http://github.hubspot.com/odometer/
  static propTypes = {
    animation: PropTypes.bool,
    auto: PropTypes.bool,
    duration: PropTypes.number,
    format: PropTypes.string,
    selector: PropTypes.string,
    theme: PropTypes.string,
    value: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.node = React.createRef();
  }

  componentDidMount() {
    const { value, ...options } = this.props;
    this.odometer = new Odometer({
      el: this.node.current,
      value,
      ...options,
    });
  }

  componentDidUpdate() {
    const { value } = this.props;
    this.odometer.update(value);
  }

  render() {
    return React.createElement('div', {
      ref: this.node,
    });
  }
}
