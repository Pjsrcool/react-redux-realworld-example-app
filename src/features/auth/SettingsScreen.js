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

var _reactRouterDom = require('react-router-dom');

var _ListErrors = _interopRequireDefault(
  require('../../components/ListErrors')
);

var _authSlice = require('./authSlice');

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
 * Settings form component
 *
 * @param {Object} props
 * @param {import('./authSlice').User} props.currentUser
 * @param {(user: Partial<import('./authSlice').User>) => Promise<any>} props.onSaveSettings
 * @example
 * <SettingsForm
 *    currentUser={{
 *      username: 'warren_boyd',
 *      email: 'warren.boyd@mailinator.com',
 *      image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
 *      bio: null,
 *    }}
 *    onSaveSettings={user => dispatch(updateUser(user))}
 * />
 */

function SettingsForm(_ref) {
  var _currentUser$image,
    _currentUser$username,
    _currentUser$bio,
    _currentUser$email;

  var currentUser = _ref.currentUser,
    onSaveSettings = _ref.onSaveSettings;

  var _useState = (0, _react.useState)(
      (_currentUser$image =
        currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.image) !== null && _currentUser$image !== void 0
        ? _currentUser$image
        : 'https://static.productionready.io/images/smiley-cyrus.jpg'
    ),
    _useState2 = _slicedToArray(_useState, 2),
    image = _useState2[0],
    setImage = _useState2[1];

  var _useState3 = (0, _react.useState)(
      (_currentUser$username =
        currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.username) !== null && _currentUser$username !== void 0
        ? _currentUser$username
        : ''
    ),
    _useState4 = _slicedToArray(_useState3, 2),
    username = _useState4[0],
    setUsername = _useState4[1];

  var _useState5 = (0, _react.useState)(
      (_currentUser$bio =
        currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.bio) !== null && _currentUser$bio !== void 0
        ? _currentUser$bio
        : ''
    ),
    _useState6 = _slicedToArray(_useState5, 2),
    bio = _useState6[0],
    setBio = _useState6[1];

  var _useState7 = (0, _react.useState)(
      (_currentUser$email =
        currentUser === null || currentUser === void 0
          ? void 0
          : currentUser.email) !== null && _currentUser$email !== void 0
        ? _currentUser$email
        : ''
    ),
    _useState8 = _slicedToArray(_useState7, 2),
    email = _useState8[0],
    setEmail = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
    _useState10 = _slicedToArray(_useState9, 2),
    password = _useState10[0],
    setPassword = _useState10[1];

  var isLoading = (0, _reactRedux.useSelector)(_authSlice.selectIsLoading);
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changeImage = function changeImage(event) {
    setImage(event.target.value);
  };
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changeUsername = function changeUsername(event) {
    setUsername(event.target.value);
  };
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changeBio = function changeBio(event) {
    setBio(event.target.value);
  };
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changeEmail = function changeEmail(event) {
    setEmail(event.target.value);
  };
  /**
   * @type {React.ChangeEventHandler<HTMLInputElement>}
   */

  var changePassword = function changePassword(event) {
    setPassword(event.target.value);
  };
  /**
   * @type {React.FormEventHandler<HTMLFormElement>}
   */

  var saveSettings = function saveSettings(event) {
    event.preventDefault();
    var user = {
      image: image,
      username: username,
      bio: bio,
      email: email,
    };

    if (password) {
      user.password = password;
    }

    onSaveSettings(user);
  };

  return /*#__PURE__*/ _react.default.createElement(
    'form',
    {
      onSubmit: saveSettings,
    },
    /*#__PURE__*/ _react.default.createElement(
      'fieldset',
      {
        disabled: isLoading,
      },
      /*#__PURE__*/ _react.default.createElement(
        'fieldset',
        {
          className: 'form-group',
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          className: 'form-control',
          type: 'text',
          placeholder: 'URL of profile picture',
          name: 'image',
          value: image,
          onChange: changeImage,
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        'fieldset',
        {
          className: 'form-group',
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          className: 'form-control form-control-lg',
          type: 'text',
          placeholder: 'Username',
          name: 'username',
          value: username,
          onChange: changeUsername,
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        'fieldset',
        {
          className: 'form-group',
        },
        /*#__PURE__*/ _react.default.createElement('textarea', {
          className: 'form-control form-control-lg',
          rows: 8,
          placeholder: 'Short bio about you',
          name: 'bio',
          value: bio,
          onChange: changeBio,
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        'fieldset',
        {
          className: 'form-group',
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          className: 'form-control form-control-lg',
          autoComplete: 'current-email',
          type: 'email',
          placeholder: 'Email',
          name: 'email',
          value: email,
          onChange: changeEmail,
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        'fieldset',
        {
          className: 'form-group',
        },
        /*#__PURE__*/ _react.default.createElement('input', {
          className: 'form-control form-control-lg',
          type: 'password',
          autoComplete: 'current-password',
          placeholder: 'New Password',
          name: 'password',
          value: password,
          onChange: changePassword,
        })
      ),
      /*#__PURE__*/ _react.default.createElement(
        'button',
        {
          className: 'btn btn-lg btn-primary pull-xs-right',
          type: 'submit',
        },
        'Update Settings'
      )
    )
  );
}
/**
 * Settings screen component
 *
 * @example
 * <SettingsScreen />
 */

function SettingsScreen() {
  var dispatch = (0, _reactRedux.useDispatch)();
  var currentUser = (0, _reactRedux.useSelector)(_authSlice.selectUser);
  var errors = (0, _reactRedux.useSelector)(_authSlice.selectErrors);
  var isAuthenticated = (0, _reactRedux.useSelector)(
    _authSlice.selectIsAuthenticated
  );

  var saveSettings = function saveSettings(user) {
    void dispatch((0, _authSlice.updateUser)(user));
  };

  var logoutUser = function logoutUser() {
    dispatch((0, _authSlice.logout)());
  };

  if (!isAuthenticated) {
    return /*#__PURE__*/ _react.default.createElement(
      _reactRouterDom.Navigate,
      {
        to: '/',
      }
    );
  }

  return /*#__PURE__*/ _react.default.createElement(
    'div',
    {
      className: 'settings-page',
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
            className: 'col-md-6 offset-md-3 col-xs-12',
          },
          /*#__PURE__*/ _react.default.createElement(
            'h1',
            {
              className: 'text-xs-center',
            },
            'Your Settings'
          ),
          /*#__PURE__*/ _react.default.createElement(_ListErrors.default, {
            errors: errors,
          }),
          /*#__PURE__*/ _react.default.createElement(SettingsForm, {
            currentUser: currentUser,
            onSaveSettings: saveSettings,
          }),
          /*#__PURE__*/ _react.default.createElement('hr', null),
          /*#__PURE__*/ _react.default.createElement(
            'button',
            {
              className: 'btn btn-outline-danger',
              onClick: logoutUser,
            },
            'Or click here to logout.'
          )
        )
      )
    )
  );
}

var _default = (0, _react.memo)(SettingsScreen);

exports.default = _default;
