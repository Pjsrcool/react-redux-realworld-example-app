'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _render;

var _react = require('@testing-library/react');

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _store = require('../app/store'); // import { ConnectedRouter } from 'connected-react-router';
// import { createMemoryHistory } from 'history';

function _render(ui) {
  var _ref =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
    _ref$store = _ref.store,
    store = _ref$store === void 0 ? (0, _store.makeStore)() : _ref$store;

  return (0, _react.render)(ui, {
    wrapper: function wrapper(_ref2) {
      var children = _ref2.children;
      return /*#__PURE__*/ React.createElement(
        _reactRedux.Provider,
        {
          store: store,
        },
        /*#__PURE__*/ React.createElement(
          _reactRouterDom.BrowserRouter,
          null,
          children
        )
      );
    },
  });
}
