webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/CardList.tsx":
/*!*********************************!*\
  !*** ./components/CardList.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card */ "./components/Card.tsx");
var _jsxFileName = "C:\\Users\\Hyunjin\\Desktop\\Programming\\web-practice\\react\\robotfriends-nextjs\\components\\CardList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var CardList = function CardList(_ref) {
  var robots = _ref.robots;
  var cardComponent = robots.map(function (user) {
    return __jsx(_Card__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: user.id,
      id: user.id,
      name: user.name,
      email: user.email,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, cardComponent);
};

/* harmony default export */ __webpack_exports__["default"] = (CardList);

/***/ })

})
//# sourceMappingURL=index.js.39e5f3bcbd76da926cb7.hot-update.js.map