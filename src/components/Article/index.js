'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _react = _interopRequireWildcard(require('react'));

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _snarkdown = _interopRequireDefault(require('snarkdown'));

var _xss = _interopRequireDefault(require('xss'));

var _TagsList = _interopRequireDefault(require('../../features/tags/TagsList'));

var _article = require('../../reducers/article');

var _ArticleMeta = _interopRequireDefault(require('./ArticleMeta'));

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

var CommentSection = (0, _react.lazy)(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(
      require('../../features/comments/CommentSection')
    );
  });
});
/**
 * Show one article with its comments
 *
 * @param {import('react-router-dom').RouteComponentProps<{ slug: string }>} props
 * @example
 * <Article />
 */

function Article(_ref) {
  var match = _ref.match;
  var dispatch = (0, _reactRedux.useDispatch)();
  var article = (0, _reactRedux.useSelector)(function (state) {
    return state.article.article;
  });
  var inProgress = (0, _reactRedux.useSelector)(function (state) {
    return state.article.inProgress;
  });

  var _useParams = (0, _reactRouter.useParams)(),
    slug = _useParams.slug;

  var renderMarkdown = function renderMarkdown() {
    return {
      __html: (0, _xss.default)((0, _snarkdown.default)(article.body)),
    };
  };

  (0, _react.useEffect)(
    function () {
      var fetchArticle = dispatch((0, _article.getArticle)(slug));
      return function () {
        fetchArticle.abort();
      };
    },
    [match]
  );
  (0, _react.useEffect)(function () {
    return function () {
      return dispatch((0, _article.articlePageUnloaded)());
    };
  }, []);

  if (!article) {
    return /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'article-page',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'container page',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'row article-content',
          },
          /*#__PURE__*/ _react.default.createElement(
            'div',
            {
              className: 'col-xs-12',
            },
            inProgress &&
              /*#__PURE__*/ _react.default.createElement(
                'h1',
                {
                  role: 'alert',
                },
                'Article is loading'
              )
          )
        )
      )
    );
  }

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'article-page',
    },
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'banner',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'container',
        },
        /*#__PURE__*/ _react.default.createElement('h1', null, article.title),
        /*#__PURE__*/ _react.default.createElement(_ArticleMeta.default, null)
      )
    ),
    /*#__PURE__*/ _react.default.createElement(
      'div',
      {
        className: 'container page',
      },
      /*#__PURE__*/ _react.default.createElement(
        'div',
        {
          className: 'row article-content',
        },
        /*#__PURE__*/ _react.default.createElement(
          'div',
          {
            className: 'col-xs-12',
          },
          /*#__PURE__*/ _react.default.createElement('article', {
            dangerouslySetInnerHTML: renderMarkdown(),
          }),
          /*#__PURE__*/ _react.default.createElement(_TagsList.default, {
            tags: article.tagList,
          })
        )
      ),
      /*#__PURE__*/ _react.default.createElement('hr', null),
      /*#__PURE__*/ _react.default.createElement(
        _react.Suspense,
        {
          fallback: /*#__PURE__*/ _react.default.createElement(
            'p',
            null,
            'Loading comments'
          ),
        },
        /*#__PURE__*/ _react.default.createElement(CommentSection, null)
      )
    )
  );
}

var _default = (0, _react.memo)(Article);

exports.default = _default;
