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

var _utils = require('../../common/utils');

var _tagsSlice = _interopRequireWildcard(require('./tagsSlice'));

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

describe('Tags reducer', function () {
  beforeAll(function () {
    _jestFetchMock.default.enableMocks();
  });
  beforeEach(function () {
    _jestFetchMock.default.resetMocks();
  });
  afterAll(function () {
    _jestFetchMock.default.disableMocks();
  });
  it('should have initial state', function () {
    expect(
      (0, _tagsSlice.default)(undefined, {
        type: '',
      })
    ).toMatchInlineSnapshot(
      '\n      Object {\n        "status": "idle",\n        "tags": Array [],\n      }\n    '
    );
  });
  it(
    'should fetch all the tags',
    /*#__PURE__*/ _asyncToGenerator(
      /*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
        var dispatched;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch ((_context.prev = _context.next)) {
              case 0:
                _jestFetchMock.default.mockResponse(
                  '{\n      "tags": [\n        "react",\n        "redux",\n        "markdown",\n        "dragons",\n        "training"\n      ]\n    }'
                );

                _context.next = 3;
                return (0, _reduxTestkit.Thunk)(
                  _tagsSlice.getAllTags
                ).execute();

              case 3:
                dispatched = _context.sent;
                expect(dispatched).toHaveLength(2);
                (0, _reduxTestkit.Reducer)(_tagsSlice.default)
                  .expect(dispatched[0].getAction())
                  .toChangeInState({
                    status: _utils.Status.LOADING,
                  });
                (0, _reduxTestkit.Reducer)(_tagsSlice.default)
                  .expect(dispatched[1].getAction())
                  .toChangeInState({
                    status: _utils.Status.SUCCESS,
                    tags: ['react', 'redux', 'markdown', 'dragons', 'training'],
                  });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee);
      })
    )
  );
});
describe('Tags selectors', function () {
  it('should get the tags', function () {
    (0, _reduxTestkit.Selector)(_tagsSlice.selectTags)
      .expect({
        tags: {
          status: _utils.Status.IDLE,
          tags: [],
        },
      })
      .toReturn([]);
  });
});
