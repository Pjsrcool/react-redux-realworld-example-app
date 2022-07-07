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

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _authSlice = require('../features/auth/authSlice');

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
 * Navbar when there isn't a logged user
 *
 * @example
 * <LoggedOutNavbar />
 */

function LoggedOutNavbar() {
  return /*#__PURE__*/ _react.default.createElement(
    'ul',
    {
      className: 'nav navbar-nav pull-xs-right',
    },
    /*#__PURE__*/ _react.default.createElement(
      'li',
      {
        className: 'nav-item',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/',
          className: 'nav-link',
        },
        'Home'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'li',
      {
        className: 'nav-item',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/login',
          className: 'nav-link',
        },
        'Sign in'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'li',
      {
        className: 'nav-item',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/register',
          className: 'nav-link',
        },
        'Sign up'
      )
    )
  );
}
/**
 * Navbar when there is a logged user
 *
 * @example
 * <LoggedInNavbar />
 */

function LoggedInNavbar() {
  var currentUser = (0, _reactRedux.useSelector)(_authSlice.selectUser);
  return /*#__PURE__*/ _react.default.createElement(
    'ul',
    {
      className: 'nav navbar-nav pull-xs-right',
    },
    /*#__PURE__*/ _react.default.createElement(
      'li',
      {
        className: 'nav-item',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/',
          className: 'nav-link',
        },
        'Home'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'li',
      {
        className: 'nav-item',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/editor',
          className: 'nav-link',
        },
        /*#__PURE__*/ _react.default.createElement('i', {
          className: 'ion-compose',
        }),
        '\xA0New Post'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'li',
      {
        className: 'nav-item',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/settings',
          className: 'nav-link',
        },
        /*#__PURE__*/ _react.default.createElement('i', {
          className: 'ion-gear-a',
        }),
        '\xA0Settings'
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'li',
      {
        className: 'nav-item',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/@'.concat(
            currentUser === null || currentUser === void 0
              ? void 0
              : currentUser.username
          ),
          className: 'nav-link',
        },
        /*#__PURE__*/ _react.default.createElement('img', {
          src:
            (currentUser === null || currentUser === void 0
              ? void 0
              : currentUser.image) ||
            'https://static.productionready.io/images/smiley-cyrus.jpg',
          className: 'user-pic',
          alt:
            currentUser === null || currentUser === void 0
              ? void 0
              : currentUser.username,
        }),
        currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.username
      )
    )
  );
}
/**
 * App header
 *
 * @example
 * <Header />
 */

function Header() {
  var isAuthenticated = (0, _reactRedux.useSelector)(
    _authSlice.selectIsAuthenticated
  );
  var appName = (0, _reactRedux.useSelector)(function (state) {
    return state.common.appName;
  });
  return /*#__PURE__*/ _react.default.createElement(
    'nav',
    {
      className: 'navbar navbar-light',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'container',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/',
          className: 'navbar-brand',
        },
        appName.toLowerCase()
      ),
      isAuthenticated
        ? /*#__PURE__*/ _react.default.createElement(LoggedInNavbar, null)
        : /*#__PURE__*/ _react.default.createElement(LoggedOutNavbar, null)
    )
  );
}

var _default = (0, _react.memo)(Header);

exports.default = _default;
