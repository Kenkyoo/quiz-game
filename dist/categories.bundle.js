/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkquiz_game"] = self["webpackChunkquiz_game"] || []).push([["categories"],{

/***/ "./src/categories.js":
/*!***************************!*\
  !*** ./src/categories.js ***!
  \***************************/
/***/ (() => {

eval("axios.get('https://opentdb.com/api_category.php')\n  .then(function (response) {\n    // handle success\n    console.log(response);\n  })\n  .catch(function (error) {\n    // handle error\n    console.log(error);\n  })\n  .finally(function () {\n    // always executed\n  });\n\n//# sourceURL=webpack://quiz-game/./src/categories.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/categories.js"));
/******/ }
]);