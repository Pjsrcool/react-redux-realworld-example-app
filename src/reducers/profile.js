'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.unfollow =
  exports.profilePageUnloaded =
  exports.getProfile =
  exports.follow =
  exports.default =
    void 0;

var _toolkit = require('@reduxjs/toolkit');

var _agent = _interopRequireDefault(require('../agent'));

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

var getProfile = (0, _toolkit.createAsyncThunk)(
  'profile/getProfile',
  _agent.default.Profile.get
);
exports.getProfile = getProfile;
var follow = (0, _toolkit.createAsyncThunk)(
  'profile/follow',
  _agent.default.Profile.follow
);
exports.follow = follow;
var unfollow = (0, _toolkit.createAsyncThunk)(
  'profile/unfollow',
  _agent.default.Profile.unfollow
);
exports.unfollow = unfollow;
var profileSlice = (0, _toolkit.createSlice)({
  name: 'profile',
  initialState: {},
  reducers: {
    profilePageUnloaded: function profilePageUnloaded() {
      return {};
    },
  },
  extraReducers: function extraReducers(builder) {
    var successCaseReducer = function successCaseReducer(_, action) {
      return _objectSpread({}, action.payload.profile);
    };

    builder.addCase(getProfile.fulfilled, successCaseReducer);
    builder.addCase(follow.fulfilled, successCaseReducer);
    builder.addCase(unfollow.fulfilled, successCaseReducer);
  },
});
var profilePageUnloaded = profileSlice.actions.profilePageUnloaded;
exports.profilePageUnloaded = profilePageUnloaded;
var _default = profileSlice.reducer;
exports.default = _default;
