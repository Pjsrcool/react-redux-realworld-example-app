'use strict';

var _react = require('@testing-library/react');

var _userEvent = _interopRequireDefault(require('@testing-library/user-event'));

var _faker = _interopRequireDefault(require('faker'));

var _history = require('history');

var _jestFetchMock = _interopRequireDefault(require('jest-fetch-mock'));

var _reactRouterDom = require('react-router-dom');

var _agent = _interopRequireDefault(require('../../agent'));

var _store = require('../../app/store');

var _utils = require('../../common/utils');

var _utils2 = _interopRequireDefault(require('../../test/utils'));

var _CommentSection = _interopRequireDefault(require('./CommentSection'));

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

describe('<CommentSection />', function () {
  var unauthenticatedRootState = {
    articleList: {
      articlesCount: 1,
      articlesPerPage: 10,
      currentPage: 0,
      articles: [
        {
          slug: 'how-to-train-your-dragon-2',
          title: 'How to train your dragon 2',
          description: 'So toothless',
          body: 'It a dragon',
          tagList: ['dragons', 'training'],
          createdAt: '2016-02-18T03:22:56.637Z',
          updatedAt: '2016-02-18T03:48:35.824Z',
          favorited: false,
          favoritesCount: 0,
          author: {
            username: 'jake',
            bio: 'I work at statefarm',
            image: 'https://i.stack.imgur.com/xHWG8.jpg',
            following: false,
          },
        },
      ],
    },
    auth: {
      status: _utils.Status.IDLE,
    },
    comments: {
      status: _utils.Status.IDLE,
      ids: [],
      entities: {},
    },
  };
  var authenticatedRootState = {
    articleList: {
      articlesCount: 1,
      articlesPerPage: 10,
      currentPage: 0,
      articles: [
        {
          slug: 'how-to-train-your-dragon-2',
          title: 'How to train your dragon 2',
          description: 'So toothless',
          body: 'It a dragon',
          tagList: ['dragons', 'training'],
          createdAt: '2016-02-18T03:22:56.637Z',
          updatedAt: '2016-02-18T03:48:35.824Z',
          favorited: true,
          favoritesCount: 1,
          author: {
            username: 'jake',
            bio: 'I work at statefarm',
            image: 'https://i.stack.imgur.com/xHWG8.jpg',
            following: true,
          },
        },
      ],
    },
    auth: {
      status: _utils.Status.SUCCESS,
      token: '{"sub":"warren_boyd"}',
      user: {
        email: 'warren.boyd@mailinator.com',
        username: 'warren_boyd',
        bio: 'Asperiores quos dolorem iure et.',
        image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
      },
    },
    comments: {
      status: _utils.Status.IDLE,
      ids: [],
      entities: {},
    },
  };
  var commentsResponse = JSON.stringify({
    comments: [
      {
        id: 1,
        createdAt: '2016-02-18T03:22:56.637Z',
        updatedAt: '2016-02-18T03:22:56.637Z',
        body: 'It takes a Jacobian',
        author: {
          username: 'jake',
          bio: 'I work at statefarm',
          image: 'https://i.stack.imgur.com/xHWG8.jpg',
          following: false,
        },
      },
      {
        id: 2,
        createdAt: '2018-07-28T03:13:47.736Z',
        updatedAt: '2018-07-28T03:13:47.736Z',
        body: 'Dolore explicabo veniam at quo qui vero qui voluptas.',
        author: {
          username: 'warren_boyd',
          bio: 'Asperiores quos dolorem iure et.',
          image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
          following: false,
        },
      },
    ],
  });
  beforeAll(function () {
    _jestFetchMock.default.enableMocks();
  });
  beforeEach(function () {
    _jestFetchMock.default.resetMocks();
  });
  afterAll(function () {
    _jestFetchMock.default.disableMocks();
  });
  it(
    'should render the comment section',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var history, store;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(commentsResponse);

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/article/how-to-train-your-dragon-2'],
                });
                store = (0, _store.makeStore)(unauthenticatedRootState);
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/article/:slug',
                    component: _CommentSection.default,
                  }),
                  {
                    history: history,
                    store: store,
                  }
                );
                expect(
                  _react.screen.getByRole('link', {
                    name: /sign in/i,
                  })
                ).toBeInTheDocument();
                expect(
                  _react.screen.getByRole('link', {
                    name: /sign up/i,
                  })
                ).toBeInTheDocument();
                _context.next = 8;
                return (0, _react.waitForElementToBeRemoved)(function () {
                  return _react.screen.getByText('Loading comments');
                });

              case 8:
                _context.next = 10;
                return expect(
                  _react.screen.findAllByTestId('comment')
                ).resolves.not.toHaveLength(0);

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
  it(
    'should create a new comment',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var history, store, comment;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _agent.default.setToken(authenticatedRootState.auth.token);

                _jestFetchMock.default.mockResponses(
                  commentsResponse,
                  /*#__PURE__*/ (function () {
                    var _ref3 = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(
                        request
                      ) {
                        var _yield$request$json, comment;

                        return regeneratorRuntime.wrap(function _callee2$(
                          _context2
                        ) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                _context2.next = 2;
                                return request.json();

                              case 2:
                                _yield$request$json = _context2.sent;
                                comment = _yield$request$json.comment;
                                return _context2.abrupt(
                                  'return',
                                  JSON.stringify({
                                    comment: {
                                      id: Date.now() / (24 * 36e5),
                                      createdAt: new Date(),
                                      updatedAt: new Date(),
                                      body: comment.body,
                                      author: _objectSpread(
                                        _objectSpread(
                                          {},
                                          authenticatedRootState.auth.user
                                        ),
                                        {},
                                        {
                                          following: false,
                                          email: undefined,
                                        }
                                      ),
                                    },
                                  })
                                );

                              case 5:
                              case 'end':
                                return _context2.stop();
                            }
                          }
                        },
                        _callee2);
                      })
                    );

                    return function (_x) {
                      return _ref3.apply(this, arguments);
                    };
                  })()
                );

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/article/how-to-train-your-dragon-2'],
                });
                store = (0, _store.makeStore)(authenticatedRootState);
                comment = _faker.default.lorem.sentence();
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/article/:slug',
                    component: _CommentSection.default,
                  }),
                  {
                    history: history,
                    store: store,
                  }
                );
                expect(
                  _react.screen.queryByRole('list')
                ).not.toBeInTheDocument();
                _context3.next = 9;
                return (0, _react.waitForElementToBeRemoved)(function () {
                  return _react.screen.getByText('Loading comments');
                });

              case 9:
                _context3.next = 11;
                return expect(
                  _react.screen.findAllByTestId('comment')
                ).resolves.not.toHaveLength(0);

              case 11:
                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Write a comment...'),
                  comment
                );

                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /post comment/i,
                  })
                );

                (0, _react.within)(
                  _react.screen.getAllByTestId('comment')[0]
                ).getByText(comment);

              case 14:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    )
  );
  it(
    'should show the validation errors',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
        var history, store;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _agent.default.setToken(authenticatedRootState.auth.token);

                _jestFetchMock.default.mockResponses(commentsResponse, [
                  '{\n      "errors": {\n        "body": ["can\'t be blank"]\n      }\n    }',
                  {
                    status: 422,
                  },
                ]);

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/article/how-to-train-your-dragon-2'],
                });
                store = (0, _store.makeStore)(authenticatedRootState);
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/article/:slug',
                    component: _CommentSection.default,
                  }),
                  {
                    history: history,
                    store: store,
                  }
                );
                expect(
                  _react.screen.queryByRole('list')
                ).not.toBeInTheDocument();
                _context4.next = 8;
                return (0, _react.waitForElementToBeRemoved)(function () {
                  return _react.screen.getByText('Loading comments');
                });

              case 8:
                _context4.next = 10;
                return expect(
                  _react.screen.findAllByTestId('comment')
                ).resolves.not.toHaveLength(0);

              case 10:
                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /post comment/i,
                  })
                );

                _context4.next = 13;
                return expect(
                  _react.screen.findByRole('list')
                ).resolves.not.toBeEmptyDOMElement();

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    )
  );
  it(
    'should remove a comment',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
        var history, store;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _agent.default.setToken(authenticatedRootState.auth.token);

                _jestFetchMock.default.mockResponses(commentsResponse, '{}');

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/article/how-to-train-your-dragon-2'],
                });
                store = (0, _store.makeStore)(authenticatedRootState);
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/article/:slug',
                    component: _CommentSection.default,
                  }),
                  {
                    history: history,
                    store: store,
                  }
                );
                expect(
                  _react.screen.queryByRole('list')
                ).not.toBeInTheDocument();
                _context5.next = 8;
                return (0, _react.waitForElementToBeRemoved)(function () {
                  return _react.screen.getByText('Loading comments');
                });

              case 8:
                _context5.next = 10;
                return expect(
                  _react.screen.findAllByTestId('comment')
                ).resolves.not.toHaveLength(0);

              case 10:
                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /delete comment/i,
                  })
                );

                _context5.next = 13;
                return (0, _react.waitForElementToBeRemoved)(
                  _react.screen.getByRole('button', {
                    name: /delete comment/i,
                  })
                );

              case 13:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    )
  );
});
