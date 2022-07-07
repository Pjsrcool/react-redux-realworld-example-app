'use strict';

var _react = require('@testing-library/react');

var _jestFetchMock = _interopRequireDefault(require('jest-fetch-mock'));

var _utils = _interopRequireDefault(require('../../test/utils'));

var _TagsSidebar = _interopRequireDefault(require('./TagsSidebar'));

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

describe('<TagsSidebar />', function () {
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
    'should render the list of tags',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(function () {
                  return new Promise(function (resolve) {
                    setTimeout(function () {
                      resolve(
                        JSON.stringify({
                          tags: [
                            'react',
                            'redux',
                            'markdown',
                            'dragons',
                            'training',
                          ],
                        })
                      );
                    }, Math.random() * 500);
                  });
                });

                (0, _utils.default)(
                  /*#__PURE__*/ React.createElement(_TagsSidebar.default, null)
                );

                _react.screen.getByText(/popular tags/i);

                _context.next = 5;
                return (0, _react.waitForElementToBeRemoved)(
                  _react.screen.getByText(/loading tags/i)
                );

              case 5:
                expect(_react.screen.getAllByRole('button')).not.toHaveLength(
                  0
                );

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
});
