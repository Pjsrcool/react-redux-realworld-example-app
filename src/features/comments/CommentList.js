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

var _commentsSlice = require('./commentsSlice');

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
 * Delete a comment
 *
 * @param {object}  props
 * @param {number}  props.commentId
 * @example
 * <DeleteCommentButton commentId={1} />
 */

function DeleteCommentButton(_ref) {
  var commentId = _ref.commentId;
  var dispatch = (0, _reactRedux.useDispatch)();
  var isLoading = (0, _reactRedux.useSelector)(_commentsSlice.selectIsLoading);

  var _useParams = (0, _reactRouterDom.useParams)(),
    slug = _useParams.slug;
  /**
   * @type {React.MouseEventHandler<HTMLButtonElement>}
   */

  var deleteComment = function deleteComment() {
    dispatch(
      (0, _commentsSlice.removeComment)({
        articleSlug: slug,
        commentId: commentId,
      })
    );
  };

  return /*#__PURE__*/ _react.default.createElement(
    'button',
    {
      className: 'btn btn-sm btn-link mod-options',
      disabled: isLoading,
      onClick: deleteComment,
    },
    /*#__PURE__*/ _react.default.createElement('i', {
      className: 'ion-trash-a',
    }),
    /*#__PURE__*/ _react.default.createElement(
      'span',
      {
        className: 'sr-only',
      },
      'Delete comment'
    )
  );
}
/**
 *
 * @param {object} props
 * @param {import('../../agent').Comment} props.comment
 * @example
 * <Comment
 *    comment={{
 *      id: 1,
 *      createdAt: "2016-02-18T03:22:56.637Z",
 *      updatedAt: "2016-02-18T03:22:56.637Z",
 *      body: "It takes a Jacobian",
 *      author: {
 *        username: "jake",
 *        bio: "I work at statefarm",
 *        image: "https://i.stack.imgur.com/xHWG8.jpg",
 *        following: false,
 *      },
 *    }}
 * />
 */

function Comment(_ref2) {
  var _comment$author$image;

  var comment = _ref2.comment;
  var isAuthor = (0, _reactRedux.useSelector)(
    (0, _commentsSlice.selectIsAuthor)(comment.id)
  );
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'card',
      'data-testid': 'comment',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'card-block',
      },
      /*#__PURE__*/ _react.default.createElement(
        'p',
        {
          className: 'card-text',
        },
        comment.body
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'card-footer',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/@'.concat(comment.author.username),
          className: 'comment-author',
        },
        /*#__PURE__*/ _react.default.createElement('img', {
          className: 'comment-author-img',
          alt: comment.author.username,
          src:
            (_comment$author$image = comment.author.image) !== null &&
            _comment$author$image !== void 0
              ? _comment$author$image
              : 'https://static.productionready.io/images/smiley-cyrus.jpg',
        })
      ),
      '\xA0',
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/@'.concat(comment.author.username),
          className: 'comment-author',
        },
        comment.author.username
      ),
      /*#__PURE__*/ _react.default.createElement(
        'time',
        {
          className: 'date-posted',
          dateTime: comment.createdAt,
        },
        new Date(comment.createdAt).toDateString()
      ),
      isAuthor
        ? /*#__PURE__*/ _react.default.createElement(DeleteCommentButton, {
            commentId: comment.id,
          })
        : null
    )
  );
}
/**
 * List all comments of an article
 *
 * @example
 * <CommentList />
 */

function CommentList() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var comments = (0, _reactRedux.useSelector)(_commentsSlice.selectAllComments);
  var isLoading = (0, _reactRedux.useSelector)(_commentsSlice.selectIsLoading);

  var _useParams2 = (0, _reactRouterDom.useParams)(),
    slug = _useParams2.slug;

  (0, _react.useEffect)(
    function () {
      var fetchComments = dispatch(
        (0, _commentsSlice.getCommentsForArticle)(slug)
      );
      return function () {
        fetchComments.abort();
      };
    },
    [slug]
  );

  if (isLoading) {
    return /*#__PURE__*/ _react.default.createElement(
      'p',
      null,
      'Loading comments'
    );
  }

  return /*#__PURE__*/ _react.default.createElement(
    _react.default.Fragment,
    null,
    comments.map(function (comment) {
      return /*#__PURE__*/ _react.default.createElement(Comment, {
        key: comment.id,
        comment: comment,
      });
    })
  );
}

var _default = (0, _react.memo)(CommentList);

exports.default = _default;
