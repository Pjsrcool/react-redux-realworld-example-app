'use strict';

var _react = require('@testing-library/react');

var _userEvent = _interopRequireDefault(require('@testing-library/user-event'));

var _faker = _interopRequireDefault(require('faker'));

var _history = require('history');

var _jestFetchMock = _interopRequireDefault(require('jest-fetch-mock'));

var _reactRouterDom = require('react-router-dom');

var _utils = _interopRequireDefault(require('../../test/utils'));

var _AuthScreen = _interopRequireDefault(require('./AuthScreen'));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
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

describe('<AuthScreen />', function () {
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
    'should render the login form',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var history;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/login'],
                });
                (0, _utils.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/login',
                    component: _AuthScreen.default,
                  }),
                  {
                    history: history,
                  }
                );
                expect(
                  _react.screen.getByText(/need an account\?/i)
                ).toBeInTheDocument();
                expect(
                  _react.screen.getByRole('button', {
                    name: /sign in/i,
                  })
                ).toBeInTheDocument();

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
    'should submit the login form',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2() {
        var history, data;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch ((_context2.prev = _context2.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(function () {
                  return new Promise(function (resolve) {
                    setTimeout(function () {
                      resolve(
                        JSON.stringify({
                          user: {
                            email: 'warren.boyd@mailinator.com',
                            username: 'warren_boyd',
                            token: '{"sub":"warren_boyd"}',
                            bio: 'Asperiores quos dolorem iure et.',
                            image:
                              'https://cdn.fakercloud.com/avatars/sprayaga_128.jpg',
                          },
                        })
                      );
                    }, Math.random() * 100);
                  });
                });

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/login'],
                });
                data = {
                  email: 'warren.boyd@mailinator.com',
                  password: 'Pa$$w0rd!',
                };
                (0, _utils.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/login',
                    component: _AuthScreen.default,
                  }),
                  {
                    history: history,
                  }
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Email'),
                  data.email
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Password'),
                  data.password
                );

                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /sign in/i,
                  })
                );

                expect(
                  _react.screen.getByRole('button', {
                    name: /sign in/i,
                  })
                ).toBeDisabled();
                _context2.next = 10;
                return (0, _react.waitFor)(function () {
                  expect(
                    _react.screen.getByRole('button', {
                      name: /sign in/i,
                    })
                  ).not.toBeDisabled();
                });

              case 10:
                expect(
                  _react.screen.queryByRole('list')
                ).not.toBeInTheDocument();

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2);
      })
    )
  );
  it(
    'should render the register form',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
        var history;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch ((_context3.prev = _context3.next)) {
              case 0:
                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/register'],
                });
                (0, _utils.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/register',
                    component: _AuthScreen.default,
                  }),
                  {
                    history: history,
                  }
                );
                expect(
                  _react.screen.getByText(/have an account\?/i)
                ).toBeInTheDocument();
                expect(
                  _react.screen.getByRole('button', {
                    name: /sign up/i,
                  })
                ).toBeInTheDocument();

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3);
      })
    )
  );
  it(
    'should submit the register form',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee5() {
        var history, data;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch ((_context5.prev = _context5.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  /*#__PURE__*/ (function () {
                    var _ref5 = _asyncToGenerator(
                      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(
                        request
                      ) {
                        var _yield$request$json, user;

                        return regeneratorRuntime.wrap(function _callee4$(
                          _context4
                        ) {
                          while (1) {
                            switch ((_context4.prev = _context4.next)) {
                              case 0:
                                _context4.next = 2;
                                return request.json();

                              case 2:
                                _yield$request$json = _context4.sent;
                                user = _yield$request$json.user;
                                return _context4.abrupt(
                                  'return',
                                  JSON.stringify({
                                    user: {
                                      email: user.email,
                                      username: user.username,
                                      token: '{"sub":"'.concat(
                                        user.username,
                                        '"}'
                                      ),
                                      bio: null,
                                      image: null,
                                    },
                                  })
                                );

                              case 5:
                              case 'end':
                                return _context4.stop();
                            }
                          }
                        },
                        _callee4);
                      })
                    );

                    return function (_x) {
                      return _ref5.apply(this, arguments);
                    };
                  })()
                );

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/register'],
                });
                data = {
                  username: _faker.default.internet
                    .userName()
                    .replaceAll(/\W/g, '_')
                    .toLowerCase()
                    .substr(0, 20),
                  email: _faker.default.internet.email().toLowerCase(),
                  password: _faker.default.internet.password(12),
                };
                (0, _utils.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/register',
                    component: _AuthScreen.default,
                  }),
                  {
                    history: history,
                  }
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Username'),
                  data.username
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Email'),
                  data.email
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Password'),
                  data.password
                );

                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /sign up/i,
                  })
                );

                expect(
                  _react.screen.getByRole('button', {
                    name: /sign up/i,
                  })
                ).toBeDisabled();
                _context5.next = 11;
                return (0, _react.waitFor)(function () {
                  expect(
                    _react.screen.getByRole('button', {
                      name: /sign up/i,
                    })
                  ).not.toBeDisabled();
                });

              case 11:
                expect(
                  _react.screen.queryByRole('list')
                ).not.toBeInTheDocument();

              case 12:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5);
      })
    )
  );
  it(
    'should show the validation errors',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee6() {
        var history, data;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch ((_context6.prev = _context6.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  JSON.stringify({
                    errors: {
                      email: ['is invalid'],
                      password: ['is too short (minimum is 8 characters)'],
                      username: ['is too long (maximum is 20 characters)'],
                    },
                  }),
                  {
                    status: 422,
                  }
                );

                history = (0, _history.createMemoryHistory)({
                  initialEntries: ['/register'],
                });
                data = {
                  username: _faker.default.lorem
                    .sentences()
                    .replaceAll(/\W/g, '_')
                    .toLowerCase(),
                  email: _faker.default.internet.userName().toLowerCase(),
                  password: _faker.default.internet.password(5),
                };
                (0, _utils.default)(
                  /*#__PURE__*/ React.createElement(_reactRouterDom.Route, {
                    path: '/register',
                    component: _AuthScreen.default,
                  }),
                  {
                    history: history,
                  }
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Username'),
                  data.username
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Email'),
                  data.email
                );

                _userEvent.default.type(
                  _react.screen.getByPlaceholderText('Password'),
                  data.password
                );

                _userEvent.default.click(
                  _react.screen.getByRole('button', {
                    name: /sign up/i,
                  })
                );

                expect(
                  _react.screen.getByRole('button', {
                    name: /sign up/i,
                  })
                ).toBeDisabled();
                _context6.next = 11;
                return (0, _react.waitFor)(function () {
                  expect(
                    _react.screen.getByRole('button', {
                      name: /sign up/i,
                    })
                  ).not.toBeDisabled();
                });

              case 11:
                expect(
                  _react.screen.getByRole('list')
                ).not.toBeEmptyDOMElement();

              case 12:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6);
      })
    )
  );
});
