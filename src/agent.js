'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;
var _excluded = ['slug'];

var _process$env$REACT_AP;

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
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

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'next', value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, 'throw', err);
      }

      _next(undefined);
    });
  };
}

var API_ROOT =
  (_process$env$REACT_AP = process.env.REACT_APP_BACKEND_URL) !== null &&
  _process$env$REACT_AP !== void 0
    ? _process$env$REACT_AP
    : 'https://conduit.productionready.io/api';
/**
 * Serialize object to URL params
 *
 * @param {Record<string, unknown>} object
 * @returns {String}
 */

function serialize(object) {
  var params = [];

  for (var param in object) {
    if (Object.hasOwnProperty.call(object, param) && object[param] != null) {
      params.push(
        ''.concat(param, '=').concat(encodeURIComponent(object[param]))
      );
    }
  }

  return params.join('&');
}

var token = null;
/**
 *
 * @typedef {Object} ApiError
 * @property {{[property: string]: string}} errors
 */

/**
 * @typedef  {Object} UserAuth
 * @property {Object} user
 * @property {String} user.email
 * @property {String} user.username
 * @property {String} user.bio
 * @property {String} user.image
 * @property {String} user.token
 *
 * @typedef  {Object}  Profile
 * @property {String}  username
 * @property {String}  bio
 * @property {String}  image
 * @property {Boolean} following
 *
 * @typedef  {Object}   Tags
 * @property {String[]} tags
 *
 * @typedef  {Object}   Article
 * @property {String}   title
 * @property {String}   slug
 * @property {String}   body
 * @property {String}   description
 * @property {String[]} tagList
 * @property {Profile}  author
 * @property {Boolean}  favorited
 * @property {Number}   favoritesCount
 * @property {String}   createdAt
 * @property {String}   updatedAt
 *
 * @typedef  {Object}  ArticleResponse
 * @property {Article} article
 *
 * @typedef  {Object}    ArticlesResponse
 * @property {Article[]} articles
 * @property {Number}    articlesCount
 *
 * @typedef  {Object}  Comment
 * @property {String}  id
 * @property {String}  body
 * @property {Profile} author
 * @property {String}  createdAt
 * @property {String}  updatedAt
 *
 * @typedef  {Object}  CommentResponse
 * @property {Comment} comment
 *
 * @typedef  {Object}    CommentsResponse
 * @property {Comment[]} comments
 *
 * @typedef  {Object}  ProfileResponse
 * @property {Profile} profile
 */

/**
 * API client
 *
 * @param {String} url The endpoint
 * @param {Object} body The request's body
 * @param {('GET'|'DELETE'|'PUT'|'POST')} [method='GET'] The request's method
 *
 * @throws {@link ApiError API Error}
 *
 * @returns {Promise<Object>} API response's body
 */

var agent = /*#__PURE__*/ (function () {
  var _ref = _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee(url, body) {
      var method,
        headers,
        response,
        result,
        _args = arguments;
      return regeneratorRuntime.wrap(
        function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                method =
                  _args.length > 2 && _args[2] !== undefined ? _args[2] : 'GET';
                headers = new Headers();

                if (body) {
                  headers.set('Content-Type', 'application/json');
                }

                if (token) {
                  headers.set('Authorization', 'Token '.concat(token));
                }

                _context.next = 6;
                return fetch(''.concat(API_ROOT).concat(url), {
                  method: method,
                  headers: headers,
                  body: body ? JSON.stringify(body) : undefined,
                });

              case 6:
                response = _context.sent;
                _context.prev = 7;
                _context.next = 10;
                return response.json();

              case 10:
                result = _context.sent;
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context['catch'](7);
                result = {
                  errors: _defineProperty({}, response.status, [
                    response.statusText,
                  ]),
                };

              case 16:
                if (response.ok) {
                  _context.next = 18;
                  break;
                }

                throw result;

              case 18:
                return _context.abrupt('return', result);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        },
        _callee,
        null,
        [[7, 13]]
      );
    })
  );

  return function agent(_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();

var requests = {
  /**
   * Send a DELETE request
   *
   * @param {String} url The endpoint
   * @returns {Promise<Object>}
   */
  del: function del(url) {
    return agent(url, undefined, 'DELETE');
  },

  /**
   * Send a GET request
   *
   * @param {String} url The endpoint
   * @param {Object} [query={}] URL parameters
   * @param {Number} [query.limit=10]
   * @param {Number} [query.page]
   * @param {String} [query.author]
   * @param {String} [query.tag]
   * @param {String} [query.favorited]
   * @returns {Promise<Object>}
   */
  get: function get(url) {
    var query =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (
      Number.isSafeInteger(
        query === null || query === void 0 ? void 0 : query.page
      )
    ) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = query.page * query.limit;
    }

    delete query.page;
    var isEmptyQuery = query == null || Object.keys(query).length === 0;
    return agent(
      isEmptyQuery ? url : ''.concat(url, '?').concat(serialize(query))
    );
  },

  /**
   * Send a PUT request
   *
   * @param {String} url The endpoint
   * @param {Record<string, unknown>} body The request's body
   * @returns {Promise<Object>}
   */
  put: function put(url, body) {
    return agent(url, body, 'PUT');
  },

  /**
   * Send a POST request
   *
   * @param {String} url The endpoint
   * @param {Record<string, unknown>} body The request's body
   * @returns {Promise<Object>}
   */
  post: function post(url, body) {
    return agent(url, body, 'POST');
  },
};
var Auth = {
  /**
   * Get current user
   *
   * @returns {Promise<UserAuth>}
   */
  current: function current() {
    return requests.get('/user');
  },

  /**
   * Login with email and password
   *
   * @param {String} email
   * @param {String} password
   * @returns {Promise<UserAuth>}
   */
  login: function login(email, password) {
    return requests.post('/users/login', {
      user: {
        email: email,
        password: password,
      },
    });
  },

  /**
   * Register with username, email and password
   *
   * @param {String} username
   * @param {String} email
   * @param {String} password
   * @returns {Promise<UserAuth>}
   */
  register: function register(username, email, password) {
    return requests.post('/users', {
      user: {
        username: username,
        email: email,
        password: password,
      },
    });
  },

  /**
   * Update user
   *
   * @param {Object}  user
   * @param {String} [user.email]
   * @param {String} [user.username]
   * @param {String} [user.bio]
   * @param {String} [user.image]
   * @param {String} [user.password]
   * @returns {Promise<UserAuth>}
   */
  save: function save(user) {
    return requests.put('/user', {
      user: user,
    });
  },
};
var Tags = {
  /**
   * Get all tags
   *
   * @returns {Promise<Tags>}
   */
  getAll: function getAll() {
    return requests.get('/tags');
  },
};
var Articles = {
  /**
   * Get all articles
   *
   * @param {Object} query Article's query parameters
   * @param {Number} [query.limit=10]
   * @param {Number} [query.page]
   * @param {String} [query.author]
   * @param {String} [query.tag]
   * @param {String} [query.favorited]
   * @returns {Promise<ArticlesResponse>}
   */
  all: function all(query) {
    return requests.get('/articles', query);
  },

  /**
   * Get all articles from author
   *
   * @param {String} author Article's author
   * @param {Number} [page]
   * @returns {Promise<ArticlesResponse>}
   */
  byAuthor: function byAuthor(author, page) {
    return requests.get('/articles', {
      author: author,
      limit: 5,
      page: page,
    });
  },

  /**
   * Get all articles by tag
   *
   * @param {String} tag Article's tag
   * @param {Number} page
   * @returns {Promise<ArticlesResponse>}
   */
  byTag: function byTag(tag, page) {
    return requests.get('/articles', {
      tag: tag,
      page: page,
    });
  },

  /**
   * Remove one article
   *
   * @param {String} slug Article's slug
   * @returns {Promise<{}>}
   */
  del: function del(slug) {
    return requests.del('/articles/'.concat(slug));
  },

  /**
   * Favorite one article
   *
   * @param {String} slug Article's slug
   * @returns {Promise<ArticleResponse>}
   */
  favorite: function favorite(slug) {
    return requests.post('/articles/'.concat(slug, '/favorite'));
  },

  /**
   * Get article favorited by author
   *
   * @param {String} username Username
   * @param {Number} [page]
   * @returns {Promise<ArticlesResponse>}
   */
  favoritedBy: function favoritedBy(username, page) {
    return requests.get('/articles', {
      favorited: username,
      limit: 5,
      page: page,
    });
  },

  /**
   * Get all articles in the user's feed
   *
   * @param {Number} [page]
   * @returns {Promise<ArticlesResponse>}
   */
  feed: function feed(page) {
    return requests.get('/articles/feed', {
      page: page,
    });
  },

  /**
   * Get one article by slug
   *
   * @param {String} slug Article's slug
   * @returns {Promise<ArticleResponse>}
   */
  get: function get(slug) {
    return requests.get('/articles/'.concat(slug));
  },

  /**
   * Unfavorite one article
   *
   * @param {String} slug Article's slug
   * @returns {Promise<ArticleResponse>}
   */
  unfavorite: function unfavorite(slug) {
    return requests.del('/articles/'.concat(slug, '/favorite'));
  },

  /**
   * Update one article
   *
   * @param {Partial<Article>} article
   * @returns {Promise<ArticleResponse>}
   */
  update: function update(_ref2) {
    var slug = _ref2.slug,
      article = _objectWithoutProperties(_ref2, _excluded);

    return requests.put('/articles/'.concat(slug), {
      article: article,
    });
  },

  /**
   * Create a new article
   *
   * @param {Object}   article
   * @param {String}   article.title
   * @param {String}   article.description
   * @param {String}   article.body
   * @param {String[]} article.tagList
   * @returns {Promise<ArticleResponse>}
   */
  create: function create(article) {
    return requests.post('/articles', {
      article: article,
    });
  },
};
var Comments = {
  /**
   * Create a new comment for article
   *
   * @param {String} slug Article's slug
   * @param {Object} comment
   * @param {String} comment.body
   * @returns {Promise<CommentResponse>}
   */
  create: function create(slug, comment) {
    return requests.post('/articles/'.concat(slug, '/comments'), {
      comment: comment,
    });
  },

  /**
   * Remove one comment
   *
   * @param {String} slug Article's slug
   * @param {String} commentId Comment's id
   * @returns {Promise<{}>}
   */
  delete: function _delete(slug, commentId) {
    return requests.del(
      '/articles/'.concat(slug, '/comments/').concat(commentId)
    );
  },

  /**
   * Get all comments for one article
   *
   * @param {String} slug Article's slug
   * @returns {Promise<CommentsResponse>}
   */
  forArticle: function forArticle(slug) {
    return requests.get('/articles/'.concat(slug, '/comments'));
  },
};
var Profile = {
  /**
   * Follow another user
   *
   * @param {String} username User's username
   * @returns {Profile<ProfileResponse>}
   */
  follow: function follow(username) {
    return requests.post('/profiles/'.concat(username, '/follow'));
  },

  /**
   * Get the profile of an user
   *
   * @param {String} username User's username
   * @returns {Profile<ProfileResponse>}
   */
  get: function get(username) {
    return requests.get('/profiles/'.concat(username));
  },

  /**
   * Unfollow another user
   *
   * @param {String} username User's username
   * @returns {Profile<ProfileResponse>}
   */
  unfollow: function unfollow(username) {
    return requests.del('/profiles/'.concat(username, '/follow'));
  },
};
var _default = {
  Articles: Articles,
  Auth: Auth,
  Comments: Comments,
  Profile: Profile,
  Tags: Tags,
  setToken: function setToken(_token) {
    token = _token;
  },
};
exports.default = _default;
