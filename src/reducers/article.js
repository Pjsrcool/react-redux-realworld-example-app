'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.updateArticle =
  exports.getArticle =
  exports.default =
  exports.createArticle =
  exports.articlePageUnloaded =
    void 0;

var _toolkit = require('@reduxjs/toolkit');

var _agent = _interopRequireDefault(require('../agent'));

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

function serializeError(error) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
      stack: error.stack,
      code: error.code,
    };
  }

  if (_typeof(error) === 'object' && error !== null) {
    return error;
  }

  return {
    message: String(error),
  };
}

var getArticle = (0, _toolkit.createAsyncThunk)(
  'article/getArticle',
  _agent.default.Articles.get
);
exports.getArticle = getArticle;
var createArticle = (0, _toolkit.createAsyncThunk)(
  'article/createArticle',
  _agent.default.Articles.create,
  {
    serializeError: serializeError,
  }
);
exports.createArticle = createArticle;
var updateArticle = (0, _toolkit.createAsyncThunk)(
  'article/updateArticle',
  _agent.default.Articles.update,
  {
    serializeError: serializeError,
  }
);
exports.updateArticle = updateArticle;
var initialState = {
  article: undefined,
  inProgress: false,
  errors: undefined,
};
var articleSlice = (0, _toolkit.createSlice)({
  name: 'article',
  initialState: initialState,
  reducers: {
    articlePageUnloaded: function articlePageUnloaded() {
      return initialState;
    },
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(getArticle.fulfilled, function (state, action) {
      state.article = action.payload.article;
      state.inProgress = false;
    });
    builder.addCase(createArticle.fulfilled, function (state) {
      state.inProgress = false;
    });
    builder.addCase(createArticle.rejected, function (state, action) {
      state.errors = action.error.errors;
      state.inProgress = false;
    });
    builder.addCase(updateArticle.fulfilled, function (state) {
      state.inProgress = false;
    });
    builder.addCase(updateArticle.rejected, function (state, action) {
      state.errors = action.error.errors;
      state.inProgress = false;
    });
    builder.addMatcher(
      function (action) {
        return action.type.endsWith('/pending');
      },
      function (state) {
        state.inProgress = true;
      }
    );
    builder.addDefaultCase(function (state) {
      state.inProgress = false;
    });
  },
});
var articlePageUnloaded = articleSlice.actions.articlePageUnloaded;
exports.articlePageUnloaded = articlePageUnloaded;
var _default = articleSlice.reducer;
exports.default = _default;
