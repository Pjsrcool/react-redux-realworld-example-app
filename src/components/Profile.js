'use strict';

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

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactRouterDom = require('react-router-dom');

var _reactRedux = require('react-redux');

var _ArticleList = _interopRequireDefault(require('./ArticleList'));

var _articleList = require('../reducers/articleList');

var _profile = require('../reducers/profile');

var _authSlice = require('../features/auth/authSlice');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
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
/**
 * Go to profile settings
 *
 * @example
 * <EditProfileSettings />
 */

function EditProfileSettings() {
  return /*#__PURE__*/ _react.default.createElement(
    _reactRouterDom.Link,
    {
      to: '/settings',
      className: 'btn btn-sm btn-outline-secondary action-btn',
    },
    /*#__PURE__*/ _react.default.createElement('i', {
      className: 'ion-gear-a',
    }),
    ' Edit Profile Settings'
  );
}
/**
 * Follow or unfollow an user
 *
 * @param {Object} props
 * @param {String} props.username
 * @param {Boolean} props.following
 * @example
 * <FollowUserButton username="warren_boyd" following />
 */

function FollowUserButton(_ref) {
  var username = _ref.username,
    following = _ref.following;
  var navigate = (0, _reactRouterDom.useNavigate)();
  var dispatch = (0, _reactRedux.useDispatch)();
  var currentUser = (0, _reactRedux.useSelector)(_authSlice.selectUser);
  var classes = 'btn btn-sm action-btn';
  var textMessage;

  if (following) {
    classes += ' btn-secondary';
    textMessage = 'Unfollow '.concat(username);
  } else {
    classes += ' btn-outline-secondary';
    textMessage = 'Follow '.concat(username);
  }

  var handleClick = function handleClick() {
    if (!currentUser) {
      navigate.push('/register?redirectTo='.concat(location.pathname));
      return;
    }

    if (following) {
      dispatch((0, _profile.unfollow)(username));
    } else {
      dispatch((0, _profile.follow)(username));
    }
  };

  return /*#__PURE__*/ _react.default.createElement(
    'button',
    {
      className: classes,
      onClick: handleClick,
    },
    /*#__PURE__*/ _react.default.createElement('i', {
      className: 'ion-plus-round',
    }),
    '\xA0',
    textMessage
  );
}
/**
 * Show the profile of an user
 *
 * @param {Object} props
 * @param {Object} props.profile
 * @example
 * <UserInfo profile={{
 *      username: 'warren_boyd',
 *      email: 'warren.boyd@mailinator.com',
 *      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
 *      bio: null,
 *      following: false,
 *    }}
 * />
 */

function UserInfo(_ref2) {
  var profile = _ref2.profile;
  var currentUser = (0, _reactRedux.useSelector)(_authSlice.selectUser);
  var isCurrentUser =
    profile.username ===
    (currentUser === null || currentUser === void 0
      ? void 0
      : currentUser.username);
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'user-info',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'container',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'row',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'col-xs-12 col-md-10 offset-md-1',
          },
          /*#__PURE__*/ _react.default.createElement('img', {
            src:
              profile.image ||
              'https://static.productionready.io/images/smiley-cyrus.jpg',
            className: 'user-img',
            alt: profile.username,
          }),
          /*#__PURE__*/ _react.default.createElement(
            'h4',
            null,
            profile.username
          ),
          /*#__PURE__*/ _react.default.createElement('p', null, profile.bio),
          isCurrentUser
            ? /*#__PURE__*/ _react.default.createElement(
                EditProfileSettings,
                null
              )
            : /*#__PURE__*/ _react.default.createElement(FollowUserButton, {
                username: profile.username,
                following: profile.following,
              })
        )
      )
    )
  );
}
/**
 * Profile's navigation
 *
 * @param {Object}  props
 * @param {String}  props.username
 * @param {Boolean} props.isFavorites
 * @example
 * <ProfileTabs username="warren_boyd" isFavorites />
 */

function ProfileTabs(_ref3) {
  var username = _ref3.username,
    isFavorites = _ref3.isFavorites;
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'articles-toggle',
    },
    /*#__PURE__*/ _react.default.createElement(
      'ul',
      {
        className: 'nav nav-pills outline-active',
      },
      /*#__PURE__*/ _react.default.createElement(
        'li',
        {
          className: 'nav-item',
        },
        /*#__PURE__*/ _react.default.createElement(
          _reactRouterDom.Link,
          {
            className: isFavorites ? 'nav-link' : 'nav-link active',
            to: '/@'.concat(username),
          },
          'My Articles'
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        'li',
        {
          className: 'nav-item',
        },
        /*#__PURE__*/ _react.default.createElement(
          _reactRouterDom.Link,
          {
            className: isFavorites ? 'nav-link active' : 'nav-link',
            to: '/@'.concat(username, '/favorites'),
          },
          'Favorited Articles'
        )
      )
    )
  );
}
/**
 * Profile screen component
 * @param {import('react-router-dom').RouteComponentProps<{ username: string }>} props
 * @example
 * <Profile />
 */

function Profile(_ref4) {
  var location = _ref4.location,
    isFavoritePage = _ref4.isFavoritePage;
  var dispatch = (0, _reactRedux.useDispatch)();
  var profile = (0, _reactRedux.useSelector)(function (state) {
    return state.profile;
  });

  var _useParams = (0, _reactRouterDom.useParams)(),
    username = _useParams.username;

  (0, _react.useEffect)(
    function () {
      var fetchProfile = dispatch((0, _profile.getProfile)(username));
      var fetchArticles = dispatch(
        isFavoritePage
          ? (0, _articleList.getFavoriteArticles)({
              username: username,
            })
          : (0, _articleList.getArticlesByAuthor)({
              author: username,
            })
      );
      return function () {
        fetchProfile.abort();
        fetchArticles.abort();
      };
    },
    [username, isFavoritePage]
  );
  (0, _react.useEffect)(function () {
    return function () {
      return dispatch((0, _profile.profilePageUnloaded)());
    };
  }, []);

  if (!profile) {
    return null;
  }

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'profile-page',
    },
    /*#__PURE__*/ _react.default.createElement(UserInfo, {
      profile: profile,
    }),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'container page',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'row',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'col-xs-12 col-md-10 offset-md-1',
          },
          /*#__PURE__*/ _react.default.createElement(ProfileTabs, {
            username: profile.username,
            isFavorites: isFavoritePage,
          }),
          /*#__PURE__*/ _react.default.createElement(_ArticleList.default, null)
        )
      )
    )
  );
}

var _default = (0, _react.memo)(Profile);

exports.default = _default;
