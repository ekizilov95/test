!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_goodsActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/goodsActions */ "./src/js/modules/goodsActions.js");\n/* harmony import */ var _modules_goodsActions__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_goodsActions__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/js/main.js?')},"./src/js/modules/goodsActions.js":
/*!****************************************!*\
  !*** ./src/js/modules/goodsActions.js ***!
  \****************************************/
/*! no static exports found */function(module,exports){eval('function counter() {\n  var btns = document.querySelectorAll(".counter__btn");\n  btns.forEach(function (btn) {\n    btn.addEventListener("click", function (e) {\n      var target = e.target;\n      var direction = target.dataset.direction;\n      var inp = target.parentElement.querySelector(".counter__count");\n      var currentValue = +inp.value;\n      var newValue;\n\n      if (inp.value <= 1 && direction === "minus") {\n        newValue = 1;\n      }\n\n      if (direction === "plus") {\n        newValue = currentValue + 1;\n      } else if (direction === "minus" && inp.value >= 2) {\n        newValue = currentValue - 1;\n      }\n\n      inp.value = newValue;\n    });\n  });\n}\n\nfunction clickToBuy() {\n  var btns = document.querySelectorAll(".goods__btn-buy");\n  btns.forEach(function (btn) {\n    btn.addEventListener("click", function (e) {\n      btn.style.cssText = "\\n        position: relative;\\n        opacity: 1;\\n        z-index: 5;\\n      ";\n      var item = e.target.closest(".goods__item");\n      var column = e.target.closest(".goods__column");\n      item.style.display = "none";\n      var elem = "\\n     \\n        <button class=\\"goods__check\\">\\n          <svg>\\n            <use xlink:href=\'img/sprite.svg#check\'></use>\\n          </svg>\\n        </button>\\n        <button class=\\"goods__btn-check goods__btn_orange\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n      \\n  ";\n      column.insertAdjacentHTML("afterbegin", elem);\n      column.style.cssText = "\\n        display: flex;\\n        flex-direction:column;\\n        justify-content: space-between;\\n      ";\n    });\n  });\n}\n\ncounter();\nclickToBuy();\n\n//# sourceURL=webpack:///./src/js/modules/goodsActions.js?')}});
//# sourceMappingURL=main.js.map
