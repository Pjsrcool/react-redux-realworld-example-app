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

var _articleList = require('../reducers/articleList');

var _TagsList = _interopRequireDefault(require('../features/tags/TagsList'));

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

var FAVORITED_CLASS = 'btn btn-sm btn-primary';
var NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';
/**
 * Show a preview of an article
 *
 * @param {Object} props
 * @param {Object} props.article
 * @example
 * <ArticlePreview
 *    article={{
 *      slug: 'how-to-train-your-dragon',
 *      title: 'How to train your dragon',
 *      description: 'Ever wonder how?',
 *      body: 'It takes a Jacobian',
 *      tagList: ['dragons', 'training'],
 *      createdAt: '2016-02-18T03:22:56.637Z',
 *      updatedAt: '2016-02-18T03:48:35.824Z',
 *      favorited: false,
 *      favoritesCount: 0,
 *      author: {
 *        username: 'jake',
 *        bio: 'I work at statefarm',
 *        image: 'https://i.stack.imgur.com/xHWG8.jpg',
 *        following: false,
 *      },
 *    }}
 * />
 */

function ArticlePreview(_ref) {
  var article = _ref.article;
  var dispatch = (0, _reactRedux.useDispatch)();
  var favoriteButtonClass = article.favorited
    ? FAVORITED_CLASS
    : NOT_FAVORITED_CLASS;

  var handleClick = function handleClick(event) {
    event.preventDefault();

    if (article.favorited) {
      dispatch((0, _articleList.unfavoriteArticle)(article.slug));
    } else {
      dispatch((0, _articleList.favoriteArticle)(article.slug));
    }
  };

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'article-preview',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'article-meta',
      },
      /*#__PURE__*/ _react.default.createElement(
        _reactRouterDom.Link,
        {
          to: '/@'.concat(article.author.username),
        },
        /*#__PURE__*/ _react.default.createElement('img', {
          src:
            article.author.image ||
            'https://static.productionready.io/images/smiley-cyrus.jpg',
          alt: article.author.username,
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'info',
        },
        /*#__PURE__*/ _react.default.createElement(
          _reactRouterDom.Link,
          {
            className: 'author',
            to: '/@'.concat(article.author.username),
          },
          article.author.username
        ),
        /*#__PURE__*/ _react.default.createElement(
          'time',
          {
            className: 'date',
            dateTime: article.createdAt,
          },
          new Date(article.createdAt).toDateString()
        )
      ),
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'pull-xs-right',
        },
        /*#__PURE__*/ _react.default.createElement(
          'button',
          {
            className: favoriteButtonClass,
            onClick: handleClick,
          },
          /*#__PURE__*/ _react.default.createElement('i', {
            className: 'ion-heart',
          }),
          ' ',
          article.favoritesCount
        )
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      _reactRouterDom.Link,
      {
        to: '/article/'.concat(article.slug),
        className: 'preview-link',
      },
      /*#__PURE__*/ _react.default.createElement('h1', null, article.title),
      /*#__PURE__*/ _react.default.createElement(
        'p',
        null,
        article.description
      ),
      /*#__PURE__*/ _react.default.createElement('span', null, 'Read more...'),
      /*#__PURE__*/ _react.default.createElement(_TagsList.default, {
        tags: article.tagList,
      })
    )
  );
}

var _default = (0, _react.memo)(ArticlePreview);

exports.default = _default;
