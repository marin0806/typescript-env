/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./saySomething.ts":
/*!*************************!*\
  !*** ./saySomething.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass SaySomething {\n    // 初期化\n    constructor(message) {\n        this.message = message;\n    }\n    sayText(elem) {\n        if (elem) {\n            elem.innerText = this.message;\n        }\n    }\n}\nexports[\"default\"] = SaySomething;\n\n\n//# sourceURL=webpack://typescript-env/./saySomething.ts?");

/***/ }),

/***/ "./src/generics/basic.ts":
/*!*******************************!*\
  !*** ./src/generics/basic.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nfunction genericsBasicSample() {\n    // ジェネリック型使わない場合\n    const stringReduce = (array, initialValue) => {\n        let result = initialValue;\n        for (let i = 0; i < array.length; i++) {\n            result += array[i];\n        }\n        return result;\n    };\n    console.log(\"Generics basic sample 1:\", stringReduce([\"May\", \"the\", \"force\", \"with\", \"you\"], \"\"));\n    const numberReduce = (array, initialValue) => {\n        let result = initialValue;\n        for (let i = 0; i < array.length; i++) {\n            result += array[i];\n        }\n        return result;\n    };\n    console.log(\"Generics basic sample 2:\", numberReduce([100, 200, 300,], 1000));\n    const genericStringReduce = (array, initialValue) => {\n        let result = initialValue;\n        for (let i = 0; i < array.length; i++) {\n            result += array[i];\n        }\n        return result;\n    };\n    console.log(\"Generics basic sample 3:\", genericStringReduce([\"MAKE\", \"TYPESCRIPT\", \"GREAT\", \"AGAIN\"], \"\"));\n    const genericNumberReduce = (array, initialValue) => {\n        let result = initialValue;\n        for (let i = 0; i < array.length; i++) {\n            result += array[i];\n        }\n        return result;\n    };\n    console.log(\"Generics basic sample 4:\", genericNumberReduce([-100, -200, -300], 1000));\n}\nexports[\"default\"] = genericsBasicSample;\n\n\n//# sourceURL=webpack://typescript-env/./src/generics/basic.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst saySomething_1 = __importDefault(__webpack_require__(/*! ../saySomething */ \"./saySomething.ts\")); //インスタンス\nconst basic_1 = __importDefault(__webpack_require__(/*! ./generics/basic */ \"./src/generics/basic.ts\"));\nconst root = document.getElementById(\"root\");\n// インスタンス化\nconst saySomething = new saySomething_1.default(\"Hello Typescript\");\nsaySomething.sayText(root);\n(0, basic_1.default)();\n\n\n//# sourceURL=webpack://typescript-env/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;