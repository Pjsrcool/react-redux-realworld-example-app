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

var _reactRouterDom = require('react-router-dom');

var _ListErrors = _interopRequireDefault(
  require('../../components/ListErrors')
);

var _authSlice = require('../auth/authSlice');

var _CommentList = _interopRequireDefault(require('./CommentList'));

var _commentsSlice = require('./commentsSlice');

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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
/**
 * Add comment
 *
 * @example
 * <CommentForm />
 */

function CommentForm() {
  var _currentUser$image;

  var dispatch = (0, _reactRedux.useDispatch)();
  var currentUser = (0, _reactRedux.useSelector)(_authSlice.selectUser);

  var _useParams = (0, _reactRouterDom.useParams)(),
    slug = _useParams.slug;

  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    body = _useState2[0],
    setBody = _useState2[1];
  /**
   * @type {React.ChangeEventHandler<HTMLTextAreaElement>}
   */

  var changeBody = function changeBody(event) {
    setBody(event.target.value);
  };
  /**
   * @type {React.FormEventHandler<HTMLFormElement>}
   */

  var saveComment = function saveComment(event) {
    event.preventDefault();
    dispatch(
      (0, _commentsSlice.createComment)({
        articleSlug: slug,
        comment: {
          body: body,
        },
      })
    );
    setBody('');
  };

  return /*#__PURE__*/ _react.default.createElement(
    'form',
    {
      className: 'card comment-form',
      onSubmit: saveComment,
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'card-block',
      },
      /*#__PURE__*/ _react.default.createElement('textarea', {
        className: 'form-control',
        placeholder: 'Write a comment...',
        rows: 3,
        value: body,
        onChange: changeBody,
      })
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'card-footer',
      },
      /*#__PURE__*/ _react.default.createElement('img', {
        className: 'comment-author-img',
        alt: currentUser.username,
        src:
          (_currentUser$image = currentUser.image) !== null &&
          _currentUser$image !== void 0
            ? _currentUser$image
            : 'https://static.productionready.io/images/smiley-cyrus.jpg',
      }),
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          className: 'btn btn-sm btn-primary',
          type: 'submit',
        },
        'Post Comment'
      )
    )
  );
}
/**
 * Comments for an article
 *
 * @example
 * <CommentSection />
 */

function CommentSection() {
  var isAuthenticaded = (0, _reactRedux.useSelector)(
    _authSlice.selectIsAuthenticated
  );
  var errors = (0, _reactRedux.useSelector)(_commentsSlice.selectErrors);
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'row',
    },
    isAuthenticaded
      ? /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'col-xs-12 col-md-8 offset-md-2',
          },
          /*#__PURE__*/ _react.default.createElement(_ListErrors.default, {
            errors: errors,
          }),
          /*#__PURE__*/ _react.default.createElement(CommentForm, null),
          /*#__PURE__*/ _react.default.createElement(_CommentList.default, null)
        )
      : /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'col-xs-12 col-md-8 offset-md-2',
          },
          /*#__PURE__*/ _react.default.createElement(
            'p',
            null,
            /*#__PURE__*/ _react.default.createElement(
              _reactRouterDom.Link,
              {
                to: '/login',
              },
              'Sign in'
            ),
            '\xA0or\xA0',
            /*#__PURE__*/ _react.default.createElement(
              _reactRouterDom.Link,
              {
                to: '/register',
              },
              'sign up'
            ),
            '\xA0to add comments on this article.'
          ),
          /*#__PURE__*/ _react.default.createElement(_CommentList.default, null)
        )
  );
}

var _default = (0, _react.memo)(CommentSection);

exports.default = _default;
