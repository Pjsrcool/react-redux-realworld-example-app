'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.unfavoriteArticle =
  exports.homePageUnloaded =
  exports.getFavoriteArticles =
  exports.getArticlesByTag =
  exports.getArticlesByAuthor =
  exports.getAllArticles =
  exports.favoriteArticle =
  exports.default =
  exports.changeTab =
    void 0;

var _toolkit = require('@reduxjs/toolkit');

var _agent = _interopRequireDefault(require('../agent'));

var _profile = require('./profile');

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

var changeTab = function changeTab(tab) {
  return function (dispatch) {
    dispatch(articleListSlice.actions.changeTab(tab));
    return dispatch(getAllArticles());
  };
};

exports.changeTab = changeTab;
var getArticlesByAuthor = (0, _toolkit.createAsyncThunk)(
  'articleList/getArticlesByAuthor',
  function () {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      author = _ref.author,
      page = _ref.page;

    return _agent.default.Articles.byAuthor(author, page);
  }
);
exports.getArticlesByAuthor = getArticlesByAuthor;
var getAllArticles = (0, _toolkit.createAsyncThunk)(
  'articleList/getAll',
  function () {
    var _thunkApi$getState$ar;

    var _ref2 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      page = _ref2.page,
      author = _ref2.author,
      tag = _ref2.tag,
      favorited = _ref2.favorited;

    var thunkApi = arguments.length > 1 ? arguments[1] : undefined;
    return thunkApi.getState().articleList.tab === 'feed'
      ? _agent.default.Articles.feed(page)
      : _agent.default.Articles.all({
          page:
            page !== null && page !== void 0
              ? page
              : thunkApi.getState().articleList.currentPage,
          author:
            author !== null && author !== void 0
              ? author
              : thunkApi.getState().articleList.author,
          tag:
            tag !== null && tag !== void 0
              ? tag
              : thunkApi.getState().articleList.tag,
          favorited:
            favorited !== null && favorited !== void 0
              ? favorited
              : thunkApi.getState().articleList.favorited,
          limit:
            (_thunkApi$getState$ar =
              thunkApi.getState().articleList.articlesPerPage) !== null &&
            _thunkApi$getState$ar !== void 0
              ? _thunkApi$getState$ar
              : 10,
        });
  }
);
exports.getAllArticles = getAllArticles;
var getArticlesByTag = (0, _toolkit.createAsyncThunk)(
  'articleList/getArticlesByTag',
  function () {
    var _ref3 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      tag = _ref3.tag,
      page = _ref3.page;

    return _agent.default.Articles.byTag(tag, page);
  }
);
exports.getArticlesByTag = getArticlesByTag;
var getFavoriteArticles = (0, _toolkit.createAsyncThunk)(
  'articleList/getFavoriteArticles',
  function () {
    var _ref4 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      username = _ref4.username,
      page = _ref4.page;

    return _agent.default.Articles.favoritedBy(username, page);
  }
);
exports.getFavoriteArticles = getFavoriteArticles;
var favoriteArticle = (0, _toolkit.createAsyncThunk)(
  'articleList/favoriteArticle',
  _agent.default.Articles.favorite
);
exports.favoriteArticle = favoriteArticle;
var unfavoriteArticle = (0, _toolkit.createAsyncThunk)(
  'articleList/unfavoriteArticle',
  _agent.default.Articles.unfavorite
);
exports.unfavoriteArticle = unfavoriteArticle;
var initialState = {
  articles: [],
  articlesCount: 0,
  currentPage: 0,
  articlesPerPage: 10,
  tab: undefined,
  tag: undefined,
  author: undefined,
  favorited: undefined,
};
var articleListSlice = (0, _toolkit.createSlice)({
  name: 'articleList',
  initialState: initialState,
  reducers: {
    homePageUnloaded: function homePageUnloaded() {
      return initialState;
    },
    changeTab: function changeTab(state, action) {
      state.tab = action.payload;
      delete state.tag;
    },
  },
  extraReducers: function extraReducers(builder) {
    builder.addCase(favoriteArticle.fulfilled, function (state, action) {
      state.articles = state.articles.map(function (article) {
        return article.slug === action.payload.article.slug
          ? _objectSpread(
              _objectSpread({}, article),
              {},
              {
                favorited: action.payload.article.favorited,
                favoritesCount: action.payload.article.favoritesCount,
              }
            )
          : article;
      });
    });
    builder.addCase(unfavoriteArticle.fulfilled, function (state, action) {
      state.articles = state.articles.map(function (article) {
        return article.slug === action.payload.article.slug
          ? _objectSpread(
              _objectSpread({}, article),
              {},
              {
                favorited: action.payload.article.favorited,
                favoritesCount: action.payload.article.favoritesCount,
              }
            )
          : article;
      });
    });
    builder.addCase(getAllArticles.fulfilled, function (state, action) {
      var _action$meta$arg$page, _action$meta$arg;

      state.articles = action.payload.articles;
      state.articlesCount = action.payload.articlesCount;
      state.currentPage =
        (_action$meta$arg$page =
          (_action$meta$arg = action.meta.arg) === null ||
          _action$meta$arg === void 0
            ? void 0
            : _action$meta$arg.page) !== null &&
        _action$meta$arg$page !== void 0
          ? _action$meta$arg$page
          : 0;
    });
    builder.addCase(getArticlesByTag.fulfilled, function (state, action) {
      var _action$meta$arg$page2, _action$meta$arg2, _action$meta$arg3;

      return {
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage:
          (_action$meta$arg$page2 =
            (_action$meta$arg2 = action.meta.arg) === null ||
            _action$meta$arg2 === void 0
              ? void 0
              : _action$meta$arg2.page) !== null &&
          _action$meta$arg$page2 !== void 0
            ? _action$meta$arg$page2
            : 0,
        tag:
          (_action$meta$arg3 = action.meta.arg) === null ||
          _action$meta$arg3 === void 0
            ? void 0
            : _action$meta$arg3.tag,
        articlesPerPage: 10,
      };
    });
    builder.addCase(getArticlesByAuthor.fulfilled, function (_, action) {
      var _action$meta$arg$page3, _action$meta$arg4, _action$meta$arg5;

      return {
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage:
          (_action$meta$arg$page3 =
            (_action$meta$arg4 = action.meta.arg) === null ||
            _action$meta$arg4 === void 0
              ? void 0
              : _action$meta$arg4.page) !== null &&
          _action$meta$arg$page3 !== void 0
            ? _action$meta$arg$page3
            : 0,
        author:
          (_action$meta$arg5 = action.meta.arg) === null ||
          _action$meta$arg5 === void 0
            ? void 0
            : _action$meta$arg5.author,
        articlesPerPage: 5,
      };
    });
    builder.addCase(getFavoriteArticles.fulfilled, function (_, action) {
      var _action$meta$arg$page4, _action$meta$arg6, _action$meta$arg7;

      return {
        articles: action.payload.articles,
        articlesCount: action.payload.articlesCount,
        currentPage:
          (_action$meta$arg$page4 =
            (_action$meta$arg6 = action.meta.arg) === null ||
            _action$meta$arg6 === void 0
              ? void 0
              : _action$meta$arg6.page) !== null &&
          _action$meta$arg$page4 !== void 0
            ? _action$meta$arg$page4
            : 0,
        favorited:
          (_action$meta$arg7 = action.meta.arg) === null ||
          _action$meta$arg7 === void 0
            ? void 0
            : _action$meta$arg7.username,
        articlesPerPage: 5,
      };
    });
    builder.addMatcher(
      function (action) {
        return [_profile.profilePageUnloaded.type].includes(action.type);
      },
      function () {
        return initialState;
      }
    );
  },
});
var homePageUnloaded = articleListSlice.actions.homePageUnloaded;
exports.homePageUnloaded = homePageUnloaded;
var _default = articleListSlice.reducer;
exports.default = _default;
