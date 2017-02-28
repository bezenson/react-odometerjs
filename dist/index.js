'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _odometer = require('odometer');

var _odometer2 = _interopRequireDefault(_odometer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactOdometer = function (_React$Component) {
  _inherits(ReactOdometer, _React$Component);

  function ReactOdometer() {
    _classCallCheck(this, ReactOdometer);

    return _possibleConstructorReturn(this, (ReactOdometer.__proto__ || Object.getPrototypeOf(ReactOdometer)).apply(this, arguments));
  }

  _createClass(ReactOdometer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.odometer = new _odometer2.default(_extends({
        el: _reactDom2.default.findDOMNode(this),
        value: this.props.value
      }, this.props.options));
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.odometer.update(this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div');
    }
  }]);

  return ReactOdometer;
}(_react2.default.Component);

ReactOdometer.propTypes = {
  value: _react.PropTypes.number.isRequired,
  options: _react.PropTypes.object
};
exports.default = ReactOdometer;

