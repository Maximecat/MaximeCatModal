"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./index.css");
var _jsxRuntime = require("react/jsx-runtime");
/**
 * @description react modal by maximecat
 * @param message string to display the message in the modal
 * @param isOpen boolean that changes from true to false
 * @param onClose for closure of the modal
 *
 * @return void
 * @author Maxime
 * @version 1.0
 */function MaximeCatModal(_ref) {
  let {
    message,
    isOpen,
    onClose
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "backdrop",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "modal-content",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          children: message
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
          className: "btn-close",
          onClick: onClose,
          children: "x"
        })]
      })
    })
  });
}
var _default = exports.default = MaximeCatModal;