'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactRedux = require('react-redux');

var _reactRouterDom = require('react-router-dom');

var _Home = _interopRequireDefault(require('../components/Home'));

var _common = require('../reducers/common');

var _Header = _interopRequireDefault(require('./Header'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

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

var Article = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Article'));
  });
});
var Editor = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Editor'));
  });
});
var AuthScreen = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../features/auth/AuthScreen'));
  });
});
var Profile = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../components/Profile'));
  });
});
var SettingsScreen = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('../features/auth/SettingsScreen'));
  });
});

function App() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var redirectTo = (0, _reactRedux.useSelector)(function (state) {
    return state.common.redirectTo;
  });
  var appLoaded = (0, _reactRedux.useSelector)(function (state) {
    return state.common.appLoaded;
  });
  (0, _react.useEffect)(
    function () {
      if (redirectTo) {
        // dispatch(push(redirectTo));
        dispatch((0, _common.clearRedirect)());
      }
    },
    [redirectTo]
  );
  (0, _react.useEffect)(function () {
    var token = window.localStorage.getItem('jwt');
    dispatch((0, _common.appLoad)(token));
  }, []);

  if (appLoaded) {
    return /*#__PURE__*/ _react.default.createElement(
      _react.default.Fragment,
      null,
      /*#__PURE__*/ _react.default.createElement(_Header.default, null),
      /*#__PURE__*/ _react.default.createElement(
        _react.Suspense,
        {
          fallback: /*#__PURE__*/ _react.default.createElement(
            'p',
            null,
            'Loading...'
          ),
        },
        /*#__PURE__*/ _react.default.createElement(
          _reactRouterDom.Routes,
          null,
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            exact: true,
            path: '/',
            element: /*#__PURE__*/ _react.default.createElement(
              _Home.default,
              null
            ),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/login',
            element: /*#__PURE__*/ _react.default.createElement(
              AuthScreen,
              null
            ),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/register',
            element: /*#__PURE__*/ _react.default.createElement(AuthScreen, {
              isRegisterScreen: true,
            }),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/editor/:slug',
            element: /*#__PURE__*/ _react.default.createElement(Editor, null),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/editor',
            element: /*#__PURE__*/ _react.default.createElement(Editor, null),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/article/:slug',
            element: /*#__PURE__*/ _react.default.createElement(Article, null),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/settings',
            element: /*#__PURE__*/ _react.default.createElement(
              SettingsScreen,
              null
            ),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/@:username/favorites',
            element: /*#__PURE__*/ _react.default.createElement(Profile, {
              isFavoritePage: true,
            }),
          }),
          /*#__PURE__*/ _react.default.createElement(_reactRouterDom.Route, {
            path: '/@:username',
            element: /*#__PURE__*/ _react.default.createElement(Profile, null),
          })
        )
      )
    );
  }

  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    /*#__PURE__*/ _react.default.createElement(_Header.default, null),
    /*#__PURE__*/ _react.default.createElement('p', null, 'Loading...')
  );
}

var _default = (0, _react.memo)(App);

exports.default = _default;
