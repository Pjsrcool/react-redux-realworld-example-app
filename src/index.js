'use strict';

var _client = require('react-dom/client');

var _reactRedux = require('react-redux');

var _react = _interopRequireDefault(require('react'));

var _reactRouterDom = require('react-router-dom');

var _App = _interopRequireDefault(require('./components/App'));

var _store = _interopRequireDefault(require('./app/store'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
} // const _history = createBrowserHistory()

(0, _client.createRoot)(document.getElementById('root')).render(
  /*#__PURE__*/ _react.default.createElement(
    _react.default.StrictMode,
    null,
    /*#__PURE__*/ _react.default.createElement(
      _reactRedux.Provider,
      {
        store: _store.default,
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        /*#__PURE__*/ _react.default.createElement(_App.default, null)
      )
    )
  )
); // https://www.cypress.io/blog/2018/11/14/testing-redux-store/

/* istanbul ignore else */

if (window.Cypress) {
  window.store = _store.default;
}
