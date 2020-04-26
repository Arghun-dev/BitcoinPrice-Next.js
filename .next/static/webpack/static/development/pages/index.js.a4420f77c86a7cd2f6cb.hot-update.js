webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/prices/Prices.component.jsx":
/*!************************************************!*\
  !*** ./components/prices/Prices.component.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "D:\\All Next\\Next.js crash course\\BitCoinPrice\\BitcoinPrice-Next.js\\components\\prices\\Prices.component.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Prices = function Prices(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("USD"),
      currency = _useState[0],
      setCurrency = _useState[1];

  console.log(props);

  var renderPrices = function renderPrices() {
    switch (currency) {
      case "USD":
        return __jsx("ul", {
          className: "list-group",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11,
            columnNumber: 11
          }
        }, __jsx("li", {
          className: "list-group-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 13
          }
        }, "Bitcoin Price in ", props.data.USD.code, " rate is", " ", props.data.USD.symbol, props.data.USD.rate));

      case "EUR":
        return __jsx("ul", {
          className: "list-group",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 11
          }
        }, __jsx("li", {
          className: "list-group-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }
        }, "Bitcoin Price in ", props.data.EUR.code, " rate is", " ", props.data.EUR.symbol, props.data.EUR.rate));

      case "GBP":
        return __jsx("ul", {
          className: "list-group",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 11
          }
        }, __jsx("li", {
          className: "list-group-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }
        }, "Bitcoin Price in ", props.data.GBP.code, " rate is", " ", props.data.GBP.symbol, props.data.GBP.rate));
    }
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 10
    }
  }, "aaa");
};

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.a4420f77c86a7cd2f6cb.hot-update.js.map