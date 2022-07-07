'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.selectTags =
  exports.selectIsLoading =
  exports.getAllTags =
  exports.default =
    void 0;

var _toolkit = require('@reduxjs/toolkit');

var _agent = _interopRequireDefault(require('../../agent'));

var _utils = require('../../common/utils');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}
/**
 * @typedef {object}    TagsState
 * @property {Status}   status
 * @property {string[]} tags
 */

/**
 * Fetch all tags
 */

var getAllTags = (0, _toolkit.createAsyncThunk)(
  'tags/getAllTags',
  /*#__PURE__*/ _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
      var _yield$agent$Tags$get, tags;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch ((_context.prev = _context.next)) {
            case 0:
              _context.next = 2;
              return _agent.default.Tags.getAll();

            case 2:
              _yield$agent$Tags$get = _context.sent;
              tags = _yield$agent$Tags$get.tags;
              return _context.abrupt('return', tags);

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee);
    })
  )
);
/**
 * Tags state
 *
 * @type {TagsState}
 */

exports.getAllTags = getAllTags;
var initialState = {
  status: _utils.Status.IDLE,
  tags: [],
};
var tagsSlice = (0, _toolkit.createSlice)({
  name: 'tags',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder
      .addCase(getAllTags.pending, function (state) {
        state.status = _utils.Status.LOADING;
      })
      .addCase(getAllTags.fulfilled, function (_, action) {
        return {
          status: _utils.Status.SUCCESS,
          tags: action.payload,
        };
      });
  },
});
/**
 * Get tags slice
 *
 * @param {object} state
 * @returns {TagsState}
 */

var selectTagsState = function selectTagsState(state) {
  return state.tags;
};
/**
 * Get tags from state
 *
 * @param {object} state
 * @returns {string[]}
 */

var selectTags = function selectTags(state) {
  return selectTagsState(state).tags;
};
/**
 * Is loading
 *
 * @param {object} state
 * @returns {boolean}
 */

exports.selectTags = selectTags;

var selectIsLoading = function selectIsLoading(state) {
  return selectTagsState(state).status === _utils.Status.LOADING;
};

exports.selectIsLoading = selectIsLoading;
var _default = tagsSlice.reducer;
exports.default = _default;
