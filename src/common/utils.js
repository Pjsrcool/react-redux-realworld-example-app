'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.Status = void 0;
exports.failureReducer = failureReducer;
exports.isApiError = isApiError;
exports.loadingReducer = loadingReducer;

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
/**
 * States of the slice
 * @readonly
 * @enum {string}
 */

var Status = {
  /** The initial state */
  IDLE: 'idle',

  /** The loading state */
  LOADING: 'loading',

  /** The success state */
  SUCCESS: 'success',

  /** The error state */
  FAILURE: 'failure',
};
/**
 * Check if error is an ApiError
 *
 * @param {object} error
 * @returns {boolean} error is ApiError
 */

exports.Status = Status;

function isApiError(error) {
  return _typeof(error) === 'object' && error !== null && 'errors' in error;
}
/**
 * Set state as loading
 *
 * @param {import('@reduxjs/toolkit').Draft<AuthState>} state
 */

function loadingReducer(state) {
  state.status = Status.LOADING;
}
/**
 * @param {import('@reduxjs/toolkit').Draft<AuthState>} state
 * @param {import('@reduxjs/toolkit').PayloadAction<{errors: Record<string, string[]}>} action
 */

function failureReducer(state, action) {
  state.status = Status.FAILURE;
  state.errors = action.payload.errors;
}
