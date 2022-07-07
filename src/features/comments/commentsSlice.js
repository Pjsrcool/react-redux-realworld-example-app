'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.selectIsLoading =
  exports.selectIsAuthor =
  exports.selectErrors =
  exports.selectAllComments =
  exports.removeComment =
  exports.getCommentsForArticle =
  exports.default =
  exports.createComment =
    void 0;

var _toolkit = require('@reduxjs/toolkit');

var _agent = _interopRequireDefault(require('../../agent'));

var _utils = require('../../common/utils');

var _authSlice = require('../auth/authSlice');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
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
 * @typedef  {object}   CommentsState
 * @property {Status}   status
 * @property {number[]} ids
 * @property {Record<string, import('../../agent').Comment>} entities
 * @property {Record<string, string[]>} errors
 */

var commentAdapter = (0, _toolkit.createEntityAdapter)({
  sortComparer: function sortComparer(a, b) {
    return b.createdAt.localeCompare(a.createdAt);
  },
});
/**
 * Send a create request
 *
 * @param {object} argument
 * @param {string} argument.articleSlug
 * @param {object} argument.comment
 * @param {string} argument.comment.body
 */

var createComment = (0, _toolkit.createAsyncThunk)(
  'comments/createComment',
  /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref, thunkApi) {
        var articleSlug, newComment, _yield$agent$Comments, comment;

        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  (articleSlug = _ref.articleSlug), (newComment = _ref.comment);
                  _context.prev = 1;
                  _context.next = 4;
                  return _agent.default.Comments.create(
                    articleSlug,
                    newComment
                  );

                case 4:
                  _yield$agent$Comments = _context.sent;
                  comment = _yield$agent$Comments.comment;
                  return _context.abrupt('return', comment);

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context['catch'](1);

                  if (!(0, _utils.isApiError)(_context.t0)) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt(
                    'return',
                    thunkApi.rejectWithValue(_context.t0)
                  );

                case 13:
                  throw _context.t0;

                case 14:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[1, 9]]
        );
      })
    );

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  })(),
  {
    condition: function condition(_, _ref3) {
      var getState = _ref3.getState;
      return (
        (0, _authSlice.selectIsAuthenticated)(getState()) &&
        !selectIsLoading(getState())
      );
    },
    getPendingMeta: function getPendingMeta(_, _ref4) {
      var getState = _ref4.getState;
      return {
        author: (0, _authSlice.selectUser)(getState()),
      };
    },
  }
);
/**
 * Send a get all request
 *
 * @param {string} articleSlug
 */

exports.createComment = createComment;
var getCommentsForArticle = (0, _toolkit.createAsyncThunk)(
  'comments/getCommentsForArticle',
  /*#__PURE__*/ (function () {
    var _ref5 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(articleSlug) {
        var _yield$agent$Comments2, comments;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _context2.next = 2;
                return _agent.default.Comments.forArticle(articleSlug);

              case 2:
                _yield$agent$Comments2 = _context2.sent;
                comments = _yield$agent$Comments2.comments;
                return _context2.abrupt('return', comments);

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    );

    return function (_x3) {
      return _ref5.apply(this, arguments);
    };
  })(),
  {
    condition: function condition(_, _ref6) {
      var getState = _ref6.getState;
      return !selectIsLoading(getState());
    },
  }
);
/**
 * Send a remove request
 *
 * @param {object} argument
 * @param {string} argument.articleSlug
 * @param {number} argument.commentId
 */

exports.getCommentsForArticle = getCommentsForArticle;
var removeComment = (0, _toolkit.createAsyncThunk)(
  'comments/removeComment',
  /*#__PURE__*/ (function () {
    var _ref8 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3(_ref7) {
        var articleSlug, commentId;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                (articleSlug = _ref7.articleSlug),
                  (commentId = _ref7.commentId);
                _context3.next = 3;
                return _agent.default.Comments.delete(articleSlug, commentId);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    );

    return function (_x4) {
      return _ref8.apply(this, arguments);
    };
  })(),
  {
    condition: function condition(_ref9, _ref10) {
      var commentId = _ref9.commentId;
      var getState = _ref10.getState;
      return (
        (0, _authSlice.selectIsAuthenticated)(getState()) &&
        selectCommentsSlice(getState()).ids.includes(commentId) &&
        !selectIsLoading(getState())
      );
    },
  }
);
/**
 * @type {CommentsState}
 */

exports.removeComment = removeComment;
var initialState = commentAdapter.getInitialState({
  status: _utils.Status.IDLE,
});
var commentsSlice = (0, _toolkit.createSlice)({
  name: 'comments',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    builder
      .addCase(createComment.pending, function (state, action) {
        state.status = _utils.Status.LOADING;

        if (action.meta.arg.comment.body) {
          commentAdapter.addOne(
            state,
            _objectSpread(
              _objectSpread({}, action.meta.arg.comment),
              {},
              {
                author: action.meta.author,
                id: action.meta.requestId,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
              }
            )
          );
        }
      })
      .addCase(createComment.fulfilled, function (state, action) {
        state.status = _utils.Status.SUCCESS;
        commentAdapter.updateOne(state, {
          id: action.meta.requestId,
          changes: action.payload,
        });
        delete state.errors;
      })
      .addCase(createComment.rejected, function (state, action) {
        var _action$payload;

        state.status = _utils.Status.FAILURE;
        state.errors =
          (_action$payload = action.payload) === null ||
          _action$payload === void 0
            ? void 0
            : _action$payload.errors;
        commentAdapter.removeOne(state, action.meta.requestId);
      });
    builder.addCase(getCommentsForArticle.fulfilled, function (state, action) {
      state.status = _utils.Status.SUCCESS;
      commentAdapter.setAll(state, action.payload);
    });
    builder.addCase(removeComment.fulfilled, function (state, action) {
      state.status = _utils.Status.SUCCESS;
      commentAdapter.removeOne(state, action.meta.arg.commentId);
    });
    builder.addMatcher(function (action) {
      return /comments\/.*\/pending/.test(action.type);
    }, _utils.loadingReducer);
  },
});
/**
 * Get comments state
 *
 * @param {object} state
 * @returns {CommentsState}
 */

var selectCommentsSlice = function selectCommentsSlice(state) {
  return state.comments;
};

var commentSelectors = commentAdapter.getSelectors(selectCommentsSlice);
/**
 * Get all comments
 *
 * @param {object} state
 * @returns {import('../../agent').Comment[]}
 */

var selectAllComments = commentSelectors.selectAll;
/**
 * Get one comment
 *
 * @param {number} commentId
 * @returns {import('@reduxjs/toolkit').Selector<object, import('../../agent').Comment>}
 */

exports.selectAllComments = selectAllComments;

var selectCommentById = function selectCommentById(commentId) {
  return function (state) {
    return commentSelectors.selectById(state, commentId);
  };
};
/**
 * Get is the comment's author
 *
 * @param {number} commentId
 * @returns {import('@reduxjs/toolkit').Selector<object, boolean>}
 */

var selectIsAuthor = function selectIsAuthor(commentId) {
  return (0, _toolkit.createSelector)(
    selectCommentById(commentId),
    _authSlice.selectUser,
    function (comment, currentUser) {
      return (
        (currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.username) ===
        (comment === null || comment === void 0
          ? void 0
          : comment.author.username)
      );
    }
  );
};
/**
 * Get is loading
 *
 * @param {object} state
 * @returns {boolean}
 */

exports.selectIsAuthor = selectIsAuthor;

var selectIsLoading = function selectIsLoading(state) {
  return selectCommentsSlice(state).status === _utils.Status.LOADING;
};
/**
 * Get is errors
 *
 * @param {object} state
 * @returns {Record<string, string[]>}
 */

exports.selectIsLoading = selectIsLoading;

var selectErrors = function selectErrors(state) {
  return selectCommentsSlice(state).errors;
};

exports.selectErrors = selectErrors;
var _default = commentsSlice.reducer;
exports.default = _default;
