'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              'function' == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _authSlice = require('../../features/auth/authSlice');

var _ArticleActions = _interopRequireDefault(require('./ArticleActions'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return {
      default: obj,
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}
/**
 * Show information about the current article
 *
 * @example
 * <ArticleMeta />
 */

function ArticleMeta() {
  var _article$author$image;

  var currentUser = (0, _reactRedux.useSelector)(_authSlice.selectUser);
  var article = (0, _reactRedux.useSelector)(function (state) {
    return state.article.article;
  });
  var isAuthor =
    (currentUser === null || currentUser === void 0
      ? void 0
      : currentUser.username) ===
    (article === null || article === void 0 ? void 0 : article.author.username);
  if (!article) return null;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'article-meta',
    },
    /*#__PURE__*/ _react.default.createElement(
      _reactRouterDom.Link,
      {
        to: '/@'.concat(article.author.username),
      },
      /*#__PURE__*/ _react.default.createElement('img', {
        src:
          (_article$author$image = article.author.image) !== null &&
          _article$author$image !== void 0
            ? _article$author$image
            : 'https://static.productionready.io/images/smiley-cyrus.jpg',
        alt: article.author.username,
      })
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'info',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/@'.concat(article.author.username),
          className: 'author',
        },
        article.author.username
      ),
      /*#__PURE__*/ _react.default.createElement(
        'time',
        {
          className: 'date',
          dateTime: article.createdAt,
        },
        new Date(article.createdAt).toDateString()
      )
    ),
    isAuthor
      ? /*#__PURE__*/ _react.default.createElement(
          _ArticleActions.default,
          null
        )
      : null
  );
}

var _default = (0, _react.memo)(ArticleMeta);

exports.default = _default;
