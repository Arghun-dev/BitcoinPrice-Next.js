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
/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Prices.module.scss */ "./components/prices/Prices.module.scss");
/* harmony import */ var _Prices_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Prices_module_scss__WEBPACK_IMPORTED_MODULE_2__);
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
      className: _Prices_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.buttonContainer,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx("button", {
      className: "btn btn-primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, "USD"), __jsx("button", {
      className: "btn btn-warning",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }
    }, "EUR"), __jsx("button", {
      className: "btn btn-danger",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }
    }, "GBP"));
  };

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 5
    }
  }, selectPriceType(), renderPrices());
};

/* harmony default export */ __webpack_exports__["default"] = (Prices);

/***/ }),

/***/ "./components/prices/Prices.module.scss":
/*!**********************************************!*\
  !*** ./components/prices/Prices.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Prices.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/prices/Prices.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Prices.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/prices/Prices.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./Prices.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/prices/Prices.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/prices/Prices.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/prices/Prices.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".Prices_buttonContainer__Vbd4y {\n  border: 1px solid red; }\n", "",{"version":3,"sources":["D:/All Next/Next.js crash course/BitCoinPrice/BitcoinPrice-Next.js/components/prices/Prices.module.scss"],"names":[],"mappings":"AAAA;EACE,qBAAqB,EAAA","file":"Prices.module.scss","sourcesContent":[".buttonContainer {\r\n  border: 1px solid red;\r\n}\r\n"]}]);
// Exports
exports.locals = {
	"buttonContainer": "Prices_buttonContainer__Vbd4y"
};

/***/ })

})
//# sourceMappingURL=index.js.39302fa6c57793335969.hot-update.js.map