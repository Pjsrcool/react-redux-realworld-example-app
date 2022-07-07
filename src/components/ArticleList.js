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

var _ArticlePreview = _interopRequireDefault(require('./ArticlePreview'));

var _ListPagination = _interopRequireDefault(require('./ListPagination'));

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
 * List all articles and show pagination
 *
 * @example
 * <ArticleList />
 */

function ArticleList() {
  var articles = (0, _reactRedux.useSelector)(function (state) {
    return state.articleList.articles;
  });

  if (!articles) {
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'article-preview',
      },
      'Loading...'
    );
  }

  if (articles.length === 0) {
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'article-preview',
      },
      'No articles are here... yet.'
    );
  }

  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    articles.map(function (article) {
      return /*#__PURE__*/ _react.default.createElement(
        _ArticlePreview.default,
        {
          article: article,
          key: article.slug,
        }
      );
    }),
    /*#__PURE__*/ _react.default.createElement(_ListPagination.default, null)
  );
}

var _default = (0, _react.memo)(ArticleList);

exports.default = _default;
