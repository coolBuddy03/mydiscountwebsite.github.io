webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nhtml,\nbody {\n    width: 100%;\n    height: 100%;\n    margin-right: 0;\n    margin-left: 0;\n    overflow-x: hidden;\n    font-family: Helvetica, sans-serif, Arial\n}\n\n.subtitle-label {\n    font-family: Helvetica, sans-serif, Arial;\n    font-size: 25px;\n    font-weight: 100;\n    color: #767375;\n}\n\n.mt-30 {\n    margin-top: 30px;\n}\n\n.mb-30 {\n    margin-bottom: 30px;\n}\n\n\n/* Pre Loader CSS Starts */\n\n.spinner {\n  width: 40px;\n  height: 40px;\n  background-color: #333;\n\n  margin: 100px auto;\n  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n  animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n  0% { -webkit-transform: perspective(120px) }\n  50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n}\n\n@keyframes sk-rotateplane {\n  0% { \n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \n  } 50% { \n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \n  } 100% { \n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n\n\n\n\n\n\n/* Pre Loader CSS Ends */\n\n/* Font Size Starts */\n\n.font-size-11 {\n    font-size: 11px;\n}\n\n.font-size-12 {\n    font-size: 12px;\n}\n\n.font-size-13 {\n    font-size: 13px;\n}\n\n.font-size-14 {\n    font-size: 14px;\n}\n\n.font-size-15 {\n    font-size: 15px;\n}\n\n.font-size-16 {\n    font-size: 16px;\n}\n\n.font-size-17 {\n    font-size: 17px;\n}\n\n.font-size-18{\n    font-size: 18px;\n}\n.font-size-19{\n    font-size: 19px;\n}\n.font-size-20{\n    font-size: 20px !important; \n}\n.font-size-21{\n    font-size: 21px !important; \n}\n.font-size-22{\n    font-size: 22px !important; \n}\n.font-size-23{\n    font-size: 23px !important; \n}\n.font-size-24{\n    font-size: 24px !important; \n}\n.font-size-25{\n    font-size: 25px !important; \n}\n.font-size-26{\n    font-size: 26px !important; \n}\n.font-size-27{\n    font-size: 27px !important; \n}\n.font-size-28{\n    font-size: 28px !important; \n}\n.font-size-29{\n    font-size: 29px !important; \n}\n.font-size-35{\n    font-size: 35px !important;\n}\n/* Font Size Ends */\n\n\n/* Margin Top Starts */\n\n.margin-top-10 {\n    margin-top: 10px;\n}\n.margin-top-15{\n    margin-top: 15px;\n}\n\n.marging-top-18{\n    margin-top: 18px;\n}\n.margin-top-20 {\n    margin-top: 20px;\n}\n\n.margin-top-30 {\n    margin-top: 30px;\n}\n.margin-top-37{\n    margin-top: 37px;\n}\n.margin-top-40 {\n    margin-top: 40px;\n}\n\n\n\n/* Margin Top Ends */\n\n\n/* Margin Bottom Starts */\n\n.margin-bottom-0 {\n    margin-bottom: 0px;\n}\n\n.margin-bottom-10 {\n    margin-bottom: 10px;\n}\n\n\n.margin-bottom-20 {\n    margin-bottom: 20px;\n}\n\n.margin-bottom-30 {\n    margin-bottom: 30px;\n}\n\n.margin-bottom-40 {\n    margin-bottom: 40px;\n}\n\n\n\n/* Margin Bottom Ends */\n\n\n/* Margin Left Starts */\n\n.margin-left-auto{\n    margin-left: auto;\n}\n.margin-left-30{\n    margin-left: 30px !important;\n}\n/* Margin Left Ends */\n\n/* Margin Rigth Starts */\n\n.margin-right-auto{\n    margin-right:auto;\n}\n.margin-right-30{\n    margin-right: 30px !important;\n}\n/* Margin Right Ends*/\n\n/* Padding Top Starts */\n\n.padding-top-10 {\n    padding-top: 10px;\n}\n.padding-top-15{\n    padding-top: 15px;\n}\n.padding-top-20 {\n    padding-top: 20px;\n}\n.padding-top-25{\n    padding-top: 25px;\n}\n.padding-top-50{\n    padding-top: 50px;\n}\n\n/* Padding Top Ends */\n\n\n/* Padding Bottom Starts  */\n\n.padding-bottom-10 {\n    padding-bottom: 10px;\n}\n.padding-bottom-25{\n    padding-bottom: 25px;\n}\n.padding-bottom-50{\n    padding-bottom: 50px;\n}\n\n/* Padding Bottom Ends */\n\n\n/*Padding Left Starts */\n\n.padding-left-10 {\n    padding-left: 10px;\n}\n.padding-left-14{\n    padding-left: 14px;\n}\n.padding-left-40{\n    padding-left: 40px;\n}\n\n/*Padding Left Ends */\n\n\n/* Padding Right Starts */\n\n.padding-right-10 {\n    padding-right: 10px;\n}\n.padding-right-40{\n    padding-right: 40px;\n}\n\n.padding-right-90 {\n    padding-right: 90px;\n}\n\n\n/* Padding Right Ends */\n\n\n/* Padding Bottom Starts */\n\n\n\n/* Padding Bottom Ends */\n\n\n/* Padding All Starts */\n\n.padding-all-4{\n    padding: 4px;\n}\n\n.padding-all-10 {\n    padding: 10px;\n}\n.padding-all-18{\n    padding: 18px;\n}\n.padding-all-22 {\n    padding: 22px;\n}\n\n\n/* Padding All Ends */\n\n\n/* Height Starts */\n\n.height-35 {\n    height: 35px;\n}\n.height-600{\n    height: 600px !important;\n}\n\n/* Height Ends */\n\n\n/* Width Css Starts */\n\n.width-100percent{\n    width: 100%;\n}\n\n/* Width Css Ends */\n\n/* Background Color Starts */\n\n.backgroung-grey {\n    background: #F1F1f1;\n}\n.backgroung-light-gray{\n    background-color:#E6E6E6;\n}\n\n/* Background Color Ends */\n\n\n/* Text Css Starts */\n\n.text-uppercase {\n    text-transform: uppercase;\n}\n\n.text-align-end {\n    text-align: end;\n}\n.text-white{\n    color:#FFF;\n}\n/*Text Css Ends*/\n\n.position-absolute{\n    position: absolute;\n}\n.position-relative{\n    position:relative;\n}\n.top-180{\n    top:180px;\n}\n/* Border Radius Css Starts*/\n.border-radius-10{\n    border-radius:10px;\n}\n.border-radius-50percent{\n    border-radius:50%;\n}\n/* Border Radius Css Ends */\n\n.background-size-100per-100per{\n    background-size: 100% 100% !important;\n}\n/* Font Family Css Starts */\n.font-family-oswald-regular{\n font-family: 'Oswald', sans-serif;\n}\n.font-family-open-sans-regular{\n font-family: 'Open Sans', sans-serif;\n}\n.font-family-roboto-slab-light{\n    font-family: 'Roboto Slab', serif;\n}\n\n/* Font Family Css Ends */\n\n.primary-orange-text-color{\n    color: #D35400;\n}\n.primary-orange-background-color{\n    background-color: #D35400 !important;\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/styles.css");


/***/ })

},[2]);
//# sourceMappingURL=styles.bundle.js.map