"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Game = exports.GameError = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/web.dom.iterable");

require("core-js/modules/es6.array.iterator");

require("core-js/modules/es6.string.iterator");

require("core-js/modules/es6.map");

require("core-js/modules/es6.reflect.construct");

require("core-js/modules/es6.regexp.to-string");

require("core-js/modules/es6.object.set-prototype-of");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var GameError =
/*#__PURE__*/
function (_Error) {
  _inherits(GameError, _Error);

  function GameError() {
    _classCallCheck(this, GameError);

    return _possibleConstructorReturn(this, _getPrototypeOf(GameError).apply(this, arguments));
  }

  return GameError;
}(_wrapNativeSuper(Error));

exports.GameError = GameError;

var Game =
/*#__PURE__*/
function () {
  function Game(container) {
    _classCallCheck(this, Game);

    this.container = container;
  }

  _createClass(Game, null, [{
    key: "createFromSelector",
    value: function createFromSelector(selector) {
      var el = document.querySelector(selector);

      if (el === null) {
        throw new GameError('Could not find element');
      }

      return new Game(el);
    }
  }]);

  return Game;
}();

exports.Game = Game;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJHYW1lRXJyb3IiLCJFcnJvciIsIkdhbWUiLCJjb250YWluZXIiLCJzZWxlY3RvciIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDYUEsUzs7Ozs7Ozs7Ozs7O21CQUFrQkMsSzs7OztJQUVsQkMsSTs7O0FBRVgsZ0JBQW9CQyxTQUFwQixFQUE0QztBQUFBOztBQUFBO0FBQUc7Ozs7dUNBRWRDLFEsRUFBa0I7QUFDakQsVUFBTUMsRUFBRSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUJILFFBQXZCLENBQVg7O0FBQ0EsVUFBSUMsRUFBRSxLQUFLLElBQVgsRUFBaUI7QUFDZixjQUFNLElBQUlMLFNBQUosQ0FBYyx3QkFBZCxDQUFOO0FBQ0Q7O0FBQ0QsYUFBTyxJQUFJRSxJQUFKLENBQVNHLEVBQVQsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgR2FtZUVycm9yIGV4dGVuZHMgRXJyb3IgeyB9XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpIHsgfVxuXG4gIHB1YmxpYyBzdGF0aWMgY3JlYXRlRnJvbVNlbGVjdG9yKHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIGlmIChlbCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEdhbWVFcnJvcignQ291bGQgbm90IGZpbmQgZWxlbWVudCcpXG4gICAgfVxuICAgIHJldHVybiBuZXcgR2FtZShlbCBhcyBIVE1MRWxlbWVudClcbiAgfVxufSJdfQ==