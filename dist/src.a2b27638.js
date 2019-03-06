// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./profileHighContrast.jpeg":[["profileHighContrast.2e7284a0.jpeg","src/profileHighContrast.jpeg"],"src/profileHighContrast.jpeg"],"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/styles_med.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

require("./styles.css");

require("./styles_med.css");

// get bounding rect for #projects
var projectsDiv = document.getElementById('projects');
var projectsDiv_Rect = projectsDiv.getBoundingClientRect();
var rootRect = document.getElementById('root').getBoundingClientRect(); // offset for x

var ox = 2;

if (rootRect.width > 564) {
  ox = 50;
}

var rectObjs = [{
  x: ox,
  y: 50,
  width: 100,
  height: 100,
  type: 'project',
  id: 'coffee-map',
  title: 'Coffee Map',
  caption: 'Map of coffee places',
  tools: 'ReactJS, Mapbox GL JS',
  link: 'https://github.com/oriane212/coffee-map',
  icon: [{
    el: 'circle',
    attributes: [['cx', ox + 50], ['cy', 50 + 40], ['r', '4']]
  }, {
    el: 'polygon',
    attributes: [['points', "".concat(ox + 46, ",90 ").concat(ox + 54, ",90, ").concat(ox + 50.5, ",105 ").concat(ox + 49.5, ",105")]]
  }, {
    el: 'circle',
    attributes: [['cx', ox + 60], ['cy', 125], ['r', '4']]
  }, {
    el: 'polygon',
    attributes: [['points', "".concat(ox + 56, ",125 ").concat(ox + 64, ",125, ").concat(ox + 60.5, ",140 ").concat(ox + 59.5, ",140")]]
  }, {
    el: 'circle',
    attributes: [['cx', ox + 80], ['cy', 75], ['r', '4']]
  }, {
    el: 'polygon',
    attributes: [['points', "".concat(ox + 76, ",75 ").concat(ox + 84, ",75, ").concat(ox + 80.5, ",90 ").concat(ox + 79.5, ",90")]]
  }]
}, {
  x: ox,
  y: 200,
  width: 100,
  height: 100,
  type: 'project',
  id: 'my-reads',
  title: 'My Reads',
  caption: 'Bookshelves app',
  tools: 'ReactJS, React-Bootstrap',
  link: 'https://github.com/oriane212/myReads',
  icon: [{
    el: 'rect',
    attributes: [['x', 10 + ox], ['y', 230], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '25']]
  }, {
    el: 'rect',
    attributes: [['x', 30 + ox], ['y', 230], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '25']]
  }, {
    el: 'rect',
    attributes: [['x', 50 + ox], ['y', 230], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '25']]
  }]
}, {
  x: ox,
  y: 350,
  width: 100,
  height: 100,
  type: 'project',
  id: 'frogger',
  title: 'Frogger Game',
  caption: 'Star Wars themed game',
  tools: 'HTML, CSS, JS',
  link: 'https://github.com/oriane212/frogger',
  icon: [{
    el: 'circle',
    attributes: [['cx', 50 + ox], ['cy', 300 + 40], ['r', '30']]
  }, {
    el: 'circle',
    attributes: [['cx', 50 + ox], ['cy', 300 + 135], ['r', '5']]
  }]
}, {
  x: ox,
  y: 500,
  width: 100,
  height: 100,
  type: 'project',
  id: 'language-learning',
  title: 'Personalized Language Learning',
  caption: 'UX design for mobile app',
  tools: 'Balsamiq, Sketch, Flinto',
  link: 'https://github.com/oriane212/personalized-language-learning',
  icon: [{
    el: 'rect',
    attributes: [['x', 40 + ox], ['y', 540], ['rx', "2"], ['ry', "2"], ['width', '5'], ['height', '20']]
  }, {
    el: 'rect',
    attributes: [['x', 50 + ox], ['y', 540], ['rx', "2"], ['ry', "2"], ['width', '10'], ['height', '20']]
  }, {
    el: 'rect',
    attributes: [['x', 65 + ox], ['y', 540], ['rx', "2"], ['ry', "2"], ['width', '20'], ['height', '20']]
  }]
}, {
  x: ox,
  y: 650,
  width: 100,
  height: 100,
  type: 'project',
  id: 'memory',
  title: 'Memory Game',
  caption: 'Web game of matching cards',
  tools: 'HTML, CSS, JS',
  link: 'https://github.com/oriane212/memory-game',
  icon: [{
    el: 'rect',
    attributes: [['x', 30 + ox], ['y', 680], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']]
  }, {
    el: 'rect',
    attributes: [['x', 30 + ox], ['y', 700], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']]
  }, {
    el: 'rect',
    attributes: [['x', 50 + ox], ['y', 680], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']]
  }, {
    el: 'rect',
    attributes: [['x', 50 + ox], ['y', 700], ['rx', "2"], ['ry', "2"], ['width', '15'], ['height', '15']]
  }]
}];

function createSectionTitle(title) {
  var svgSection = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgSection.setAttribute('id', "".concat(title, "-title"));
  var sectionLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  sectionLine.classList.add('section-line');
  var sectionTitle = document.createElementNS("http://www.w3.org/2000/svg", "text");
  sectionTitle.classList.add('text_section_title');
  sectionTitle.textContent = title;

  if (rootRect.width < 565) {
    // draw horizontal
    svgSection.setAttribute('width', projectsDiv_Rect.width);
    svgSection.setAttribute('height', 20);
    sectionLine.setAttribute('x1', projectsDiv_Rect.width);
    sectionLine.setAttribute('x2', 110);
    sectionLine.setAttribute('y1', 20);
    sectionLine.setAttribute('y2', 20);
    sectionLine.setAttribute('stroke-dasharray', projectsDiv_Rect.width - 110);
    sectionLine.setAttribute('stroke-dashoffset', projectsDiv_Rect.width - 110);
    sectionTitle.setAttribute('x', 110);
    sectionTitle.setAttribute('y', 20);
  } else {
    // draw vertical
    svgSection.setAttribute('width', 20);
    svgSection.setAttribute('height', 1000);
    sectionLine.setAttribute('x1', 20);
    sectionLine.setAttribute('x2', 20);
    sectionLine.setAttribute('y1', 0);
    sectionLine.setAttribute('y2', 1000);
    sectionLine.setAttribute('stroke-dasharray', 1000);
    sectionLine.setAttribute('stroke-dashoffset', 1000);
    sectionTitle.setAttribute('x', 20);
    sectionTitle.setAttribute('y', 100);
    sectionTitle.setAttribute('transform', 'rotate(270 50, 132)');
  } // append line and title to svg


  svgSection.append(sectionLine, sectionTitle); // insert before projectsDiv

  document.querySelector('.track3').insertBefore(svgSection, projectsDiv);
}

function createProjects(rectObjs) {
  // map over the rectangle objects
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = rectObjs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var ro = _step.value;
      // create group of SVG elements
      var svgGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
      svgGroup.setAttribute('role', 'listitem'); // create xml link

      var linkEl = document.createElementNS("http://www.w3.org/2000/svg", "a");
      linkEl.setAttribute('href', ro.link);
      linkEl.setAttribute('tabindex', '0');
      linkEl.setAttribute('id', ro.id);
      linkEl.classList.add('project'); // create empty rect for smoother mouseenter styling

      var rect_empty = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect_empty.setAttribute('height', 120);
      rect_empty.setAttribute('width', 300);
      rect_empty.setAttribute('x', ox);
      rect_empty.setAttribute('y', ro.y - 20);
      rect_empty.classList.add('project-rect'); // create text for project
      // title

      var pTitle = document.createElementNS("http://www.w3.org/2000/svg", 'text');
      pTitle.classList.add('text_title');

      if (ro.title.length > 20 && ox !== 50) {
        var title_split = ro.title.split(' '); // line 1

        var tspan1 = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
        tspan1.setAttribute('x', ro.x + ro.width + 10);
        tspan1.setAttribute('y', ro.y - 15);
        tspan1.textContent = title_split[0]; // line 2

        var tspan2 = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
        tspan2.setAttribute('x', ro.x + ro.width + 10);
        tspan2.setAttribute('y', ro.y);
        tspan2.textContent = "".concat(title_split[1], " ").concat(title_split[2]);
        pTitle.append(tspan1, tspan2);
      } else {
        pTitle.setAttribute('x', ro.x + ro.width + 10);
        pTitle.setAttribute('y', ro.y);
        pTitle.textContent = ro.title;
      } // caption


      var pCaption = document.createElementNS("http://www.w3.org/2000/svg", 'text');
      pCaption.setAttribute('x', ro.x + ro.width + 10);
      pCaption.setAttribute('y', ro.y + 20);
      pCaption.classList.add('text_caption');
      pCaption.textContent = ro.caption; // tools

      var pTools = document.createElementNS("http://www.w3.org/2000/svg", 'text');
      pTools.setAttribute('x', ro.x + ro.width + 10);
      pTools.setAttribute('y', ro.y + 40);
      pTools.classList.add('text_tools');
      pTools.textContent = ro.tools; // create rectangle

      var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      rect.classList.add("rect");
      rect.setAttribute("x", ro.x);
      rect.setAttribute("y", ro.y);
      rect.setAttribute("width", ro.width);
      rect.setAttribute("height", ro.height);
      /*
      // create image
      let image = document.createElementNS("http://www.w3.org/2000/svg", "image");
      image.setAttribute('href', 'profileHighContrast.jpeg');
      image.setAttribute('width', '100');
      image.setAttribute('height', '100');
      */

      var projectIcon = document.createElementNS("http://www.w3.org/2000/svg", "g");
      projectIcon.setAttribute('role', 'img');
      projectIcon.setAttribute('fill', 'white');

      if (ro.icon != null) {
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = ro.icon[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var icon = _step2.value;
            var iconEl = document.createElementNS("http://www.w3.org/2000/svg", icon.el);
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = icon.attributes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var attribute = _step3.value;
                iconEl.setAttribute(attribute[0], attribute[1]);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            projectIcon.appendChild(iconEl);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } // Construction lines
      // create the left vertical line


      var left = document.createElementNS("http://www.w3.org/2000/svg", "line");
      left.classList.add("v-line");
      left.setAttribute("x1", ro.x);
      left.setAttribute("x2", ro.x);
      left.setAttribute("y1", ro.y - 50);
      left.setAttribute("y2", ro.y + ro.height); // create the right vertical line

      var right = document.createElementNS("http://www.w3.org/2000/svg", "line");
      right.classList.add("v-line");
      right.setAttribute("x1", ro.x + ro.width);
      right.setAttribute("x2", ro.x + ro.width);
      right.setAttribute("y1", ro.y + ro.height + 50);
      right.setAttribute("y2", ro.y); // create the top horizontal line

      var top = document.createElementNS("http://www.w3.org/2000/svg", "line");
      top.classList.add("h-line");
      top.setAttribute("x1", ro.x - 50);
      top.setAttribute("x2", ro.x + ro.width + 300);
      top.setAttribute("y1", ro.y);
      top.setAttribute("y2", ro.y); // create the bottom horizontal line

      var bottom = document.createElementNS("http://www.w3.org/2000/svg", "line");
      bottom.classList.add("h-line");
      bottom.setAttribute("x1", ro.x + ro.width + 300);
      bottom.setAttribute("x2", ro.x);
      bottom.setAttribute("y1", ro.y + ro.height);
      bottom.setAttribute("y2", ro.y + ro.height); // Corner lines
      // create the top left corner vertical line

      /*
      let TLcorner_v = document.createElementNS("http://www.w3.org/2000/svg", "line");
      TLcorner_v.classList.add("corner");
      TLcorner_v.setAttribute("x1", ro.x);
      TLcorner_v.setAttribute("x2", ro.x);
      TLcorner_v.setAttribute("y1", ro.y);
      TLcorner_v.setAttribute("y2", ro.y + 20);
      // create the top left corner horiztonal line
      let TLcorner_h = document.createElementNS("http://www.w3.org/2000/svg", "line");
      TLcorner_h.classList.add("corner");
      TLcorner_h.setAttribute("x1", ro.x);
      TLcorner_h.setAttribute("x2", ro.x + 20);
      TLcorner_h.setAttribute("y1", ro.y);
      TLcorner_h.setAttribute("y2", ro.y);
      // create the bottom right corner vertical line
      let BRcorner_v = document.createElementNS("http://www.w3.org/2000/svg", "line");
      BRcorner_v.classList.add("corner");
      BRcorner_v.setAttribute("x1", ro.x + ro.width);
      BRcorner_v.setAttribute("x2", ro.x + ro.width);
      BRcorner_v.setAttribute("y1", ro.y + ro.height);
      BRcorner_v.setAttribute("y2", ro.y + ro.width - 20);
      // create the bottom right corner horiztonal line
      let BRcorner_h = document.createElementNS("http://www.w3.org/2000/svg", "line");
      BRcorner_h.classList.add("corner");
      BRcorner_h.setAttribute("x1", ro.x + ro.width);
      BRcorner_h.setAttribute("x2", ro.x + ro.width - 20);
      BRcorner_h.setAttribute("y1", ro.y + ro.height);
      BRcorner_h.setAttribute("y2", ro.y + ro.height);
      */
      // add event listeners to each project link for focus styling

      rect_empty.addEventListener('mouseenter', onProjectFocus);
      rect_empty.addEventListener('mouseout', offProjectFocus);
      linkEl.addEventListener('focus', onProjectFocus);
      linkEl.addEventListener('focusout', offProjectFocus); // append all SVG elements to link el

      linkEl.append(pTitle, pCaption, pTools, rect, projectIcon, rect_empty); // note: not included above: TLcorner_v, TLcorner_h, BRcorner_v, BRcorner_h

      svgGroup.append(linkEl, left, right, top, bottom);
      gList.append(svgGroup);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function onProjectFocus() {
  if (event.type === 'mouseenter') {
    event.target.parentNode.classList.add('project-focus');
  } else {
    event.target.classList.add('project-focus');
  }
}

function offProjectFocus() {
  console.log(event.target);

  if (event.type === 'mouseout') {
    event.target.parentNode.classList.remove('project-focus');
  } else {
    event.target.classList.remove('project-focus');
  }
}

var svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg"); // make svg traversable

svgEl.setAttribute('role', 'group'); // set title

svgEl.setAttribute('aria-labelledby', 'projects-title'); // store width and height of projectsDiv to set size for canvas

svgEl.setAttribute('width', projectsDiv_Rect.width);
var calc_height = 200 * rectObjs.length;
svgEl.setAttribute('height', calc_height);
var gList = document.createElementNS("http://www.w3.org/2000/svg", "g");
gList.setAttribute('role', 'list');

function addToDOM(container) {
  createHeaderLines();
  createSectionTitle('projects');
  setTimeout(function () {
    createSVGelements(rectObjs);
  }, 3000);
}

function createSVGelements(rectObjs) {
  createProjects(rectObjs);
  svgEl.append(gList);
  projectsDiv.append(svgEl);
}

function createHeaderLines() {
  var header = document.querySelector('header'); // insert a line before track2

  var track2 = document.querySelector('.track2');
  var svgLine2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgLine2.setAttribute('width', rootRect.width);
  svgLine2.setAttribute('height', '2');
  var line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.classList.add("header-line");
  line2.setAttribute("x1", rootRect.width - 100);
  line2.setAttribute("x2", '0');
  line2.setAttribute("y1", '0');
  line2.setAttribute("y2", '0');
  line2.setAttribute('stroke-dasharray', rootRect.width - 100);
  line2.setAttribute('stroke-dashoffset', rootRect.width - 100);
  svgLine2.append(line2);
  header.appendChild(svgLine2); // insert a line before toptrack

  var svgLine1 = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgLine1.setAttribute('width', rootRect.width);
  svgLine1.setAttribute('height', '2');
  var line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.classList.add("header-line");
  line1.setAttribute("x1", '100');
  line1.setAttribute("x2", rootRect.width);
  line1.setAttribute("y1", '0');
  line1.setAttribute("y2", '0');
  line1.setAttribute('stroke-dasharray', rootRect.width - 100);
  line1.setAttribute('stroke-dashoffset', rootRect.width - 100);
  svgLine1.append(line1);
  header.insertBefore(svgLine1, track2);
}

addToDOM(rectObjs);
},{"./styles.css":"src/styles.css","./styles_med.css":"src/styles_med.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55861" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.map