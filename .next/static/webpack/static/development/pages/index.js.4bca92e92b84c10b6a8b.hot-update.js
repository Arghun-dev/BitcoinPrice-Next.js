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
/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Prices.module.scss */ "./components/prices/Prices.module.scss");
/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Prices_module_scss__WEBPACK_IMPORTED_MODULE_1__);
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
            lineNumber: 12,
            columnNumber: 11
          }
        }, __jsx("li", {
          className: "list-group-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }
        }, "Bitcoin rate for", " ", __jsx("span", {
          className: "badge badge-primary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 15
          }
        }, props.bpi.bpi.USD.description), " ", "is:\xA0", __jsx("span", {
          className: "badge badge-warning",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 15
          }
        }, props.bpi.bpi.USD.rate)));

      case "EUR":
        return __jsx("ul", {
          className: "list-group",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 11
          }
        }, __jsx("li", {
          className: "list-group-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }
        }, "Bitcoin rate for", " ", __jsx("span", {
          className: "badge badge-primary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }
        }, props.bpi.bpi.EUR.description), " ", "is:\xA0", __jsx("span", {
          className: "badge badge-warning",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }
        }, props.bpi.bpi.EUR.rate)));

      case "GBP":
        return __jsx("ul", {
          className: "list-group",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 11
          }
        }, __jsx("li", {
          className: "list-group-item",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }
        }, "Bitcoin rate for", " ", __jsx("span", {
          className: "badge badge-primary",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }
        }, props.bpi.bpi.GBP.description), " ", "is:\xA0", __jsx("span", {
          className: "badge badge-warning",
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 15
          }
        }, props.bpi.bpi.GBP.rate)));
    }
  };

  var selectPriceType = function selectPriceType() {
    return __jsx("ul", {
      className: _Prices_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.buttonContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx("button", {
      className: "btn btn-primary mr-2",
      onClick: function onClick() {
        return setCurrency("USD");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, "USD"), __jsx("button", {
      className: "btn btn-warning mr-2",
      onClick: function onClick() {
        return setCurrency("EUR");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }
    }, "EUR"), __jsx("button", {
      className: "btn btn-danger",
      onClick: function onClick() {
        return setCurrency("GBP");
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }
    }, "GBP"));
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }, selectPriceType(), renderPrices());
};

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ })

})
//# sourceMappingURL=index.js.4bca92e92b84c10b6a8b.hot-update.js.map