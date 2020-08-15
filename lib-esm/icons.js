import { __assign } from "tslib";
import React from 'react';
import PropTypes from 'prop-types';
var svgStyle = {
    width: '48px',
    height: '48px',
    display: 'block'
};
var darkSvg = (React.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "46px", height: "46px", viewBox: "0 0 46 46", style: svgStyle },
    React.createElement("defs", null,
        React.createElement("filter", { x: "-50%", y: "-50%", width: "200%", height: "200%", filterUnits: "objectBoundingBox", id: "filter-1" },
            React.createElement("feOffset", { dx: "0", dy: "1", in: "SourceAlpha", result: "shadowOffsetOuter1" }),
            React.createElement("feGaussianBlur", { stdDeviation: "0.5", in: "shadowOffsetOuter1", result: "shadowBlurOuter1" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0", in: "shadowBlurOuter1", type: "matrix", result: "shadowMatrixOuter1" }),
            React.createElement("feOffset", { dx: "0", dy: "0", in: "SourceAlpha", result: "shadowOffsetOuter2" }),
            React.createElement("feGaussianBlur", { stdDeviation: "0.5", in: "shadowOffsetOuter2", result: "shadowBlurOuter2" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0", in: "shadowBlurOuter2", type: "matrix", result: "shadowMatrixOuter2" }),
            React.createElement("feMerge", null,
                React.createElement("feMergeNode", { in: "shadowMatrixOuter1" }),
                React.createElement("feMergeNode", { in: "shadowMatrixOuter2" }),
                React.createElement("feMergeNode", { in: "SourceGraphic" }))),
        React.createElement("rect", { id: "path-2", x: "0", y: "0", width: "40", height: "40", rx: "2" }),
        React.createElement("rect", { id: "path-3", x: "5", y: "5", width: "38", height: "38", rx: "1" })),
    React.createElement("g", { id: "Google-Button", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "9-PATCH", transform: "translate(-608.000000, -219.000000)" }),
        React.createElement("g", { id: "btn_google_dark_normal", transform: "translate(-1.000000, -1.000000)" },
            React.createElement("g", { id: "button", transform: "translate(4.000000, 4.000000)", filter: "url(#filter-1)" },
                React.createElement("g", { id: "button-bg" },
                    React.createElement("use", { fill: "#4285F4", fillRule: "evenodd" }),
                    React.createElement("use", { fill: "none" }),
                    React.createElement("use", { fill: "none" }),
                    React.createElement("use", { fill: "none" }))),
            React.createElement("g", { id: "button-bg-copy" },
                React.createElement("use", { fill: "#FFFFFF", fillRule: "evenodd" }),
                React.createElement("use", { fill: "none" }),
                React.createElement("use", { fill: "none" }),
                React.createElement("use", { fill: "none" })),
            React.createElement("g", { id: "logo_googleg_48dp", transform: "translate(15.000000, 15.000000)" },
                React.createElement("path", { d: "M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z", id: "Shape", fill: "#4285F4" }),
                React.createElement("path", { d: "M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z", id: "Shape", fill: "#34A853" }),
                React.createElement("path", { d: "M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z", id: "Shape", fill: "#FBBC05" }),
                React.createElement("path", { d: "M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z", id: "Shape", fill: "#EA4335" }),
                React.createElement("path", { d: "M0,0 L18,0 L18,18 L0,18 L0,0 Z", id: "Shape" })),
            React.createElement("g", { id: "handles_square" })))));
var lightSvg = (React.createElement("svg", { version: "1.1", xmlns: "http://www.w3.org/2000/svg", width: "46px", height: "46px", viewBox: "0 0 46 46", style: svgStyle },
    React.createElement("defs", null,
        React.createElement("filter", { x: "-50%", y: "-50%", width: "200%", height: "200%", filterUnits: "objectBoundingBox", id: "filter-1" },
            React.createElement("feOffset", { dx: "0", dy: "1", in: "SourceAlpha", result: "shadowOffsetOuter1" }),
            React.createElement("feGaussianBlur", { stdDeviation: "0.5", in: "shadowOffsetOuter1", result: "shadowBlurOuter1" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.168 0", in: "shadowBlurOuter1", type: "matrix", result: "shadowMatrixOuter1" }),
            React.createElement("feOffset", { dx: "0", dy: "0", in: "SourceAlpha", result: "shadowOffsetOuter2" }),
            React.createElement("feGaussianBlur", { stdDeviation: "0.5", in: "shadowOffsetOuter2", result: "shadowBlurOuter2" }),
            React.createElement("feColorMatrix", { values: "0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.084 0", in: "shadowBlurOuter2", type: "matrix", result: "shadowMatrixOuter2" }),
            React.createElement("feMerge", null,
                React.createElement("feMergeNode", { in: "shadowMatrixOuter1" }),
                React.createElement("feMergeNode", { in: "shadowMatrixOuter2" }),
                React.createElement("feMergeNode", { in: "SourceGraphic" }))),
        React.createElement("rect", { id: "path-2", x: "0", y: "0", width: "40", height: "40", rx: "2" })),
    React.createElement("g", { id: "Google-Button", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "9-PATCH", transform: "translate(-608.000000, -160.000000)" }),
        React.createElement("g", { id: "btn_google_light_normal", transform: "translate(-1.000000, -1.000000)" },
            React.createElement("g", { id: "button", transform: "translate(4.000000, 4.000000)", filter: "url(#filter-1)" },
                React.createElement("g", { id: "button-bg" },
                    React.createElement("use", { fill: "#FFFFFF", fillRule: "evenodd" }),
                    React.createElement("use", { fill: "none" }),
                    React.createElement("use", { fill: "none" }),
                    React.createElement("use", { fill: "none" }))),
            React.createElement("g", { id: "logo_googleg_48dp", transform: "translate(15.000000, 15.000000)" },
                React.createElement("path", { d: "M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z", id: "Shape", fill: "#4285F4" }),
                React.createElement("path", { d: "M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z", id: "Shape", fill: "#34A853" }),
                React.createElement("path", { d: "M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z", id: "Shape", fill: "#FBBC05" }),
                React.createElement("path", { d: "M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z", id: "Shape", fill: "#EA4335" }),
                React.createElement("path", { d: "M0,0 L18,0 L18,18 L0,18 L0,0 Z", id: "Shape" })),
            React.createElement("g", { id: "handles_square" })))));
var disabledSvg = (React.createElement("svg", { width: "46px", height: "46px", viewBox: "0 0 46 46", version: "1.1", xmlns: "http://www.w3.org/2000/svg", style: svgStyle },
    React.createElement("defs", null,
        React.createElement("rect", { id: "path-1", x: "0", y: "0", width: "40", height: "40", rx: "2" })),
    React.createElement("g", { id: "Google-Button", stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd" },
        React.createElement("g", { id: "9-PATCH", transform: "translate(-788.000000, -219.000000)" }),
        React.createElement("g", { id: "btn_google_dark_disabled", transform: "translate(-1.000000, -1.000000)" },
            React.createElement("g", { id: "button", transform: "translate(4.000000, 4.000000)" },
                React.createElement("g", { id: "button-bg" },
                    React.createElement("use", { fillOpacity: "0.08", fill: "#000000", fillRule: "evenodd" }),
                    React.createElement("use", { fill: "none" }),
                    React.createElement("use", { fill: "none" }),
                    React.createElement("use", { fill: "none" }))),
            React.createElement("path", { d: "M24.001,25.71 L24.001,22.362 L32.425,22.362 C32.551,22.929 32.65,23.46 32.65,24.207 C32.65,29.346 29.203,33 24.01,33 C19.042,33 15.01,28.968 15.01,24 C15.01,19.032 19.042,15 24.01,15 C26.44,15 28.474,15.891 30.031,17.349 L27.475,19.833 C26.827,19.221 25.693,18.501 24.01,18.501 C21.031,18.501 18.601,20.976 18.601,24.009 C18.601,27.042 21.031,29.517 24.01,29.517 C27.457,29.517 28.726,27.132 28.96,25.719 L24.001,25.719 L24.001,25.71 Z", id: "Shape-Copy", fillOpacity: "0.4", fill: "#000000" }),
            React.createElement("g", { id: "handles_square" })))));
var iconStyle = {
    width: '48px',
    height: '48px',
    textAlign: 'center',
    verticalAlign: 'center',
    display: 'block',
    marginTop: '1px',
    marginLeft: '1px',
    float: 'left',
    backgroundColor: '#fff',
    borderRadius: '1px',
    whiteSpace: 'nowrap'
};
var disabledIconStyle = {
    backgroundColor: 'transparent'
};
export var GoogleIcon = function (_a) {
    var disabled = _a.disabled, type = _a.type;
    return (React.createElement("div", { style: !disabled ? iconStyle : __assign(__assign({}, iconStyle), disabledIconStyle) }, !disabled ? (type === 'dark' ? darkSvg : lightSvg) : disabledSvg));
};
GoogleIcon.propTypes = {
    disabled: PropTypes.bool,
    type: PropTypes.oneOf(['light', 'dark'])
};
GoogleIcon.defaultProps = {
    type: 'dark'
};
