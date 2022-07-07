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

var _reactRouterDom = require('react-router-dom');

var _react = _interopRequireWildcard(require('react'));

var _reactRedux = require('react-redux');

var _common = require('../../reducers/common');

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
 * Show the actions to edit or delete an article
 *
 * @example
 * <ArticleActions />
 */

function ArticleActions() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    slug = _useParams.slug;

  var dispatch = (0, _reactRedux.useDispatch)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  /**
   * @type {React.MouseEventHandler}
   */

  var removeArticle = function removeArticle() {
    dispatch((0, _common.deleteArticle)(slug));
    navigate('/');
  };

  return /*#__PURE__*/ _react.default.createElement(
    'span',
    null,
    /*#__PURE__*/ _react.default.createElement(
      _reactRouterDom.Link,
      {
        to: '/editor/'.concat(slug),
        className: 'btn btn-outline-secondary btn-sm',
      },
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'ion-edit',
      }),
      ' Edit Article'
    ),
    /*#__PURE__*/ _react.default.createElement(
      'button',
      {
        className: 'btn btn-outline-danger btn-sm',
        onClick: removeArticle,
      },
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'ion-trash-a',
      }),
      ' Delete Article'
    )
  );
}

var _default = (0, _react.memo)(ArticleActions);

exports.default = _default;
