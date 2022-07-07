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

var _jestFetchMock = _interopRequireDefault(require('jest-fetch-mock'));

var _reduxTestkit = require('redux-testkit');

var _agent = _interopRequireDefault(require('../../agent'));

var _utils = require('../../common/utils');

var _commentsSlice = _interopRequireWildcard(require('./commentsSlice'));

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

describe('Comments reducer', function () {
  var initialRootState = {
    auth: {
      status: _utils.Status.IDLE,
    },
    comments: {
      status: _utils.Status.IDLE,
      ids: [],
      entities: {},
    },
  };
  var withUserRootState = {
    auth: {
      status: _utils.Status.SUCCESS,
      token: 'jwt.token.here',
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
  var successRootState = {
    auth: {
      status: _utils.Status.SUCCESS,
      token: 'jwt.token.here',
      user: {
        email: 'warren.boyd@mailinator.com',
        username: 'warren_boyd',
        bio: 'Asperiores quos dolorem iure et.',
        image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
      },
    },
    comments: {
      status: _utils.Status.SUCCESS,
      ids: [1],
      entities: {
        1: {
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
      },
    },
  };
  beforeAll(function () {
    _jestFetchMock.default.enableMocks();
  });
  beforeEach(function () {
    _agent.default.setToken();

    _jestFetchMock.default.resetMocks();
  });
  afterAll(function () {
    _jestFetchMock.default.disableMocks();
  });
  it('should have initial state', function () {
    expect(
      (0, _commentsSlice.default)(undefined, {
        type: '',
      })
    ).toMatchInlineSnapshot(
      '\n      Object {\n        "entities": Object {},\n        "ids": Array [],\n        "status": "idle",\n      }\n    '
    );
  });
  it(
    'should require to be authenticated to create a comment',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _context.next = 2;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.createComment)
                  .withState(initialRootState)
                  .execute({
                    articleSlug: 'how-to-train-your-dragon',
                    comment: {
                      body: 'Dolore explicabo veniam at quo qui vero qui voluptas.',
                    },
                  });

              case 2:
                dispatched = _context.sent;
                expect(dispatched).toHaveLength(0);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
  it(
    'should create a comment',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var dispatched, sliceState;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                _agent.default.setToken('jwt.token.here');

                _jestFetchMock.default.mockResponse(
                  /*#__PURE__*/ (function () {
                    var _ref3 = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(
                        request
                      ) {
                        return regeneratorRuntime.wrap(function _callee2$(
                          _context2
                        ) {
                          while (1) {
                            switch ((_context2.prev = _context2.next)) {
                              case 0:
                                expect(request.method).toBe('POST');
                                expect(
                                  request.headers.has('authorization')
                                ).toBe(true);
                                expect(
                                  request.headers.get('authorization')
                                ).toMatch(/Token .*/);
                                _context2.next = 5;
                                return expect(
                                  request.json()
                                ).resolves.toMatchObject({
                                  comment: {
                                    body: expect.any(String),
                                  },
                                });

                              case 5:
                                return _context2.abrupt(
                                  'return',
                                  '{\n        "comment": {\n          "id": 1,\n          "createdAt": "'
                                    .concat(
                                      new Date().toISOString(),
                                      '",\n          "updatedAt": "'
                                    )
                                    .concat(
                                      new Date().toISOString(),
                                      '",\n          "body": "Dolore explicabo veniam at quo qui vero qui voluptas.",\n          "author": {\n            "username": "warren_boyd",\n            "bio": "Asperiores quos dolorem iure et.",\n            "image": "https://cdn.fakercloud.com/avatars/sprayaga_128.jpg",\n            "following": false\n          }\n        }\n      }'
                                    )
                                );

                              case 6:
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

                _context3.next = 4;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.createComment)
                  .withState(withUserRootState)
                  .execute({
                    articleSlug: 'how-to-train-your-dragon',
                    comment: {
                      body: 'Dolore explicabo veniam at quo qui vero qui voluptas.',
                    },
                  });

              case 4:
                dispatched = _context3.sent;
                expect(dispatched).toHaveLength(2);
                sliceState = (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .withState(withUserRootState.comments)
                  .execute(dispatched[0].getAction());
                expect(sliceState).toHaveProperty(
                  'status',
                  _utils.Status.LOADING
                );
                expect(sliceState).toHaveProperty('ids', [
                  dispatched[0].getAction().meta.requestId,
                ]);
                expect(sliceState).toHaveProperty(
                  'entities.'.concat(dispatched[0].getAction().meta.requestId)
                );
                expect(
                  sliceState.entities[dispatched[0].getAction().meta.requestId]
                ).toMatchObject({
                  id: expect.any(String),
                  body: 'Dolore explicabo veniam at quo qui vero qui voluptas.',
                  createdAt: expect.any(String),
                  updatedAt: expect.any(String),
                  author: {
                    bio: 'Asperiores quos dolorem iure et.',
                    email: 'warren.boyd@mailinator.com',
                    image:
                      'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
                    username: 'warren_boyd',
                  },
                });
                sliceState = (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .withState(sliceState)
                  .execute(dispatched[1].getAction());
                expect(sliceState).toHaveProperty(
                  'status',
                  _utils.Status.SUCCESS
                );
                expect(sliceState).toHaveProperty('ids', [1]);
                expect(sliceState).toHaveProperty('entities', {
                  1: {
                    id: expect.any(Number),
                    body: 'Dolore explicabo veniam at quo qui vero qui voluptas.',
                    createdAt: expect.any(String),
                    updatedAt: expect.any(String),
                    author: {
                      username: 'warren_boyd',
                      bio: 'Asperiores quos dolorem iure et.',
                      image:
                        'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
                      following: false,
                    },
                  },
                });

              case 15:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    )
  );
  it(
    'should only send one create comment request at once',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.next = 2;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.createComment)
                  .withState(
                    _objectSpread(
                      _objectSpread({}, withUserRootState),
                      {},
                      {
                        comments: _objectSpread(
                          _objectSpread({}, withUserRootState.comments),
                          {},
                          {
                            status: _utils.Status.LOADING,
                          }
                        ),
                      }
                    )
                  )
                  .execute({
                    articleSlug: 'how-to-train-your-dragon',
                    comment: {
                      body: 'Dolore explicabo veniam at quo qui vero qui voluptas.',
                    },
                  });

              case 2:
                dispatched = _context4.sent;
                expect(dispatched).toHaveLength(0);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    )
  );
  it(
    'should handle the create errors',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  '{\n        "errors": {\n          "body": ["can\'t be blank"]\n        }\n      }',
                  {
                    status: 422,
                  }
                );

                _context5.next = 3;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.createComment)
                  .withState(withUserRootState)
                  .execute({
                    articleSlug: 'how-to-train-your-dragon',
                    comment: {
                      body: '',
                    },
                  });

              case 3:
                dispatched = _context5.sent;
                expect(dispatched).toHaveLength(2);
                (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .withState(withUserRootState.comments)
                  .expect(dispatched[0].getAction())
                  .toChangeInState({
                    status: _utils.Status.LOADING,
                  });
                (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .withState(
                    _objectSpread(
                      _objectSpread({}, withUserRootState.comments),
                      {},
                      {
                        status: _utils.Status.LOADING,
                      }
                    )
                  )
                  .expect(dispatched[1].getAction())
                  .toReturnState({
                    status: _utils.Status.FAILURE,
                    ids: [],
                    entities: {},
                    errors: {
                      body: ["can't be blank"],
                    },
                  });

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    )
  );
  it(
    'should get all comments for an article',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee6() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  '{\n      "comments": [\n        {\n          "id": 1,\n          "createdAt": "2016-02-18T03:22:56.637Z",\n          "updatedAt": "2016-02-18T03:22:56.637Z",\n          "body": "It takes a Jacobian",\n          "author": {\n            "username": "jake",\n            "bio": "I work at statefarm",\n            "image": "https://i.stack.imgur.com/xHWG8.jpg",\n            "following": false\n          }\n        }\n      ]\n    }'
                );

                _context6.next = 3;
                return (0, _reduxTestkit.Thunk)(
                  _commentsSlice.getCommentsForArticle
                )
                  .withState(withUserRootState)
                  .execute('how-to-train-your-dragon');

              case 3:
                dispatched = _context6.sent;
                expect(dispatched).toHaveLength(2);
                (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .expect(dispatched[0].getAction())
                  .toChangeInState({
                    status: _utils.Status.LOADING,
                  });
                (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.SUCCESS,
                    ids: [1],
                    entities: {
                      1: {
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
                    },
                  });

              case 7:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6);
      })
    )
  );
  it(
    'should only send one get all comments request at once',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee7() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                _context7.next = 2;
                return (0, _reduxTestkit.Thunk)(
                  _commentsSlice.getCommentsForArticle
                )
                  .withState(
                    _objectSpread(
                      _objectSpread({}, withUserRootState),
                      {},
                      {
                        comments: _objectSpread(
                          _objectSpread({}, withUserRootState.comments),
                          {},
                          {
                            status: _utils.Status.LOADING,
                          }
                        ),
                      }
                    )
                  )
                  .execute('how-to-train-your-dragon');

              case 2:
                dispatched = _context7.sent;
                expect(dispatched).toHaveLength(0);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7);
      })
    )
  );
  it(
    'should require to be authenticated to remove a comment',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee8() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                _context8.next = 2;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.removeComment)
                  .withState(initialRootState)
                  .execute(1);

              case 2:
                dispatched = _context8.sent;
                expect(dispatched).toHaveLength(0);

              case 4:
              case 'end':
                return _context8.stop();
            }
          }
        }, _callee8);
      })
    )
  );
  it(
    'should remove a comment',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee10() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch ((_context10.prev = _context10.next)) {
              case 0:
                _agent.default.setToken('jwt.token.here');

                _jestFetchMock.default.mockResponse(
                  /*#__PURE__*/ (function () {
                    var _ref10 = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee9(
                        request
                      ) {
                        return regeneratorRuntime.wrap(function _callee9$(
                          _context9
                        ) {
                          while (1) {
                            switch ((_context9.prev = _context9.next)) {
                              case 0:
                                expect(request.method).toBe('DELETE');
                                expect(
                                  request.headers.has('authorization')
                                ).toBe(true);
                                expect(
                                  request.headers.get('authorization')
                                ).toMatch(/Token .*/);
                                return _context9.abrupt('return', '{}');

                              case 4:
                              case 'end':
                                return _context9.stop();
                            }
                          }
                        },
                        _callee9);
                      })
                    );

                    return function (_x2) {
                      return _ref10.apply(this, arguments);
                    };
                  })()
                );

                _context10.next = 4;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.removeComment)
                  .withState(successRootState)
                  .execute({
                    articleSlug: 'how-to-train-your-dragon',
                    commentId: 1,
                  });

              case 4:
                dispatched = _context10.sent;
                expect(dispatched).toHaveLength(2);
                (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .withState(successRootState.comments)
                  .expect(dispatched[0].getAction())
                  .toChangeInState({
                    status: _utils.Status.LOADING,
                  });
                (0, _reduxTestkit.Reducer)(_commentsSlice.default)
                  .withState(
                    _objectSpread(
                      _objectSpread({}, successRootState.comments),
                      {},
                      {
                        status: _utils.Status.LOADING,
                      }
                    )
                  )
                  .expect(dispatched[1].getAction())
                  .toReturnState({
                    status: _utils.Status.SUCCESS,
                    ids: [],
                    entities: {},
                  });

              case 8:
              case 'end':
                return _context10.stop();
            }
          }
        }, _callee10);
      })
    )
  );
  it(
    'should only send one remove comment request at once',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee11() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch ((_context11.prev = _context11.next)) {
              case 0:
                _context11.next = 2;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.removeComment)
                  .withState(
                    _objectSpread(
                      _objectSpread({}, withUserRootState),
                      {},
                      {
                        comments: _objectSpread(
                          _objectSpread({}, withUserRootState.comments),
                          {},
                          {
                            status: _utils.Status.LOADING,
                          }
                        ),
                      }
                    )
                  )
                  .execute({
                    articleSlug: 'how-to-train-your-dragon',
                    commentId: 1,
                  });

              case 2:
                dispatched = _context11.sent;
                expect(dispatched).toHaveLength(0);

              case 4:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11);
      })
    )
  );
  it(
    'should only send remove comment request when the comment exists in state',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee12() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch ((_context12.prev = _context12.next)) {
              case 0:
                _context12.next = 2;
                return (0, _reduxTestkit.Thunk)(_commentsSlice.removeComment)
                  .withState(successRootState)
                  .execute({
                    articleSlug: 'how-to-train-your-dragon',
                    commentId: 2,
                  });

              case 2:
                dispatched = _context12.sent;
                expect(dispatched).toHaveLength(0);

              case 4:
              case 'end':
                return _context12.stop();
            }
          }
        }, _callee12);
      })
    )
  );
});
describe('Comments selector', function () {
  var successRootState = {
    auth: {
      status: _utils.Status.SUCCESS,
      token: 'jwt.token.here',
      user: {
        email: 'warren.boyd@mailinator.com',
        username: 'warren_boyd',
        bio: 'Asperiores quos dolorem iure et.',
        image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
      },
    },
    comments: {
      status: _utils.Status.SUCCESS,
      ids: [1, 2],
      entities: {
        1: {
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
        2: {
          id: 2,
          createdAt: '2016-02-18T04:22:56.637Z',
          updatedAt: '2016-02-18T04:22:56.637Z',
          body: 'Dolore explicabo veniam at quo qui vero qui voluptas. Aperiam nisi dicta. Minima in rem.',
          author: {
            username: 'warren_boyd',
            bio: 'Asperiores quos dolorem iure et.',
            image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
            following: false,
          },
        },
      },
    },
  };
  it("should get if is the comment's author", function () {
    (0, _reduxTestkit.Selector)((0, _commentsSlice.selectIsAuthor)(1))
      .expect(successRootState)
      .toReturn(false);
    (0, _reduxTestkit.Selector)((0, _commentsSlice.selectIsAuthor)(2))
      .expect(successRootState)
      .toReturn(true);
  });
  it('should get all the comments', function () {
    (0, _reduxTestkit.Selector)(_commentsSlice.selectAllComments)
      .expect(successRootState)
      .toReturn([
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
          createdAt: '2016-02-18T04:22:56.637Z',
          updatedAt: '2016-02-18T04:22:56.637Z',
          body: 'Dolore explicabo veniam at quo qui vero qui voluptas. Aperiam nisi dicta. Minima in rem.',
          author: {
            username: 'warren_boyd',
            bio: 'Asperiores quos dolorem iure et.',
            image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
            following: false,
          },
        },
      ]);
  });
});
