'use strict';

var _react = require('@testing-library/react');

var _userEvent = _interopRequireDefault(require('@testing-library/user-event'));

var _faker = _interopRequireDefault(require('faker'));

var _jestFetchMock = _interopRequireDefault(require('jest-fetch-mock'));

var _history = require('history');

var _agent = _interopRequireDefault(require('../../agent'));

var _store = require('../../app/store');

var _utils = require('../../common/utils');

var _utils2 = _interopRequireDefault(require('../../test/utils'));

var _SettingsScreen = _interopRequireDefault(require('./SettingsScreen'));

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

describe('<SettingsScreen />', function () {
  var successRootState = {
    /**
     * @type {import('./authSlice').AuthState}
     */
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
  };
  beforeAll(function () {
    _jestFetchMock.default.enableMocks();
  });
  beforeEach(function () {
    _agent.default.setToken('{"sub":"warren_boyd"}');

    _jestFetchMock.default.resetMocks();
  });
  afterAll(function () {
    _jestFetchMock.default.disableMocks();
  });
  it(
    'should render the settings form',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var history, store;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/settings'],
                });
                store = (0, _store.makeStore)(successRootState);
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(
                    _SettingsScreen.default,
                    null
                  ),
                  {
                    history: history,
                    store: store,
                  }
                );
                expect(
                  _react.screen.queryByRole('list')
                ).not.toBeInTheDocument();

                _react.screen.getByRole('button', {
                  name: 'Update Settings',
                });

                _react.screen.getByRole('button', {
                  name: 'Or click here to logout.',
                });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
  it(
    'should submit the settings form',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var history, store, data;
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
                        var _yield$request$json, user;

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
                                user = _yield$request$json.user;
                                return _context2.abrupt(
                                  'return',
                                  JSON.stringify({
                                    user: _objectSpread(
                                      _objectSpread({}, user),
                                      {},
                                      {
                                        token: '{"sub":"'.concat(
                                          user.username,
                                          '"}'
                                        ),
                                        password: undefined,
                                      }
                                    ),
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
                  initialEntries: ['/settings'],
                });
                store = (0, _store.makeStore)(successRootState);
                data = {
                  image: _faker.default.internet.avatar(),
                  username: _faker.default.internet
                    .userName()
                    .replaceAll(/\W/g, '_')
                    .toLowerCase(),
                  bio: _faker.default.hacker.phrase(),
                  email: _faker.default.internet.exampleEmail().toLowerCase(),
                  password: _faker.default.internet.password(9, true),
                };
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(
                    _SettingsScreen.default,
                    null
                  ),
                  {
                    history: history,
                    store: store,
                  }
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('URL of profile picture'),
                  data.image
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Username'),
                  data.username
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Short bio about you'),
                  data.bio
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Email'),
                  data.email
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('New Password'),
                  data.password
                );

                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /update settings/i,
                  })
                );

                expect(
                  _react.screen.getByRole('button', {
                    name: /update settings/i,
                  })
                ).toBeDisabled();
                _context3.next = 14;
                return (0, _react.waitFor)(function () {
                  expect(
                    _react.screen.getByRole('button', {
                      name: /update settings/i,
                    })
                  ).not.toBeDisabled();
                });

              case 14:
                expect(
                  _react.screen.queryByRole('list')
                ).not.toBeInTheDocument();

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
    'should show the validation errors',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4() {
        var history, store;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch ((_context4.prev = _context4.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  '{\n        "errors": {\n          "password": ["is too short (minimum is 8 characters)"]\n        }\n      }',
                  {
                    status: 422,
                  }
                );

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/settings'],
                });
                store = (0, _store.makeStore)(successRootState);
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(
                    _SettingsScreen.default,
                    null
                  ),
                  {
                    history: history,
                    store: store,
                  }
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('New Password'),
                  _faker.default.internet.password(6, true)
                );

                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /update settings/i,
                  })
                );

                expect(
                  _react.screen.getByRole('button', {
                    name: /update settings/i,
                  })
                ).toBeDisabled();
                _context4.next = 9;
                return (0, _react.waitFor)(function () {
                  expect(
                    _react.screen.getByRole('button', {
                      name: /update settings/i,
                    })
                  ).not.toBeDisabled();
                });

              case 9:
                expect(
                  _react.screen.getByRole('list')
                ).not.toBeEmptyDOMElement();

              case 10:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4);
      })
    )
  );
  it(
    'should close the session and redirect',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
        var history, store;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/settings'],
                });
                store = (0, _store.makeStore)(successRootState);
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(
                    _SettingsScreen.default,
                    null
                  ),
                  {
                    history: history,
                    store: store,
                  }
                );

                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: 'Or click here to logout.',
                  })
                );

                _context5.next = 6;
                return (0, _react.waitFor)(function () {
                  expect(history.location.pathname).toBe('/');
                });

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    )
  );
  it(
    'should redirect if is not authenticated',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee6() {
        var history;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/settings'],
                });
                (0, _utils2.default)(
                  /*#__PURE__*/ React.createElement(
                    _SettingsScreen.default,
                    null
                  ),
                  {
                    history: history,
                  }
                );
                expect(
                  _react.screen.queryByRole('heading', {
                    name: 'Your Settings',
                  })
                ).not.toBeInTheDocument();
                expect(history.location.pathname).toBe('/');

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6);
      })
    )
  );
});
