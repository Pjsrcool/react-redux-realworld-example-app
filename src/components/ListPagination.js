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

var _articleList = require('../reducers/articleList');

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
 * Show a list with the available pages
 *
 * @example
 * <ListPagination />
 */

function ListPagination() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var articlesCount = (0, _reactRedux.useSelector)(function (state) {
    return state.articleList.articlesCount;
  });
  var currentPage = (0, _reactRedux.useSelector)(function (state) {
    return state.articleList.currentPage;
  });
  var articlesPerPage = (0, _reactRedux.useSelector)(function (state) {
    return state.articleList.articlesPerPage;
  });

  if (articlesCount <= articlesPerPage) {
    return null;
  }

  var pages = Array.from(
    {
      length: Math.ceil(articlesCount / articlesPerPage),
    },
    function (_, number) {
      return number;
    }
  );

  var handleClickPage = function handleClickPage(page) {
    return function () {
      dispatch(
        (0, _articleList.getAllArticles)({
          page: page,
        })
      );
    };
  };

  return /*#__PURE__*/ _react.default.createElement(
    'nav',
    null,
    /*#__PURE__*/ _react.default.createElement(
      'ul',
      {
        className: 'pagination',
      },
      pages.map(function (page) {
        var isActivePage = page === currentPage;
        return /*#__PURE__*/ _react.default.createElement(
          'li',
          {
            className: isActivePage ? 'page-item active' : 'page-item',
            onClick: handleClickPage(page),
            key: page.toString(),
          },
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              type: 'button',
              className: 'page-link',
            },
            page + 1
          )
        );
      })
    )
  );
}

var _default = (0, _react.memo)(ListPagination);

exports.default = _default;
