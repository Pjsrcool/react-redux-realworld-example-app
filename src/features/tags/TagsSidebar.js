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

var _articleList = require('../../reducers/articleList');

var _tagsSlice = require('./tagsSlice');

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
 * Show all tags in the sidebar
 *
 * @example
 * <TagsSidebar />
 */

function TagsSidebar() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var tags = (0, _reactRedux.useSelector)(_tagsSlice.selectTags);
  var isLoading = (0, _reactRedux.useSelector)(_tagsSlice.selectIsLoading);
  (0, _react.useEffect)(function () {
    var fetchTags = dispatch((0, _tagsSlice.getAllTags)());
    return function () {
      fetchTags.abort();
    };
  }, []);
  /**
   * Dispatch get all articles by a tag
   *
   * @param {String} tag
   * @returns {React.MouseEventHandler}
   */

  var handleClickTag = function handleClickTag(tag) {
    return function () {
      dispatch(
        (0, _articleList.getArticlesByTag)({
          tag: tag,
        })
      );
    };
  };

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'sidebar',
    },
    /*#__PURE__*/ _react.default.createElement('p', null, 'Popular Tags'),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'tag-list',
      },
      isLoading
        ? /*#__PURE__*/ _react.default.createElement(
            'p',
            null,
            'Loading Tags...'
          )
        : tags.map(function (tag) {
            return /*#__PURE__*/ _react.default.createElement(
              'button',
              {
                type: 'button',
                className: 'tag-default tag-pill',
                key: tag,
                onClick: handleClickTag(tag),
              },
              tag
            );
          })
    )
  );
}

var _default = (0, _react.memo)(TagsSidebar);

exports.default = _default;
