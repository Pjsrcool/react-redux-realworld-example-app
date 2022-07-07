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

var _ListErrors = _interopRequireDefault(require('./ListErrors'));

var _article = require('../reducers/article');

var _reactRouter = require('react-router');

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

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
  );
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
 * Editor component
 * @param {import('react-router-dom').RouteComponentProps<{ slug?: string }>} props
 * @example
 * <Editor />
 */

function Editor(_ref) {
  var match = _ref.match;
  var dispatch = (0, _reactRedux.useDispatch)();

  var _useSelector = (0, _reactRedux.useSelector)(function (state) {
      return state.article;
    }),
    article = _useSelector.article,
    errors = _useSelector.errors,
    inProgress = _useSelector.inProgress;

  var _useParams = (0, _reactRouter.useParams)(),
    slug = _useParams.slug;

  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    title = _useState2[0],
    setTitle = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    description = _useState4[0],
    setDescription = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    body = _useState6[0],
    setBody = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    tagInput = _useState8[0],
    setTagInput = _useState8[1];

  var _useState9 = (0, _react.useState)([]),
    _useState10 = _slicedToArray(_useState9, 2),
    tagList = _useState10[0],
    setTagList = _useState10[1];

  var navigate = (0, _reactRouter.useNavigate)();
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changeTitle = function changeTitle(event) {
    setTitle(event.target.value);
  };
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changeDescription = function changeDescription(event) {
    setDescription(event.target.value);
  };
  /**
   * @type {React.ChangeEventHandler<HTMLAreaElement>}
   */

  var changeBody = function changeBody(event) {
    setBody(event.target.value);
  };
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changeTagInput = function changeTagInput(event) {
    setTagInput(event.target.value);
  };
  /**
   * Reset the form values
   */

  var reset = function reset() {
    if (slug && article) {
      setTitle(article.title);
      setDescription(article.description);
      setBody(article.body);
      setTagList(article.tagList);
    } else {
      setTitle('');
      setDescription('');
      setBody('');
      setTagInput('');
      setTagList([]);
    }
  };
  /**
   * Add a tag to tagList
   * @type {React.KeyboardEventHandler<HTMLInputElement>}
   */

  var addTag = function addTag(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (tagInput && !tagList.includes(tagInput))
        setTagList([].concat(_toConsumableArray(tagList), [tagInput]));
      setTagInput('');
    }
  };
  /**
   * Remove a tag from tagList
   *
   * @param {String} tag
   * @returns {React.MouseEventHandler}
   */

  var removeTag = function removeTag(tag) {
    return function () {
      setTagList(
        tagList.filter(function (_tag) {
          return _tag !== tag;
        })
      );
    };
  };
  /**
   * @type {React.MouseEventHandler<HTMLButtonElement>}
   */

  var submitForm = function submitForm(event) {
    event.preventDefault();
    var article = {
      slug: slug,
      title: title,
      description: description,
      body: body,
      tagList: tagList,
    };
    dispatch(
      slug
        ? (0, _article.updateArticle)(article)
        : (0, _article.createArticle)(article)
    );
    navigate('/');
  };

  (0, _react.useEffect)(
    function () {
      reset();

      if (slug) {
        dispatch((0, _article.getArticle)(slug));
      }
    },
    [slug]
  );
  (0, _react.useEffect)(reset, [article]);
  (0, _react.useEffect)(function () {
    return function () {
      return dispatch((0, _article.articlePageUnloaded)());
    };
  }, []);
  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'editor-page',
    },
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
            className: 'col-md-10 offset-md-1 col-xs-12',
          },
          /*#__PURE__*/ _react.default.createElement(_ListErrors.default, {
            errors: errors,
          }),
          /*#__PURE__*/ _react.default.createElement(
            'form',
            null,
            /*#__PURE__*/ _react.default.createElement(
              'fieldset',
              null,
              /*#__PURE__*/ _react.default.createElement(
                'fieldset',
                {
                  className: 'form-group',
                },
                /*#__PURE__*/ _react.default.createElement('input', {
                  className: 'form-control form-control-lg',
                  type: 'text',
                  placeholder: 'Article Title',
                  value: title,
                  onChange: changeTitle,
                })
              ),
              /*#__PURE__*/ _react.default.createElement(
                'fieldset',
                {
                  className: 'form-group',
                },
                /*#__PURE__*/ _react.default.createElement('input', {
                  className: 'form-control',
                  type: 'text',
                  placeholder: "What's this article about?",
                  value: description,
                  onChange: changeDescription,
                })
              ),
              /*#__PURE__*/ _react.default.createElement(
                'fieldset',
                {
                  className: 'form-group',
                },
                /*#__PURE__*/ _react.default.createElement('textarea', {
                  className: 'form-control',
                  rows: '8',
                  placeholder: 'Write your article (in markdown)',
                  value: body,
                  onChange: changeBody,
                })
              ),
              /*#__PURE__*/ _react.default.createElement(
                'fieldset',
                {
                  className: 'form-group',
                },
                /*#__PURE__*/ _react.default.createElement('input', {
                  className: 'form-control',
                  type: 'text',
                  placeholder: 'Enter tags',
                  value: tagInput,
                  onChange: changeTagInput,
                  onKeyUp: addTag,
                }),
                /*#__PURE__*/ _react.default.createElement(
                  'div',
                  {
                    className: 'tag-list',
                  },
                  tagList.map(function (tag) {
                    return /*#__PURE__*/ _react.default.createElement(
                      'span',
                      {
                        className: 'tag-default tag-pill',
                        key: tag,
                      },
                      /*#__PURE__*/ _react.default.createElement('i', {
                        className: 'ion-close-round',
                        onClick: removeTag(tag),
                      }),
                      tag
                    );
                  })
                )
              ),
              /*#__PURE__*/ _react.default.createElement(
                'button',
                {
                  className: 'btn btn-lg pull-xs-right btn-primary',
                  type: 'button',
                  disabled: inProgress,
                  onClick: submitForm,
                },
                'Publish Article'
              )
            )
          )
        )
      )
    )
  );
}

var _default = (0, _react.memo)(Editor);

exports.default = _default;
