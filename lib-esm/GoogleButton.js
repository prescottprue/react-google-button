import { __assign, __extends, __rest } from "tslib";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { GoogleIcon } from './icons';
import { darkStyle, lightStyle, disabledStyle, hoverStyle } from './styles';
var GoogleButton = /** @class */ (function (_super) {
    __extends(GoogleButton, _super);
    function GoogleButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hovered: false
        };
        _this.getStyle = function () {
            var baseStyle = _this.props.type === 'dark' ? darkStyle : lightStyle;
            if (_this.state.hovered) {
                return __assign(__assign(__assign({}, baseStyle), hoverStyle), _this.props.style);
            }
            if (_this.props.disabled) {
                return __assign(__assign(__assign({}, baseStyle), disabledStyle), _this.props.style);
            }
            return __assign(__assign({}, baseStyle), _this.props.style);
        };
        _this.mouseOver = function () {
            if (!_this.props.disabled) {
                _this.setState({ hovered: true });
            }
        };
        _this.mouseOut = function () {
            if (!_this.props.disabled) {
                _this.setState({ hovered: false });
            }
        };
        _this.click = function (e) {
            if (!_this.props.disabled && _this.props.onClick) {
                _this.props.onClick(e);
            }
        };
        return _this;
    }
    GoogleButton.prototype.render = function () {
        var _a = this.props, label = _a.label, style = _a.style, type = _a.type, disabled = _a.disabled, otherProps = __rest(_a, ["label", "style", "type", "disabled"]);
        return (React.createElement("div", __assign({}, otherProps, { role: "button", onClick: this.click, style: this.getStyle(), onMouseOver: this.mouseOver, onMouseOut: this.mouseOut }),
            React.createElement(GoogleIcon, __assign({}, this.props)),
            React.createElement("span", null, label)));
    };
    GoogleButton.propTypes = {
        label: PropTypes.string,
        disabled: PropTypes.bool,
        tabIndex: PropTypes.number,
        onClick: PropTypes.func,
        type: PropTypes.oneOf(['light', 'dark']),
        style: PropTypes.object
    };
    GoogleButton.defaultProps = {
        label: 'Sign in with Google',
        disabled: false,
        type: 'dark',
        tabIndex: 0,
        onClick: function () { }
    };
    return GoogleButton;
}(PureComponent));
export default GoogleButton;
