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

var _authSlice = require('../../features/auth/authSlice');

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
 * Shows a banner for new users
 *
 * @example
 * <Banner />
 */

function Banner() {
  var appName = (0, _reactRedux.useSelector)(function (state) {
    return state.common.appName;
  });
  var isAuthenticated = (0, _reactRedux.useSelector)(
    _authSlice.selectIsAuthenticated
  );

  if (isAuthenticated) {
    return null;
  }

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'banner',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'container',
      },
      /*#__PURE__*/ _react.default.createElement(
        'h1',
        {
          className: 'logo-font',
        },
        appName.toLowerCase()
      ),
      /*#__PURE__*/ _react.default.createElement(
        'p',
        null,
        'A place to share your knowledge.'
      )
    )
  );
}

var _default = (0, _react.memo)(Banner);

exports.default = _default;
