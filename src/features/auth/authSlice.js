'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.updateUser =
  exports.setToken =
  exports.selectUser =
  exports.selectIsLoading =
  exports.selectIsAuthenticated =
  exports.selectErrors =
  exports.register =
  exports.logout =
  exports.login =
  exports.getUser =
  exports.default =
    void 0;

var _toolkit = require('@reduxjs/toolkit');

var _agent = _interopRequireDefault(require('../../agent'));

var _utils = require('../../common/utils');

var _excluded = ['token'],
  _excluded2 = ['token'],
  _excluded3 = ['token'],
  _excluded4 = ['token'];

function _interopRequireDefault(obj) {
  return obj && obj.__esModule
    ? obj
    : {
        default: obj,
      };
}

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
/**
 * @typedef {object} User
 * @property {string} email
 * @property {string} username
 * @property {string} bio
 * @property {string} image
 *
 *
 * @typedef {object} AuthState
 * @property {Status} status
 * @property {string} token
 * @property {User}   user
 * @property {Record<string, string[]>} errors
 */

/**
 * Send a register request
 *
 * @param {object} argument
 * @param {string} argument.username
 * @param {string} argument.email
 * @param {string} argument.password
 */

var register = (0, _toolkit.createAsyncThunk)(
  'auth/register',
  /*#__PURE__*/ (function () {
    var _ref2 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee(_ref, thunkApi) {
        var username,
          email,
          password,
          _yield$agent$Auth$reg,
          _yield$agent$Auth$reg2,
          token,
          user;

        return regeneratorRuntime.wrap(
          function _callee$(_context) {
            while (1) {
              switch ((_context.prev = _context.next)) {
                case 0:
                  (username = _ref.username),
                    (email = _ref.email),
                    (password = _ref.password);
                  _context.prev = 1;
                  _context.next = 4;
                  return _agent.default.Auth.register(
                    username,
                    email,
                    password
                  );

                case 4:
                  _yield$agent$Auth$reg = _context.sent;
                  _yield$agent$Auth$reg2 = _yield$agent$Auth$reg.user;
                  token = _yield$agent$Auth$reg2.token;
                  user = _objectWithoutProperties(
                    _yield$agent$Auth$reg2,
                    _excluded
                  );
                  return _context.abrupt('return', {
                    token: token,
                    user: user,
                  });

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context['catch'](1);

                  if (!(0, _utils.isApiError)(_context.t0)) {
                    _context.next = 15;
                    break;
                  }

                  return _context.abrupt(
                    'return',
                    thunkApi.rejectWithValue(_context.t0)
                  );

                case 15:
                  throw _context.t0;

                case 16:
                case 'end':
                  return _context.stop();
              }
            }
          },
          _callee,
          null,
          [[1, 11]]
        );
      })
    );

    return function (_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  })(),
  {
    condition: function condition(_, _ref3) {
      var getState = _ref3.getState;
      return !selectIsLoading(getState());
    },
  }
);
/**
 * Send a login request
 *
 * @param {object} argument
 * @param {string} argument.email
 * @param {string} argument.password
 */

exports.register = register;
var login = (0, _toolkit.createAsyncThunk)(
  'auth/login',
  /*#__PURE__*/ (function () {
    var _ref5 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee2(_ref4, thunkApi) {
        var email,
          password,
          _yield$agent$Auth$log,
          _yield$agent$Auth$log2,
          token,
          user;

        return regeneratorRuntime.wrap(
          function _callee2$(_context2) {
            while (1) {
              switch ((_context2.prev = _context2.next)) {
                case 0:
                  (email = _ref4.email), (password = _ref4.password);
                  _context2.prev = 1;
                  _context2.next = 4;
                  return _agent.default.Auth.login(email, password);

                case 4:
                  _yield$agent$Auth$log = _context2.sent;
                  _yield$agent$Auth$log2 = _yield$agent$Auth$log.user;
                  token = _yield$agent$Auth$log2.token;
                  user = _objectWithoutProperties(
                    _yield$agent$Auth$log2,
                    _excluded2
                  );
                  return _context2.abrupt('return', {
                    token: token,
                    user: user,
                  });

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2['catch'](1);

                  if (!(0, _utils.isApiError)(_context2.t0)) {
                    _context2.next = 15;
                    break;
                  }

                  return _context2.abrupt(
                    'return',
                    thunkApi.rejectWithValue(_context2.t0)
                  );

                case 15:
                  throw _context2.t0;

                case 16:
                case 'end':
                  return _context2.stop();
              }
            }
          },
          _callee2,
          null,
          [[1, 11]]
        );
      })
    );

    return function (_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  })(),
  {
    condition: function condition(_, _ref6) {
      var getState = _ref6.getState;
      return !selectIsLoading(getState());
    },
  }
);
/**
 * Send a get current user request
 */

exports.login = login;
var getUser = (0, _toolkit.createAsyncThunk)(
  'auth/getUser',
  /*#__PURE__*/ _asyncToGenerator(
    /*#__PURE__*/ regeneratorRuntime.mark(function _callee3() {
      var _yield$agent$Auth$cur, _yield$agent$Auth$cur2, token, user;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch ((_context3.prev = _context3.next)) {
            case 0:
              _context3.next = 2;
              return _agent.default.Auth.current();

            case 2:
              _yield$agent$Auth$cur = _context3.sent;
              _yield$agent$Auth$cur2 = _yield$agent$Auth$cur.user;
              token = _yield$agent$Auth$cur2.token;
              user = _objectWithoutProperties(
                _yield$agent$Auth$cur2,
                _excluded3
              );
              return _context3.abrupt('return', {
                token: token,
                user: user,
              });

            case 7:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3);
    })
  ),
  {
    condition: function condition(_, _ref8) {
      var getState = _ref8.getState;
      return Boolean(selectAuthSlice(getState()).token);
    },
  }
);
/**
 * Send a update user request
 *
 * @param {object} argument
 * @param {string} argument.email
 * @param {string} argument.username
 * @param {string} argument.bio
 * @param {string} argument.image
 * @param {string} argument.password
 */

exports.getUser = getUser;
var updateUser = (0, _toolkit.createAsyncThunk)(
  'auth/updateUser',
  /*#__PURE__*/ (function () {
    var _ref10 = _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee4(_ref9, thunkApi) {
        var email,
          username,
          bio,
          image,
          password,
          _yield$agent$Auth$sav,
          _yield$agent$Auth$sav2,
          token,
          user;

        return regeneratorRuntime.wrap(
          function _callee4$(_context4) {
            while (1) {
              switch ((_context4.prev = _context4.next)) {
                case 0:
                  (email = _ref9.email),
                    (username = _ref9.username),
                    (bio = _ref9.bio),
                    (image = _ref9.image),
                    (password = _ref9.password);
                  _context4.prev = 1;
                  _context4.next = 4;
                  return _agent.default.Auth.save({
                    email: email,
                    username: username,
                    bio: bio,
                    image: image,
                    password: password,
                  });

                case 4:
                  _yield$agent$Auth$sav = _context4.sent;
                  _yield$agent$Auth$sav2 = _yield$agent$Auth$sav.user;
                  token = _yield$agent$Auth$sav2.token;
                  user = _objectWithoutProperties(
                    _yield$agent$Auth$sav2,
                    _excluded4
                  );
                  return _context4.abrupt('return', {
                    token: token,
                    user: user,
                  });

                case 11:
                  _context4.prev = 11;
                  _context4.t0 = _context4['catch'](1);

                  if (!(0, _utils.isApiError)(_context4.t0)) {
                    _context4.next = 15;
                    break;
                  }

                  return _context4.abrupt(
                    'return',
                    thunkApi.rejectWithValue(_context4.t0)
                  );

                case 15:
                  throw _context4.t0;

                case 16:
                case 'end':
                  return _context4.stop();
              }
            }
          },
          _callee4,
          null,
          [[1, 11]]
        );
      })
    );

    return function (_x5, _x6) {
      return _ref10.apply(this, arguments);
    };
  })(),
  {
    condition: function condition(_, _ref11) {
      var getState = _ref11.getState;
      return selectIsAuthenticated(getState()) && !selectIsLoading(getState());
    },
  }
);
/**
 * @type {AuthState}
 */

exports.updateUser = updateUser;
var initialState = {
  status: _utils.Status.IDLE,
};
/**
 * @param {import('@reduxjs/toolkit').Draft<AuthState>} state
 * @param {import('@reduxjs/toolkit').PayloadAction<{token: string, user: User}>} action
 */

function successReducer(state, action) {
  state.status = _utils.Status.SUCCESS;
  state.token = action.payload.token;
  state.user = action.payload.user;
  delete state.errors;
}

var authSlice = (0, _toolkit.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {
    /**
     * Log out the user
     */
    logout: function logout() {
      return initialState;
    },

    /**
     * Update token
     *
     * @param {import('@reduxjs/toolkit').Draft<AuthState>} state
     * @param {import('@reduxjs/toolkit').PayloadAction<string>} action
     */
    setToken: function setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: function extraReducers(builder) {
    builder
      .addCase(login.fulfilled, successReducer)
      .addCase(register.fulfilled, successReducer)
      .addCase(getUser.fulfilled, successReducer)
      .addCase(updateUser.fulfilled, successReducer);
    builder
      .addCase(login.rejected, _utils.failureReducer)
      .addCase(register.rejected, _utils.failureReducer)
      .addCase(updateUser.rejected, _utils.failureReducer);
    builder.addMatcher(function (action) {
      return /auth\/.*\/pending/.test(action.type);
    }, _utils.loadingReducer);
  },
});
var _authSlice$actions = authSlice.actions,
  setToken = _authSlice$actions.setToken,
  logout = _authSlice$actions.logout;
/**
 * Get auth slice
 *
 * @param {object} state
 * @returns {AuthState}
 */

exports.logout = logout;
exports.setToken = setToken;

var selectAuthSlice = function selectAuthSlice(state) {
  return state.auth;
};
/**
 * Get current user
 *
 * @param {object} state
 * @returns {User}
 */

var selectUser = function selectUser(state) {
  return selectAuthSlice(state).user;
};
/**
 * Get errors
 *
 * @param {object} state
 * @returns {Record<string, string[]}
 */

exports.selectUser = selectUser;

var selectErrors = function selectErrors(state) {
  return selectAuthSlice(state).errors;
};
/**
 * Get is loading
 *
 * @param {object} state
 * @returns {boolean} There are pending effects
 */

exports.selectErrors = selectErrors;

var selectIsLoading = function selectIsLoading(state) {
  return selectAuthSlice(state).status === _utils.Status.LOADING;
};
/**
 * Get is authenticated
 *
 * @param {object} state
 * @returns {boolean}
 */

exports.selectIsLoading = selectIsLoading;
var selectIsAuthenticated = (0, _toolkit.createSelector)(
  function (state) {
    return selectAuthSlice(state).token;
  },
  selectUser,
  function (token, user) {
    return Boolean(token && user);
  }
);
exports.selectIsAuthenticated = selectIsAuthenticated;
var _default = authSlice.reducer;
exports.default = _default;
