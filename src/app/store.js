'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
exports.makeStore = makeStore;

var _toolkit = require('@reduxjs/toolkit');

var _authSlice = _interopRequireDefault(require('../features/auth/authSlice'));

var _commentsSlice = _interopRequireDefault(
  require('../features/comments/commentsSlice')
);

var _tagsSlice = _interopRequireDefault(require('../features/tags/tagsSlice'));

var _history = _interopRequireDefault(require('./history'));

var _middleware = require('./middleware');

var _article = _interopRequireDefault(require('../reducers/article'));

var _articleList = _interopRequireDefault(require('../reducers/articleList'));

var _common = _interopRequireDefault(require('../reducers/common'));

var _profile = _interopRequireDefault(require('../reducers/profile'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function makeStore(preloadedState) {
  return (0, _toolkit.configureStore)({
    reducer: {
      article: _article.default,
      articleList: _articleList.default,
      auth: _authSlice.default,
      comments: _commentsSlice.default,
      common: _common.default,
      profile: _profile.default,
      tags: _tagsSlice.default, // router: connectRouter(history),
    },
    devTools: true,
    preloadedState: preloadedState,
    middleware: function middleware(getDefaultMiddleware) {
      return [].concat(_toConsumableArray(getDefaultMiddleware()), [
        // routerMiddleware(history),
        _middleware.localStorageMiddleware,
      ]);
    },
  });
}

var store = makeStore();
var _default = store;
exports.default = _default;
