'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.deleteArticle =
  exports.default =
  exports.clearRedirect =
  exports.appLoad =
    void 0;

var _toolkit = require('@reduxjs/toolkit');

var _agent = _interopRequireDefault(require('../agent'));

var _article = require('./article');

var _profile = require('./profile');

var _articleList = require('./articleList');

var _authSlice = require('../features/auth/authSlice');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

var deleteArticle = (0, _toolkit.createAsyncThunk)(
  'common/deleteArticle',
  _agent.default.Articles.del
);
exports.deleteArticle = deleteArticle;

var appLoad = function appLoad(token) {
  return function (dispatch) {
    dispatch(commonSlice.actions.loadApp());

    if (token) {
      _agent.default.setToken(token);

      dispatch((0, _authSlice.setToken)(token));
      return dispatch((0, _authSlice.getUser)());
    }
  };
};

exports.appLoad = appLoad;
var initialState = {
  appName: 'Conduit',
  appLoaded: false,
  viewChangeCounter: 0,
  redirectTo: undefined,
};
var commonSlice = (0, _toolkit.createSlice)({
  name: 'common',
  initialState: initialState,
  reducers: {
    loadApp: function loadApp(state) {
      state.appLoaded = true;
    },
    clearRedirect: function clearRedirect(state) {
      delete state.redirectTo;
    },
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(deleteArticle.fulfilled, function (state) {
      state.redirectTo = '/';
    });
    builder.addCase(_authSlice.updateUser.fulfilled, function (state, action) {
      state.redirectTo = '/';
    });
    builder.addCase(_authSlice.login.fulfilled, function (state, action) {
      state.redirectTo = '/';
    });
    builder.addCase(_authSlice.register.fulfilled, function (state, action) {
      state.redirectTo = '/';
    });
    builder.addCase(_authSlice.logout, function (state) {
      state.redirectTo = '/';
    });
    builder.addCase(_article.createArticle.fulfilled, function (state, action) {
      state.redirectTo = '/article/'.concat(action.payload.article.slug);
    });
    builder.addCase(_article.updateArticle.fulfilled, function (state, action) {
      state.redirectTo = '/article/'.concat(action.payload.article.slug);
    });
    builder.addMatcher(
      function (action) {
        return [
          _article.articlePageUnloaded.type,
          _articleList.homePageUnloaded.type,
          _profile.profilePageUnloaded.type,
        ].includes(action.type);
      },
      function (state) {
        state.viewChangeCounter++;
      }
    );
  },
});
var clearRedirect = commonSlice.actions.clearRedirect;
exports.clearRedirect = clearRedirect;
var _default = commonSlice.reducer;
exports.default = _default;
