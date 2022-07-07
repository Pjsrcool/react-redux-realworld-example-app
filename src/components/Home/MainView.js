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

var _reactRedux = require('react-redux');

var _ArticleList = _interopRequireDefault(require('../ArticleList'));

var _articleList = require('../../reducers/articleList');

var _authSlice = require('../../features/auth/authSlice');

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
 * Your feed tab
 *
 * @example
 * <YourFeedTab />
 */

function YourFeedTab() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var isAuthenticated = (0, _reactRedux.useSelector)(
    _authSlice.selectIsAuthenticated
  );
  var currentTab = (0, _reactRedux.useSelector)(function (state) {
    return state.articleList.tab;
  });
  var isActiveTab = currentTab === 'feed';

  if (!isAuthenticated) {
    return null;
  }

  var dispatchChangeTab = function dispatchChangeTab() {
    dispatch((0, _articleList.changeTab)('feed'));
  };

  return /*#__PURE__*/ _react.default.createElement(
    'li',
    {
      className: 'nav-item',
    },
    /*#__PURE__*/ _react.default.createElement(
      'button',
      {
        type: 'button',
        className: isActiveTab ? 'nav-link active' : 'nav-link',
        onClick: dispatchChangeTab,
      },
      'Your Feed'
    )
  );
}
/**
 * Global feed tab
 *
 * @example
 * <GlobalFeedTab />
 */

function GlobalFeedTab() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var currentTab = (0, _reactRedux.useSelector)(function (state) {
    return state.articleList.tab;
  });
  var isActiveTab = currentTab === 'all';
  /**
   * Change to all tab
   * @type{React.MouseEventHandler}
   */

  var dispatchChangeTab = function dispatchChangeTab() {
    dispatch((0, _articleList.changeTab)('all'));
  };

  return /*#__PURE__*/ _react.default.createElement(
    'li',
    {
      className: 'nav-item',
    },
    /*#__PURE__*/ _react.default.createElement(
      'button',
      {
        type: 'button',
        className: isActiveTab ? 'nav-link active' : 'nav-link',
        onClick: dispatchChangeTab,
      },
      'Global Feed'
    )
  );
}
/**
 * Tag tab
 *
 * @example
 * <TagFilterTab />
 */

function TagFilterTab() {
  var tag = (0, _reactRedux.useSelector)(function (state) {
    return state.articleList.tag;
  });

  if (!tag) {
    return null;
  }

  return /*#__PURE__*/ _react.default.createElement(
    'li',
    {
      className: 'nav-item',
    },
    /*#__PURE__*/ _react.default.createElement(
      'button',
      {
        type: 'button',
        className: 'nav-link active',
      },
      /*#__PURE__*/ _react.default.createElement('i', {
        className: 'ion-pound',
      }),
      ' ',
      tag
    )
  );
}
/**
 * Show the tab navigation and the list of articles
 *
 * @example
 * <MainView />
 */

function MainView() {
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'col-md-9',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'feed-toggle',
      },
      /*#__PURE__*/ _react.default.createElement(
        'ul',
        {
          className: 'nav nav-pills outline-active',
        },
        /*#__PURE__*/ _react.default.createElement(YourFeedTab, null),
        /*#__PURE__*/ _react.default.createElement(GlobalFeedTab, null),
        /*#__PURE__*/ _react.default.createElement(TagFilterTab, null)
      )
    ),
    /*#__PURE__*/ _react.default.createElement(_ArticleList.default, null)
  );
}

var _default = (0, _react.memo)(MainView);

exports.default = _default;
