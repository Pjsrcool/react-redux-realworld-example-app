'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.localStorageMiddleware = void 0;

var _agent = _interopRequireDefault(require('../agent'));

var _authSlice = require('../features/auth/authSlice');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

var localStorageMiddleware = function localStorageMiddleware(store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case _authSlice.register.fulfilled.type:
        case _authSlice.login.fulfilled.type:
          window.localStorage.setItem('jwt', action.payload.token);

          _agent.default.setToken(action.payload.token);

          break;

        case _authSlice.logout.type:
          window.localStorage.removeItem('jwt');

          _agent.default.setToken(undefined);

          break;
      }

      return next(action);
    };
  };
};

exports.localStorageMiddleware = localStorageMiddleware;
