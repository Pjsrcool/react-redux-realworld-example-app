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

var _authSlice = _interopRequireWildcard(require('./authSlice'));

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

describe('Auth reducer', function () {
  var initialRootState = {
    /**
     * @type {import('./authSlice').AuthState}
     */
    auth: {
      status: _utils.Status.IDLE,
    },
  };
  var successRootState = {
    /**
     * @type {import('./authSlice').AuthState}
     */
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
  };
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
    'should have initial state',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                expect(
                  (0, _authSlice.default)(undefined, {
                    type: '',
                  })
                ).toMatchInlineSnapshot(
                  '\n      Object {\n        "status": "idle",\n      }\n    '
                );

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
  it(
    'should register a new user',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
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
                                _context2.next = 2;
                                return expect(
                                  request.json()
                                ).resolves.toMatchObject({
                                  user: {
                                    username: expect.any(String),
                                    email: expect.any(String),
                                    password: expect.any(String),
                                  },
                                });

                              case 2:
                                return _context2.abrupt(
                                  'return',
                                  '{\n        "user": {\n          "email": "warren.boyd@mailinator.com",\n          "username": "warren_boyd",\n          "token": "jwt.token.here",\n          "bio": "Asperiores quos dolorem iure et.",\n          "image": "https://cdn.fakercloud.com/avatars/sprayaga_128.jpg"\n        }\n      }'
                                );

                              case 3:
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

                _context3.next = 3;
                return (0, _reduxTestkit.Thunk)(_authSlice.register)
                  .withState(initialRootState)
                  .execute({
                    username: 'warren_boyd',
                    email: 'warren.boyd@mailinator.com',
                    password: 'Pa$$w0rd!',
                  });

              case 3:
                dispatched = _context3.sent;
                expect(dispatched).toHaveLength(2);
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .expect(dispatched[0].getAction())
                  .toChangeInState({
                    status: _utils.Status.LOADING,
                  });
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.SUCCESS,
                    token: expect.any(String),
                    user: expect.objectContaining({
                      email: expect.any(String),
                      username: expect.any(String),
                      bio: expect.any(String),
                      image: expect.any(String),
                    }),
                  });

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    )
  );
  it(
    'should only send one register request at once',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _context4.next = 2;
                return (0, _reduxTestkit.Thunk)(_authSlice.register)
                  .withState({
                    auth: {
                      status: _utils.Status.LOADING,
                    },
                  })
                  .execute({
                    username: 'warren_boyd',
                    email: 'warren.boyd@mailinator.com',
                    password: 'Pa$$w0rd!',
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
    'should handle the register errors',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
        var dispatched, state;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  '{\n        "errors": {\n          "email": [\n            "can\'t be blank"\n          ],\n          "password": [\n            "can\'t be blank"\n          ],\n          "username": [\n            "can\'t be blank",\n            "is too short (minimum is 1 character)"\n          ]\n        }\n      }',
                  {
                    status: 422,
                  }
                );

                _context5.next = 3;
                return (0, _reduxTestkit.Thunk)(_authSlice.register)
                  .withState(initialRootState)
                  .execute({
                    username: '',
                    email: '',
                    password: '',
                  });

              case 3:
                dispatched = _context5.sent;
                expect(dispatched).toHaveLength(2);
                state = (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(initialRootState.auth)
                  .execute(dispatched[0].getAction());
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(state)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.FAILURE,
                    errors: {
                      email: ["can't be blank"],
                      password: ["can't be blank"],
                      username: [
                        "can't be blank",
                        'is too short (minimum is 1 character)',
                      ],
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
    'should login with an existing user',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee7() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch ((_context7.prev = _context7.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  /*#__PURE__*/ (function () {
                    var _ref7 = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee6(
                        request
                      ) {
                        return regeneratorRuntime.wrap(function _callee6$(
                          _context6
                        ) {
                          while (1) {
                            switch ((_context6.prev = _context6.next)) {
                              case 0:
                                _context6.next = 2;
                                return expect(
                                  request.json()
                                ).resolves.toMatchObject({
                                  user: {
                                    email: expect.any(String),
                                    password: expect.any(String),
                                  },
                                });

                              case 2:
                                return _context6.abrupt(
                                  'return',
                                  '{\n        "user": {\n          "email": "warren.boyd@mailinator.com",\n          "username": "warren_boyd",\n          "token": "jwt.token.here",\n          "bio": "Asperiores quos dolorem iure et.",\n          "image": "https://cdn.fakercloud.com/avatars/sprayaga_128.jpg"\n        }\n      }'
                                );

                              case 3:
                              case 'end':
                                return _context6.stop();
                            }
                          }
                        },
                        _callee6);
                      })
                    );

                    return function (_x2) {
                      return _ref7.apply(this, arguments);
                    };
                  })()
                );

                _context7.next = 3;
                return (0, _reduxTestkit.Thunk)(_authSlice.login)
                  .withState(initialRootState)
                  .execute({
                    email: 'warren.boyd@mailinator.com',
                    password: 'Pa$$w0rd!',
                  });

              case 3:
                dispatched = _context7.sent;
                expect(dispatched).toHaveLength(2);
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .expect(dispatched[0].getAction())
                  .toChangeInState({
                    status: _utils.Status.LOADING,
                  });
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.SUCCESS,
                    token: expect.any(String),
                    user: expect.objectContaining({
                      email: expect.any(String),
                      username: expect.any(String),
                      bio: expect.any(String),
                      image: expect.any(String),
                    }),
                  });

              case 7:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7);
      })
    )
  );
  it(
    'should only send one login request at once',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee8() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch ((_context8.prev = _context8.next)) {
              case 0:
                _context8.next = 2;
                return (0, _reduxTestkit.Thunk)(_authSlice.login)
                  .withState({
                    auth: {
                      status: _utils.Status.LOADING,
                    },
                  })
                  .execute({
                    email: 'warren.boyd@mailinator.com',
                    password: 'Pa$$w0rd!',
                  });

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
    'should handle the login errors',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee9() {
        var dispatched, state;
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch ((_context9.prev = _context9.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  '{\n        "errors": {\n          "email or password": ["is invalid"]\n        }\n      }',
                  {
                    status: 422,
                  }
                );

                _context9.next = 3;
                return (0, _reduxTestkit.Thunk)(_authSlice.login)
                  .withState(initialRootState)
                  .execute({
                    email: 'warren.boyd@mailinator.com',
                    password: 'password',
                  });

              case 3:
                dispatched = _context9.sent;
                expect(dispatched).toHaveLength(2);
                state = (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(initialRootState.auth)
                  .execute(dispatched[0].getAction());
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(state)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.FAILURE,
                    errors: {
                      'email or password': ['is invalid'],
                    },
                  });

              case 7:
              case 'end':
                return _context9.stop();
            }
          }
        }, _callee9);
      })
    )
  );
  it(
    'should get the current user',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee11() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch ((_context11.prev = _context11.next)) {
              case 0:
                _agent.default.setToken('jwt.token.here');

                _jestFetchMock.default.mockResponse(
                  /*#__PURE__*/ (function () {
                    var _ref11 = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee10(
                        request
                      ) {
                        return regeneratorRuntime.wrap(function _callee10$(
                          _context10
                        ) {
                          while (1) {
                            switch ((_context10.prev = _context10.next)) {
                              case 0:
                                expect(
                                  request.headers.has('authorization')
                                ).toBe(true);
                                expect(
                                  request.headers.get('authorization')
                                ).toMatch(/Token .*/);
                                return _context10.abrupt(
                                  'return',
                                  '{\n        "user": {\n          "email": "warren.boyd@mailinator.com",\n          "username": "warren_boyd",\n          "token": "jwt.token.2",\n          "bio": "Asperiores quos dolorem iure et.",\n          "image": "https://cdn.fakercloud.com/avatars/sprayaga_128.jpg"\n        }\n      }'
                                );

                              case 3:
                              case 'end':
                                return _context10.stop();
                            }
                          }
                        },
                        _callee10);
                      })
                    );

                    return function (_x3) {
                      return _ref11.apply(this, arguments);
                    };
                  })()
                );

                _context11.next = 4;
                return (0, _reduxTestkit.Thunk)(_authSlice.getUser)
                  .withState({
                    auth: {
                      status: _utils.Status.SUCCESS,
                      token: 'jwt.token.here',
                    },
                  })
                  .execute();

              case 4:
                dispatched = _context11.sent;
                expect(dispatched).toHaveLength(2);
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .expect(dispatched[0].getAction())
                  .toChangeInState({
                    status: _utils.Status.LOADING,
                  });
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.SUCCESS,
                    token: expect.any(String),
                    user: expect.objectContaining({
                      email: expect.any(String),
                      username: expect.any(String),
                      bio: expect.any(String),
                      image: expect.any(String),
                    }),
                  });

              case 8:
              case 'end':
                return _context11.stop();
            }
          }
        }, _callee11);
      })
    )
  );
  it(
    'should require the token to get current user',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee12() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch ((_context12.prev = _context12.next)) {
              case 0:
                _context12.next = 2;
                return (0, _reduxTestkit.Thunk)(_authSlice.getUser)
                  .withState(initialRootState)
                  .execute();

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
  it(
    'should update the current user',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee14() {
        var dispatched, state;
        return regeneratorRuntime.wrap(function _callee14$(_context14) {
          while (1) {
            switch ((_context14.prev = _context14.next)) {
              case 0:
                _agent.default.setToken('jwt.token.here');

                _jestFetchMock.default.mockResponse(
                  /*#__PURE__*/ (function () {
                    var _ref14 = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee13(
                        request
                      ) {
                        return regeneratorRuntime.wrap(function _callee13$(
                          _context13
                        ) {
                          while (1) {
                            switch ((_context13.prev = _context13.next)) {
                              case 0:
                                expect(
                                  request.headers.has('authorization')
                                ).toBe(true);
                                expect(
                                  request.headers.get('authorization')
                                ).toMatch(/Token .*/);
                                expect(request.method).toBe('PUT');
                                _context13.next = 5;
                                return expect(
                                  request.json()
                                ).resolves.toMatchObject({
                                  user: {
                                    username: expect.any(String),
                                    email: expect.any(String),
                                    password: expect.any(String),
                                    bio: expect.any(String),
                                    image: expect.any(String),
                                  },
                                });

                              case 5:
                                return _context13.abrupt(
                                  'return',
                                  '{\n        "user": {\n          "email": "brittany77@mailinator.com",\n          "username": "brittany_lang",\n          "token": "json.web.token",\n          "bio": "You can\'t connect the sensor without bypassing the cross-platform HTTP array!",\n          "image": "https://cdn.fakercloud.com/avatars/yehudab_128.jpg"\n        }\n      }'
                                );

                              case 6:
                              case 'end':
                                return _context13.stop();
                            }
                          }
                        },
                        _callee13);
                      })
                    );

                    return function (_x4) {
                      return _ref14.apply(this, arguments);
                    };
                  })()
                );

                _context14.next = 4;
                return (0, _reduxTestkit.Thunk)(_authSlice.updateUser)
                  .withState(successRootState)
                  .execute({
                    email: 'brittany77@mailinator.com',
                    username: 'brittany_lang',
                    password: 'aR4LSPOnzSoQGHE',
                    bio: "You can't connect the sensor without bypassing the cross-platform HTTP array!",
                    image: 'https://cdn.fakercloud.com/avatars/yehudab_128.jpg',
                  });

              case 4:
                dispatched = _context14.sent;
                expect(dispatched).toHaveLength(2);
                state = (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(successRootState.auth)
                  .execute(dispatched[0].getAction());
                expect(state).toHaveProperty('status', _utils.Status.LOADING);
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(
                    _objectSpread(
                      _objectSpread({}, successRootState.auth),
                      {},
                      {
                        status: _utils.Status.LOADING,
                      }
                    )
                  )
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.SUCCESS,
                    token: 'json.web.token',
                    user: {
                      email: 'brittany77@mailinator.com',
                      username: 'brittany_lang',
                      bio: "You can't connect the sensor without bypassing the cross-platform HTTP array!",
                      image:
                        'https://cdn.fakercloud.com/avatars/yehudab_128.jpg',
                    },
                  });

              case 9:
              case 'end':
                return _context14.stop();
            }
          }
        }, _callee14);
      })
    )
  );
  it(
    'should handle the update user errors',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee15() {
        var dispatched, state;
        return regeneratorRuntime.wrap(function _callee15$(_context15) {
          while (1) {
            switch ((_context15.prev = _context15.next)) {
              case 0:
                _agent.default.setToken('jwt.token.here');

                _jestFetchMock.default.mockResponse(
                  '{\n        "errors": {\n          "password": ["is too short (minimum is 8 characters)"]\n        }\n      }',
                  {
                    status: 422,
                  }
                );

                _context15.next = 4;
                return (0, _reduxTestkit.Thunk)(_authSlice.updateUser)
                  .withState(successRootState)
                  .execute({
                    password: 'pasword',
                  });

              case 4:
                dispatched = _context15.sent;
                expect(dispatched).toHaveLength(2);
                state = (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(initialRootState.auth)
                  .execute(dispatched[0].getAction());
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(state)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.FAILURE,
                    errors: {
                      password: ['is too short (minimum is 8 characters)'],
                    },
                  });

              case 8:
              case 'end':
                return _context15.stop();
            }
          }
        }, _callee15);
      })
    )
  );
  it(
    'should logout the current user',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee16() {
        return regeneratorRuntime.wrap(function _callee16$(_context16) {
          while (1) {
            switch ((_context16.prev = _context16.next)) {
              case 0:
                (0, _reduxTestkit.Reducer)(_authSlice.default)
                  .withState(successRootState.auth)
                  .expect(_authSlice.logout)
                  .toReturnState({
                    status: _utils.Status.IDLE,
                  });

              case 1:
              case 'end':
                return _context16.stop();
            }
          }
        }, _callee16);
      })
    )
  );
});
describe('Auth selectors', function () {
  it('should get if is authenticated', function () {
    (0, _reduxTestkit.Selector)(_authSlice.selectIsAuthenticated)
      .expect({
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
      })
      .toReturn(true);
    (0, _reduxTestkit.Selector)(_authSlice.selectIsAuthenticated)
      .expect({
        auth: {
          status: _utils.Status.FAILURE,
          token: 'jwt.token.here',
          errors: {
            'email or password': ['is invalid'],
          },
        },
      })
      .toReturn(false);
    (0, _reduxTestkit.Selector)(_authSlice.selectIsAuthenticated)
      .expect({
        auth: {
          status: _utils.Status.SUCCESS,
          user: {
            email: 'warren.boyd@mailinator.com',
            username: 'warren_boyd',
            bio: 'Asperiores quos dolorem iure et.',
            image: 'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
          },
        },
      })
      .toReturn(false);
    (0, _reduxTestkit.Selector)(_authSlice.selectIsAuthenticated)
      .expect({
        auth: {
          status: _utils.Status.IDLE,
        },
      })
      .toReturn(false);
  });
});
