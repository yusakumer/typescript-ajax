/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utils/dom.ts"
/*!**************************!*\
  !*** ./src/utils/dom.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   getElementById: () => (/* binding */ getElementById),
/* harmony export */   getInputElementById: () => (/* binding */ getInputElementById)
/* harmony export */ });
/**
 * id属性からhtml要素を取得する
 * @param id
 * @return HTMLelement
 **/
const getElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
};
const getInputElementById = (id) => {
    const element = document.getElementById(id);
    if (element === null) {
        throw new Error(`Element with id ${id} not found`);
    }
    return element;
};
/**
 * 引数に受け取った名前のDOM,textを生成する
 * @param elementName 要素名
 * @param textContent　要素のtextcontent
 * @returns HTMLElement
 */
const createElement = (elementName, textContent) => {
    const element = document.createElement(elementName);
    if (typeof textContent !== "undefined") {
        element.textContent = textContent;
    }
    return element;
};


/***/ },

/***/ "./src/utils/user.ts"
/*!***************************!*\
  !*** ./src/utils/user.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendUserList: () => (/* binding */ appendUserList),
/* harmony export */   fetchUser: () => (/* binding */ fetchUser)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/utils/dom.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * APIからユーザー一覧を取得する
 * @returns userList
 */
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://jsonplaceholder.typicode.com/users");
    if (!res.ok) {
        throw Error("Could not fetch user");
    }
    const userList = yield res.json();
    return userList;
});
/**
 * DOMにユーザー一覧を出力する
 */
const appendUserList = (userList) => {
    userList.forEach(user => {
        const li = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", user.name);
        const ul = (0,_dom__WEBPACK_IMPORTED_MODULE_0__.getElementById)("user-list");
        ul.appendChild(li);
    });
};


/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom */ "./src/utils/dom.ts");
/* harmony import */ var _utils_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/user */ "./src/utils/user.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


document.addEventListener('DOMContentLoaded', () => {
    const userButton = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getElementById)("fetch-user");
    userButton.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
        //APIからユーザー一覧を取得
        const userList = yield (0,_utils_user__WEBPACK_IMPORTED_MODULE_1__.fetchUser)();
        //バリデーション
        //ユーザー一覧をDOMに出力
    }));
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map