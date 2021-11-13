(function () {
  'use strict';

  function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys$2(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys$2(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
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
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

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
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule$1(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var check$1 = function (it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global_1 = // eslint-disable-next-line es/no-global-this -- safe
  check$1(typeof globalThis == 'object' && globalThis) || check$1(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check$1(typeof self == 'object' && self) || check$1(typeof commonjsGlobal$1 == 'object' && commonjsGlobal$1) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables$1 = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var aFunction$3 = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  };

  // optional / simple context binding


  var functionBindContext$1 = function (fn, that, length) {
    aFunction$3(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };

      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var fails$1 = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var toString$1 = {}.toString;

  var classofRaw$1 = function (it) {
    return toString$1.call(it).slice(8, -1);
  };

  var split$1 = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject$1 = fails$1(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw$1(it) == 'String' ? split$1.call(it, '') : Object(it);
  } : Object;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$1 = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  };

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject


  var toObject$1 = function (argument) {
    return Object(requireObjectCoercible$1(argument));
  };

  var ceil$1 = Math.ceil;
  var floor$2 = Math.floor; // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger

  var toInteger$2 = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor$2 : ceil$1)(argument);
  };

  var min$6 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength$1 = function (argument) {
    return argument > 0 ? min$6(toInteger$2(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var isObject$1 = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe


  var isArray$1 = Array.isArray || function isArray(arg) {
    return classofRaw$1(arg) == 'Array';
  };

  // Detect IE8's incomplete defineProperty implementation


  var descriptors$1 = !fails$1(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });

  var document$4 = global_1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS$1 = isObject$1(document$4) && isObject$1(document$4.createElement);

  var documentCreateElement$1 = function (it) {
    return EXISTS$1 ? document$4.createElement(it) : {};
  };

  // Thank's IE8 for his funny defineProperty


  var ie8DomDefine$1 = !descriptors$1 && !fails$1(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(documentCreateElement$1('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });

  var anObject$1 = function (it) {
    if (!isObject$1(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  };

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive$1 = function (input, PREFERRED_STRING) {
    if (!isObject$1(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject$1(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject$1(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  // eslint-disable-next-line es/no-object-defineproperty -- safe


  var $defineProperty$1 = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  var f$a = descriptors$1 ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$1(O);
    P = toPrimitive$1(P, true);
    anObject$1(Attributes);
    if (ie8DomDefine$1) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty$1 = {
  	f: f$a
  };

  var createPropertyDescriptor$1 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty$1 = descriptors$1 ? function (object, key, value) {
    return objectDefineProperty$1.f(object, key, createPropertyDescriptor$1(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal$1 = function (key, value) {
    try {
      createNonEnumerableProperty$1(global_1, key, value);
    } catch (error) {
      global_1[key] = value;
    }

    return value;
  };

  var SHARED$1 = '__core-js_shared__';
  var store$3 = global_1[SHARED$1] || setGlobal$1(SHARED$1, {});
  var sharedStore$1 = store$3;

  var shared$1 = createCommonjsModule$1(function (module) {
  (module.exports = function (key, value) {
    return sharedStore$1[key] || (sharedStore$1[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.15.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  });

  var hasOwnProperty$1 = {}.hasOwnProperty;

  var has$3 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty$1.call(toObject$1(it), key);
  };

  var id$1 = 0;
  var postfix$1 = Math.random();

  var uid$1 = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id$1 + postfix$1).toString(36);
  };

  var path$1 = global_1;

  var aFunction$2 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn$1 = function (namespace, method) {
    return arguments.length < 2 ? aFunction$2(path$1[namespace]) || aFunction$2(global_1[namespace]) : path$1[namespace] && path$1[namespace][method] || global_1[namespace] && global_1[namespace][method];
  };

  var engineUserAgent$1 = getBuiltIn$1('navigator', 'userAgent') || '';

  var process$5 = global_1.process;
  var versions$1 = process$5 && process$5.versions;
  var v8$1 = versions$1 && versions$1.v8;
  var match$5, version$1;

  if (v8$1) {
    match$5 = v8$1.split('.');
    version$1 = match$5[0] < 4 ? 1 : match$5[0] + match$5[1];
  } else if (engineUserAgent$1) {
    match$5 = engineUserAgent$1.match(/Edge\/(\d+)/);

    if (!match$5 || match$5[1] >= 74) {
      match$5 = engineUserAgent$1.match(/Chrome\/(\d+)/);
      if (match$5) version$1 = match$5[1];
    }
  }

  var engineV8Version$1 = version$1 && +version$1;

  /* eslint-disable es/no-symbol -- required for testing */


   // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing


  var nativeSymbol$1 = !!Object.getOwnPropertySymbols && !fails$1(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version$1 && engineV8Version$1 < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid$1 = nativeSymbol$1 && !Symbol.sham && typeof Symbol.iterator == 'symbol';

  var WellKnownSymbolsStore$1 = shared$1('wks');
  var Symbol$2 = global_1.Symbol;
  var createWellKnownSymbol$1 = useSymbolAsUid$1 ? Symbol$2 : Symbol$2 && Symbol$2.withoutSetter || uid$1;

  var wellKnownSymbol$1 = function (name) {
    if (!has$3(WellKnownSymbolsStore$1, name) || !(nativeSymbol$1 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      if (nativeSymbol$1 && has$3(Symbol$2, name)) {
        WellKnownSymbolsStore$1[name] = Symbol$2[name];
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol$1('Symbol.' + name);
      }
    }

    return WellKnownSymbolsStore$1[name];
  };

  var SPECIES$b = wellKnownSymbol$1('species'); // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate$1 = function (originalArray, length) {
    var C;

    if (isArray$1(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray$1(C.prototype))) C = undefined;else if (isObject$1(C)) {
        C = C[SPECIES$b];
        if (C === null) C = undefined;
      }
    }

    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var push$1 = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

  var createMethod$6 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$1($this);
      var self = indexedObject$1(O);
      var boundFunction = functionBindContext$1(callbackfn, that, 3);
      var length = toLength$1(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$1;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                push$1.call(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push$1.call(target, value);
              // filterOut
            }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration$1 = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$6(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$6(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$6(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$6(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$6(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$6(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$6(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$6(7)
  };

  var arrayMethodIsStrict$1 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$1(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  var $forEach$1 = arrayIteration$1.forEach;



  var STRICT_METHOD$3 = arrayMethodIsStrict$1('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach$1 = !STRICT_METHOD$3 ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  for (var COLLECTION_NAME$3 in domIterables$1) {
    var Collection$3 = global_1[COLLECTION_NAME$3];
    var CollectionPrototype$3 = Collection$3 && Collection$3.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

    if (CollectionPrototype$3 && CollectionPrototype$3.forEach !== arrayForEach$1) try {
      createNonEnumerableProperty$1(CollectionPrototype$3, 'forEach', arrayForEach$1);
    } catch (error) {
      CollectionPrototype$3.forEach = arrayForEach$1;
    }
  }

  createCommonjsModule$1(function (module) {
  /**
   * Copyright (c) 2014-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var runtime = function (exports) {

    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined$1; // More compressible than void 0.

    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    function define(obj, key, value) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
      return obj[key];
    }

    try {
      // IE 8 has a broken Object.defineProperty that only works on DOM objects.
      define({}, "");
    } catch (err) {
      define = function (obj, key, value) {
        return obj[key] = value;
      };
    }

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
      var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
      var generator = Object.create(protoGenerator.prototype);
      var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.

      generator._invoke = makeInvokeMethod(innerFn, self, context);
      return generator;
    }

    exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.

    function tryCatch(fn, obj, arg) {
      try {
        return {
          type: "normal",
          arg: fn.call(obj, arg)
        };
      } catch (err) {
        return {
          type: "throw",
          arg: err
        };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.

    var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.

    function Generator() {}

    function GeneratorFunction() {}

    function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.


    var IteratorPrototype = {};

    IteratorPrototype[iteratorSymbol] = function () {
      return this;
    };

    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
      // This environment has a native %IteratorPrototype%; use it instead
      // of the polyfill.
      IteratorPrototype = NativeIteratorPrototype;
    }

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.

    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        define(prototype, method, function (arg) {
          return this._invoke(method, arg);
        });
      });
    }

    exports.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    exports.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        define(genFun, toStringTagSymbol, "GeneratorFunction");
      }

      genFun.prototype = Object.create(Gp);
      return genFun;
    }; // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.


    exports.awrap = function (arg) {
      return {
        __await: arg
      };
    };

    function AsyncIterator(generator, PromiseImpl) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);

        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;

          if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
            return PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return PromiseImpl.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration.
            result.value = unwrapped;
            resolve(result);
          }, function (error) {
            // If a rejected Promise was yielded, throw the rejection back
            // into the async generator function so it can be handled there.
            return invoke("throw", error, resolve, reject);
          });
        }
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      } // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).


      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    AsyncIterator.prototype[asyncIteratorSymbol] = function () {
      return this;
    };

    exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.

    exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
      if (PromiseImpl === void 0) PromiseImpl = Promise;
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
      return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;
      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          } // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


          return doneResult();
        }

        context.method = method;
        context.arg = arg;

        while (true) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if (context.method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = context.arg;
          } else if (context.method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw context.arg;
            }

            context.dispatchException(context.arg);
          } else if (context.method === "return") {
            context.abrupt("return", context.arg);
          }

          state = GenStateExecuting;
          var record = tryCatch(innerFn, self, context);

          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            if (record.arg === ContinueSentinel) {
              continue;
            }

            return {
              value: record.arg,
              done: context.done
            };
          } else if (record.type === "throw") {
            state = GenStateCompleted; // Dispatch the exception by looping back around to the
            // context.dispatchException(context.arg) call above.

            context.method = "throw";
            context.arg = record.arg;
          }
        }
      };
    } // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.


    function maybeInvokeDelegate(delegate, context) {
      var method = delegate.iterator[context.method];

      if (method === undefined$1) {
        // A .throw or .return when the delegate iterator has no .throw
        // method always terminates the yield* loop.
        context.delegate = null;

        if (context.method === "throw") {
          // Note: ["return"] must be used for ES3 parsing compatibility.
          if (delegate.iterator["return"]) {
            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            context.method = "return";
            context.arg = undefined$1;
            maybeInvokeDelegate(delegate, context);

            if (context.method === "throw") {
              // If maybeInvokeDelegate(context) changed context.method from
              // "return" to "throw", let that override the TypeError below.
              return ContinueSentinel;
            }
          }

          context.method = "throw";
          context.arg = new TypeError("The iterator does not provide a 'throw' method");
        }

        return ContinueSentinel;
      }

      var record = tryCatch(method, delegate.iterator, context.arg);

      if (record.type === "throw") {
        context.method = "throw";
        context.arg = record.arg;
        context.delegate = null;
        return ContinueSentinel;
      }

      var info = record.arg;

      if (!info) {
        context.method = "throw";
        context.arg = new TypeError("iterator result is not an object");
        context.delegate = null;
        return ContinueSentinel;
      }

      if (info.done) {
        // Assign the result of the finished delegate to the temporary
        // variable specified by delegate.resultName (see delegateYield).
        context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

        context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
        // exception, let the outer generator proceed normally. If
        // context.method was "next", forget context.arg since it has been
        // "consumed" by the delegate iterator. If context.method was
        // "return", allow the original .return call to continue in the
        // outer generator.

        if (context.method !== "return") {
          context.method = "next";
          context.arg = undefined$1;
        }
      } else {
        // Re-yield the result returned by the delegate method.
        return info;
      } // The delegate iterator is finished, so forget it and continue with
      // the outer generator.


      context.delegate = null;
      return ContinueSentinel;
    } // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.


    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = {
        tryLoc: locs[0]
      };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{
        tryLoc: "root"
      }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    exports.keys = function (object) {
      var keys = [];

      for (var key in object) {
        keys.push(key);
      }

      keys.reverse(); // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.

      return function next() {
        while (keys.length) {
          var key = keys.pop();

          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        } // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.


        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];

        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined$1;
            next.done = true;
            return next;
          };

          return next.next = next;
        }
      } // Return an iterator with no values.


      return {
        next: doneResult
      };
    }

    exports.values = values;

    function doneResult() {
      return {
        value: undefined$1,
        done: true
      };
    }

    Context.prototype = {
      constructor: Context,
      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0; // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.

        this.sent = this._sent = undefined$1;
        this.done = false;
        this.delegate = null;
        this.method = "next";
        this.arg = undefined$1;
        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined$1;
            }
          }
        }
      },
      stop: function () {
        this.done = true;
        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;

        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },
      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;

        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;

          if (caught) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            context.method = "next";
            context.arg = undefined$1;
          }

          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },
      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.method = "next";
          this.next = finallyEntry.finallyLoc;
          return ContinueSentinel;
        }

        return this.complete(record);
      },
      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = this.arg = record.arg;
          this.method = "return";
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }

        return ContinueSentinel;
      },
      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },
      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];

          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;

            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }

            return thrown;
          }
        } // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.


        throw new Error("illegal catch attempt");
      },
      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        if (this.method === "next") {
          // Deliberately forget the last sent value so that we don't
          // accidentally pass it on to the delegate.
          this.arg = undefined$1;
        }

        return ContinueSentinel;
      }
    }; // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.

    return exports;
  }( // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  module.exports );

  try {
    regeneratorRuntime = runtime;
  } catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
  }
  });

  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$5 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG$1 = getOwnPropertyDescriptor$5 && !$propertyIsEnumerable$1.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  var f$9 = NASHORN_BUG$1 ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$5(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;

  var objectPropertyIsEnumerable$1 = {
  	f: f$9
  };

  // toObject with fallback for non-array-like ES3 strings




  var toIndexedObject$1 = function (it) {
    return indexedObject$1(requireObjectCoercible$1(it));
  };

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe


  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  var f$8 = descriptors$1 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$1(O);
    P = toPrimitive$1(P, true);
    if (ie8DomDefine$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) {
      /* empty */
    }
    if (has$3(O, P)) return createPropertyDescriptor$1(!objectPropertyIsEnumerable$1.f.call(O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor$1 = {
  	f: f$8
  };

  var functionToString$1 = Function.toString; // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof sharedStore$1.inspectSource != 'function') {
    sharedStore$1.inspectSource = function (it) {
      return functionToString$1.call(it);
    };
  }

  var inspectSource$1 = sharedStore$1.inspectSource;

  var WeakMap$3 = global_1.WeakMap;
  var nativeWeakMap$1 = typeof WeakMap$3 === 'function' && /native code/.test(inspectSource$1(WeakMap$3));

  var keys$3 = shared$1('keys');

  var sharedKey$1 = function (key) {
    return keys$3[key] || (keys$3[key] = uid$1(key));
  };

  var hiddenKeys$3 = {};

  var OBJECT_ALREADY_INITIALIZED$1 = 'Object already initialized';
  var WeakMap$2 = global_1.WeakMap;
  var set$2, get$1, has$2;

  var enforce$1 = function (it) {
    return has$2(it) ? get$1(it) : set$2(it, {});
  };

  var getterFor$1 = function (TYPE) {
    return function (it) {
      var state;

      if (!isObject$1(it) || (state = get$1(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap$1 || sharedStore$1.state) {
    var store$2 = sharedStore$1.state || (sharedStore$1.state = new WeakMap$2());
    var wmget$1 = store$2.get;
    var wmhas$1 = store$2.has;
    var wmset$1 = store$2.set;

    set$2 = function (it, metadata) {
      if (wmhas$1.call(store$2, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$1);
      metadata.facade = it;
      wmset$1.call(store$2, it, metadata);
      return metadata;
    };

    get$1 = function (it) {
      return wmget$1.call(store$2, it) || {};
    };

    has$2 = function (it) {
      return wmhas$1.call(store$2, it);
    };
  } else {
    var STATE$1 = sharedKey$1('state');
    hiddenKeys$3[STATE$1] = true;

    set$2 = function (it, metadata) {
      if (has$3(it, STATE$1)) throw new TypeError(OBJECT_ALREADY_INITIALIZED$1);
      metadata.facade = it;
      createNonEnumerableProperty$1(it, STATE$1, metadata);
      return metadata;
    };

    get$1 = function (it) {
      return has$3(it, STATE$1) ? it[STATE$1] : {};
    };

    has$2 = function (it) {
      return has$3(it, STATE$1);
    };
  }

  var internalState$1 = {
    set: set$2,
    get: get$1,
    has: has$2,
    enforce: enforce$1,
    getterFor: getterFor$1
  };

  var redefine$1 = createCommonjsModule$1(function (module) {
  var getInternalState = internalState$1.get;
  var enforceInternalState = internalState$1.enforce;
  var TEMPLATE = String(String).split('String');
  (module.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var state;

    if (typeof value == 'function') {
      if (typeof key == 'string' && !has$3(value, 'name')) {
        createNonEnumerableProperty$1(value, 'name', key);
      }

      state = enforceInternalState(value);

      if (!state.source) {
        state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
      }
    }

    if (O === global_1) {
      if (simple) O[key] = value;else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }

    if (simple) O[key] = value;else createNonEnumerableProperty$1(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return typeof this == 'function' && getInternalState(this).source || inspectSource$1(this);
  });
  });

  var max$3 = Math.max;
  var min$5 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex$1 = function (index, length) {
    var integer = toInteger$2(index);
    return integer < 0 ? max$3(integer + length, 0) : min$5(integer, length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation


  var createMethod$5 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$1($this);
      var length = toLength$1(O.length);
      var index = toAbsoluteIndex$1(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes$1 = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$5(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$5(false)
  };

  var indexOf$1 = arrayIncludes$1.indexOf;



  var objectKeysInternal$1 = function (object, names) {
    var O = toIndexedObject$1(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) !has$3(hiddenKeys$3, key) && has$3(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (has$3(O, key = names[i++])) {
      ~indexOf$1(result, key) || result.push(key);
    }

    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys$1 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var hiddenKeys$2 = enumBugKeys$1.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  var f$7 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal$1(O, hiddenKeys$2);
  };

  var objectGetOwnPropertyNames$1 = {
  	f: f$7
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$6 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols$1 = {
  	f: f$6
  };

  // all object keys, includes non-enumerable and symbols


  var ownKeys$1 = getBuiltIn$1('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames$1.f(anObject$1(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols$1.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties$1 = function (target, source) {
    var keys = ownKeys$1(source);
    var defineProperty = objectDefineProperty$1.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor$1.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$3(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement$1 = /#|\.prototype\./;

  var isForced$1 = function (feature, detection) {
    var value = data$1[normalize$1(feature)];
    return value == POLYFILL$1 ? true : value == NATIVE$1 ? false : typeof detection == 'function' ? fails$1(detection) : !!detection;
  };

  var normalize$1 = isForced$1.normalize = function (string) {
    return String(string).replace(replacement$1, '.').toLowerCase();
  };

  var data$1 = isForced$1.data = {};
  var NATIVE$1 = isForced$1.NATIVE = 'N';
  var POLYFILL$1 = isForced$1.POLYFILL = 'P';
  var isForced_1$1 = isForced$1;

  var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor$1.f;










  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */


  var _export$1 = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal$1(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$4(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1$1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$1(sourceProperty, 'sham', true);
      } // extend global


      redefine$1(target, key, sourceProperty, options);
    }
  };

  var createProperty$1 = function (object, key, value) {
    var propertyKey = toPrimitive$1(key);
    if (propertyKey in object) objectDefineProperty$1.f(object, propertyKey, createPropertyDescriptor$1(0, value));else object[propertyKey] = value;
  };

  var SPECIES$a = wellKnownSymbol$1('species');

  var arrayMethodHasSpeciesSupport$1 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version$1 >= 51 || !fails$1(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$a] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var HAS_SPECIES_SUPPORT$4 = arrayMethodHasSpeciesSupport$1('slice');
  var SPECIES$9 = wellKnownSymbol$1('species');
  var nativeSlice = [].slice;
  var max$2 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  _export$1({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$4
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$1(this);
      var length = toLength$1(O.length);
      var k = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray$1(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (typeof Constructor == 'function' && (Constructor === Array || isArray$1(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$1(Constructor)) {
          Constructor = Constructor[SPECIES$9];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array || Constructor === undefined) {
          return nativeSlice.call(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array : Constructor)(max$2(fin - k, 0));

      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$1(result, n, O[k]);

      result.length = n;
      return result;
    }
  });

  var iteratorClose$1 = function (iterator) {
    var returnMethod = iterator['return'];

    if (returnMethod !== undefined) {
      return anObject$1(returnMethod.call(iterator)).value;
    }
  };

  // call something on iterator step with safe closing on error


  var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$1(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$1(iterator);
      throw error;
    }
  };

  var iterators$1 = {};

  var ITERATOR$b = wellKnownSymbol$1('iterator');
  var ArrayPrototype$3 = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod$1 = function (it) {
    return it !== undefined && (iterators$1.Array === it || ArrayPrototype$3[ITERATOR$b] === it);
  };

  var TO_STRING_TAG$7 = wellKnownSymbol$1('toStringTag');
  var test$1 = {};
  test$1[TO_STRING_TAG$7] = 'z';
  var toStringTagSupport$1 = String(test$1) === '[object z]';

  var TO_STRING_TAG$6 = wellKnownSymbol$1('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS$1 = classofRaw$1(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet$1 = function (it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof$1 = toStringTagSupport$1 ? classofRaw$1 : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet$1(O = Object(it), TO_STRING_TAG$6)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS$1 ? classofRaw$1(O) // ES3 arguments fallback
    : (result = classofRaw$1(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };

  var ITERATOR$a = wellKnownSymbol$1('iterator');

  var getIteratorMethod$1 = function (it) {
    if (it != undefined) return it[ITERATOR$a] || it['@@iterator'] || iterators$1[classof$1(it)];
  };

  // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from


  var arrayFrom = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$1(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod$1(O);
    var index = 0;
    var length, result, step, iterator, next, value;
    if (mapping) mapfn = functionBindContext$1(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2); // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = iteratorMethod.call(O);
      next = iterator.next;
      result = new C();

      for (; !(step = next.call(iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$1(result, index, value);
      }
    } else {
      length = toLength$1(O.length);
      result = new C(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$1(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var ITERATOR$9 = wellKnownSymbol$1('iterator');
  var SAFE_CLOSING$1 = false;

  try {
    var called$1 = 0;
    var iteratorWithReturn$1 = {
      next: function () {
        return {
          done: !!called$1++
        };
      },
      'return': function () {
        SAFE_CLOSING$1 = true;
      }
    };

    iteratorWithReturn$1[ITERATOR$9] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn$1, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration$1 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING$1) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$9] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$1(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  _export$1({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    from: arrayFrom
  });

  // `String.prototype.{ codePointAt, at }` methods implementation


  var createMethod$4 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible$1($this));
      var position = toInteger$2(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte$1 = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$4(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$4(true)
  };

  var correctPrototypeGetter$1 = !fails$1(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO$3 = sharedKey$1('IE_PROTO');
  var ObjectPrototype$1 = Object.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe

  var objectGetPrototypeOf$1 = correctPrototypeGetter$1 ? Object.getPrototypeOf : function (O) {
    O = toObject$1(O);
    if (has$3(O, IE_PROTO$3)) return O[IE_PROTO$3];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectPrototype$1 : null;
  };

  var ITERATOR$8 = wellKnownSymbol$1('iterator');
  var BUGGY_SAFARI_ITERATORS$3 = false;

  var returnThis$5 = function () {
    return this;
  }; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


  var IteratorPrototype$5, PrototypeOfArrayIteratorPrototype$1, arrayIterator$1;
  /* eslint-disable es/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator$1 = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator$1)) BUGGY_SAFARI_ITERATORS$3 = true;else {
      PrototypeOfArrayIteratorPrototype$1 = objectGetPrototypeOf$1(objectGetPrototypeOf$1(arrayIterator$1));
      if (PrototypeOfArrayIteratorPrototype$1 !== Object.prototype) IteratorPrototype$5 = PrototypeOfArrayIteratorPrototype$1;
    }
  }

  var NEW_ITERATOR_PROTOTYPE$1 = IteratorPrototype$5 == undefined || fails$1(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$5[ITERATOR$8].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE$1) IteratorPrototype$5 = {}; // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

  if (!has$3(IteratorPrototype$5, ITERATOR$8)) {
    createNonEnumerableProperty$1(IteratorPrototype$5, ITERATOR$8, returnThis$5);
  }

  var iteratorsCore$1 = {
    IteratorPrototype: IteratorPrototype$5,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$3
  };

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe


  var objectKeys$1 = Object.keys || function keys(O) {
    return objectKeysInternal$1(O, enumBugKeys$1);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe


  var objectDefineProperties$1 = descriptors$1 ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$1(O);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) objectDefineProperty$1.f(O, key = keys[index++], Properties[key]);

    return O;
  };

  var html$1 = getBuiltIn$1('document', 'documentElement');

  var GT$1 = '>';
  var LT$1 = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT$1 = 'script';
  var IE_PROTO$2 = sharedKey$1('IE_PROTO');

  var EmptyConstructor$1 = function () {
    /* empty */
  };

  var scriptTag$1 = function (content) {
    return LT$1 + SCRIPT$1 + GT$1 + content + LT$1 + '/' + SCRIPT$1 + GT$1;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX$1 = function (activeXDocument) {
    activeXDocument.write(scriptTag$1(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame$1 = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT$1 + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag$1('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument$1;

  var NullProtoObject$1 = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument$1 = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    NullProtoObject$1 = activeXDocument$1 ? NullProtoObjectViaActiveX$1(activeXDocument$1) : NullProtoObjectViaIFrame$1();
    var length = enumBugKeys$1.length;

    while (length--) delete NullProtoObject$1[PROTOTYPE$1][enumBugKeys$1[length]];

    return NullProtoObject$1();
  };

  hiddenKeys$3[IE_PROTO$2] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate$1 = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor$1[PROTOTYPE$1] = anObject$1(O);
      result = new EmptyConstructor$1();
      EmptyConstructor$1[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$2] = O;
    } else result = NullProtoObject$1();

    return Properties === undefined ? result : objectDefineProperties$1(result, Properties);
  };

  var defineProperty$4 = objectDefineProperty$1.f;





  var TO_STRING_TAG$5 = wellKnownSymbol$1('toStringTag');

  var setToStringTag$1 = function (it, TAG, STATIC) {
    if (it && !has$3(it = STATIC ? it : it.prototype, TO_STRING_TAG$5)) {
      defineProperty$4(it, TO_STRING_TAG$5, {
        configurable: true,
        value: TAG
      });
    }
  };

  var IteratorPrototype$4 = iteratorsCore$1.IteratorPrototype;









  var returnThis$4 = function () {
    return this;
  };

  var createIteratorConstructor$1 = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate$1(IteratorPrototype$4, {
      next: createPropertyDescriptor$1(1, next)
    });
    setToStringTag$1(IteratorConstructor, TO_STRING_TAG, false);
    iterators$1[TO_STRING_TAG] = returnThis$4;
    return IteratorConstructor;
  };

  var aPossiblePrototype$1 = function (it) {
    if (!isObject$1(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  };

  /* eslint-disable no-proto -- safe */


   // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe


  var objectSetPrototypeOf$1 = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject$1(O);
      aPossiblePrototype$1(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var IteratorPrototype$3 = iteratorsCore$1.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS$2 = iteratorsCore$1.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$7 = wellKnownSymbol$1('iterator');
  var KEYS$1 = 'keys';
  var VALUES$1 = 'values';
  var ENTRIES$1 = 'entries';

  var returnThis$3 = function () {
    return this;
  };

  var defineIterator$1 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$1(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS$2 && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS$1:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES$1:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES$1:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$7] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS$2 && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf$1(anyNativeIterator.call(new Iterable()));

      if (IteratorPrototype$3 !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf$1(CurrentIteratorPrototype) !== IteratorPrototype$3) {
          if (objectSetPrototypeOf$1) {
            objectSetPrototypeOf$1(CurrentIteratorPrototype, IteratorPrototype$3);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$7] != 'function') {
            createNonEnumerableProperty$1(CurrentIteratorPrototype, ITERATOR$7, returnThis$3);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag$1(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


    if (DEFAULT == VALUES$1 && nativeIterator && nativeIterator.name !== VALUES$1) {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    } // define iterator


    if (IterablePrototype[ITERATOR$7] !== defaultIterator) {
      createNonEnumerableProperty$1(IterablePrototype, ITERATOR$7, defaultIterator);
    }

    iterators$1[NAME] = defaultIterator; // export additional methods

    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES$1),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS$1),
        entries: getIterationMethod(ENTRIES$1)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$1(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export$1({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS$2 || INCORRECT_VALUES_NAME
      }, methods);
    }

    return methods;
  };

  var charAt$3 = stringMultibyte$1.charAt;





  var STRING_ITERATOR$1 = 'String Iterator';
  var setInternalState$5 = internalState$1.set;
  var getInternalState$5 = internalState$1.getterFor(STRING_ITERATOR$1); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator$1(String, 'String', function (iterated) {
    setInternalState$5(this, {
      type: STRING_ITERATOR$1,
      string: String(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$5(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt$3(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var UNSCOPABLES$1 = wellKnownSymbol$1('unscopables');
  var ArrayPrototype$2 = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype$2[UNSCOPABLES$1] == undefined) {
    objectDefineProperty$1.f(ArrayPrototype$2, UNSCOPABLES$1, {
      configurable: true,
      value: objectCreate$1(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables$1 = function (key) {
    ArrayPrototype$2[UNSCOPABLES$1][key] = true;
  };

  var ARRAY_ITERATOR$1 = 'Array Iterator';
  var setInternalState$4 = internalState$1.set;
  var getInternalState$4 = internalState$1.getterFor(ARRAY_ITERATOR$1); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator$1 = defineIterator$1(Array, 'Array', function (iterated, kind) {
    setInternalState$4(this, {
      type: ARRAY_ITERATOR$1,
      target: toIndexedObject$1(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$4(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  iterators$1.Arguments = iterators$1.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$1('keys');
  addToUnscopables$1('values');
  addToUnscopables$1('entries');

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring


  var objectToString$1 = toStringTagSupport$1 ? {}.toString : function toString() {
    return '[object ' + classof$1(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring


  if (!toStringTagSupport$1) {
    redefine$1(Object.prototype, 'toString', objectToString$1, {
      unsafe: true
    });
  }

  var ITERATOR$6 = wellKnownSymbol$1('iterator');
  var TO_STRING_TAG$4 = wellKnownSymbol$1('toStringTag');
  var ArrayValues$1 = es_array_iterator$1.values;

  for (var COLLECTION_NAME$2 in domIterables$1) {
    var Collection$2 = global_1[COLLECTION_NAME$2];
    var CollectionPrototype$2 = Collection$2 && Collection$2.prototype;

    if (CollectionPrototype$2) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$2[ITERATOR$6] !== ArrayValues$1) try {
        createNonEnumerableProperty$1(CollectionPrototype$2, ITERATOR$6, ArrayValues$1);
      } catch (error) {
        CollectionPrototype$2[ITERATOR$6] = ArrayValues$1;
      }

      if (!CollectionPrototype$2[TO_STRING_TAG$4]) {
        createNonEnumerableProperty$1(CollectionPrototype$2, TO_STRING_TAG$4, COLLECTION_NAME$2);
      }

      if (domIterables$1[COLLECTION_NAME$2]) for (var METHOD_NAME$1 in es_array_iterator$1) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype$2[METHOD_NAME$1] !== es_array_iterator$1[METHOD_NAME$1]) try {
          createNonEnumerableProperty$1(CollectionPrototype$2, METHOD_NAME$1, es_array_iterator$1[METHOD_NAME$1]);
        } catch (error) {
          CollectionPrototype$2[METHOD_NAME$1] = es_array_iterator$1[METHOD_NAME$1];
        }
      }
    }
  }

  var $map$1 = arrayIteration$1.map;



  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$1('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  _export$1({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var IS_CONCAT_SPREADABLE$1 = wellKnownSymbol$1('isConcatSpreadable');
  var MAX_SAFE_INTEGER$3 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED$1 = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT$1 = engineV8Version$1 >= 51 || !fails$1(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE$1] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$1('concat');

  var isConcatSpreadable$1 = function (O) {
    if (!isObject$1(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE$1];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
  };

  var FORCED$3 = !IS_CONCAT_SPREADABLE_SUPPORT$1 || !SPECIES_SUPPORT$1; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  _export$1({
    target: 'Array',
    proto: true,
    forced: FORCED$3
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$1(this);
      var A = arraySpeciesCreate$1(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable$1(E)) {
          len = toLength$1(E.length);
          if (n + len > MAX_SAFE_INTEGER$3) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);

          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER$3) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED$1);
          createProperty$1(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


  var regexpFlags$1 = function () {
    var that = anObject$1(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,


  var RE$1 = function (s, f) {
    return RegExp(s, f);
  };

  var UNSUPPORTED_Y$6 = fails$1(function () {
    var re = RE$1('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  var BROKEN_CARET$1 = fails$1(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE$1('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });

  var regexpStickyHelpers$1 = {
  	UNSUPPORTED_Y: UNSUPPORTED_Y$6,
  	BROKEN_CARET: BROKEN_CARET$1
  };

  var regexpUnsupportedDotAll = fails$1(function () {
    // babel-minify transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
    var re = RegExp('.', (typeof '').charAt(0));
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var regexpUnsupportedNcg = fails$1(function () {
    // babel-minify transpiles RegExp('.', 'g') -> /./g and it causes SyntaxError
    var re = RegExp('(?<a>b)', (typeof '').charAt(5));
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  /* eslint-disable regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

  /* eslint-disable regexp/no-useless-quantifier -- testing */









  var getInternalState$3 = internalState$1.get;





  var nativeExec$1 = RegExp.prototype.exec;
  var nativeReplace$1 = shared$1('native-string-replace', String.prototype.replace);
  var patchedExec$1 = nativeExec$1;

  var UPDATES_LAST_INDEX_WRONG$1 = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec$1.call(re1, 'a');
    nativeExec$1.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y$5 = regexpStickyHelpers$1.UNSUPPORTED_Y || regexpStickyHelpers$1.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED$1 = /()??/.exec('')[1] !== undefined;
  var PATCH$1 = UPDATES_LAST_INDEX_WRONG$1 || NPCG_INCLUDED$1 || UNSUPPORTED_Y$5 || regexpUnsupportedDotAll || regexpUnsupportedNcg;

  if (PATCH$1) {
    // eslint-disable-next-line max-statements -- TODO
    patchedExec$1 = function exec(str) {
      var re = this;
      var state = getInternalState$3(re);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = patchedExec$1.call(raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$5 && re.sticky;
      var flags = regexpFlags$1.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');

        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED$1) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG$1) lastIndex = re.lastIndex;
      match = nativeExec$1.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG$1 && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED$1 && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace$1.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = objectCreate$1(null);

        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec$1 = patchedExec$1;

  // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec


  _export$1({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== regexpExec$1
  }, {
    exec: regexpExec$1
  });

  var SPECIES$8 = wellKnownSymbol$1('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic$1 = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$1(KEY);
    var DELEGATES_TO_SYMBOL = !fails$1(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES$8] = function () {
          return re;
        };

        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var $exec = regexp.exec;

        if ($exec === regexpExec$1 || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      redefine$1(String.prototype, KEY, methods[0]);
      redefine$1(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty$1(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var MATCH$2 = wellKnownSymbol$1('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp$1 = function (it) {
    var isRegExp;
    return isObject$1(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classofRaw$1(it) == 'RegExp');
  };

  var SPECIES$7 = wellKnownSymbol$1('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor$1 = function (O, defaultConstructor) {
    var C = anObject$1(O).constructor;
    var S;
    return C === undefined || (S = anObject$1(C)[SPECIES$7]) == undefined ? defaultConstructor : aFunction$3(S);
  };

  var charAt$2 = stringMultibyte$1.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex


  var advanceStringIndex$1 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };

  // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec


  var regexpExecAbstract$1 = function (R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (classofRaw$1(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec$1.call(R, S);
  };

  var UNSUPPORTED_Y$4 = regexpStickyHelpers$1.UNSUPPORTED_Y;
  var arrayPush$1 = [].push;
  var min$4 = Math.min;
  var MAX_UINT32$1 = 0xFFFFFFFF; // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC$1 = !fails$1(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  }); // @@split logic

  fixRegexpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible$1(this));
        var lim = limit === undefined ? MAX_UINT32$1 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegexp$1(separator)) {
          return nativeSplit.call(string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = regexpExec$1.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush$1.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output.length > lim ? output.slice(0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$1(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var res = maybeCallNative(internalSplit, this, string, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = anObject$1(this);
      var S = String(string);
      var C = speciesConstructor$1(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y$4 ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y$4 ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32$1 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract$1(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y$4 ? 0 : q;
        var z = regexpExecAbstract$1(splitter, UNSUPPORTED_Y$4 ? S.slice(q) : S);
        var e;

        if (z === null || (e = min$4(toLength$1(splitter.lastIndex + (UNSUPPORTED_Y$4 ? q : 0)), S.length)) === p) {
          q = advanceStringIndex$1(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC$1, UNSUPPORTED_Y$4);

  var nativePromiseConstructor = global_1.Promise;

  var redefineAll$1 = function (target, src, options) {
    for (var key in src) redefine$1(target, key, src[key], options);

    return target;
  };

  var SPECIES$6 = wellKnownSymbol$1('species');

  var setSpecies$1 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$1(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty$1.f;

    if (descriptors$1 && Constructor && !Constructor[SPECIES$6]) {
      defineProperty(Constructor, SPECIES$6, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };

  var anInstance$1 = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }

    return it;
  };

  var Result$1 = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate$1 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext$1(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose$1(iterator);
      return new Result$1(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$1(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod$1(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod$1(iterFn)) {
        for (index = 0, length = toLength$1(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result$1) return result;
        }

        return new Result$1(false);
      }

      iterator = iterFn.call(iterable);
    }

    next = iterator.next;

    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose$1(iterator);
        throw error;
      }

      if (typeof result == 'object' && result && result instanceof Result$1) return result;
    }

    return new Result$1(false);
  };

  var engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent$1);

  var engineIsNode$1 = classofRaw$1(global_1.process) == 'process';

  var location$1 = global_1.location;
  var set$1 = global_1.setImmediate;
  var clear = global_1.clearImmediate;
  var process$4 = global_1.process;
  var MessageChannel = global_1.MessageChannel;
  var Dispatch = global_1.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;

  var run$1 = function (id) {
    // eslint-disable-next-line no-prototype-builtins -- safe
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };

  var runner = function (id) {
    return function () {
      run$1(id);
    };
  };

  var listener = function (event) {
    run$1(event.data);
  };

  var post = function (id) {
    // old engines have not location.origin
    global_1.postMessage(id + '', location$1.protocol + '//' + location$1.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set$1 || !clear) {
    set$1 = function setImmediate(fn) {
      var args = [];
      var i = 1;

      while (arguments.length > i) args.push(arguments[i++]);

      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func -- spec requirement
        (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
      };

      defer(counter);
      return counter;
    };

    clear = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-


    if (engineIsNode$1) {
      defer = function (id) {
        process$4.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624

    } else if (MessageChannel && !engineIsIos) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = functionBindContext$1(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global_1.addEventListener && typeof postMessage == 'function' && !global_1.importScripts && location$1 && location$1.protocol !== 'file:' && !fails$1(post)) {
      defer = post;
      global_1.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in documentCreateElement$1('script')) {
      defer = function (id) {
        html$1.appendChild(documentCreateElement$1('script'))[ONREADYSTATECHANGE] = function () {
          html$1.removeChild(this);
          run$1(id);
        };
      }; // Rest old browsers

    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set$1,
    clear: clear
  };

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent$1);

  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor$1.f;

  var macrotask = task$1.set;







  var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
  var document$3 = global_1.document;
  var process$3 = global_1.process;
  var Promise$1 = global_1.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$3(global_1, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush$1, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush$1 = function () {
      var parent, fn;
      if (engineIsNode$1 && (parent = process$3.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (error) {
          if (head) notify$1();else last = undefined;
          throw error;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


    if (!engineIsIos && !engineIsNode$1 && !engineIsWebosWebkit && MutationObserver && document$3) {
      toggle = true;
      node = document$3.createTextNode('');
      new MutationObserver(flush$1).observe(node, {
        characterData: true
      });

      notify$1 = function () {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

      promise.constructor = Promise$1;
      then = promise.then;

      notify$1 = function () {
        then.call(promise, flush$1);
      }; // Node.js without promises

    } else if (engineIsNode$1) {
      notify$1 = function () {
        process$3.nextTick(flush$1);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      notify$1 = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global_1, flush$1);
      };
    }
  }

  var microtask = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify$1();
    }

    last = task;
  };

  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction$3(resolve);
    this.reject = aFunction$3(reject);
  }; // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability


  var f$5 = function (C) {
    return new PromiseCapability(C);
  };

  var newPromiseCapability$1 = {
  	f: f$5
  };

  var promiseResolve = function (C, x) {
    anObject$1(C);
    if (isObject$1(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var hostReportErrors = function (a, b) {
    var console = global_1.console;

    if (console && console.error) {
      arguments.length === 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform = function (exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };

  var engineIsBrowser = typeof window == 'object';

  var task = task$1.set;























  var SPECIES$5 = wellKnownSymbol$1('species');
  var PROMISE = 'Promise';
  var getInternalState$2 = internalState$1.get;
  var setInternalState$3 = internalState$1.set;
  var getInternalPromiseState = internalState$1.getterFor(PROMISE);
  var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
  var PromiseConstructor = nativePromiseConstructor;
  var PromiseConstructorPrototype = NativePromisePrototype;
  var TypeError$1 = global_1.TypeError;
  var document$2 = global_1.document;
  var process$2 = global_1.process;
  var newPromiseCapability = newPromiseCapability$1.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$2 && document$2.createEvent && global_1.dispatchEvent);
  var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED$2 = isForced_1$1(PROMISE, function () {
    var GLOBAL_CORE_JS_PROMISE = inspectSource$1(PromiseConstructor) !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions

    if (!GLOBAL_CORE_JS_PROMISE && engineV8Version$1 === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679

    if (engineV8Version$1 >= 51 && /native code/.test(PromiseConstructor)) return false; // Detect correctness of subclassing with @@species support

    var promise = new PromiseConstructor(function (resolve) {
      resolve(1);
    });

    var FakePromise = function (exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES$5] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION = FORCED$2 || !checkCorrectnessOfIteration$1(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function (it) {
    var then;
    return isObject$1(it) && typeof (then = it.then) == 'function' ? then : false;
  };

  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function () {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0; // variable length - can't use forEach

      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;

        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
            }

            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // can throw

              if (domain) {
                domain.exit();
                exited = true;
              }
            }

            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }

      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function (name, promise, reason) {
    var event, handler;

    if (DISPATCH_EVENT) {
      event = document$2.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function (state) {
    task.call(global_1, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform(function () {
          if (engineIsNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = engineIsNode$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function (state) {
    task.call(global_1, function () {
      var promise = state.facade;

      if (engineIsNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind$1 = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;

    try {
      if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
      var then = isThenable(value);

      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };

          try {
            then.call(value, bind$1(internalResolve, wrapper, state), bind$1(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  }; // constructor polyfill


  if (FORCED$2) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$1(this, PromiseConstructor, PROMISE);
      aFunction$3(executor);
      Internal.call(this);
      var state = getInternalState$2(this);

      try {
        executor(bind$1(internalResolve, state), bind$1(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromiseConstructorPrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState$3(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    Internal.prototype = redefineAll$1(PromiseConstructorPrototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = engineIsNode$1 ? process$2.domain : undefined;
        state.parent = true;
        state.reactions.push(reaction);
        if (state.state != PENDING) notify(state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalState$2(promise);
      this.promise = promise;
      this.resolve = bind$1(internalResolve, state);
      this.reject = bind$1(internalReject, state);
    };

    newPromiseCapability$1.f = newPromiseCapability = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (typeof nativePromiseConstructor == 'function' && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine$1(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            nativeThen.call(that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

        redefine$1(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs


      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs


      if (objectSetPrototypeOf$1) {
        objectSetPrototypeOf$1(NativePromisePrototype, PromiseConstructorPrototype);
      }
    }
  }

  _export$1({
    global: true,
    wrap: true,
    forced: FORCED$2
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag$1(PromiseConstructor, PROMISE, false);
  setSpecies$1(PROMISE);
  PromiseWrapper = getBuiltIn$1(PROMISE); // statics

  _export$1({
    target: PROMISE,
    stat: true,
    forced: FORCED$2
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      capability.reject.call(undefined, r);
      return capability.promise;
    }
  });
  _export$1({
    target: PROMISE,
    stat: true,
    forced: FORCED$2
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });
  _export$1({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$3(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          $promiseResolve.call(C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aFunction$3(C.resolve);
        iterate$1(iterable, function (promise) {
          $promiseResolve.call(C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  function noop$1() { }
  function assign$1(tar, src) {
      // @ts-ignore
      for (const k in src)
          tar[k] = src[k];
      return tar;
  }
  function run(fn) {
      return fn();
  }
  function blank_object() {
      return Object.create(null);
  }
  function run_all(fns) {
      fns.forEach(run);
  }
  function is_function(thing) {
      return typeof thing === 'function';
  }
  function safe_not_equal(a, b) {
      return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
  }
  function is_empty(obj) {
      return Object.keys(obj).length === 0;
  }
  function create_slot(definition, ctx, $$scope, fn) {
      if (definition) {
          const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
          return definition[0](slot_ctx);
      }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
      return definition[1] && fn
          ? assign$1($$scope.ctx.slice(), definition[1](fn(ctx)))
          : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
      if (definition[2] && fn) {
          const lets = definition[2](fn(dirty));
          if ($$scope.dirty === undefined) {
              return lets;
          }
          if (typeof lets === 'object') {
              const merged = [];
              const len = Math.max($$scope.dirty.length, lets.length);
              for (let i = 0; i < len; i += 1) {
                  merged[i] = $$scope.dirty[i] | lets[i];
              }
              return merged;
          }
          return $$scope.dirty | lets;
      }
      return $$scope.dirty;
  }
  function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
      const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
      if (slot_changes) {
          const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
          slot.p(slot_context, slot_changes);
      }
  }

  // Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
  // at the end of hydration without touching the remaining nodes.
  let is_hydrating = false;
  function start_hydrating() {
      is_hydrating = true;
  }
  function end_hydrating() {
      is_hydrating = false;
  }
  function upper_bound(low, high, key, value) {
      // Return first index of value larger than input value in the range [low, high)
      while (low < high) {
          const mid = low + ((high - low) >> 1);
          if (key(mid) <= value) {
              low = mid + 1;
          }
          else {
              high = mid;
          }
      }
      return low;
  }
  function init_hydrate(target) {
      if (target.hydrate_init)
          return;
      target.hydrate_init = true;
      // We know that all children have claim_order values since the unclaimed have been detached
      const children = target.childNodes;
      /*
      * Reorder claimed children optimally.
      * We can reorder claimed children optimally by finding the longest subsequence of
      * nodes that are already claimed in order and only moving the rest. The longest
      * subsequence subsequence of nodes that are claimed in order can be found by
      * computing the longest increasing subsequence of .claim_order values.
      *
      * This algorithm is optimal in generating the least amount of reorder operations
      * possible.
      *
      * Proof:
      * We know that, given a set of reordering operations, the nodes that do not move
      * always form an increasing subsequence, since they do not move among each other
      * meaning that they must be already ordered among each other. Thus, the maximal
      * set of nodes that do not move form a longest increasing subsequence.
      */
      // Compute longest increasing subsequence
      // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
      const m = new Int32Array(children.length + 1);
      // Predecessor indices + 1
      const p = new Int32Array(children.length);
      m[0] = -1;
      let longest = 0;
      for (let i = 0; i < children.length; i++) {
          const current = children[i].claim_order;
          // Find the largest subsequence length such that it ends in a value less than our current value
          // upper_bound returns first greater value, so we subtract one
          const seqLen = upper_bound(1, longest + 1, idx => children[m[idx]].claim_order, current) - 1;
          p[i] = m[seqLen] + 1;
          const newLen = seqLen + 1;
          // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
          m[newLen] = i;
          longest = Math.max(newLen, longest);
      }
      // The longest increasing subsequence of nodes (initially reversed)
      const lis = [];
      // The rest of the nodes, nodes that will be moved
      const toMove = [];
      let last = children.length - 1;
      for (let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]) {
          lis.push(children[cur - 1]);
          for (; last >= cur; last--) {
              toMove.push(children[last]);
          }
          last--;
      }
      for (; last >= 0; last--) {
          toMove.push(children[last]);
      }
      lis.reverse();
      // We sort the nodes being moved to guarantee that their insertion order matches the claim order
      toMove.sort((a, b) => a.claim_order - b.claim_order);
      // Finally, we move the nodes
      for (let i = 0, j = 0; i < toMove.length; i++) {
          while (j < lis.length && toMove[i].claim_order >= lis[j].claim_order) {
              j++;
          }
          const anchor = j < lis.length ? lis[j] : null;
          target.insertBefore(toMove[i], anchor);
      }
  }
  function append(target, node) {
      if (is_hydrating) {
          init_hydrate(target);
          if ((target.actual_end_child === undefined) || ((target.actual_end_child !== null) && (target.actual_end_child.parentElement !== target))) {
              target.actual_end_child = target.firstChild;
          }
          if (node !== target.actual_end_child) {
              target.insertBefore(node, target.actual_end_child);
          }
          else {
              target.actual_end_child = node.nextSibling;
          }
      }
      else if (node.parentNode !== target) {
          target.appendChild(node);
      }
  }
  function insert(target, node, anchor) {
      if (is_hydrating && !anchor) {
          append(target, node);
      }
      else if (node.parentNode !== target || (anchor && node.nextSibling !== anchor)) {
          target.insertBefore(node, anchor || null);
      }
  }
  function detach(node) {
      node.parentNode.removeChild(node);
  }
  function destroy_each(iterations, detaching) {
      for (let i = 0; i < iterations.length; i += 1) {
          if (iterations[i])
              iterations[i].d(detaching);
      }
  }
  function element(name) {
      return document.createElement(name);
  }
  function svg_element(name) {
      return document.createElementNS('http://www.w3.org/2000/svg', name);
  }
  function text(data) {
      return document.createTextNode(data);
  }
  function space() {
      return text(' ');
  }
  function empty() {
      return text('');
  }
  function listen(node, event, handler, options) {
      node.addEventListener(event, handler, options);
      return () => node.removeEventListener(event, handler, options);
  }
  function prevent_default(fn) {
      return function (event) {
          event.preventDefault();
          // @ts-ignore
          return fn.call(this, event);
      };
  }
  function attr(node, attribute, value) {
      if (value == null)
          node.removeAttribute(attribute);
      else if (node.getAttribute(attribute) !== value)
          node.setAttribute(attribute, value);
  }
  function set_attributes(node, attributes) {
      // @ts-ignore
      const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
      for (const key in attributes) {
          if (attributes[key] == null) {
              node.removeAttribute(key);
          }
          else if (key === 'style') {
              node.style.cssText = attributes[key];
          }
          else if (key === '__value') {
              node.value = node[key] = attributes[key];
          }
          else if (descriptors[key] && descriptors[key].set) {
              node[key] = attributes[key];
          }
          else {
              attr(node, key, attributes[key]);
          }
      }
  }
  function set_custom_element_data(node, prop, value) {
      if (prop in node) {
          node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
      }
      else {
          attr(node, prop, value);
      }
  }
  function to_number(value) {
      return value === '' ? null : +value;
  }
  function children(element) {
      return Array.from(element.childNodes);
  }
  function set_data(text, data) {
      data = '' + data;
      if (text.wholeText !== data)
          text.data = data;
  }
  function set_input_value(input, value) {
      input.value = value == null ? '' : value;
  }
  function set_style(node, key, value, important) {
      node.style.setProperty(key, value, important ? 'important' : '');
  }
  // unfortunately this can't be a constant as that wouldn't be tree-shakeable
  // so we cache the result instead
  let crossorigin;
  function is_crossorigin() {
      if (crossorigin === undefined) {
          crossorigin = false;
          try {
              if (typeof window !== 'undefined' && window.parent) {
                  void window.parent.document;
              }
          }
          catch (error) {
              crossorigin = true;
          }
      }
      return crossorigin;
  }
  function add_resize_listener(node, fn) {
      const computed_style = getComputedStyle(node);
      if (computed_style.position === 'static') {
          node.style.position = 'relative';
      }
      const iframe = element('iframe');
      iframe.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; ' +
          'overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;');
      iframe.setAttribute('aria-hidden', 'true');
      iframe.tabIndex = -1;
      const crossorigin = is_crossorigin();
      let unsubscribe;
      if (crossorigin) {
          iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
          unsubscribe = listen(window, 'message', (event) => {
              if (event.source === iframe.contentWindow)
                  fn();
          });
      }
      else {
          iframe.src = 'about:blank';
          iframe.onload = () => {
              unsubscribe = listen(iframe.contentWindow, 'resize', fn);
          };
      }
      append(node, iframe);
      return () => {
          if (crossorigin) {
              unsubscribe();
          }
          else if (unsubscribe && iframe.contentWindow) {
              unsubscribe();
          }
          detach(iframe);
      };
  }
  function toggle_class(element, name, toggle) {
      element.classList[toggle ? 'add' : 'remove'](name);
  }
  function custom_event(type, detail) {
      const e = document.createEvent('CustomEvent');
      e.initCustomEvent(type, false, false, detail);
      return e;
  }
  class HtmlTag {
      constructor(claimed_nodes) {
          this.e = this.n = null;
          this.l = claimed_nodes;
      }
      m(html, target, anchor = null) {
          if (!this.e) {
              this.e = element(target.nodeName);
              this.t = target;
              if (this.l) {
                  this.n = this.l;
              }
              else {
                  this.h(html);
              }
          }
          this.i(anchor);
      }
      h(html) {
          this.e.innerHTML = html;
          this.n = Array.from(this.e.childNodes);
      }
      i(anchor) {
          for (let i = 0; i < this.n.length; i += 1) {
              insert(this.t, this.n[i], anchor);
          }
      }
      p(html) {
          this.d();
          this.h(html);
          this.i(this.a);
      }
      d() {
          this.n.forEach(detach);
      }
  }

  let current_component;
  function set_current_component(component) {
      current_component = component;
  }
  function get_current_component() {
      if (!current_component)
          throw new Error('Function called outside component initialization');
      return current_component;
  }
  function beforeUpdate(fn) {
      get_current_component().$$.before_update.push(fn);
  }
  function onMount(fn) {
      get_current_component().$$.on_mount.push(fn);
  }
  function onDestroy(fn) {
      get_current_component().$$.on_destroy.push(fn);
  }
  function createEventDispatcher() {
      const component = get_current_component();
      return (type, detail) => {
          const callbacks = component.$$.callbacks[type];
          if (callbacks) {
              // TODO are there situations where events could be dispatched
              // in a server (non-DOM) environment?
              const event = custom_event(type, detail);
              callbacks.slice().forEach(fn => {
                  fn.call(component, event);
              });
          }
      };
  }

  const dirty_components = [];
  const binding_callbacks = [];
  const render_callbacks = [];
  const flush_callbacks = [];
  const resolved_promise = Promise.resolve();
  let update_scheduled = false;
  function schedule_update() {
      if (!update_scheduled) {
          update_scheduled = true;
          resolved_promise.then(flush);
      }
  }
  function tick() {
      schedule_update();
      return resolved_promise;
  }
  function add_render_callback(fn) {
      render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
      flush_callbacks.push(fn);
  }
  let flushing = false;
  const seen_callbacks = new Set();
  function flush() {
      if (flushing)
          return;
      flushing = true;
      do {
          // first, call beforeUpdate functions
          // and update components
          for (let i = 0; i < dirty_components.length; i += 1) {
              const component = dirty_components[i];
              set_current_component(component);
              update(component.$$);
          }
          set_current_component(null);
          dirty_components.length = 0;
          while (binding_callbacks.length)
              binding_callbacks.pop()();
          // then, once components are updated, call
          // afterUpdate functions. This may cause
          // subsequent updates...
          for (let i = 0; i < render_callbacks.length; i += 1) {
              const callback = render_callbacks[i];
              if (!seen_callbacks.has(callback)) {
                  // ...so guard against infinite loops
                  seen_callbacks.add(callback);
                  callback();
              }
          }
          render_callbacks.length = 0;
      } while (dirty_components.length);
      while (flush_callbacks.length) {
          flush_callbacks.pop()();
      }
      update_scheduled = false;
      flushing = false;
      seen_callbacks.clear();
  }
  function update($$) {
      if ($$.fragment !== null) {
          $$.update();
          run_all($$.before_update);
          const dirty = $$.dirty;
          $$.dirty = [-1];
          $$.fragment && $$.fragment.p($$.ctx, dirty);
          $$.after_update.forEach(add_render_callback);
      }
  }
  const outroing = new Set();
  let outros;
  function group_outros() {
      outros = {
          r: 0,
          c: [],
          p: outros // parent group
      };
  }
  function check_outros() {
      if (!outros.r) {
          run_all(outros.c);
      }
      outros = outros.p;
  }
  function transition_in(block, local) {
      if (block && block.i) {
          outroing.delete(block);
          block.i(local);
      }
  }
  function transition_out(block, local, detach, callback) {
      if (block && block.o) {
          if (outroing.has(block))
              return;
          outroing.add(block);
          outros.c.push(() => {
              outroing.delete(block);
              if (callback) {
                  if (detach)
                      block.d(1);
                  callback();
              }
          });
          block.o(local);
      }
  }

  const globals = (typeof window !== 'undefined'
      ? window
      : typeof globalThis !== 'undefined'
          ? globalThis
          : global);
  function outro_and_destroy_block(block, lookup) {
      transition_out(block, 1, 1, () => {
          lookup.delete(block.key);
      });
  }
  function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
      let o = old_blocks.length;
      let n = list.length;
      let i = o;
      const old_indexes = {};
      while (i--)
          old_indexes[old_blocks[i].key] = i;
      const new_blocks = [];
      const new_lookup = new Map();
      const deltas = new Map();
      i = n;
      while (i--) {
          const child_ctx = get_context(ctx, list, i);
          const key = get_key(child_ctx);
          let block = lookup.get(key);
          if (!block) {
              block = create_each_block(key, child_ctx);
              block.c();
          }
          else if (dynamic) {
              block.p(child_ctx, dirty);
          }
          new_lookup.set(key, new_blocks[i] = block);
          if (key in old_indexes)
              deltas.set(key, Math.abs(i - old_indexes[key]));
      }
      const will_move = new Set();
      const did_move = new Set();
      function insert(block) {
          transition_in(block, 1);
          block.m(node, next);
          lookup.set(block.key, block);
          next = block.first;
          n--;
      }
      while (o && n) {
          const new_block = new_blocks[n - 1];
          const old_block = old_blocks[o - 1];
          const new_key = new_block.key;
          const old_key = old_block.key;
          if (new_block === old_block) {
              // do nothing
              next = new_block.first;
              o--;
              n--;
          }
          else if (!new_lookup.has(old_key)) {
              // remove old block
              destroy(old_block, lookup);
              o--;
          }
          else if (!lookup.has(new_key) || will_move.has(new_key)) {
              insert(new_block);
          }
          else if (did_move.has(old_key)) {
              o--;
          }
          else if (deltas.get(new_key) > deltas.get(old_key)) {
              did_move.add(new_key);
              insert(new_block);
          }
          else {
              will_move.add(old_key);
              o--;
          }
      }
      while (o--) {
          const old_block = old_blocks[o];
          if (!new_lookup.has(old_block.key))
              destroy(old_block, lookup);
      }
      while (n)
          insert(new_blocks[n - 1]);
      return new_blocks;
  }

  function get_spread_update(levels, updates) {
      const update = {};
      const to_null_out = {};
      const accounted_for = { $$scope: 1 };
      let i = levels.length;
      while (i--) {
          const o = levels[i];
          const n = updates[i];
          if (n) {
              for (const key in o) {
                  if (!(key in n))
                      to_null_out[key] = 1;
              }
              for (const key in n) {
                  if (!accounted_for[key]) {
                      update[key] = n[key];
                      accounted_for[key] = 1;
                  }
              }
              levels[i] = n;
          }
          else {
              for (const key in o) {
                  accounted_for[key] = 1;
              }
          }
      }
      for (const key in to_null_out) {
          if (!(key in update))
              update[key] = undefined;
      }
      return update;
  }
  function get_spread_object(spread_props) {
      return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
  }

  function bind(component, name, callback) {
      const index = component.$$.props[name];
      if (index !== undefined) {
          component.$$.bound[index] = callback;
          callback(component.$$.ctx[index]);
      }
  }
  function create_component(block) {
      block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
      const { fragment, on_mount, on_destroy, after_update } = component.$$;
      fragment && fragment.m(target, anchor);
      if (!customElement) {
          // onMount happens before the initial afterUpdate
          add_render_callback(() => {
              const new_on_destroy = on_mount.map(run).filter(is_function);
              if (on_destroy) {
                  on_destroy.push(...new_on_destroy);
              }
              else {
                  // Edge case - component was destroyed immediately,
                  // most likely as a result of a binding initialising
                  run_all(new_on_destroy);
              }
              component.$$.on_mount = [];
          });
      }
      after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
      const $$ = component.$$;
      if ($$.fragment !== null) {
          run_all($$.on_destroy);
          $$.fragment && $$.fragment.d(detaching);
          // TODO null out other refs, including component.$$ (but need to
          // preserve final state?)
          $$.on_destroy = $$.fragment = null;
          $$.ctx = [];
      }
  }
  function make_dirty(component, i) {
      if (component.$$.dirty[0] === -1) {
          dirty_components.push(component);
          schedule_update();
          component.$$.dirty.fill(0);
      }
      component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
  }
  function init$1(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
      const parent_component = current_component;
      set_current_component(component);
      const $$ = component.$$ = {
          fragment: null,
          ctx: null,
          // state
          props,
          update: noop$1,
          not_equal,
          bound: blank_object(),
          // lifecycle
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(parent_component ? parent_component.$$.context : options.context || []),
          // everything else
          callbacks: blank_object(),
          dirty,
          skip_bound: false
      };
      let ready = false;
      $$.ctx = instance
          ? instance(component, options.props || {}, (i, ret, ...rest) => {
              const value = rest.length ? rest[0] : ret;
              if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                  if (!$$.skip_bound && $$.bound[i])
                      $$.bound[i](value);
                  if (ready)
                      make_dirty(component, i);
              }
              return ret;
          })
          : [];
      $$.update();
      ready = true;
      run_all($$.before_update);
      // `false` as a special case of no DOM component
      $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
      if (options.target) {
          if (options.hydrate) {
              start_hydrating();
              const nodes = children(options.target);
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.l(nodes);
              nodes.forEach(detach);
          }
          else {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              $$.fragment && $$.fragment.c();
          }
          if (options.intro)
              transition_in(component.$$.fragment);
          mount_component(component, options.target, options.anchor, options.customElement);
          end_hydrating();
          flush();
      }
      set_current_component(parent_component);
  }
  /**
   * Base class for Svelte components. Used when dev=false.
   */
  class SvelteComponent {
      $destroy() {
          destroy_component(this, 1);
          this.$destroy = noop$1;
      }
      $on(type, callback) {
          const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
          callbacks.push(callback);
          return () => {
              const index = callbacks.indexOf(callback);
              if (index !== -1)
                  callbacks.splice(index, 1);
          };
      }
      $set($$props) {
          if (this.$$set && !is_empty($$props)) {
              this.$$.skip_bound = true;
              this.$$set($$props);
              this.$$.skip_bound = false;
          }
      }
  }

  function toInteger$1(dirtyNumber) {
    if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
      return NaN;
    }

    var number = Number(dirtyNumber);

    if (isNaN(number)) {
      return number;
    }

    return number < 0 ? Math.ceil(number) : Math.floor(number);
  }

  function requiredArgs(required, args) {
    if (args.length < required) {
      throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
    }
  }

  /**
   * @name toDate
   * @category Common Helpers
   * @summary Convert the given argument to an instance of Date.
   *
   * @description
   * Convert the given argument to an instance of Date.
   *
   * If the argument is an instance of Date, the function returns its clone.
   *
   * If the argument is a number, it is treated as a timestamp.
   *
   * If the argument is none of the above, the function returns Invalid Date.
   *
   * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
   *
   * @param {Date|Number} argument - the value to convert
   * @returns {Date} the parsed date in the local time zone
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Clone the date:
   * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
   * //=> Tue Feb 11 2014 11:30:30
   *
   * @example
   * // Convert the timestamp to date:
   * const result = toDate(1392098430000)
   * //=> Tue Feb 11 2014 11:30:30
   */

  function toDate(argument) {
    requiredArgs(1, arguments);
    var argStr = Object.prototype.toString.call(argument); // Clone the date

    if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
      // Prevent the date to lose the milliseconds when passed to new Date() in IE10
      return new Date(argument.getTime());
    } else if (typeof argument === 'number' || argStr === '[object Number]') {
      return new Date(argument);
    } else {
      if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
        // eslint-disable-next-line no-console
        console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

        console.warn(new Error().stack);
      }

      return new Date(NaN);
    }
  }

  /**
   * @name addDays
   * @category Day Helpers
   * @summary Add the specified number of days to the given date.
   *
   * @description
   * Add the specified number of days to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} - the new date with the days added
   * @throws {TypeError} - 2 arguments required
   *
   * @example
   * // Add 10 days to 1 September 2014:
   * const result = addDays(new Date(2014, 8, 1), 10)
   * //=> Thu Sep 11 2014 00:00:00
   */

  function addDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger$1(dirtyAmount);

    if (isNaN(amount)) {
      return new Date(NaN);
    }

    if (!amount) {
      // If 0 days, no-op to avoid changing times in the hour before end of DST
      return date;
    }

    date.setDate(date.getDate() + amount);
    return date;
  }

  /**
   * @name addMonths
   * @category Month Helpers
   * @summary Add the specified number of months to the given date.
   *
   * @description
   * Add the specified number of months to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of months to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the months added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 5 months to 1 September 2014:
   * const result = addMonths(new Date(2014, 8, 1), 5)
   * //=> Sun Feb 01 2015 00:00:00
   */

  function addMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var amount = toInteger$1(dirtyAmount);

    if (isNaN(amount)) {
      return new Date(NaN);
    }

    if (!amount) {
      // If 0 months, no-op to avoid changing times in the hour before end of DST
      return date;
    }

    var dayOfMonth = date.getDate(); // The JS Date object supports date math by accepting out-of-bounds values for
    // month, day, etc. For example, new Date(2020, 0, 0) returns 31 Dec 2019 and
    // new Date(2020, 13, 1) returns 1 Feb 2021.  This is *almost* the behavior we
    // want except that dates will wrap around the end of a month, meaning that
    // new Date(2020, 13, 31) will return 3 Mar 2021 not 28 Feb 2021 as desired. So
    // we'll default to the end of the desired month by adding 1 to the desired
    // month and using a date of 0 to back up one day to the end of the desired
    // month.

    var endOfDesiredMonth = new Date(date.getTime());
    endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
    var daysInMonth = endOfDesiredMonth.getDate();

    if (dayOfMonth >= daysInMonth) {
      // If we're already at the end of the month, then this is the correct date
      // and we're done.
      return endOfDesiredMonth;
    } else {
      // Otherwise, we now know that setting the original day-of-month value won't
      // cause an overflow, so set the desired day-of-month. Note that we can't
      // just set the date of `endOfDesiredMonth` because that object may have had
      // its time changed in the unusual case where where a DST transition was on
      // the last day of the month and its local time was in the hour skipped or
      // repeated next to a DST transition.  So we use `date` instead which is
      // guaranteed to still have the original time.
      date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
      return date;
    }
  }

  /**
   * @name addMilliseconds
   * @category Millisecond Helpers
   * @summary Add the specified number of milliseconds to the given date.
   *
   * @description
   * Add the specified number of milliseconds to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
   * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:30.750
   */

  function addMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var timestamp = toDate(dirtyDate).getTime();
    var amount = toInteger$1(dirtyAmount);
    return new Date(timestamp + amount);
  }

  /**
   * @name startOfWeek
   * @category Week Helpers
   * @summary Return the start of a week for the given date.
   *
   * @description
   * Return the start of a week for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Date} the start of a week
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   *
   * @example
   * // The start of a week for 2 September 2014 11:55:00:
   * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sun Aug 31 2014 00:00:00
   *
   * @example
   * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
   * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
   * //=> Mon Sep 01 2014 00:00:00
   */

  function startOfWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger$1(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger$1(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setDate(date.getDate() - diff);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
   * They usually appear for dates that denote time before the timezones were introduced
   * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
   * and GMT+01:00:00 after that date)
   *
   * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
   * which would lead to incorrect calculations.
   *
   * This function returns the timezone offset in milliseconds that takes seconds in account.
   */
  function getTimezoneOffsetInMilliseconds(date) {
    var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
    utcDate.setUTCFullYear(date.getFullYear());
    return date.getTime() - utcDate.getTime();
  }

  /**
   * @name startOfDay
   * @category Day Helpers
   * @summary Return the start of a day for the given date.
   *
   * @description
   * Return the start of a day for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the start of a day
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The start of a day for 2 September 2014 11:55:00:
   * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 02 2014 00:00:00
   */

  function startOfDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  var MILLISECONDS_IN_DAY$1 = 86400000;
  /**
   * @name differenceInCalendarDays
   * @category Day Helpers
   * @summary Get the number of calendar days between the given dates.
   *
   * @description
   * Get the number of calendar days between the given dates. This means that the times are removed
   * from the dates and then the difference in days is calculated.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar days
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // How many calendar days are between
   * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
   * const result = differenceInCalendarDays(
   *   new Date(2012, 6, 2, 0, 0),
   *   new Date(2011, 6, 2, 23, 0)
   * )
   * //=> 366
   * // How many calendar days are between
   * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
   * const result = differenceInCalendarDays(
   *   new Date(2011, 6, 3, 0, 1),
   *   new Date(2011, 6, 2, 23, 59)
   * )
   * //=> 1
   */

  function differenceInCalendarDays(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var startOfDayLeft = startOfDay(dirtyDateLeft);
    var startOfDayRight = startOfDay(dirtyDateRight);
    var timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
    var timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight); // Round the number of days to the nearest integer
    // because the number of milliseconds in a day is not constant
    // (e.g. it's different in the day of the daylight saving time clock shift)

    return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY$1);
  }

  /**
   * @name addWeeks
   * @category Week Helpers
   * @summary Add the specified number of weeks to the given date.
   *
   * @description
   * Add the specified number of week to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of weeks to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the weeks added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 4 weeks to 1 September 2014:
   * const result = addWeeks(new Date(2014, 8, 1), 4)
   * //=> Mon Sep 29 2014 00:00:00
   */

  function addWeeks(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger$1(dirtyAmount);
    var days = amount * 7;
    return addDays(dirtyDate, days);
  }

  /**
   * @name addYears
   * @category Year Helpers
   * @summary Add the specified number of years to the given date.
   *
   * @description
   * Add the specified number of years to the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of years to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the years added
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Add 5 years to 1 September 2014:
   * const result = addYears(new Date(2014, 8, 1), 5)
   * //=> Sun Sep 01 2019 00:00:00
   */

  function addYears(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger$1(dirtyAmount);
    return addMonths(dirtyDate, amount * 12);
  }

  /**
   * @name compareAsc
   * @category Common Helpers
   * @summary Compare the two dates and return -1, 0 or 1.
   *
   * @description
   * Compare the two dates and return 1 if the first date is after the second,
   * -1 if the first date is before the second or 0 if dates are equal.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the first date to compare
   * @param {Date|Number} dateRight - the second date to compare
   * @returns {Number} the result of the comparison
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Compare 11 February 1987 and 10 July 1989:
   * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
   * //=> -1
   *
   * @example
   * // Sort the array of dates:
   * const result = [
   *   new Date(1995, 6, 2),
   *   new Date(1987, 1, 11),
   *   new Date(1989, 6, 10)
   * ].sort(compareAsc)
   * //=> [
   * //   Wed Feb 11 1987 00:00:00,
   * //   Mon Jul 10 1989 00:00:00,
   * //   Sun Jul 02 1995 00:00:00
   * // ]
   */

  function compareAsc(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var diff = dateLeft.getTime() - dateRight.getTime();

    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    } else {
      return diff;
    }
  }

  /**
   * @name isValid
   * @category Common Helpers
   * @summary Is the given date valid?
   *
   * @description
   * Returns false if argument is Invalid Date and true otherwise.
   * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
   * Invalid Date is a Date, whose time value is NaN.
   *
   * Time value of Date: http://es5.github.io/#x15.9.1.1
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - Now `isValid` doesn't throw an exception
   *   if the first argument is not an instance of Date.
   *   Instead, argument is converted beforehand using `toDate`.
   *
   *   Examples:
   *
   *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
   *   |---------------------------|---------------|---------------|
   *   | `new Date()`              | `true`        | `true`        |
   *   | `new Date('2016-01-01')`  | `true`        | `true`        |
   *   | `new Date('')`            | `false`       | `false`       |
   *   | `new Date(1488370835081)` | `true`        | `true`        |
   *   | `new Date(NaN)`           | `false`       | `false`       |
   *   | `'2016-01-01'`            | `TypeError`   | `false`       |
   *   | `''`                      | `TypeError`   | `false`       |
   *   | `1488370835081`           | `TypeError`   | `true`        |
   *   | `NaN`                     | `TypeError`   | `false`       |
   *
   *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
   *   that try to coerce arguments to the expected type
   *   (which is also the case with other *date-fns* functions).
   *
   * @param {*} date - the date to check
   * @returns {Boolean} the date is valid
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // For the valid date:
   * var result = isValid(new Date(2014, 1, 31))
   * //=> true
   *
   * @example
   * // For the value, convertable into a date:
   * var result = isValid(1393804800000)
   * //=> true
   *
   * @example
   * // For the invalid date:
   * var result = isValid(new Date(''))
   * //=> false
   */

  function isValid(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    return !isNaN(date);
  }

  /**
   * @name isSameDay
   * @category Day Helpers
   * @summary Are the given dates in the same day?
   *
   * @description
   * Are the given dates in the same day?
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the first date to check
   * @param {Date|Number} dateRight - the second date to check
   * @returns {Boolean} the dates are in the same day
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
   * var result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
   * //=> true
   */

  function isSameDay(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeftStartOfDay = startOfDay(dirtyDateLeft);
    var dateRightStartOfDay = startOfDay(dirtyDateRight);
    return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
  }

  /**
   * @name differenceInCalendarMonths
   * @category Month Helpers
   * @summary Get the number of calendar months between the given dates.
   *
   * @description
   * Get the number of calendar months between the given dates.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar months
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // How many calendar months are between 31 January 2014 and 1 September 2014?
   * var result = differenceInCalendarMonths(
   *   new Date(2014, 8, 1),
   *   new Date(2014, 0, 31)
   * )
   * //=> 8
   */

  function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
    var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
    return yearDiff * 12 + monthDiff;
  }

  /**
   * @name differenceInCalendarYears
   * @category Year Helpers
   * @summary Get the number of calendar years between the given dates.
   *
   * @description
   * Get the number of calendar years between the given dates.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @returns {Number} the number of calendar years
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // How many calendar years are between 31 December 2013 and 11 February 2015?
   * const result = differenceInCalendarYears(
   *   new Date(2015, 1, 11),
   *   new Date(2013, 11, 31)
   * )
   * //=> 2
   */

  function differenceInCalendarYears(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    return dateLeft.getFullYear() - dateRight.getFullYear();
  }

  // for accurate equality comparisons of UTC timestamps that end up
  // having the same representation in local time, e.g. one hour before
  // DST ends vs. the instant that DST ends.

  function compareLocalAsc(dateLeft, dateRight) {
    var diff = dateLeft.getFullYear() - dateRight.getFullYear() || dateLeft.getMonth() - dateRight.getMonth() || dateLeft.getDate() - dateRight.getDate() || dateLeft.getHours() - dateRight.getHours() || dateLeft.getMinutes() - dateRight.getMinutes() || dateLeft.getSeconds() - dateRight.getSeconds() || dateLeft.getMilliseconds() - dateRight.getMilliseconds();

    if (diff < 0) {
      return -1;
    } else if (diff > 0) {
      return 1; // Return 0 if diff is 0; return NaN if diff is NaN
    } else {
      return diff;
    }
  }
  /**
   * @name differenceInDays
   * @category Day Helpers
   * @summary Get the number of full days between the given dates.
   *
   * @description
   * Get the number of full day periods between two dates. Fractional days are
   * truncated towards zero.
   *
   * One "full day" is the distance between a local time in one day to the same
   * local time on the next or previous day. A full day can sometimes be less than
   * or more than 24 hours if a daylight savings change happens between two dates.
   *
   * To ignore DST and only measure exact 24-hour periods, use this instead:
   * `Math.floor(differenceInHours(dateLeft, dateRight)/24)|0`.
   *
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @returns {Number} the number of full days according to the local timezone
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // How many full days are between
   * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
   * const result = differenceInDays(
   *   new Date(2012, 6, 2, 0, 0),
   *   new Date(2011, 6, 2, 23, 0)
   * )
   * //=> 365
   * // How many full days are between
   * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
   * const result = differenceInDays(
   *   new Date(2011, 6, 3, 0, 1),
   *   new Date(2011, 6, 2, 23, 59)
   * )
   * //=> 0
   * // How many full days are between
   * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
   * // Note: because local time is used, the
   * // result will always be 92 days, even in
   * // time zones where DST starts and the
   * // period has only 92*24-1 hours.
   * const result = differenceInDays(
   *   new Date(2020, 5, 1),
   *   new Date(2020, 2, 1)
   * )
  //=> 92
   */


  function differenceInDays(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var sign = compareLocalAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight));
    dateLeft.setDate(dateLeft.getDate() - sign * difference); // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastDayNotFull = Number(compareLocalAsc(dateLeft, dateRight) === -sign);
    var result = sign * (difference - isLastDayNotFull); // Prevent negative zero

    return result === 0 ? 0 : result;
  }

  /**
   * @name endOfDay
   * @category Day Helpers
   * @summary Return the end of a day for the given date.
   *
   * @description
   * Return the end of a day for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the end of a day
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The end of a day for 2 September 2014 11:55:00:
   * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 02 2014 23:59:59.999
   */

  function endOfDay(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setHours(23, 59, 59, 999);
    return date;
  }

  /**
   * @name endOfMonth
   * @category Month Helpers
   * @summary Return the end of a month for the given date.
   *
   * @description
   * Return the end of a month for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the end of a month
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The end of a month for 2 September 2014 11:55:00:
   * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Tue Sep 30 2014 23:59:59.999
   */

  function endOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var month = date.getMonth();
    date.setFullYear(date.getFullYear(), month + 1, 0);
    date.setHours(23, 59, 59, 999);
    return date;
  }

  /**
   * @name isLastDayOfMonth
   * @category Month Helpers
   * @summary Is the given date the last day of a month?
   *
   * @description
   * Is the given date the last day of a month?
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to check
   * @returns {Boolean} the date is the last day of a month
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // Is 28 February 2014 the last day of a month?
   * var result = isLastDayOfMonth(new Date(2014, 1, 28))
   * //=> true
   */

  function isLastDayOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    return endOfDay(date).getTime() === endOfMonth(date).getTime();
  }

  /**
   * @name differenceInMonths
   * @category Month Helpers
   * @summary Get the number of full months between the given dates.
   *
   * @description
   * Get the number of full months between the given dates.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @returns {Number} the number of full months
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // How many full months are between 31 January 2014 and 1 September 2014?
   * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
   * //=> 7
   */

  function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var sign = compareAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight));
    var result; // Check for the difference of less than month

    if (difference < 1) {
      result = 0;
    } else {
      if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
        // This will check if the date is end of Feb and assign a higher end of month date
        // to compare it with Jan
        dateLeft.setDate(30);
      }

      dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
      // If so, result must be decreased by 1 in absolute value

      var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

      if (isLastDayOfMonth(toDate(dirtyDateLeft)) && difference === 1 && compareAsc(dirtyDateLeft, dateRight) === 1) {
        isLastMonthNotFull = false;
      }

      result = sign * (difference - Number(isLastMonthNotFull));
    } // Prevent negative zero


    return result === 0 ? 0 : result;
  }

  /**
   * @name differenceInWeeks
   * @category Week Helpers
   * @summary Get the number of full weeks between the given dates.
   *
   * @description
   * Get the number of full weeks between two dates. Fractional weeks are
   * truncated towards zero.
   *
   * One "full week" is the distance between a local time in one day to the same
   * local time 7 days earlier or later. A full week can sometimes be less than
   * or more than 7*24 hours if a daylight savings change happens between two dates.
   *
   * To ignore DST and only measure exact 7*24-hour periods, use this instead:
   * `Math.floor(differenceInHours(dateLeft, dateRight)/(7*24))|0`.
   *
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @returns {Number} the number of full weeks
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // How many full weeks are between 5 July 2014 and 20 July 2014?
   * const result = differenceInWeeks(new Date(2014, 6, 20), new Date(2014, 6, 5))
   * //=> 2
   *
   * // How many full weeks are between
   * // 1 March 2020 0:00 and 6 June 2020 0:00 ?
   * // Note: because local time is used, the
   * // result will always be 8 weeks (54 days),
   * // even if DST starts and the period has
   * // only 54*24-1 hours.
   * const result = differenceInWeeks(
   *   new Date(2020, 5, 1),
   *   new Date(2020, 2, 6)
   * )
   * //=> 8
   */

  function differenceInWeeks(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7;
    return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
  }

  /**
   * @name differenceInYears
   * @category Year Helpers
   * @summary Get the number of full years between the given dates.
   *
   * @description
   * Get the number of full years between the given dates.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} dateLeft - the later date
   * @param {Date|Number} dateRight - the earlier date
   * @returns {Number} the number of full years
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // How many full years are between 31 December 2013 and 11 February 2015?
   * const result = differenceInYears(new Date(2015, 1, 11), new Date(2013, 11, 31))
   * //=> 1
   */

  function differenceInYears(dirtyDateLeft, dirtyDateRight) {
    requiredArgs(2, arguments);
    var dateLeft = toDate(dirtyDateLeft);
    var dateRight = toDate(dirtyDateRight);
    var sign = compareAsc(dateLeft, dateRight);
    var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight)); // Set both dates to a valid leap year for accurate comparison when dealing
    // with leap days

    dateLeft.setFullYear(1584);
    dateRight.setFullYear(1584); // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign;
    var result = sign * (difference - Number(isLastYearNotFull)); // Prevent negative zero

    return result === 0 ? 0 : result;
  }

  /**
   * @name startOfMonth
   * @category Month Helpers
   * @summary Return the start of a month for the given date.
   *
   * @description
   * Return the start of a month for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the start of a month
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The start of a month for 2 September 2014 11:55:00:
   * const result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Mon Sep 01 2014 00:00:00
   */

  function startOfMonth(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * @name startOfYear
   * @category Year Helpers
   * @summary Return the start of a year for the given date.
   *
   * @description
   * Return the start of a year for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the start of a year
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The start of a year for 2 September 2014 11:55:00:
   * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
   * //=> Wed Jan 01 2014 00:00:00
   */

  function startOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var cleanDate = toDate(dirtyDate);
    var date = new Date(0);
    date.setFullYear(cleanDate.getFullYear(), 0, 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * @name endOfYear
   * @category Year Helpers
   * @summary Return the end of a year for the given date.
   *
   * @description
   * Return the end of a year for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @returns {Date} the end of a year
   * @throws {TypeError} 1 argument required
   *
   * @example
   * // The end of a year for 2 September 2014 11:55:00:
   * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
   * //=> Wed Dec 31 2014 23:59:59.999
   */

  function endOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    date.setFullYear(year + 1, 0, 0);
    date.setHours(23, 59, 59, 999);
    return date;
  }

  /**
   * @name endOfWeek
   * @category Week Helpers
   * @summary Return the end of a week for the given date.
   *
   * @description
   * Return the end of a week for the given date.
   * The result will be in the local timezone.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @returns {Date} the end of a week
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   *
   * @example
   * // The end of a week for 2 September 2014 11:55:00:
   * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
   * //=> Sat Sep 06 2014 23:59:59.999
   *
   * @example
   * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
   * const result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
   * //=> Sun Sep 07 2014 23:59:59.999
   */

  function endOfWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger$1(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger$1(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate(dirtyDate);
    var day = date.getDay();
    var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
    date.setDate(date.getDate() + diff);
    date.setHours(23, 59, 59, 999);
    return date;
  }

  var formatDistanceLocale$3 = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },
    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },
    halfAMinute: 'half a minute',
    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },
    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },
    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },
    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },
    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },
    aboutXWeeks: {
      one: 'about 1 week',
      other: 'about {{count}} weeks'
    },
    xWeeks: {
      one: '1 week',
      other: '{{count}} weeks'
    },
    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },
    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },
    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },
    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },
    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },
    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  };
  function formatDistance$3(token, count, options) {
    options = options || {};
    var result;

    if (typeof formatDistanceLocale$3[token] === 'string') {
      result = formatDistanceLocale$3[token];
    } else if (count === 1) {
      result = formatDistanceLocale$3[token].one;
    } else {
      result = formatDistanceLocale$3[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  }

  function buildFormatLongFn(args) {
    return function (dirtyOptions) {
      var options = dirtyOptions || {};
      var width = options.width ? String(options.width) : args.defaultWidth;
      var format = args.formats[width] || args.formats[args.defaultWidth];
      return format;
    };
  }

  var dateFormats$3 = {
    full: 'EEEE, MMMM do, y',
    long: 'MMMM do, y',
    medium: 'MMM d, y',
    short: 'MM/dd/yyyy'
  };
  var timeFormats$3 = {
    full: 'h:mm:ss a zzzz',
    long: 'h:mm:ss a z',
    medium: 'h:mm:ss a',
    short: 'h:mm a'
  };
  var dateTimeFormats$3 = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  };
  var formatLong$3 = {
    date: buildFormatLongFn({
      formats: dateFormats$3,
      defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
      formats: timeFormats$3,
      defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats$3,
      defaultWidth: 'full'
    })
  };

  var formatRelativeLocale$3 = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: 'P'
  };
  function formatRelative$3(token, _date, _baseDate, _options) {
    return formatRelativeLocale$3[token];
  }

  function buildLocalizeFn(args) {
    return function (dirtyIndex, dirtyOptions) {
      var options = dirtyOptions || {};
      var context = options.context ? String(options.context) : 'standalone';
      var valuesArray;

      if (context === 'formatting' && args.formattingValues) {
        var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
        var width = options.width ? String(options.width) : defaultWidth;
        valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
      } else {
        var _defaultWidth = args.defaultWidth;

        var _width = options.width ? String(options.width) : args.defaultWidth;

        valuesArray = args.values[_width] || args.values[_defaultWidth];
      }

      var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
      return valuesArray[index];
    };
  }

  var eraValues$3 = {
    narrow: ['B', 'A'],
    abbreviated: ['BC', 'AD'],
    wide: ['Before Christ', 'Anno Domini']
  };
  var quarterValues$3 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.

  };
  var monthValues$3 = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  };
  var dayValues$3 = {
    narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  };
  var dayPeriodValues$3 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'morning',
      afternoon: 'afternoon',
      evening: 'evening',
      night: 'night'
    }
  };
  var formattingDayPeriodValues$2 = {
    narrow: {
      am: 'a',
      pm: 'p',
      midnight: 'mi',
      noon: 'n',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    },
    wide: {
      am: 'a.m.',
      pm: 'p.m.',
      midnight: 'midnight',
      noon: 'noon',
      morning: 'in the morning',
      afternoon: 'in the afternoon',
      evening: 'in the evening',
      night: 'at night'
    }
  };

  function ordinalNumber$3(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
    // if they are different for different grammatical genders,
    // use `options.unit`:
    //
    //   var options = dirtyOptions || {}
    //   var unit = String(options.unit)
    //
    // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
    // 'day', 'hour', 'minute', 'second'

    var rem100 = number % 100;

    if (rem100 > 20 || rem100 < 10) {
      switch (rem100 % 10) {
        case 1:
          return number + 'st';

        case 2:
          return number + 'nd';

        case 3:
          return number + 'rd';
      }
    }

    return number + 'th';
  }

  var localize$3 = {
    ordinalNumber: ordinalNumber$3,
    era: buildLocalizeFn({
      values: eraValues$3,
      defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
      values: quarterValues$3,
      defaultWidth: 'wide',
      argumentCallback: function (quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues$3,
      defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
      values: dayValues$3,
      defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues$3,
      defaultWidth: 'wide',
      formattingValues: formattingDayPeriodValues$2,
      defaultFormattingWidth: 'wide'
    })
  };

  function buildMatchPatternFn(args) {
    return function (dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var matchResult = string.match(args.matchPattern);

      if (!matchResult) {
        return null;
      }

      var matchedString = matchResult[0];
      var parseResult = string.match(args.parsePattern);

      if (!parseResult) {
        return null;
      }

      var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value: value,
        rest: string.slice(matchedString.length)
      };
    };
  }

  function buildMatchFn(args) {
    return function (dirtyString, dirtyOptions) {
      var string = String(dirtyString);
      var options = dirtyOptions || {};
      var width = options.width;
      var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
      var matchResult = string.match(matchPattern);

      if (!matchResult) {
        return null;
      }

      var matchedString = matchResult[0];
      var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
      var value;

      if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
        value = findIndex(parsePatterns, function (pattern) {
          return pattern.test(matchedString);
        });
      } else {
        value = findKey(parsePatterns, function (pattern) {
          return pattern.test(matchedString);
        });
      }

      value = args.valueCallback ? args.valueCallback(value) : value;
      value = options.valueCallback ? options.valueCallback(value) : value;
      return {
        value: value,
        rest: string.slice(matchedString.length)
      };
    };
  }

  function findKey(object, predicate) {
    for (var key in object) {
      if (object.hasOwnProperty(key) && predicate(object[key])) {
        return key;
      }
    }
  }

  function findIndex(array, predicate) {
    for (var key = 0; key < array.length; key++) {
      if (predicate(array[key])) {
        return key;
      }
    }
  }

  var matchOrdinalNumberPattern$3 = /^(\d+)(th|st|nd|rd)?/i;
  var parseOrdinalNumberPattern$3 = /\d+/i;
  var matchEraPatterns$3 = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
  };
  var parseEraPatterns$3 = {
    any: [/^b/i, /^(a|c)/i]
  };
  var matchQuarterPatterns$3 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
  };
  var parseQuarterPatterns$3 = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns$3 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
  };
  var parseMonthPatterns$3 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns$3 = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
  };
  var parseDayPatterns$3 = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns$3 = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
  };
  var parseDayPeriodPatterns$3 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^mi/i,
      noon: /^no/i,
      morning: /morning/i,
      afternoon: /afternoon/i,
      evening: /evening/i,
      night: /night/i
    }
  };
  var match$4 = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern$3,
      parsePattern: parseOrdinalNumberPattern$3,
      valueCallback: function (value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns$3,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns$3,
      defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns$3,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns$3,
      defaultParseWidth: 'any',
      valueCallback: function (index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns$3,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns$3,
      defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns$3,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns$3,
      defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns$3,
      defaultMatchWidth: 'any',
      parsePatterns: parseDayPeriodPatterns$3,
      defaultParseWidth: 'any'
    })
  };

  /**
   * @type {Locale}
   * @category Locales
   * @summary English locale (United States).
   * @language English
   * @iso-639-2 eng
   * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
   * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
   */

  var locale$3 = {
    code: 'en-US',
    formatDistance: formatDistance$3,
    formatLong: formatLong$3,
    formatRelative: formatRelative$3,
    localize: localize$3,
    match: match$4,
    options: {
      weekStartsOn: 0
      /* Sunday */
      ,
      firstWeekContainsDate: 1
    }
  };

  /**
   * @name subMilliseconds
   * @category Millisecond Helpers
   * @summary Subtract the specified number of milliseconds from the given date.
   *
   * @description
   * Subtract the specified number of milliseconds from the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the milliseconds subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
   * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
   * //=> Thu Jul 10 2014 12:45:29.250
   */

  function subMilliseconds(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger$1(dirtyAmount);
    return addMilliseconds(dirtyDate, -amount);
  }

  function addLeadingZeros(number, targetLength) {
    var sign = number < 0 ? '-' : '';
    var output = Math.abs(number).toString();

    while (output.length < targetLength) {
      output = '0' + output;
    }

    return sign + output;
  }

  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* |                                |
   * |  d  | Day of month                   |  D  |                                |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  m  | Minute                         |  M  | Month                          |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  y  | Year (abs)                     |  Y  |                                |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   */

  var formatters$1 = {
    // Year
    y: function (date, token) {
      // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
      // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
      // |----------|-------|----|-------|-------|-------|
      // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
      // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
      // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
      // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
      // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return addLeadingZeros(token === 'yy' ? year % 100 : year, token.length);
    },
    // Month
    M: function (date, token) {
      var month = date.getUTCMonth();
      return token === 'M' ? String(month + 1) : addLeadingZeros(month + 1, 2);
    },
    // Day of the month
    d: function (date, token) {
      return addLeadingZeros(date.getUTCDate(), token.length);
    },
    // AM or PM
    a: function (date, token) {
      var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

      switch (token) {
        case 'a':
        case 'aa':
          return dayPeriodEnumValue.toUpperCase();

        case 'aaa':
          return dayPeriodEnumValue;

        case 'aaaaa':
          return dayPeriodEnumValue[0];

        case 'aaaa':
        default:
          return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
      }
    },
    // Hour [1-12]
    h: function (date, token) {
      return addLeadingZeros(date.getUTCHours() % 12 || 12, token.length);
    },
    // Hour [0-23]
    H: function (date, token) {
      return addLeadingZeros(date.getUTCHours(), token.length);
    },
    // Minute
    m: function (date, token) {
      return addLeadingZeros(date.getUTCMinutes(), token.length);
    },
    // Second
    s: function (date, token) {
      return addLeadingZeros(date.getUTCSeconds(), token.length);
    },
    // Fraction of second
    S: function (date, token) {
      var numberOfDigits = token.length;
      var milliseconds = date.getUTCMilliseconds();
      var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
      return addLeadingZeros(fractionalSeconds, token.length);
    }
  };

  var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCDayOfYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var timestamp = date.getTime();
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
    var startOfYearTimestamp = date.getTime();
    var difference = timestamp - startOfYearTimestamp;
    return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getUTCFullYear();
    var fourthOfJanuaryOfNextYear = new Date(0);
    fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
    fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCISOWeek(fourthOfJanuaryOfNextYear);
    var fourthOfJanuaryOfThisYear = new Date(0);
    fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
    fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCISOWeek(fourthOfJanuaryOfThisYear);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCISOWeekYear(dirtyDate) {
    requiredArgs(1, arguments);
    var year = getUTCISOWeekYear(dirtyDate);
    var fourthOfJanuary = new Date(0);
    fourthOfJanuary.setUTCFullYear(year, 0, 4);
    fourthOfJanuary.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCISOWeek(fourthOfJanuary);
    return date;
  }

  var MILLISECONDS_IN_WEEK$2 = 604800000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCISOWeek(dirtyDate) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCISOWeek(date).getTime() - startOfUTCISOWeekYear(date).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK$2) + 1;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCWeek(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger$1(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger$1(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate(dirtyDate);
    var day = date.getUTCDay();
    var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
    date.setUTCDate(date.getUTCDate() - diff);
    date.setUTCHours(0, 0, 0, 0);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate, dirtyOptions);
    var year = date.getUTCFullYear();
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger$1(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger$1(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
    var startOfNextYear = startOfUTCWeek(firstWeekOfNextYear, dirtyOptions);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
    var startOfThisYear = startOfUTCWeek(firstWeekOfThisYear, dirtyOptions);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger$1(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger$1(options.firstWeekContainsDate);
    var year = getUTCWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setUTCHours(0, 0, 0, 0);
    var date = startOfUTCWeek(firstWeek, dirtyOptions);
    return date;
  }

  var MILLISECONDS_IN_WEEK$1 = 604800000; // This function will be a part of public API when UTC function will be implemented.
  // See issue: https://github.com/date-fns/date-fns/issues/376

  function getUTCWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfUTCWeek(date, options).getTime() - startOfUTCWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK$1) + 1;
  }

  var dayPeriodEnum = {
    am: 'am',
    pm: 'pm',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
    /*
     * |     | Unit                           |     | Unit                           |
     * |-----|--------------------------------|-----|--------------------------------|
     * |  a  | AM, PM                         |  A* | Milliseconds in day            |
     * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
     * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
     * |  d  | Day of month                   |  D  | Day of year                    |
     * |  e  | Local day of week              |  E  | Day of week                    |
     * |  f  |                                |  F* | Day of week in month           |
     * |  g* | Modified Julian day            |  G  | Era                            |
     * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
     * |  i! | ISO day of week                |  I! | ISO week of year               |
     * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
     * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
     * |  l* | (deprecated)                   |  L  | Stand-alone month              |
     * |  m  | Minute                         |  M  | Month                          |
     * |  n  |                                |  N  |                                |
     * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
     * |  p! | Long localized time            |  P! | Long localized date            |
     * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
     * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
     * |  s  | Second                         |  S  | Fraction of second             |
     * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
     * |  u  | Extended year                  |  U* | Cyclic year                    |
     * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
     * |  w  | Local week of year             |  W* | Week of month                  |
     * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
     * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
     * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
     *
     * Letters marked by * are not implemented but reserved by Unicode standard.
     *
     * Letters marked by ! are non-standard, but implemented by date-fns:
     * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
     * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
     *   i.e. 7 for Sunday, 1 for Monday, etc.
     * - `I` is ISO week of year, as opposed to `w` which is local week of year.
     * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
     *   `R` is supposed to be used in conjunction with `I` and `i`
     *   for universal ISO week-numbering date, whereas
     *   `Y` is supposed to be used in conjunction with `w` and `e`
     *   for week-numbering date specific to the locale.
     * - `P` is long localized date format
     * - `p` is long localized time format
     */

  };
  var formatters = {
    // Era
    G: function (date, token, localize) {
      var era = date.getUTCFullYear() > 0 ? 1 : 0;

      switch (token) {
        // AD, BC
        case 'G':
        case 'GG':
        case 'GGG':
          return localize.era(era, {
            width: 'abbreviated'
          });
        // A, B

        case 'GGGGG':
          return localize.era(era, {
            width: 'narrow'
          });
        // Anno Domini, Before Christ

        case 'GGGG':
        default:
          return localize.era(era, {
            width: 'wide'
          });
      }
    },
    // Year
    y: function (date, token, localize) {
      // Ordinal number
      if (token === 'yo') {
        var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return localize.ordinalNumber(year, {
          unit: 'year'
        });
      }

      return formatters$1.y(date, token);
    },
    // Local week-numbering year
    Y: function (date, token, localize, options) {
      var signedWeekYear = getUTCWeekYear(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

      if (token === 'YY') {
        var twoDigitYear = weekYear % 100;
        return addLeadingZeros(twoDigitYear, 2);
      } // Ordinal number


      if (token === 'Yo') {
        return localize.ordinalNumber(weekYear, {
          unit: 'year'
        });
      } // Padding


      return addLeadingZeros(weekYear, token.length);
    },
    // ISO week-numbering year
    R: function (date, token) {
      var isoWeekYear = getUTCISOWeekYear(date); // Padding

      return addLeadingZeros(isoWeekYear, token.length);
    },
    // Extended year. This is a single number designating the year of this calendar system.
    // The main difference between `y` and `u` localizers are B.C. years:
    // | Year | `y` | `u` |
    // |------|-----|-----|
    // | AC 1 |   1 |   1 |
    // | BC 1 |   1 |   0 |
    // | BC 2 |   2 |  -1 |
    // Also `yy` always returns the last two digits of a year,
    // while `uu` pads single digit years to 2 characters and returns other years unchanged.
    u: function (date, token) {
      var year = date.getUTCFullYear();
      return addLeadingZeros(year, token.length);
    },
    // Quarter
    Q: function (date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

      switch (token) {
        // 1, 2, 3, 4
        case 'Q':
          return String(quarter);
        // 01, 02, 03, 04

        case 'QQ':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th

        case 'Qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'QQQ':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'QQQQQ':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'formatting'
          });
        // 1st quarter, 2nd quarter, ...

        case 'QQQQ':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone quarter
    q: function (date, token, localize) {
      var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

      switch (token) {
        // 1, 2, 3, 4
        case 'q':
          return String(quarter);
        // 01, 02, 03, 04

        case 'qq':
          return addLeadingZeros(quarter, 2);
        // 1st, 2nd, 3rd, 4th

        case 'qo':
          return localize.ordinalNumber(quarter, {
            unit: 'quarter'
          });
        // Q1, Q2, Q3, Q4

        case 'qqq':
          return localize.quarter(quarter, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // 1, 2, 3, 4 (narrow quarter; could be not numerical)

        case 'qqqqq':
          return localize.quarter(quarter, {
            width: 'narrow',
            context: 'standalone'
          });
        // 1st quarter, 2nd quarter, ...

        case 'qqqq':
        default:
          return localize.quarter(quarter, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Month
    M: function (date, token, localize) {
      var month = date.getUTCMonth();

      switch (token) {
        case 'M':
        case 'MM':
          return formatters$1.M(date, token);
        // 1st, 2nd, ..., 12th

        case 'Mo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec

        case 'MMM':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // J, F, ..., D

        case 'MMMMM':
          return localize.month(month, {
            width: 'narrow',
            context: 'formatting'
          });
        // January, February, ..., December

        case 'MMMM':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone month
    L: function (date, token, localize) {
      var month = date.getUTCMonth();

      switch (token) {
        // 1, 2, ..., 12
        case 'L':
          return String(month + 1);
        // 01, 02, ..., 12

        case 'LL':
          return addLeadingZeros(month + 1, 2);
        // 1st, 2nd, ..., 12th

        case 'Lo':
          return localize.ordinalNumber(month + 1, {
            unit: 'month'
          });
        // Jan, Feb, ..., Dec

        case 'LLL':
          return localize.month(month, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // J, F, ..., D

        case 'LLLLL':
          return localize.month(month, {
            width: 'narrow',
            context: 'standalone'
          });
        // January, February, ..., December

        case 'LLLL':
        default:
          return localize.month(month, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // Local week of year
    w: function (date, token, localize, options) {
      var week = getUTCWeek(date, options);

      if (token === 'wo') {
        return localize.ordinalNumber(week, {
          unit: 'week'
        });
      }

      return addLeadingZeros(week, token.length);
    },
    // ISO week of year
    I: function (date, token, localize) {
      var isoWeek = getUTCISOWeek(date);

      if (token === 'Io') {
        return localize.ordinalNumber(isoWeek, {
          unit: 'week'
        });
      }

      return addLeadingZeros(isoWeek, token.length);
    },
    // Day of the month
    d: function (date, token, localize) {
      if (token === 'do') {
        return localize.ordinalNumber(date.getUTCDate(), {
          unit: 'date'
        });
      }

      return formatters$1.d(date, token);
    },
    // Day of year
    D: function (date, token, localize) {
      var dayOfYear = getUTCDayOfYear(date);

      if (token === 'Do') {
        return localize.ordinalNumber(dayOfYear, {
          unit: 'dayOfYear'
        });
      }

      return addLeadingZeros(dayOfYear, token.length);
    },
    // Day of week
    E: function (date, token, localize) {
      var dayOfWeek = date.getUTCDay();

      switch (token) {
        // Tue
        case 'E':
        case 'EE':
        case 'EEE':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'EEEEE':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'EEEEEE':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'EEEE':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Local day of week
    e: function (date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

      switch (token) {
        // Numerical value (Nth day of week with current locale or weekStartsOn)
        case 'e':
          return String(localDayOfWeek);
        // Padded numerical value

        case 'ee':
          return addLeadingZeros(localDayOfWeek, 2);
        // 1st, 2nd, ..., 7th

        case 'eo':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });

        case 'eee':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'eeeee':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'eeeeee':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'eeee':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Stand-alone local day of week
    c: function (date, token, localize, options) {
      var dayOfWeek = date.getUTCDay();
      var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

      switch (token) {
        // Numerical value (same as in `e`)
        case 'c':
          return String(localDayOfWeek);
        // Padded numerical value

        case 'cc':
          return addLeadingZeros(localDayOfWeek, token.length);
        // 1st, 2nd, ..., 7th

        case 'co':
          return localize.ordinalNumber(localDayOfWeek, {
            unit: 'day'
          });

        case 'ccc':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'standalone'
          });
        // T

        case 'ccccc':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'standalone'
          });
        // Tu

        case 'cccccc':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'standalone'
          });
        // Tuesday

        case 'cccc':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'standalone'
          });
      }
    },
    // ISO day of week
    i: function (date, token, localize) {
      var dayOfWeek = date.getUTCDay();
      var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

      switch (token) {
        // 2
        case 'i':
          return String(isoDayOfWeek);
        // 02

        case 'ii':
          return addLeadingZeros(isoDayOfWeek, token.length);
        // 2nd

        case 'io':
          return localize.ordinalNumber(isoDayOfWeek, {
            unit: 'day'
          });
        // Tue

        case 'iii':
          return localize.day(dayOfWeek, {
            width: 'abbreviated',
            context: 'formatting'
          });
        // T

        case 'iiiii':
          return localize.day(dayOfWeek, {
            width: 'narrow',
            context: 'formatting'
          });
        // Tu

        case 'iiiiii':
          return localize.day(dayOfWeek, {
            width: 'short',
            context: 'formatting'
          });
        // Tuesday

        case 'iiii':
        default:
          return localize.day(dayOfWeek, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM or PM
    a: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

      switch (token) {
        case 'a':
        case 'aa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'aaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();

        case 'aaaaa':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'aaaa':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // AM, PM, midnight, noon
    b: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;

      if (hours === 12) {
        dayPeriodEnumValue = dayPeriodEnum.noon;
      } else if (hours === 0) {
        dayPeriodEnumValue = dayPeriodEnum.midnight;
      } else {
        dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
      }

      switch (token) {
        case 'b':
        case 'bb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'bbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          }).toLowerCase();

        case 'bbbbb':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'bbbb':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // in the morning, in the afternoon, in the evening, at night
    B: function (date, token, localize) {
      var hours = date.getUTCHours();
      var dayPeriodEnumValue;

      if (hours >= 17) {
        dayPeriodEnumValue = dayPeriodEnum.evening;
      } else if (hours >= 12) {
        dayPeriodEnumValue = dayPeriodEnum.afternoon;
      } else if (hours >= 4) {
        dayPeriodEnumValue = dayPeriodEnum.morning;
      } else {
        dayPeriodEnumValue = dayPeriodEnum.night;
      }

      switch (token) {
        case 'B':
        case 'BB':
        case 'BBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'abbreviated',
            context: 'formatting'
          });

        case 'BBBBB':
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'narrow',
            context: 'formatting'
          });

        case 'BBBB':
        default:
          return localize.dayPeriod(dayPeriodEnumValue, {
            width: 'wide',
            context: 'formatting'
          });
      }
    },
    // Hour [1-12]
    h: function (date, token, localize) {
      if (token === 'ho') {
        var hours = date.getUTCHours() % 12;
        if (hours === 0) hours = 12;
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return formatters$1.h(date, token);
    },
    // Hour [0-23]
    H: function (date, token, localize) {
      if (token === 'Ho') {
        return localize.ordinalNumber(date.getUTCHours(), {
          unit: 'hour'
        });
      }

      return formatters$1.H(date, token);
    },
    // Hour [0-11]
    K: function (date, token, localize) {
      var hours = date.getUTCHours() % 12;

      if (token === 'Ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return addLeadingZeros(hours, token.length);
    },
    // Hour [1-24]
    k: function (date, token, localize) {
      var hours = date.getUTCHours();
      if (hours === 0) hours = 24;

      if (token === 'ko') {
        return localize.ordinalNumber(hours, {
          unit: 'hour'
        });
      }

      return addLeadingZeros(hours, token.length);
    },
    // Minute
    m: function (date, token, localize) {
      if (token === 'mo') {
        return localize.ordinalNumber(date.getUTCMinutes(), {
          unit: 'minute'
        });
      }

      return formatters$1.m(date, token);
    },
    // Second
    s: function (date, token, localize) {
      if (token === 'so') {
        return localize.ordinalNumber(date.getUTCSeconds(), {
          unit: 'second'
        });
      }

      return formatters$1.s(date, token);
    },
    // Fraction of second
    S: function (date, token) {
      return formatters$1.S(date, token);
    },
    // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
    X: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      if (timezoneOffset === 0) {
        return 'Z';
      }

      switch (token) {
        // Hours and optional minutes
        case 'X':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XX`

        case 'XXXX':
        case 'XX':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `XXX`

        case 'XXXXX':
        case 'XXX': // Hours and minutes with `:` delimiter

        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
    x: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Hours and optional minutes
        case 'x':
          return formatTimezoneWithOptionalMinutes(timezoneOffset);
        // Hours, minutes and optional seconds without `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xx`

        case 'xxxx':
        case 'xx':
          // Hours and minutes without `:` delimiter
          return formatTimezone(timezoneOffset);
        // Hours, minutes and optional seconds with `:` delimiter
        // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
        // so this token always has the same output as `xxx`

        case 'xxxxx':
        case 'xxx': // Hours and minutes with `:` delimiter

        default:
          return formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (GMT)
    O: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Short
        case 'O':
        case 'OO':
        case 'OOO':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long

        case 'OOOO':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Timezone (specific non-location)
    z: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timezoneOffset = originalDate.getTimezoneOffset();

      switch (token) {
        // Short
        case 'z':
        case 'zz':
        case 'zzz':
          return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
        // Long

        case 'zzzz':
        default:
          return 'GMT' + formatTimezone(timezoneOffset, ':');
      }
    },
    // Seconds timestamp
    t: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = Math.floor(originalDate.getTime() / 1000);
      return addLeadingZeros(timestamp, token.length);
    },
    // Milliseconds timestamp
    T: function (date, token, _localize, options) {
      var originalDate = options._originalDate || date;
      var timestamp = originalDate.getTime();
      return addLeadingZeros(timestamp, token.length);
    }
  };

  function formatTimezoneShort(offset, dirtyDelimiter) {
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = Math.floor(absOffset / 60);
    var minutes = absOffset % 60;

    if (minutes === 0) {
      return sign + String(hours);
    }

    var delimiter = dirtyDelimiter || '';
    return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
  }

  function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
    if (offset % 60 === 0) {
      var sign = offset > 0 ? '-' : '+';
      return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
    }

    return formatTimezone(offset, dirtyDelimiter);
  }

  function formatTimezone(offset, dirtyDelimiter) {
    var delimiter = dirtyDelimiter || '';
    var sign = offset > 0 ? '-' : '+';
    var absOffset = Math.abs(offset);
    var hours = addLeadingZeros(Math.floor(absOffset / 60), 2);
    var minutes = addLeadingZeros(absOffset % 60, 2);
    return sign + hours + delimiter + minutes;
  }

  function dateLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'P':
        return formatLong.date({
          width: 'short'
        });

      case 'PP':
        return formatLong.date({
          width: 'medium'
        });

      case 'PPP':
        return formatLong.date({
          width: 'long'
        });

      case 'PPPP':
      default:
        return formatLong.date({
          width: 'full'
        });
    }
  }

  function timeLongFormatter(pattern, formatLong) {
    switch (pattern) {
      case 'p':
        return formatLong.time({
          width: 'short'
        });

      case 'pp':
        return formatLong.time({
          width: 'medium'
        });

      case 'ppp':
        return formatLong.time({
          width: 'long'
        });

      case 'pppp':
      default:
        return formatLong.time({
          width: 'full'
        });
    }
  }

  function dateTimeLongFormatter(pattern, formatLong) {
    var matchResult = pattern.match(/(P+)(p+)?/);
    var datePattern = matchResult[1];
    var timePattern = matchResult[2];

    if (!timePattern) {
      return dateLongFormatter(pattern, formatLong);
    }

    var dateTimeFormat;

    switch (datePattern) {
      case 'P':
        dateTimeFormat = formatLong.dateTime({
          width: 'short'
        });
        break;

      case 'PP':
        dateTimeFormat = formatLong.dateTime({
          width: 'medium'
        });
        break;

      case 'PPP':
        dateTimeFormat = formatLong.dateTime({
          width: 'long'
        });
        break;

      case 'PPPP':
      default:
        dateTimeFormat = formatLong.dateTime({
          width: 'full'
        });
        break;
    }

    return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
  }

  var longFormatters = {
    p: timeLongFormatter,
    P: dateTimeLongFormatter
  };

  var protectedDayOfYearTokens = ['D', 'DD'];
  var protectedWeekYearTokens = ['YY', 'YYYY'];
  function isProtectedDayOfYearToken(token) {
    return protectedDayOfYearTokens.indexOf(token) !== -1;
  }
  function isProtectedWeekYearToken(token) {
    return protectedWeekYearTokens.indexOf(token) !== -1;
  }
  function throwProtectedError(token, format, input) {
    if (token === 'YYYY') {
      throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'YY') {
      throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'D') {
      throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    } else if (token === 'DD') {
      throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
    }
  }

  // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
  //   (one of the certain letters followed by `o`)
  // - (\w)\1* matches any sequences of the same letter
  // - '' matches two quote characters in a row
  // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
  //   except a single quote symbol, which ends the sequence.
  //   Two quote characters do not end the sequence.
  //   If there is no matching single quote
  //   then the sequence will continue until the end of the string.
  // - . matches any single character unmatched by previous parts of the RegExps

  var formattingTokensRegExp$1 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
  // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

  var longFormattingTokensRegExp$1 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp$1 = /^'([^]*?)'?$/;
  var doubleQuoteRegExp$1 = /''/g;
  var unescapedLatinCharacterRegExp$1 = /[a-zA-Z]/;
  /**
   * @name format
   * @category Common Helpers
   * @summary Format the date.
   *
   * @description
   * Return the formatted date string in the given format. The result may vary by locale.
   *
   * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
   * > See: https://git.io/fxCyr
   *
   * The characters wrapped between two single quotes characters (') are escaped.
   * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
   * (see the last example)
   *
   * Format of the string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * with a few additions (see note 7 below the table).
   *
   * Accepted patterns:
   * | Unit                            | Pattern | Result examples                   | Notes |
   * |---------------------------------|---------|-----------------------------------|-------|
   * | Era                             | G..GGG  | AD, BC                            |       |
   * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
   * |                                 | GGGGG   | A, B                              |       |
   * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
   * |                                 | yy      | 44, 01, 00, 17                    | 5     |
   * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
   * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
   * |                                 | yyyyy   | ...                               | 3,5   |
   * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
   * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
   * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
   * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
   * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
   * |                                 | YYYYY   | ...                               | 3,5   |
   * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
   * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
   * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
   * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
   * |                                 | RRRRR   | ...                               | 3,5,7 |
   * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
   * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
   * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
   * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
   * |                                 | uuuuu   | ...                               | 3,5   |
   * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
   * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | QQ      | 01, 02, 03, 04                    |       |
   * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
   * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
   * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
   * |                                 | qq      | 01, 02, 03, 04                    |       |
   * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
   * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
   * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
   * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | MM      | 01, 02, ..., 12                   |       |
   * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
   * |                                 | MMMM    | January, February, ..., December  | 2     |
   * |                                 | MMMMM   | J, F, ..., D                      |       |
   * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
   * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
   * |                                 | LL      | 01, 02, ..., 12                   |       |
   * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
   * |                                 | LLLL    | January, February, ..., December  | 2     |
   * |                                 | LLLLL   | J, F, ..., D                      |       |
   * | Local week of year              | w       | 1, 2, ..., 53                     |       |
   * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | ww      | 01, 02, ..., 53                   |       |
   * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
   * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
   * |                                 | II      | 01, 02, ..., 53                   | 7     |
   * | Day of month                    | d       | 1, 2, ..., 31                     |       |
   * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
   * |                                 | dd      | 01, 02, ..., 31                   |       |
   * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
   * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
   * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
   * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
   * |                                 | DDDD    | ...                               | 3     |
   * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
   * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
   * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
   * |                                 | ii      | 01, 02, ..., 07                   | 7     |
   * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
   * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
   * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
   * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
   * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
   * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | ee      | 02, 03, ..., 01                   |       |
   * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
   * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
   * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
   * |                                 | cc      | 02, 03, ..., 01                   |       |
   * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
   * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | AM, PM                          | a..aa   | AM, PM                            |       |
   * |                                 | aaa     | am, pm                            |       |
   * |                                 | aaaa    | a.m., p.m.                        | 2     |
   * |                                 | aaaaa   | a, p                              |       |
   * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
   * |                                 | bbb     | am, pm, noon, midnight            |       |
   * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
   * |                                 | bbbbb   | a, p, n, mi                       |       |
   * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
   * |                                 | BBBB    | at night, in the morning, ...     | 2     |
   * |                                 | BBBBB   | at night, in the morning, ...     |       |
   * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
   * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
   * |                                 | hh      | 01, 02, ..., 11, 12               |       |
   * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
   * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
   * |                                 | HH      | 00, 01, 02, ..., 23               |       |
   * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
   * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
   * |                                 | KK      | 01, 02, ..., 11, 00               |       |
   * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
   * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
   * |                                 | kk      | 24, 01, 02, ..., 23               |       |
   * | Minute                          | m       | 0, 1, ..., 59                     |       |
   * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | mm      | 00, 01, ..., 59                   |       |
   * | Second                          | s       | 0, 1, ..., 59                     |       |
   * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
   * |                                 | ss      | 00, 01, ..., 59                   |       |
   * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
   * |                                 | SS      | 00, 01, ..., 99                   |       |
   * |                                 | SSS     | 000, 001, ..., 999                |       |
   * |                                 | SSSS    | ...                               | 3     |
   * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
   * |                                 | XX      | -0800, +0530, Z                   |       |
   * |                                 | XXX     | -08:00, +05:30, Z                 |       |
   * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
   * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
   * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
   * |                                 | xx      | -0800, +0530, +0000               |       |
   * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
   * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
   * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
   * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
   * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
   * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
   * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
   * | Seconds timestamp               | t       | 512969520                         | 7     |
   * |                                 | tt      | ...                               | 3,7   |
   * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
   * |                                 | TT      | ...                               | 3,7   |
   * | Long localized date             | P       | 04/29/1453                        | 7     |
   * |                                 | PP      | Apr 29, 1453                      | 7     |
   * |                                 | PPP     | April 29th, 1453                  | 7     |
   * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
   * | Long localized time             | p       | 12:00 AM                          | 7     |
   * |                                 | pp      | 12:00:00 AM                       | 7     |
   * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
   * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
   * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
   * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
   * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
   * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
   * Notes:
   * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   *    are the same as "stand-alone" units, but are different in some languages.
   *    "Formatting" units are declined according to the rules of the language
   *    in the context of a date. "Stand-alone" units are always nominative singular:
   *
   *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
   *
   *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
   *
   * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
   *    the single quote characters (see below).
   *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
   *    the output will be the same as default pattern for this unit, usually
   *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
   *    are marked with "2" in the last column of the table.
   *
   *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
   *
   *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
   *
   * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
   *    The output will be padded with zeros to match the length of the pattern.
   *
   *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
   *
   * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   *    These tokens represent the shortest form of the quarter.
   *
   * 5. The main difference between `y` and `u` patterns are B.C. years:
   *
   *    | Year | `y` | `u` |
   *    |------|-----|-----|
   *    | AC 1 |   1 |   1 |
   *    | BC 1 |   1 |   0 |
   *    | BC 2 |   2 |  -1 |
   *
   *    Also `yy` always returns the last two digits of a year,
   *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
   *
   *    | Year | `yy` | `uu` |
   *    |------|------|------|
   *    | 1    |   01 |   01 |
   *    | 14   |   14 |   14 |
   *    | 376  |   76 |  376 |
   *    | 1453 |   53 | 1453 |
   *
   *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   *    except local week-numbering years are dependent on `options.weekStartsOn`
   *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
   *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
   *
   * 6. Specific non-location timezones are currently unavailable in `date-fns`,
   *    so right now these tokens fall back to GMT timezones.
   *
   * 7. These patterns are not in the Unicode Technical Standard #35:
   *    - `i`: ISO day of week
   *    - `I`: ISO week of year
   *    - `R`: ISO week-numbering year
   *    - `t`: seconds timestamp
   *    - `T`: milliseconds timestamp
   *    - `o`: ordinal number modifier
   *    - `P`: long localized date
   *    - `p`: long localized time
   *
   * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
   *
   * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
   *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - The second argument is now required for the sake of explicitness.
   *
   *   ```javascript
   *   // Before v2.0.0
   *   format(new Date(2016, 0, 1))
   *
   *   // v2.0.0 onward
   *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
   *   ```
   *
   * - New format string API for `format` function
   *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
   *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
   *
   * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
   *
   * @param {Date|Number} date - the original date
   * @param {String} format - the string of tokens
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
   * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
   *   see: https://git.io/fxCyr
   * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
   *   see: https://git.io/fxCyr
   * @returns {String} the formatted date string
   * @throws {TypeError} 2 arguments required
   * @throws {RangeError} `date` must not be Invalid Date
   * @throws {RangeError} `options.locale` must contain `localize` property
   * @throws {RangeError} `options.locale` must contain `formatLong` property
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} format string contains an unescaped latin alphabet character
   *
   * @example
   * // Represent 11 February 2014 in middle-endian format:
   * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
   * //=> '02/11/2014'
   *
   * @example
   * // Represent 2 July 2014 in Esperanto:
   * import { eoLocale } from 'date-fns/locale/eo'
   * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
   *   locale: eoLocale
   * })
   * //=> '2-a de julio 2014'
   *
   * @example
   * // Escape string by single quote characters:
   * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
   * //=> "3 o'clock"
   */

  function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
    requiredArgs(2, arguments);
    var formatStr = String(dirtyFormatStr);
    var options = dirtyOptions || {};
    var locale = options.locale || locale$3;
    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger$1(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger$1(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger$1(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger$1(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    if (!locale.localize) {
      throw new RangeError('locale must contain localize property');
    }

    if (!locale.formatLong) {
      throw new RangeError('locale must contain formatLong property');
    }

    var originalDate = toDate(dirtyDate);

    if (!isValid(originalDate)) {
      throw new RangeError('Invalid time value');
    } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


    var timezoneOffset = getTimezoneOffsetInMilliseconds(originalDate);
    var utcDate = subMilliseconds(originalDate, timezoneOffset);
    var formatterOptions = {
      firstWeekContainsDate: firstWeekContainsDate,
      weekStartsOn: weekStartsOn,
      locale: locale,
      _originalDate: originalDate
    };
    var result = formatStr.match(longFormattingTokensRegExp$1).map(function (substring) {
      var firstCharacter = substring[0];

      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong, formatterOptions);
      }

      return substring;
    }).join('').match(formattingTokensRegExp$1).map(function (substring) {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return "'";
      }

      var firstCharacter = substring[0];

      if (firstCharacter === "'") {
        return cleanEscapedString$1(substring);
      }

      var formatter = formatters[firstCharacter];

      if (formatter) {
        if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }

        if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(substring)) {
          throwProtectedError(substring, dirtyFormatStr, dirtyDate);
        }

        return formatter(utcDate, substring, locale.localize, formatterOptions);
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp$1)) {
        throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
      }

      return substring;
    }).join('');
    return result;
  }

  function cleanEscapedString$1(input) {
    return input.match(escapedStringRegExp$1)[1].replace(doubleQuoteRegExp$1, "'");
  }

  function assign(target, dirtyObject) {
    if (target == null) {
      throw new TypeError('assign requires that input parameter not be null or undefined');
    }

    dirtyObject = dirtyObject || {};

    for (var property in dirtyObject) {
      if (dirtyObject.hasOwnProperty(property)) {
        target[property] = dirtyObject[property];
      }
    }

    return target;
  }

  /**
   * @name getWeekYear
   * @category Week-Numbering Year Helpers
   * @summary Get the local week-numbering year of the given date.
   *
   * @description
   * Get the local week-numbering year of the given date.
   * The exact calculation depends on the values of
   * `options.weekStartsOn` (which is the index of the first day of the week)
   * and `options.firstWeekContainsDate` (which is the day of January, which is always in
   * the first week of the week-numbering year)
   *
   * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the given date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @returns {Number} the local week-numbering year
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   *
   * @example
   * // Which week numbering year is 26 December 2004 with the default settings?
   * const result = getWeekYear(new Date(2004, 11, 26))
   * //=> 2005
   *
   * @example
   * // Which week numbering year is 26 December 2004 if week starts on Saturday?
   * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
   * //=> 2004
   *
   * @example
   * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
   * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
   * //=> 2004
   */

  function getWeekYear(dirtyDate, options) {
    var _options$locale, _options$locale$optio;

    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var year = date.getFullYear();
    var localeFirstWeekContainsDate = options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger$1(localeFirstWeekContainsDate);
    var firstWeekContainsDate = (options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) == null ? defaultFirstWeekContainsDate : toInteger$1(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var firstWeekOfNextYear = new Date(0);
    firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
    firstWeekOfNextYear.setHours(0, 0, 0, 0);
    var startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
    var firstWeekOfThisYear = new Date(0);
    firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
    firstWeekOfThisYear.setHours(0, 0, 0, 0);
    var startOfThisYear = startOfWeek(firstWeekOfThisYear, options);

    if (date.getTime() >= startOfNextYear.getTime()) {
      return year + 1;
    } else if (date.getTime() >= startOfThisYear.getTime()) {
      return year;
    } else {
      return year - 1;
    }
  }

  /**
   * @name startOfWeekYear
   * @category Week-Numbering Year Helpers
   * @summary Return the start of a local week-numbering year for the given date.
   *
   * @description
   * Return the start of a local week-numbering year.
   * The exact calculation depends on the values of
   * `options.weekStartsOn` (which is the index of the first day of the week)
   * and `options.firstWeekContainsDate` (which is the day of January, which is always in
   * the first week of the week-numbering year)
   *
   * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the original date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @returns {Date} the start of a week-numbering year
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   *
   * @example
   * // The start of an a week-numbering year for 2 July 2005 with default settings:
   * var result = startOfWeekYear(new Date(2005, 6, 2))
   * //=> Sun Dec 26 2004 00:00:00
   *
   * @example
   * // The start of a week-numbering year for 2 July 2005
   * // if Monday is the first day of week
   * // and 4 January is always in the first week of the year:
   * var result = startOfWeekYear(new Date(2005, 6, 2), {
   *   weekStartsOn: 1,
   *   firstWeekContainsDate: 4
   * })
   * //=> Mon Jan 03 2005 00:00:00
   */

  function startOfWeekYear(dirtyDate, dirtyOptions) {
    requiredArgs(1, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger$1(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger$1(options.firstWeekContainsDate);
    var year = getWeekYear(dirtyDate, dirtyOptions);
    var firstWeek = new Date(0);
    firstWeek.setFullYear(year, 0, firstWeekContainsDate);
    firstWeek.setHours(0, 0, 0, 0);
    var date = startOfWeek(firstWeek, dirtyOptions);
    return date;
  }

  var MILLISECONDS_IN_WEEK = 604800000;
  /**
   * @name getWeek
   * @category Week Helpers
   * @summary Get the local week index of the given date.
   *
   * @description
   * Get the local week index of the given date.
   * The exact calculation depends on the values of
   * `options.weekStartsOn` (which is the index of the first day of the week)
   * and `options.firstWeekContainsDate` (which is the day of January, which is always in
   * the first week of the week-numbering year)
   *
   * Week numbering: https://en.wikipedia.org/wiki/Week#Week_numbering
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the given date
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @returns {Number} the week
   * @throws {TypeError} 1 argument required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   *
   * @example
   * // Which week of the local week numbering year is 2 January 2005 with default options?
   * const result = getISOWeek(new Date(2005, 0, 2))
   * //=> 2
   *
   * // Which week of the local week numbering year is 2 January 2005,
   * // if Monday is the first day of the week,
   * // and the first week of the year always contains 4 January?
   * const result = getISOWeek(new Date(2005, 0, 2), {
   *   weekStartsOn: 1,
   *   firstWeekContainsDate: 4
   * })
   * //=> 53
   */

  function getWeek(dirtyDate, options) {
    requiredArgs(1, arguments);
    var date = toDate(dirtyDate);
    var diff = startOfWeek(date, options).getTime() - startOfWeekYear(date, options).getTime(); // Round the number of days to the nearest integer
    // because the number of milliseconds in a week is not constant
    // (e.g. it's different in the week of the daylight saving time clock shift)

    return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
  }

  /**
   * @name subDays
   * @category Day Helpers
   * @summary Subtract the specified number of days from the given date.
   *
   * @description
   * Subtract the specified number of days from the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of days to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the days subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 10 days from 1 September 2014:
   * const result = subDays(new Date(2014, 8, 1), 10)
   * //=> Fri Aug 22 2014 00:00:00
   */

  function subDays(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger$1(dirtyAmount);
    return addDays(dirtyDate, -amount);
  }

  /**
   * @name subMonths
   * @category Month Helpers
   * @summary Subtract the specified number of months from the given date.
   *
   * @description
   * Subtract the specified number of months from the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of months to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the months subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 5 months from 1 February 2015:
   * const result = subMonths(new Date(2015, 1, 1), 5)
   * //=> Mon Sep 01 2014 00:00:00
   */

  function subMonths(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger$1(dirtyAmount);
    return addMonths(dirtyDate, -amount);
  }

  /**
   * @name sub
   * @category Common Helpers
   * @summary Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
   *
   * @description
   * Subtract the specified years, months, weeks, days, hours, minutes and seconds from the given date.
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Duration} duration - the object with years, months, weeks, days, hours, minutes and seconds to be subtracted
   *
   * | Key     | Description                        |
   * |---------|------------------------------------|
   * | years   | Amount of years to be subtracted   |
   * | months  | Amount of months to be subtracted  |
   * | weeks   | Amount of weeks to be subtracted   |
   * | days    | Amount of days to be subtracted    |
   * | hours   | Amount of hours to be subtracted   |
   * | minutes | Amount of minutes to be subtracted |
   * | seconds | Amount of seconds to be subtracted |
   *
   * All values default to 0
   *
   * @returns {Date} the new date with the seconds subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract the following duration from 15 June 2017 15:29:20
   * const result = sub(new Date(2017, 5, 15, 15, 29, 20), {
   *   years: 2,
   *   months: 9,
   *   weeks: 1,
   *   days: 7,
   *   hours: 5,
   *   minutes: 9,
   *   seconds: 30
   * })
   * //=> Mon Sep 1 2014 10:19:50
   */

  function sub(dirtyDate, duration) {
    requiredArgs(2, arguments);
    if (!duration || typeof duration !== 'object') return new Date(NaN);
    var years = 'years' in duration ? toInteger$1(duration.years) : 0;
    var months = 'months' in duration ? toInteger$1(duration.months) : 0;
    var weeks = 'weeks' in duration ? toInteger$1(duration.weeks) : 0;
    var days = 'days' in duration ? toInteger$1(duration.days) : 0;
    var hours = 'hours' in duration ? toInteger$1(duration.hours) : 0;
    var minutes = 'minutes' in duration ? toInteger$1(duration.minutes) : 0;
    var seconds = 'seconds' in duration ? toInteger$1(duration.seconds) : 0; // Subtract years and months

    var dateWithoutMonths = subMonths(toDate(dirtyDate), months + years * 12); // Subtract weeks and days

    var dateWithoutDays = subDays(dateWithoutMonths, days + weeks * 7); // Subtract hours, minutes and seconds

    var minutestoSub = minutes + hours * 60;
    var secondstoSub = seconds + minutestoSub * 60;
    var mstoSub = secondstoSub * 1000;
    var finalDate = new Date(dateWithoutDays.getTime() - mstoSub);
    return finalDate;
  }

  /**
   * @name isDate
   * @category Common Helpers
   * @summary Is the given value a date?
   *
   * @description
   * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {*} value - the value to check
   * @returns {boolean} true if the given value is a date
   * @throws {TypeError} 1 arguments required
   *
   * @example
   * // For a valid date:
   * const result = isDate(new Date())
   * //=> true
   *
   * @example
   * // For an invalid date:
   * const result = isDate(new Date(NaN))
   * //=> true
   *
   * @example
   * // For some value:
   * const result = isDate('2014-02-31')
   * //=> false
   *
   * @example
   * // For an object:
   * const result = isDate({})
   * //=> false
   */

  function isDate(value) {
    requiredArgs(1, arguments);
    return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCDay(dirtyDate, dirtyDay, dirtyOptions) {
    requiredArgs(2, arguments);
    var options = dirtyOptions || {};
    var locale = options.locale;
    var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger$1(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger$1(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    var date = toDate(dirtyDate);
    var day = toInteger$1(dirtyDay);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCISODay(dirtyDate, dirtyDay) {
    requiredArgs(2, arguments);
    var day = toInteger$1(dirtyDay);

    if (day % 7 === 0) {
      day = day - 7;
    }

    var weekStartsOn = 1;
    var date = toDate(dirtyDate);
    var currentDay = date.getUTCDay();
    var remainder = day % 7;
    var dayIndex = (remainder + 7) % 7;
    var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay;
    date.setUTCDate(date.getUTCDate() + diff);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCISOWeek(dirtyDate, dirtyISOWeek) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var isoWeek = toInteger$1(dirtyISOWeek);
    var diff = getUTCISOWeek(date) - isoWeek;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
  }

  // See issue: https://github.com/date-fns/date-fns/issues/376

  function setUTCWeek(dirtyDate, dirtyWeek, options) {
    requiredArgs(2, arguments);
    var date = toDate(dirtyDate);
    var week = toInteger$1(dirtyWeek);
    var diff = getUTCWeek(date, options) - week;
    date.setUTCDate(date.getUTCDate() - diff * 7);
    return date;
  }

  var MILLISECONDS_IN_HOUR = 3600000;
  var MILLISECONDS_IN_MINUTE = 60000;
  var MILLISECONDS_IN_SECOND = 1000;
  var numericPatterns = {
    month: /^(1[0-2]|0?\d)/,
    // 0 to 12
    date: /^(3[0-1]|[0-2]?\d)/,
    // 0 to 31
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    // 0 to 366
    week: /^(5[0-3]|[0-4]?\d)/,
    // 0 to 53
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    // 0 to 23
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    // 0 to 24
    hour11h: /^(1[0-1]|0?\d)/,
    // 0 to 11
    hour12h: /^(1[0-2]|0?\d)/,
    // 0 to 12
    minute: /^[0-5]?\d/,
    // 0 to 59
    second: /^[0-5]?\d/,
    // 0 to 59
    singleDigit: /^\d/,
    // 0 to 9
    twoDigits: /^\d{1,2}/,
    // 0 to 99
    threeDigits: /^\d{1,3}/,
    // 0 to 999
    fourDigits: /^\d{1,4}/,
    // 0 to 9999
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    // 0 to 9, -0 to -9
    twoDigitsSigned: /^-?\d{1,2}/,
    // 0 to 99, -0 to -99
    threeDigitsSigned: /^-?\d{1,3}/,
    // 0 to 999, -0 to -999
    fourDigitsSigned: /^-?\d{1,4}/ // 0 to 9999, -0 to -9999

  };
  var timezonePatterns = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
  };

  function parseNumericPattern(pattern, string, valueCallback) {
    var matchResult = string.match(pattern);

    if (!matchResult) {
      return null;
    }

    var value = parseInt(matchResult[0], 10);
    return {
      value: valueCallback ? valueCallback(value) : value,
      rest: string.slice(matchResult[0].length)
    };
  }

  function parseTimezonePattern(pattern, string) {
    var matchResult = string.match(pattern);

    if (!matchResult) {
      return null;
    } // Input is 'Z'


    if (matchResult[0] === 'Z') {
      return {
        value: 0,
        rest: string.slice(1)
      };
    }

    var sign = matchResult[1] === '+' ? 1 : -1;
    var hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    var minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    var seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
      value: sign * (hours * MILLISECONDS_IN_HOUR + minutes * MILLISECONDS_IN_MINUTE + seconds * MILLISECONDS_IN_SECOND),
      rest: string.slice(matchResult[0].length)
    };
  }

  function parseAnyDigitsSigned(string, valueCallback) {
    return parseNumericPattern(numericPatterns.anyDigitsSigned, string, valueCallback);
  }

  function parseNDigits(n, string, valueCallback) {
    switch (n) {
      case 1:
        return parseNumericPattern(numericPatterns.singleDigit, string, valueCallback);

      case 2:
        return parseNumericPattern(numericPatterns.twoDigits, string, valueCallback);

      case 3:
        return parseNumericPattern(numericPatterns.threeDigits, string, valueCallback);

      case 4:
        return parseNumericPattern(numericPatterns.fourDigits, string, valueCallback);

      default:
        return parseNumericPattern(new RegExp('^\\d{1,' + n + '}'), string, valueCallback);
    }
  }

  function parseNDigitsSigned(n, string, valueCallback) {
    switch (n) {
      case 1:
        return parseNumericPattern(numericPatterns.singleDigitSigned, string, valueCallback);

      case 2:
        return parseNumericPattern(numericPatterns.twoDigitsSigned, string, valueCallback);

      case 3:
        return parseNumericPattern(numericPatterns.threeDigitsSigned, string, valueCallback);

      case 4:
        return parseNumericPattern(numericPatterns.fourDigitsSigned, string, valueCallback);

      default:
        return parseNumericPattern(new RegExp('^-?\\d{1,' + n + '}'), string, valueCallback);
    }
  }

  function dayPeriodEnumToHours(enumValue) {
    switch (enumValue) {
      case 'morning':
        return 4;

      case 'evening':
        return 17;

      case 'pm':
      case 'noon':
      case 'afternoon':
        return 12;

      case 'am':
      case 'midnight':
      case 'night':
      default:
        return 0;
    }
  }

  function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    var isCommonEra = currentYear > 0; // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC

    var absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    var result;

    if (absCurrentYear <= 50) {
      result = twoDigitYear || 100;
    } else {
      var rangeEnd = absCurrentYear + 50;
      var rangeEndCentury = Math.floor(rangeEnd / 100) * 100;
      var isPreviousCentury = twoDigitYear >= rangeEnd % 100;
      result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }

    return isCommonEra ? result : 1 - result;
  }

  var DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var DAYS_IN_MONTH_LEAP_YEAR = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // User for validation

  function isLeapYearIndex(year) {
    return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
  }
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O* | Timezone (GMT)                 |
   * |  p  |                                |  P  |                                |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z* | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `parse` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   */


  var parsers = {
    // Era
    G: {
      priority: 140,
      parse: function (string, token, match, _options) {
        switch (token) {
          // AD, BC
          case 'G':
          case 'GG':
          case 'GGG':
            return match.era(string, {
              width: 'abbreviated'
            }) || match.era(string, {
              width: 'narrow'
            });
          // A, B

          case 'GGGGG':
            return match.era(string, {
              width: 'narrow'
            });
          // Anno Domini, Before Christ

          case 'GGGG':
          default:
            return match.era(string, {
              width: 'wide'
            }) || match.era(string, {
              width: 'abbreviated'
            }) || match.era(string, {
              width: 'narrow'
            });
        }
      },
      set: function (date, flags, value, _options) {
        flags.era = value;
        date.setUTCFullYear(value, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['R', 'u', 't', 'T']
    },
    // Year
    y: {
      // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
      // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
      // |----------|-------|----|-------|-------|-------|
      // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
      // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
      // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
      // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
      // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
      priority: 130,
      parse: function (string, token, match, _options) {
        var valueCallback = function (year) {
          return {
            year: year,
            isTwoDigitYear: token === 'yy'
          };
        };

        switch (token) {
          case 'y':
            return parseNDigits(4, string, valueCallback);

          case 'yo':
            return match.ordinalNumber(string, {
              unit: 'year',
              valueCallback: valueCallback
            });

          default:
            return parseNDigits(token.length, string, valueCallback);
        }
      },
      validate: function (_date, value, _options) {
        return value.isTwoDigitYear || value.year > 0;
      },
      set: function (date, flags, value, _options) {
        var currentYear = date.getUTCFullYear();

        if (value.isTwoDigitYear) {
          var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
          date.setUTCFullYear(normalizedTwoDigitYear, 0, 1);
          date.setUTCHours(0, 0, 0, 0);
          return date;
        }

        var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setUTCFullYear(year, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'u', 'w', 'I', 'i', 'e', 'c', 't', 'T']
    },
    // Local week-numbering year
    Y: {
      priority: 130,
      parse: function (string, token, match, _options) {
        var valueCallback = function (year) {
          return {
            year: year,
            isTwoDigitYear: token === 'YY'
          };
        };

        switch (token) {
          case 'Y':
            return parseNDigits(4, string, valueCallback);

          case 'Yo':
            return match.ordinalNumber(string, {
              unit: 'year',
              valueCallback: valueCallback
            });

          default:
            return parseNDigits(token.length, string, valueCallback);
        }
      },
      validate: function (_date, value, _options) {
        return value.isTwoDigitYear || value.year > 0;
      },
      set: function (date, flags, value, options) {
        var currentYear = getUTCWeekYear(date, options);

        if (value.isTwoDigitYear) {
          var normalizedTwoDigitYear = normalizeTwoDigitYear(value.year, currentYear);
          date.setUTCFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
          date.setUTCHours(0, 0, 0, 0);
          return startOfUTCWeek(date, options);
        }

        var year = !('era' in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setUTCFullYear(year, 0, options.firstWeekContainsDate);
        date.setUTCHours(0, 0, 0, 0);
        return startOfUTCWeek(date, options);
      },
      incompatibleTokens: ['y', 'R', 'u', 'Q', 'q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
    },
    // ISO week-numbering year
    R: {
      priority: 130,
      parse: function (string, token, _match, _options) {
        if (token === 'R') {
          return parseNDigitsSigned(4, string);
        }

        return parseNDigitsSigned(token.length, string);
      },
      set: function (_date, _flags, value, _options) {
        var firstWeekOfYear = new Date(0);
        firstWeekOfYear.setUTCFullYear(value, 0, 4);
        firstWeekOfYear.setUTCHours(0, 0, 0, 0);
        return startOfUTCISOWeek(firstWeekOfYear);
      },
      incompatibleTokens: ['G', 'y', 'Y', 'u', 'Q', 'q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
    },
    // Extended year
    u: {
      priority: 130,
      parse: function (string, token, _match, _options) {
        if (token === 'u') {
          return parseNDigitsSigned(4, string);
        }

        return parseNDigitsSigned(token.length, string);
      },
      set: function (date, _flags, value, _options) {
        date.setUTCFullYear(value, 0, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['G', 'y', 'Y', 'R', 'w', 'I', 'i', 'e', 'c', 't', 'T']
    },
    // Quarter
    Q: {
      priority: 120,
      parse: function (string, token, match, _options) {
        switch (token) {
          // 1, 2, 3, 4
          case 'Q':
          case 'QQ':
            // 01, 02, 03, 04
            return parseNDigits(token.length, string);
          // 1st, 2nd, 3rd, 4th

          case 'Qo':
            return match.ordinalNumber(string, {
              unit: 'quarter'
            });
          // Q1, Q2, Q3, Q4

          case 'QQQ':
            return match.quarter(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // 1, 2, 3, 4 (narrow quarter; could be not numerical)

          case 'QQQQQ':
            return match.quarter(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // 1st quarter, 2nd quarter, ...

          case 'QQQQ':
          default:
            return match.quarter(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.quarter(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 4;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth((value - 1) * 3, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Stand-alone quarter
    q: {
      priority: 120,
      parse: function (string, token, match, _options) {
        switch (token) {
          // 1, 2, 3, 4
          case 'q':
          case 'qq':
            // 01, 02, 03, 04
            return parseNDigits(token.length, string);
          // 1st, 2nd, 3rd, 4th

          case 'qo':
            return match.ordinalNumber(string, {
              unit: 'quarter'
            });
          // Q1, Q2, Q3, Q4

          case 'qqq':
            return match.quarter(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // 1, 2, 3, 4 (narrow quarter; could be not numerical)

          case 'qqqqq':
            return match.quarter(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // 1st quarter, 2nd quarter, ...

          case 'qqqq':
          default:
            return match.quarter(string, {
              width: 'wide',
              context: 'standalone'
            }) || match.quarter(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.quarter(string, {
              width: 'narrow',
              context: 'standalone'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 4;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth((value - 1) * 3, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'Q', 'M', 'L', 'w', 'I', 'd', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Month
    M: {
      priority: 110,
      parse: function (string, token, match, _options) {
        var valueCallback = function (value) {
          return value - 1;
        };

        switch (token) {
          // 1, 2, ..., 12
          case 'M':
            return parseNumericPattern(numericPatterns.month, string, valueCallback);
          // 01, 02, ..., 12

          case 'MM':
            return parseNDigits(2, string, valueCallback);
          // 1st, 2nd, ..., 12th

          case 'Mo':
            return match.ordinalNumber(string, {
              unit: 'month',
              valueCallback: valueCallback
            });
          // Jan, Feb, ..., Dec

          case 'MMM':
            return match.month(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.month(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // J, F, ..., D

          case 'MMMMM':
            return match.month(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // January, February, ..., December

          case 'MMMM':
          default:
            return match.month(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.month(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.month(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 11;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth(value, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'L', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Stand-alone month
    L: {
      priority: 110,
      parse: function (string, token, match, _options) {
        var valueCallback = function (value) {
          return value - 1;
        };

        switch (token) {
          // 1, 2, ..., 12
          case 'L':
            return parseNumericPattern(numericPatterns.month, string, valueCallback);
          // 01, 02, ..., 12

          case 'LL':
            return parseNDigits(2, string, valueCallback);
          // 1st, 2nd, ..., 12th

          case 'Lo':
            return match.ordinalNumber(string, {
              unit: 'month',
              valueCallback: valueCallback
            });
          // Jan, Feb, ..., Dec

          case 'LLL':
            return match.month(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.month(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // J, F, ..., D

          case 'LLLLL':
            return match.month(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // January, February, ..., December

          case 'LLLL':
          default:
            return match.month(string, {
              width: 'wide',
              context: 'standalone'
            }) || match.month(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.month(string, {
              width: 'narrow',
              context: 'standalone'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 11;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth(value, 1);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Local week of year
    w: {
      priority: 100,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'w':
            return parseNumericPattern(numericPatterns.week, string);

          case 'wo':
            return match.ordinalNumber(string, {
              unit: 'week'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 53;
      },
      set: function (date, _flags, value, options) {
        return startOfUTCWeek(setUTCWeek(date, value, options), options);
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'i', 't', 'T']
    },
    // ISO week of year
    I: {
      priority: 100,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'I':
            return parseNumericPattern(numericPatterns.week, string);

          case 'Io':
            return match.ordinalNumber(string, {
              unit: 'week'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 53;
      },
      set: function (date, _flags, value, options) {
        return startOfUTCISOWeek(setUTCISOWeek(date, value, options), options);
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'e', 'c', 't', 'T']
    },
    // Day of the month
    d: {
      priority: 90,
      subPriority: 1,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'd':
            return parseNumericPattern(numericPatterns.date, string);

          case 'do':
            return match.ordinalNumber(string, {
              unit: 'date'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (date, value, _options) {
        var year = date.getUTCFullYear();
        var isLeapYear = isLeapYearIndex(year);
        var month = date.getUTCMonth();

        if (isLeapYear) {
          return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
        } else {
          return value >= 1 && value <= DAYS_IN_MONTH[month];
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCDate(value);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'w', 'I', 'D', 'i', 'e', 'c', 't', 'T']
    },
    // Day of year
    D: {
      priority: 90,
      subPriority: 1,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'D':
          case 'DD':
            return parseNumericPattern(numericPatterns.dayOfYear, string);

          case 'Do':
            return match.ordinalNumber(string, {
              unit: 'date'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (date, value, _options) {
        var year = date.getUTCFullYear();
        var isLeapYear = isLeapYearIndex(year);

        if (isLeapYear) {
          return value >= 1 && value <= 366;
        } else {
          return value >= 1 && value <= 365;
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMonth(0, value);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['Y', 'R', 'q', 'Q', 'M', 'L', 'w', 'I', 'd', 'E', 'i', 'e', 'c', 't', 'T']
    },
    // Day of week
    E: {
      priority: 90,
      parse: function (string, token, match, _options) {
        switch (token) {
          // Tue
          case 'E':
          case 'EE':
          case 'EEE':
            return match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // T

          case 'EEEEE':
            return match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tu

          case 'EEEEEE':
            return match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tuesday

          case 'EEEE':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 6;
      },
      set: function (date, _flags, value, options) {
        date = setUTCDay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['D', 'i', 'e', 'c', 't', 'T']
    },
    // Local day of week
    e: {
      priority: 90,
      parse: function (string, token, match, options) {
        var valueCallback = function (value) {
          var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
          return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };

        switch (token) {
          // 3
          case 'e':
          case 'ee':
            // 03
            return parseNDigits(token.length, string, valueCallback);
          // 3rd

          case 'eo':
            return match.ordinalNumber(string, {
              unit: 'day',
              valueCallback: valueCallback
            });
          // Tue

          case 'eee':
            return match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // T

          case 'eeeee':
            return match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tu

          case 'eeeeee':
            return match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
          // Tuesday

          case 'eeee':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.day(string, {
              width: 'short',
              context: 'formatting'
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 6;
      },
      set: function (date, _flags, value, options) {
        date = setUTCDay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'c', 't', 'T']
    },
    // Stand-alone local day of week
    c: {
      priority: 90,
      parse: function (string, token, match, options) {
        var valueCallback = function (value) {
          var wholeWeekDays = Math.floor((value - 1) / 7) * 7;
          return (value + options.weekStartsOn + 6) % 7 + wholeWeekDays;
        };

        switch (token) {
          // 3
          case 'c':
          case 'cc':
            // 03
            return parseNDigits(token.length, string, valueCallback);
          // 3rd

          case 'co':
            return match.ordinalNumber(string, {
              unit: 'day',
              valueCallback: valueCallback
            });
          // Tue

          case 'ccc':
            return match.day(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.day(string, {
              width: 'short',
              context: 'standalone'
            }) || match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // T

          case 'ccccc':
            return match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // Tu

          case 'cccccc':
            return match.day(string, {
              width: 'short',
              context: 'standalone'
            }) || match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
          // Tuesday

          case 'cccc':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'standalone'
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'standalone'
            }) || match.day(string, {
              width: 'short',
              context: 'standalone'
            }) || match.day(string, {
              width: 'narrow',
              context: 'standalone'
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 6;
      },
      set: function (date, _flags, value, options) {
        date = setUTCDay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['y', 'R', 'u', 'q', 'Q', 'M', 'L', 'I', 'd', 'D', 'E', 'i', 'e', 't', 'T']
    },
    // ISO day of week
    i: {
      priority: 90,
      parse: function (string, token, match, _options) {
        var valueCallback = function (value) {
          if (value === 0) {
            return 7;
          }

          return value;
        };

        switch (token) {
          // 2
          case 'i':
          case 'ii':
            // 02
            return parseNDigits(token.length, string);
          // 2nd

          case 'io':
            return match.ordinalNumber(string, {
              unit: 'day'
            });
          // Tue

          case 'iii':
            return match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
          // T

          case 'iiiii':
            return match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
          // Tu

          case 'iiiiii':
            return match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
          // Tuesday

          case 'iiii':
          default:
            return match.day(string, {
              width: 'wide',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'abbreviated',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'short',
              context: 'formatting',
              valueCallback: valueCallback
            }) || match.day(string, {
              width: 'narrow',
              context: 'formatting',
              valueCallback: valueCallback
            });
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 7;
      },
      set: function (date, _flags, value, options) {
        date = setUTCISODay(date, value, options);
        date.setUTCHours(0, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['y', 'Y', 'u', 'q', 'Q', 'M', 'L', 'w', 'd', 'D', 'E', 'e', 'c', 't', 'T']
    },
    // AM or PM
    a: {
      priority: 80,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'a':
          case 'aa':
          case 'aaa':
            return match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'aaaaa':
            return match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'aaaa':
          default:
            return match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['b', 'B', 'H', 'K', 'k', 't', 'T']
    },
    // AM, PM, midnight
    b: {
      priority: 80,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'b':
          case 'bb':
          case 'bbb':
            return match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'bbbbb':
            return match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'bbbb':
          default:
            return match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'B', 'H', 'K', 'k', 't', 'T']
    },
    // in the morning, in the afternoon, in the evening, at night
    B: {
      priority: 80,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'B':
          case 'BB':
          case 'BBB':
            return match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'BBBBB':
            return match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });

          case 'BBBB':
          default:
            return match.dayPeriod(string, {
              width: 'wide',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'abbreviated',
              context: 'formatting'
            }) || match.dayPeriod(string, {
              width: 'narrow',
              context: 'formatting'
            });
        }
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(dayPeriodEnumToHours(value), 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'b', 't', 'T']
    },
    // Hour [1-12]
    h: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'h':
            return parseNumericPattern(numericPatterns.hour12h, string);

          case 'ho':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 12;
      },
      set: function (date, _flags, value, _options) {
        var isPM = date.getUTCHours() >= 12;

        if (isPM && value < 12) {
          date.setUTCHours(value + 12, 0, 0, 0);
        } else if (!isPM && value === 12) {
          date.setUTCHours(0, 0, 0, 0);
        } else {
          date.setUTCHours(value, 0, 0, 0);
        }

        return date;
      },
      incompatibleTokens: ['H', 'K', 'k', 't', 'T']
    },
    // Hour [0-23]
    H: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'H':
            return parseNumericPattern(numericPatterns.hour23h, string);

          case 'Ho':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 23;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCHours(value, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'b', 'h', 'K', 'k', 't', 'T']
    },
    // Hour [0-11]
    K: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'K':
            return parseNumericPattern(numericPatterns.hour11h, string);

          case 'Ko':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 11;
      },
      set: function (date, _flags, value, _options) {
        var isPM = date.getUTCHours() >= 12;

        if (isPM && value < 12) {
          date.setUTCHours(value + 12, 0, 0, 0);
        } else {
          date.setUTCHours(value, 0, 0, 0);
        }

        return date;
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'k', 't', 'T']
    },
    // Hour [1-24]
    k: {
      priority: 70,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'k':
            return parseNumericPattern(numericPatterns.hour24h, string);

          case 'ko':
            return match.ordinalNumber(string, {
              unit: 'hour'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 1 && value <= 24;
      },
      set: function (date, _flags, value, _options) {
        var hours = value <= 24 ? value % 24 : value;
        date.setUTCHours(hours, 0, 0, 0);
        return date;
      },
      incompatibleTokens: ['a', 'b', 'h', 'H', 'K', 't', 'T']
    },
    // Minute
    m: {
      priority: 60,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 'm':
            return parseNumericPattern(numericPatterns.minute, string);

          case 'mo':
            return match.ordinalNumber(string, {
              unit: 'minute'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 59;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMinutes(value, 0, 0);
        return date;
      },
      incompatibleTokens: ['t', 'T']
    },
    // Second
    s: {
      priority: 50,
      parse: function (string, token, match, _options) {
        switch (token) {
          case 's':
            return parseNumericPattern(numericPatterns.second, string);

          case 'so':
            return match.ordinalNumber(string, {
              unit: 'second'
            });

          default:
            return parseNDigits(token.length, string);
        }
      },
      validate: function (_date, value, _options) {
        return value >= 0 && value <= 59;
      },
      set: function (date, _flags, value, _options) {
        date.setUTCSeconds(value, 0);
        return date;
      },
      incompatibleTokens: ['t', 'T']
    },
    // Fraction of second
    S: {
      priority: 30,
      parse: function (string, token, _match, _options) {
        var valueCallback = function (value) {
          return Math.floor(value * Math.pow(10, -token.length + 3));
        };

        return parseNDigits(token.length, string, valueCallback);
      },
      set: function (date, _flags, value, _options) {
        date.setUTCMilliseconds(value);
        return date;
      },
      incompatibleTokens: ['t', 'T']
    },
    // Timezone (ISO-8601. +00:00 is `'Z'`)
    X: {
      priority: 10,
      parse: function (string, token, _match, _options) {
        switch (token) {
          case 'X':
            return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

          case 'XX':
            return parseTimezonePattern(timezonePatterns.basic, string);

          case 'XXXX':
            return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

          case 'XXXXX':
            return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

          case 'XXX':
          default:
            return parseTimezonePattern(timezonePatterns.extended, string);
        }
      },
      set: function (date, flags, value, _options) {
        if (flags.timestampIsSet) {
          return date;
        }

        return new Date(date.getTime() - value);
      },
      incompatibleTokens: ['t', 'T', 'x']
    },
    // Timezone (ISO-8601)
    x: {
      priority: 10,
      parse: function (string, token, _match, _options) {
        switch (token) {
          case 'x':
            return parseTimezonePattern(timezonePatterns.basicOptionalMinutes, string);

          case 'xx':
            return parseTimezonePattern(timezonePatterns.basic, string);

          case 'xxxx':
            return parseTimezonePattern(timezonePatterns.basicOptionalSeconds, string);

          case 'xxxxx':
            return parseTimezonePattern(timezonePatterns.extendedOptionalSeconds, string);

          case 'xxx':
          default:
            return parseTimezonePattern(timezonePatterns.extended, string);
        }
      },
      set: function (date, flags, value, _options) {
        if (flags.timestampIsSet) {
          return date;
        }

        return new Date(date.getTime() - value);
      },
      incompatibleTokens: ['t', 'T', 'X']
    },
    // Seconds timestamp
    t: {
      priority: 40,
      parse: function (string, _token, _match, _options) {
        return parseAnyDigitsSigned(string);
      },
      set: function (_date, _flags, value, _options) {
        return [new Date(value * 1000), {
          timestampIsSet: true
        }];
      },
      incompatibleTokens: '*'
    },
    // Milliseconds timestamp
    T: {
      priority: 20,
      parse: function (string, _token, _match, _options) {
        return parseAnyDigitsSigned(string);
      },
      set: function (_date, _flags, value, _options) {
        return [new Date(value), {
          timestampIsSet: true
        }];
      },
      incompatibleTokens: '*'
    }
  };

  var TIMEZONE_UNIT_PRIORITY = 10; // This RegExp consists of three parts separated by `|`:
  // - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
  //   (one of the certain letters followed by `o`)
  // - (\w)\1* matches any sequences of the same letter
  // - '' matches two quote characters in a row
  // - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
  //   except a single quote symbol, which ends the sequence.
  //   Two quote characters do not end the sequence.
  //   If there is no matching single quote
  //   then the sequence will continue until the end of the string.
  // - . matches any single character unmatched by previous parts of the RegExps

  var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
  // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

  var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
  var escapedStringRegExp = /^'([^]*?)'?$/;
  var doubleQuoteRegExp = /''/g;
  var notWhitespaceRegExp = /\S/;
  var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
  /**
   * @name parse
   * @category Common Helpers
   * @summary Parse the date.
   *
   * @description
   * Return the date parsed from string using the given format string.
   *
   * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
   * > See: https://git.io/fxCyr
   *
   * The characters in the format string wrapped between two single quotes characters (') are escaped.
   * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
   *
   * Format of the format string is based on Unicode Technical Standard #35:
   * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
   * with a few additions (see note 5 below the table).
   *
   * Not all tokens are compatible. Combinations that don't make sense or could lead to bugs are prohibited
   * and will throw `RangeError`. For example usage of 24-hour format token with AM/PM token will throw an exception:
   *
   * ```javascript
   * parse('23 AM', 'HH a', new Date())
   * //=> RangeError: The format string mustn't contain `HH` and `a` at the same time
   * ```
   *
   * See the compatibility table: https://docs.google.com/spreadsheets/d/e/2PACX-1vQOPU3xUhplll6dyoMmVUXHKl_8CRDs6_ueLmex3SoqwhuolkuN3O05l4rqx5h1dKX8eb46Ul-CCSrq/pubhtml?gid=0&single=true
   *
   * Accepted format string patterns:
   * | Unit                            |Prior| Pattern | Result examples                   | Notes |
   * |---------------------------------|-----|---------|-----------------------------------|-------|
   * | Era                             | 140 | G..GGG  | AD, BC                            |       |
   * |                                 |     | GGGG    | Anno Domini, Before Christ        | 2     |
   * |                                 |     | GGGGG   | A, B                              |       |
   * | Calendar year                   | 130 | y       | 44, 1, 1900, 2017, 9999           | 4     |
   * |                                 |     | yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
   * |                                 |     | yy      | 44, 01, 00, 17                    | 4     |
   * |                                 |     | yyy     | 044, 001, 123, 999                | 4     |
   * |                                 |     | yyyy    | 0044, 0001, 1900, 2017            | 4     |
   * |                                 |     | yyyyy   | ...                               | 2,4   |
   * | Local week-numbering year       | 130 | Y       | 44, 1, 1900, 2017, 9000           | 4     |
   * |                                 |     | Yo      | 44th, 1st, 1900th, 9999999th      | 4,5   |
   * |                                 |     | YY      | 44, 01, 00, 17                    | 4,6   |
   * |                                 |     | YYY     | 044, 001, 123, 999                | 4     |
   * |                                 |     | YYYY    | 0044, 0001, 1900, 2017            | 4,6   |
   * |                                 |     | YYYYY   | ...                               | 2,4   |
   * | ISO week-numbering year         | 130 | R       | -43, 1, 1900, 2017, 9999, -9999   | 4,5   |
   * |                                 |     | RR      | -43, 01, 00, 17                   | 4,5   |
   * |                                 |     | RRR     | -043, 001, 123, 999, -999         | 4,5   |
   * |                                 |     | RRRR    | -0043, 0001, 2017, 9999, -9999    | 4,5   |
   * |                                 |     | RRRRR   | ...                               | 2,4,5 |
   * | Extended year                   | 130 | u       | -43, 1, 1900, 2017, 9999, -999    | 4     |
   * |                                 |     | uu      | -43, 01, 99, -99                  | 4     |
   * |                                 |     | uuu     | -043, 001, 123, 999, -999         | 4     |
   * |                                 |     | uuuu    | -0043, 0001, 2017, 9999, -9999    | 4     |
   * |                                 |     | uuuuu   | ...                               | 2,4   |
   * | Quarter (formatting)            | 120 | Q       | 1, 2, 3, 4                        |       |
   * |                                 |     | Qo      | 1st, 2nd, 3rd, 4th                | 5     |
   * |                                 |     | QQ      | 01, 02, 03, 04                    |       |
   * |                                 |     | QQQ     | Q1, Q2, Q3, Q4                    |       |
   * |                                 |     | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 |     | QQQQQ   | 1, 2, 3, 4                        | 4     |
   * | Quarter (stand-alone)           | 120 | q       | 1, 2, 3, 4                        |       |
   * |                                 |     | qo      | 1st, 2nd, 3rd, 4th                | 5     |
   * |                                 |     | qq      | 01, 02, 03, 04                    |       |
   * |                                 |     | qqq     | Q1, Q2, Q3, Q4                    |       |
   * |                                 |     | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
   * |                                 |     | qqqqq   | 1, 2, 3, 4                        | 3     |
   * | Month (formatting)              | 110 | M       | 1, 2, ..., 12                     |       |
   * |                                 |     | Mo      | 1st, 2nd, ..., 12th               | 5     |
   * |                                 |     | MM      | 01, 02, ..., 12                   |       |
   * |                                 |     | MMM     | Jan, Feb, ..., Dec                |       |
   * |                                 |     | MMMM    | January, February, ..., December  | 2     |
   * |                                 |     | MMMMM   | J, F, ..., D                      |       |
   * | Month (stand-alone)             | 110 | L       | 1, 2, ..., 12                     |       |
   * |                                 |     | Lo      | 1st, 2nd, ..., 12th               | 5     |
   * |                                 |     | LL      | 01, 02, ..., 12                   |       |
   * |                                 |     | LLL     | Jan, Feb, ..., Dec                |       |
   * |                                 |     | LLLL    | January, February, ..., December  | 2     |
   * |                                 |     | LLLLL   | J, F, ..., D                      |       |
   * | Local week of year              | 100 | w       | 1, 2, ..., 53                     |       |
   * |                                 |     | wo      | 1st, 2nd, ..., 53th               | 5     |
   * |                                 |     | ww      | 01, 02, ..., 53                   |       |
   * | ISO week of year                | 100 | I       | 1, 2, ..., 53                     | 5     |
   * |                                 |     | Io      | 1st, 2nd, ..., 53th               | 5     |
   * |                                 |     | II      | 01, 02, ..., 53                   | 5     |
   * | Day of month                    |  90 | d       | 1, 2, ..., 31                     |       |
   * |                                 |     | do      | 1st, 2nd, ..., 31st               | 5     |
   * |                                 |     | dd      | 01, 02, ..., 31                   |       |
   * | Day of year                     |  90 | D       | 1, 2, ..., 365, 366               | 7     |
   * |                                 |     | Do      | 1st, 2nd, ..., 365th, 366th       | 5     |
   * |                                 |     | DD      | 01, 02, ..., 365, 366             | 7     |
   * |                                 |     | DDD     | 001, 002, ..., 365, 366           |       |
   * |                                 |     | DDDD    | ...                               | 2     |
   * | Day of week (formatting)        |  90 | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 |     | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 |     | EEEEE   | M, T, W, T, F, S, S               |       |
   * |                                 |     | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | ISO day of week (formatting)    |  90 | i       | 1, 2, 3, ..., 7                   | 5     |
   * |                                 |     | io      | 1st, 2nd, ..., 7th                | 5     |
   * |                                 |     | ii      | 01, 02, ..., 07                   | 5     |
   * |                                 |     | iii     | Mon, Tue, Wed, ..., Sun           | 5     |
   * |                                 |     | iiii    | Monday, Tuesday, ..., Sunday      | 2,5   |
   * |                                 |     | iiiii   | M, T, W, T, F, S, S               | 5     |
   * |                                 |     | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 5     |
   * | Local day of week (formatting)  |  90 | e       | 2, 3, 4, ..., 1                   |       |
   * |                                 |     | eo      | 2nd, 3rd, ..., 1st                | 5     |
   * |                                 |     | ee      | 02, 03, ..., 01                   |       |
   * |                                 |     | eee     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 |     | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 |     | eeeee   | M, T, W, T, F, S, S               |       |
   * |                                 |     | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | Local day of week (stand-alone) |  90 | c       | 2, 3, 4, ..., 1                   |       |
   * |                                 |     | co      | 2nd, 3rd, ..., 1st                | 5     |
   * |                                 |     | cc      | 02, 03, ..., 01                   |       |
   * |                                 |     | ccc     | Mon, Tue, Wed, ..., Sun           |       |
   * |                                 |     | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
   * |                                 |     | ccccc   | M, T, W, T, F, S, S               |       |
   * |                                 |     | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
   * | AM, PM                          |  80 | a..aaa  | AM, PM                            |       |
   * |                                 |     | aaaa    | a.m., p.m.                        | 2     |
   * |                                 |     | aaaaa   | a, p                              |       |
   * | AM, PM, noon, midnight          |  80 | b..bbb  | AM, PM, noon, midnight            |       |
   * |                                 |     | bbbb    | a.m., p.m., noon, midnight        | 2     |
   * |                                 |     | bbbbb   | a, p, n, mi                       |       |
   * | Flexible day period             |  80 | B..BBB  | at night, in the morning, ...     |       |
   * |                                 |     | BBBB    | at night, in the morning, ...     | 2     |
   * |                                 |     | BBBBB   | at night, in the morning, ...     |       |
   * | Hour [1-12]                     |  70 | h       | 1, 2, ..., 11, 12                 |       |
   * |                                 |     | ho      | 1st, 2nd, ..., 11th, 12th         | 5     |
   * |                                 |     | hh      | 01, 02, ..., 11, 12               |       |
   * | Hour [0-23]                     |  70 | H       | 0, 1, 2, ..., 23                  |       |
   * |                                 |     | Ho      | 0th, 1st, 2nd, ..., 23rd          | 5     |
   * |                                 |     | HH      | 00, 01, 02, ..., 23               |       |
   * | Hour [0-11]                     |  70 | K       | 1, 2, ..., 11, 0                  |       |
   * |                                 |     | Ko      | 1st, 2nd, ..., 11th, 0th          | 5     |
   * |                                 |     | KK      | 01, 02, ..., 11, 00               |       |
   * | Hour [1-24]                     |  70 | k       | 24, 1, 2, ..., 23                 |       |
   * |                                 |     | ko      | 24th, 1st, 2nd, ..., 23rd         | 5     |
   * |                                 |     | kk      | 24, 01, 02, ..., 23               |       |
   * | Minute                          |  60 | m       | 0, 1, ..., 59                     |       |
   * |                                 |     | mo      | 0th, 1st, ..., 59th               | 5     |
   * |                                 |     | mm      | 00, 01, ..., 59                   |       |
   * | Second                          |  50 | s       | 0, 1, ..., 59                     |       |
   * |                                 |     | so      | 0th, 1st, ..., 59th               | 5     |
   * |                                 |     | ss      | 00, 01, ..., 59                   |       |
   * | Seconds timestamp               |  40 | t       | 512969520                         |       |
   * |                                 |     | tt      | ...                               | 2     |
   * | Fraction of second              |  30 | S       | 0, 1, ..., 9                      |       |
   * |                                 |     | SS      | 00, 01, ..., 99                   |       |
   * |                                 |     | SSS     | 000, 0001, ..., 999               |       |
   * |                                 |     | SSSS    | ...                               | 2     |
   * | Milliseconds timestamp          |  20 | T       | 512969520900                      |       |
   * |                                 |     | TT      | ...                               | 2     |
   * | Timezone (ISO-8601 w/ Z)        |  10 | X       | -08, +0530, Z                     |       |
   * |                                 |     | XX      | -0800, +0530, Z                   |       |
   * |                                 |     | XXX     | -08:00, +05:30, Z                 |       |
   * |                                 |     | XXXX    | -0800, +0530, Z, +123456          | 2     |
   * |                                 |     | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
   * | Timezone (ISO-8601 w/o Z)       |  10 | x       | -08, +0530, +00                   |       |
   * |                                 |     | xx      | -0800, +0530, +0000               |       |
   * |                                 |     | xxx     | -08:00, +05:30, +00:00            | 2     |
   * |                                 |     | xxxx    | -0800, +0530, +0000, +123456      |       |
   * |                                 |     | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
   * | Long localized date             |  NA | P       | 05/29/1453                        | 5,8   |
   * |                                 |     | PP      | May 29, 1453                      |       |
   * |                                 |     | PPP     | May 29th, 1453                    |       |
   * |                                 |     | PPPP    | Sunday, May 29th, 1453            | 2,5,8 |
   * | Long localized time             |  NA | p       | 12:00 AM                          | 5,8   |
   * |                                 |     | pp      | 12:00:00 AM                       |       |
   * | Combination of date and time    |  NA | Pp      | 05/29/1453, 12:00 AM              |       |
   * |                                 |     | PPpp    | May 29, 1453, 12:00:00 AM         |       |
   * |                                 |     | PPPpp   | May 29th, 1453 at ...             |       |
   * |                                 |     | PPPPpp  | Sunday, May 29th, 1453 at ...     | 2,5,8 |
   * Notes:
   * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
   *    are the same as "stand-alone" units, but are different in some languages.
   *    "Formatting" units are declined according to the rules of the language
   *    in the context of a date. "Stand-alone" units are always nominative singular.
   *    In `format` function, they will produce different result:
   *
   *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
   *
   *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
   *
   *    `parse` will try to match both formatting and stand-alone units interchangably.
   *
   * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
   *    the single quote characters (see below).
   *    If the sequence is longer than listed in table:
   *    - for numerical units (`yyyyyyyy`) `parse` will try to match a number
   *      as wide as the sequence
   *    - for text units (`MMMMMMMM`) `parse` will try to match the widest variation of the unit.
   *      These variations are marked with "2" in the last column of the table.
   *
   * 3. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
   *    These tokens represent the shortest form of the quarter.
   *
   * 4. The main difference between `y` and `u` patterns are B.C. years:
   *
   *    | Year | `y` | `u` |
   *    |------|-----|-----|
   *    | AC 1 |   1 |   1 |
   *    | BC 1 |   1 |   0 |
   *    | BC 2 |   2 |  -1 |
   *
   *    Also `yy` will try to guess the century of two digit year by proximity with `referenceDate`:
   *
   *    `parse('50', 'yy', new Date(2018, 0, 1)) //=> Sat Jan 01 2050 00:00:00`
   *
   *    `parse('75', 'yy', new Date(2018, 0, 1)) //=> Wed Jan 01 1975 00:00:00`
   *
   *    while `uu` will just assign the year as is:
   *
   *    `parse('50', 'uu', new Date(2018, 0, 1)) //=> Sat Jan 01 0050 00:00:00`
   *
   *    `parse('75', 'uu', new Date(2018, 0, 1)) //=> Tue Jan 01 0075 00:00:00`
   *
   *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
   *    except local week-numbering years are dependent on `options.weekStartsOn`
   *    and `options.firstWeekContainsDate` (compare [setISOWeekYear]{@link https://date-fns.org/docs/setISOWeekYear}
   *    and [setWeekYear]{@link https://date-fns.org/docs/setWeekYear}).
   *
   * 5. These patterns are not in the Unicode Technical Standard #35:
   *    - `i`: ISO day of week
   *    - `I`: ISO week of year
   *    - `R`: ISO week-numbering year
   *    - `o`: ordinal number modifier
   *    - `P`: long localized date
   *    - `p`: long localized time
   *
   * 6. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
   *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
   *
   * 7. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
   *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
   *
   * 8. `P+` tokens do not have a defined priority since they are merely aliases to other tokens based
   *    on the given locale.
   *
   *    using `en-US` locale: `P` => `MM/dd/yyyy`
   *    using `en-US` locale: `p` => `hh:mm a`
   *    using `pt-BR` locale: `P` => `dd/MM/yyyy`
   *    using `pt-BR` locale: `p` => `HH:mm`
   *
   * Values will be assigned to the date in the descending order of its unit's priority.
   * Units of an equal priority overwrite each other in the order of appearance.
   *
   * If no values of higher priority are parsed (e.g. when parsing string 'January 1st' without a year),
   * the values will be taken from 3rd argument `referenceDate` which works as a context of parsing.
   *
   * `referenceDate` must be passed for correct work of the function.
   * If you're not sure which `referenceDate` to supply, create a new instance of Date:
   * `parse('02/11/2014', 'MM/dd/yyyy', new Date())`
   * In this case parsing will be done in the context of the current date.
   * If `referenceDate` is `Invalid Date` or a value not convertible to valid `Date`,
   * then `Invalid Date` will be returned.
   *
   * The result may vary by locale.
   *
   * If `formatString` matches with `dateString` but does not provides tokens, `referenceDate` will be returned.
   *
   * If parsing failed, `Invalid Date` will be returned.
   * Invalid Date is a Date, whose time value is NaN.
   * Time value of Date: http://es5.github.io/#x15.9.1.1
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * - Old `parse` was renamed to `toDate`.
   *   Now `parse` is a new function which parses a string using a provided format.
   *
   *   ```javascript
   *   // Before v2.0.0
   *   parse('2016-01-01')
   *
   *   // v2.0.0 onward (toDate no longer accepts a string)
   *   toDate(1392098430000) // Unix to timestamp
   *   toDate(new Date(2014, 1, 11, 11, 30, 30)) // Cloning the date
   *   parse('2016-01-01', 'yyyy-MM-dd', new Date())
   *   ```
   *
   * @param {String} dateString - the string to parse
   * @param {String} formatString - the string of tokens
   * @param {Date|Number} referenceDate - defines values missing from the parsed dateString
   * @param {Object} [options] - an object with options.
   * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
   * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
   * @param {1|2|3|4|5|6|7} [options.firstWeekContainsDate=1] - the day of January, which is always in the first week of the year
   * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
   *   see: https://git.io/fxCyr
   * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
   *   see: https://git.io/fxCyr
   * @returns {Date} the parsed date
   * @throws {TypeError} 3 arguments required
   * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
   * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
   * @throws {RangeError} `options.locale` must contain `match` property
   * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
   * @throws {RangeError} format string contains an unescaped latin alphabet character
   *
   * @example
   * // Parse 11 February 2014 from middle-endian format:
   * var result = parse('02/11/2014', 'MM/dd/yyyy', new Date())
   * //=> Tue Feb 11 2014 00:00:00
   *
   * @example
   * // Parse 28th of February in Esperanto locale in the context of 2010 year:
   * import eo from 'date-fns/locale/eo'
   * var result = parse('28-a de februaro', "do 'de' MMMM", new Date(2010, 0, 1), {
   *   locale: eo
   * })
   * //=> Sun Feb 28 2010 00:00:00
   */

  function parse$1(dirtyDateString, dirtyFormatString, dirtyReferenceDate, dirtyOptions) {
    requiredArgs(3, arguments);
    var dateString = String(dirtyDateString);
    var formatString = String(dirtyFormatString);
    var options = dirtyOptions || {};
    var locale = options.locale || locale$3;

    if (!locale.match) {
      throw new RangeError('locale must contain match property');
    }

    var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
    var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : toInteger$1(localeFirstWeekContainsDate);
    var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : toInteger$1(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

    if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
      throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    }

    var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
    var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : toInteger$1(localeWeekStartsOn);
    var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : toInteger$1(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

    if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
      throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
    }

    if (formatString === '') {
      if (dateString === '') {
        return toDate(dirtyReferenceDate);
      } else {
        return new Date(NaN);
      }
    }

    var subFnOptions = {
      firstWeekContainsDate: firstWeekContainsDate,
      weekStartsOn: weekStartsOn,
      locale: locale // If timezone isn't specified, it will be set to the system timezone

    };
    var setters = [{
      priority: TIMEZONE_UNIT_PRIORITY,
      subPriority: -1,
      set: dateToSystemTimezone,
      index: 0
    }];
    var i;
    var tokens = formatString.match(longFormattingTokensRegExp).map(function (substring) {
      var firstCharacter = substring[0];

      if (firstCharacter === 'p' || firstCharacter === 'P') {
        var longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong, subFnOptions);
      }

      return substring;
    }).join('').match(formattingTokensRegExp);
    var usedTokens = [];

    for (i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (!options.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }

      if (!options.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
        throwProtectedError(token, formatString, dirtyDateString);
      }

      var firstCharacter = token[0];
      var parser = parsers[firstCharacter];

      if (parser) {
        var incompatibleTokens = parser.incompatibleTokens;

        if (Array.isArray(incompatibleTokens)) {
          var incompatibleToken = void 0;

          for (var _i = 0; _i < usedTokens.length; _i++) {
            var usedToken = usedTokens[_i].token;

            if (incompatibleTokens.indexOf(usedToken) !== -1 || usedToken === firstCharacter) {
              incompatibleToken = usedTokens[_i];
              break;
            }
          }

          if (incompatibleToken) {
            throw new RangeError("The format string mustn't contain `".concat(incompatibleToken.fullToken, "` and `").concat(token, "` at the same time"));
          }
        } else if (parser.incompatibleTokens === '*' && usedTokens.length) {
          throw new RangeError("The format string mustn't contain `".concat(token, "` and any other token at the same time"));
        }

        usedTokens.push({
          token: firstCharacter,
          fullToken: token
        });
        var parseResult = parser.parse(dateString, token, locale.match, subFnOptions);

        if (!parseResult) {
          return new Date(NaN);
        }

        setters.push({
          priority: parser.priority,
          subPriority: parser.subPriority || 0,
          set: parser.set,
          validate: parser.validate,
          value: parseResult.value,
          index: setters.length
        });
        dateString = parseResult.rest;
      } else {
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
        } // Replace two single quote characters with one single quote character


        if (token === "''") {
          token = "'";
        } else if (firstCharacter === "'") {
          token = cleanEscapedString(token);
        } // Cut token from string, or, if string doesn't match the token, return Invalid Date


        if (dateString.indexOf(token) === 0) {
          dateString = dateString.slice(token.length);
        } else {
          return new Date(NaN);
        }
      }
    } // Check if the remaining input contains something other than whitespace


    if (dateString.length > 0 && notWhitespaceRegExp.test(dateString)) {
      return new Date(NaN);
    }

    var uniquePrioritySetters = setters.map(function (setter) {
      return setter.priority;
    }).sort(function (a, b) {
      return b - a;
    }).filter(function (priority, index, array) {
      return array.indexOf(priority) === index;
    }).map(function (priority) {
      return setters.filter(function (setter) {
        return setter.priority === priority;
      }).sort(function (a, b) {
        return b.subPriority - a.subPriority;
      });
    }).map(function (setterArray) {
      return setterArray[0];
    });
    var date = toDate(dirtyReferenceDate);

    if (isNaN(date)) {
      return new Date(NaN);
    } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
    // This ensures that when UTC functions will be implemented, locales will be compatible with them.
    // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/37


    var utcDate = subMilliseconds(date, getTimezoneOffsetInMilliseconds(date));
    var flags = {};

    for (i = 0; i < uniquePrioritySetters.length; i++) {
      var setter = uniquePrioritySetters[i];

      if (setter.validate && !setter.validate(utcDate, setter.value, subFnOptions)) {
        return new Date(NaN);
      }

      var result = setter.set(utcDate, flags, setter.value, subFnOptions); // Result is tuple (date, flags)

      if (result[0]) {
        utcDate = result[0];
        assign(flags, result[1]); // Result is date
      } else {
        utcDate = result;
      }
    }

    return utcDate;
  }

  function dateToSystemTimezone(date, flags) {
    if (flags.timestampIsSet) {
      return date;
    }

    var convertedDate = new Date(0);
    convertedDate.setFullYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
    convertedDate.setHours(date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds());
    return convertedDate;
  }

  function cleanEscapedString(input) {
    return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
  }

  /**
   * @name startOfToday
   * @category Day Helpers
   * @summary Return the start of today.
   * @pure false
   *
   * @description
   * Return the start of today.
   *
   * > ⚠️ Please note that this function is not present in the FP submodule as
   * > it uses `Date.now()` internally hence impure and can't be safely curried.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @returns {Date} the start of today
   *
   * @example
   * // If today is 6 October 2014:
   * var result = startOfToday()
   * //=> Mon Oct 6 2014 00:00:00
   */

  function startOfToday() {
    return startOfDay(Date.now());
  }

  /**
   * @name startOfYesterday
   * @category Day Helpers
   * @summary Return the start of yesterday.
   * @pure false
   *
   * @description
   * Return the start of yesterday.
   *
   * > ⚠️ Please note that this function is not present in the FP submodule as
   * > it uses `new Date()` internally hence impure and can't be safely curried.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @returns {Date} the start of yesterday
   *
   * @example
   * // If today is 6 October 2014:
   * const result = startOfYesterday()
   * //=> Sun Oct 5 2014 00:00:00
   */
  function startOfYesterday() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var day = now.getDate();
    var date = new Date(0);
    date.setFullYear(year, month, day - 1);
    date.setHours(0, 0, 0, 0);
    return date;
  }

  /**
   * @name subWeeks
   * @category Week Helpers
   * @summary Subtract the specified number of weeks from the given date.
   *
   * @description
   * Subtract the specified number of weeks from the given date.
   *
   * ### v2.0.0 breaking changes:
   *
   * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
   *
   * @param {Date|Number} date - the date to be changed
   * @param {Number} amount - the amount of weeks to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
   * @returns {Date} the new date with the weeks subtracted
   * @throws {TypeError} 2 arguments required
   *
   * @example
   * // Subtract 4 weeks from 1 September 2014:
   * const result = subWeeks(new Date(2014, 8, 1), 4)
   * //=> Mon Aug 04 2014 00:00:00
   */

  function subWeeks(dirtyDate, dirtyAmount) {
    requiredArgs(2, arguments);
    var amount = toInteger$1(dirtyAmount);
    return addWeeks(dirtyDate, -amount);
  }

  var floor$1 = Math.floor;
  var replace = ''.replace;
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution

  var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject$1(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return replace.call(replacement, symbols, function (match, ch) {
      var capture;

      switch (ch.charAt(0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return str.slice(0, position);

        case "'":
          return str.slice(tailPos);

        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  };

  var REPLACE$1 = wellKnownSymbol$1('replace');
  var max$1 = Math.max;
  var min$3 = Math.min;

  var maybeToString = function (it) {
    return it === undefined ? it : String(it);
  }; // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


  var REPLACE_KEEPS_$0$1 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE$1 = function () {
    if (/./[REPLACE$1]) {
      return /./[REPLACE$1]('a', '$0') === '';
    }

    return false;
  }();

  var REPLACE_SUPPORTS_NAMED_GROUPS$1 = !fails$1(function () {
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  }); // @@replace logic

  fixRegexpWellKnownSymbolLogic$1('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE$1 ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible$1(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE$1];
      return replacer !== undefined ? replacer.call(searchValue, O, replaceValue) : nativeReplace.call(String(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      if (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1 && replaceValue.indexOf('$<') === -1) {
        var res = maybeCallNative(nativeReplace, this, string, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject$1(this);
      var S = String(string);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regexpExecAbstract$1(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max$1(min$3(toInteger$2(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + S.slice(nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS$1 || !REPLACE_KEEPS_$0$1 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE$1);

  var dist$2 = createCommonjsModule$1(function (module, exports) {





  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getLocale = getLocale;
  exports.getCanonicalLocale = getCanonicalLocale;
  exports.getLanguage = getLanguage;
  exports.translate = translate;
  exports.translatePlural = translatePlural;
  exports.getFirstDay = getFirstDay;
  exports.getDayNames = getDayNames;
  exports.getDayNamesShort = getDayNamesShort;
  exports.getDayNamesMin = getDayNamesMin;
  exports.getMonthNames = getMonthNames;
  exports.getMonthNamesShort = getMonthNamesShort; /// <reference types="@nextcloud/typings" />

  /**
   * Returns the user's locale
   */

  function getLocale() {
    if (typeof OC === 'undefined') {
      console.warn('No OC found');
      return 'en';
    }

    return OC.getLocale();
  }

  function getCanonicalLocale() {
    return getLocale().replace(/_/g, '-');
  }
  /**
   * Returns the user's language
   */


  function getLanguage() {
    if (typeof OC === 'undefined') {
      console.warn('No OC found');
      return 'en';
    }

    return OC.getLanguage();
  }
  /**
   * Translate a string
   *
   * @param {string} app the id of the app for which to translate the string
   * @param {string} text the string to translate
   * @param {object} vars map of placeholder key to value
   * @param {number} number to replace %n with
   * @param {object} [options] options object
   * @return {string}
   */


  function translate(app, text, vars, count, options) {
    if (typeof OC === 'undefined') {
      console.warn('No OC found');
      return text;
    }

    return OC.L10N.translate(app, text, vars, count, options);
  }
  /**
   * Translate a plural string
   *
   * @param {string} app the id of the app for which to translate the string
   * @param {string} textSingular the string to translate for exactly one object
   * @param {string} textPlural the string to translate for n objects
   * @param {number} count number to determine whether to use singular or plural
   * @param {Object} vars of placeholder key to value
   * @param {object} options options object
   * @return {string}
   */


  function translatePlural(app, textSingular, textPlural, count, vars, options) {
    if (typeof OC === 'undefined') {
      console.warn('No OC found');
      return textSingular;
    }

    return OC.L10N.translatePlural(app, textSingular, textPlural, count, vars, options);
  }
  /**
   * Get the first day of the week
   *
   * @return {number}
   */


  function getFirstDay() {
    if (typeof window.firstDay === 'undefined') {
      console.warn('No firstDay found');
      return 1;
    }

    return window.firstDay;
  }
  /**
   * Get a list of day names (full names)
   *
   * @return {string[]}
   */


  function getDayNames() {
    if (typeof window.dayNames === 'undefined') {
      console.warn('No dayNames found');
      return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    }

    return window.dayNames;
  }
  /**
   * Get a list of day names (short names)
   *
   * @return {string[]}
   */


  function getDayNamesShort() {
    if (typeof window.dayNamesShort === 'undefined') {
      console.warn('No dayNamesShort found');
      return ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'];
    }

    return window.dayNamesShort;
  }
  /**
   * Get a list of day names (minified names)
   *
   * @return {string[]}
   */


  function getDayNamesMin() {
    if (typeof window.dayNamesMin === 'undefined') {
      console.warn('No dayNamesMin found');
      return ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    }

    return window.dayNamesMin;
  }
  /**
   * Get a list of month names (full names)
   *
   * @return {string[]}
   */


  function getMonthNames() {
    if (typeof window.monthNames === 'undefined') {
      console.warn('No monthNames found');
      return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    return window.monthNames;
  }
  /**
   * Get a list of month names (short names)
   *
   * @return {string[]}
   */


  function getMonthNamesShort() {
    if (typeof window.monthNamesShort === 'undefined') {
      console.warn('No monthNamesShort found');
      return ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'];
    }

    return window.monthNamesShort;
  }
  });

  unwrapExports(dist$2);
  var dist_1 = dist$2.getLocale;
  dist$2.getCanonicalLocale;
  dist$2.getLanguage;
  var dist_4$1 = dist$2.translate;
  dist$2.translatePlural;
  var dist_6 = dist$2.getFirstDay;
  dist$2.getDayNames;
  dist$2.getDayNamesShort;
  dist$2.getDayNamesMin;
  dist$2.getMonthNames;
  dist$2.getMonthNamesShort;

  var nativeJoin$1 = [].join;
  var ES3_STRINGS$1 = indexedObject$1 != Object;
  var STRICT_METHOD$2 = arrayMethodIsStrict$1('join', ','); // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join

  _export$1({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS$1 || !STRICT_METHOD$2
  }, {
    join: function join(separator) {
      return nativeJoin$1.call(toIndexedObject$1(this), separator === undefined ? ',' : separator);
    }
  });

  var FAILS_ON_PRIMITIVES = fails$1(function () {
    objectKeys$1(1);
  }); // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys

  _export$1({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES
  }, {
    keys: function keys(it) {
      return objectKeys$1(toObject$1(it));
    }
  });

  var formatDistanceLocale$2 = {
    lessThanXSeconds: {
      standalone: {
        one: 'weniger als eine Sekunde',
        other: 'weniger als {{count}} Sekunden'
      },
      withPreposition: {
        one: 'weniger als einer Sekunde',
        other: 'weniger als {{count}} Sekunden'
      }
    },
    xSeconds: {
      standalone: {
        one: 'eine Sekunde',
        other: '{{count}} Sekunden'
      },
      withPreposition: {
        one: 'einer Sekunde',
        other: '{{count}} Sekunden'
      }
    },
    halfAMinute: {
      standalone: 'eine halbe Minute',
      withPreposition: 'einer halben Minute'
    },
    lessThanXMinutes: {
      standalone: {
        one: 'weniger als eine Minute',
        other: 'weniger als {{count}} Minuten'
      },
      withPreposition: {
        one: 'weniger als einer Minute',
        other: 'weniger als {{count}} Minuten'
      }
    },
    xMinutes: {
      standalone: {
        one: 'eine Minute',
        other: '{{count}} Minuten'
      },
      withPreposition: {
        one: 'einer Minute',
        other: '{{count}} Minuten'
      }
    },
    aboutXHours: {
      standalone: {
        one: 'etwa eine Stunde',
        other: 'etwa {{count}} Stunden'
      },
      withPreposition: {
        one: 'etwa einer Stunde',
        other: 'etwa {{count}} Stunden'
      }
    },
    xHours: {
      standalone: {
        one: 'eine Stunde',
        other: '{{count}} Stunden'
      },
      withPreposition: {
        one: 'einer Stunde',
        other: '{{count}} Stunden'
      }
    },
    xDays: {
      standalone: {
        one: 'ein Tag',
        other: '{{count}} Tage'
      },
      withPreposition: {
        one: 'einem Tag',
        other: '{{count}} Tagen'
      }
    },
    aboutXWeeks: {
      standalone: {
        one: 'etwa ein Woche',
        other: 'etwa {{count}} Wochen'
      },
      withPreposition: {
        one: 'etwa einem Woche',
        other: 'etwa {{count}} Wochen'
      }
    },
    xWeeks: {
      standalone: {
        one: 'ein Woche',
        other: '{{count}} Wochen'
      },
      withPreposition: {
        one: 'einem Woche',
        other: '{{count}} Wochen'
      }
    },
    aboutXMonths: {
      standalone: {
        one: 'etwa ein Monat',
        other: 'etwa {{count}} Monate'
      },
      withPreposition: {
        one: 'etwa einem Monat',
        other: 'etwa {{count}} Monaten'
      }
    },
    xMonths: {
      standalone: {
        one: 'ein Monat',
        other: '{{count}} Monate'
      },
      withPreposition: {
        one: 'einem Monat',
        other: '{{count}} Monaten'
      }
    },
    aboutXYears: {
      standalone: {
        one: 'etwa ein Jahr',
        other: 'etwa {{count}} Jahre'
      },
      withPreposition: {
        one: 'etwa einem Jahr',
        other: 'etwa {{count}} Jahren'
      }
    },
    xYears: {
      standalone: {
        one: 'ein Jahr',
        other: '{{count}} Jahre'
      },
      withPreposition: {
        one: 'einem Jahr',
        other: '{{count}} Jahren'
      }
    },
    overXYears: {
      standalone: {
        one: 'mehr als ein Jahr',
        other: 'mehr als {{count}} Jahre'
      },
      withPreposition: {
        one: 'mehr als einem Jahr',
        other: 'mehr als {{count}} Jahren'
      }
    },
    almostXYears: {
      standalone: {
        one: 'fast ein Jahr',
        other: 'fast {{count}} Jahre'
      },
      withPreposition: {
        one: 'fast einem Jahr',
        other: 'fast {{count}} Jahren'
      }
    }
  };
  function formatDistance$2(token, count, options) {
    options = options || {};
    var usageGroup = options.addSuffix ? formatDistanceLocale$2[token].withPreposition : formatDistanceLocale$2[token].standalone;
    var result;

    if (typeof usageGroup === 'string') {
      result = usageGroup;
    } else if (count === 1) {
      result = usageGroup.one;
    } else {
      result = usageGroup.other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return 'vor ' + result;
      }
    }

    return result;
  }

  var dateFormats$2 = {
    full: 'EEEE, do MMMM y',
    // Montag, 7. Januar 2018
    long: 'do MMMM y',
    // 7. Januar 2018
    medium: 'do MMM. y',
    // 7. Jan. 2018
    short: 'dd.MM.y' // 07.01.2018

  };
  var timeFormats$2 = {
    full: 'HH:mm:ss zzzz',
    long: 'HH:mm:ss z',
    medium: 'HH:mm:ss',
    short: 'HH:mm'
  };
  var dateTimeFormats$2 = {
    full: "{{date}} 'um' {{time}}",
    long: "{{date}} 'um' {{time}}",
    medium: '{{date}} {{time}}',
    short: '{{date}} {{time}}'
  };
  var formatLong$2 = {
    date: buildFormatLongFn({
      formats: dateFormats$2,
      defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
      formats: timeFormats$2,
      defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats$2,
      defaultWidth: 'full'
    })
  };

  var formatRelativeLocale$2 = {
    lastWeek: "'letzten' eeee 'um' p",
    yesterday: "'gestern um' p",
    today: "'heute um' p",
    tomorrow: "'morgen um' p",
    nextWeek: "eeee 'um' p",
    other: 'P'
  };
  function formatRelative$2(token, _date, _baseDate, _options) {
    return formatRelativeLocale$2[token];
  }

  var eraValues$2 = {
    narrow: ['v.Chr.', 'n.Chr.'],
    abbreviated: ['v.Chr.', 'n.Chr.'],
    wide: ['vor Christus', 'nach Christus']
  };
  var quarterValues$2 = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
    wide: ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal'] // Note: in German, the names of days of the week and months are capitalized.
    // If you are making a new locale based on this one, check if the same is true for the language you're working on.
    // Generally, formatted dates should look like they are in the middle of a sentence,
    // e.g. in Spanish language the weekdays and months should be in the lowercase.

  };
  var monthValues$2 = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
    wide: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember']
  };
  var dayValues$2 = {
    narrow: ['S', 'M', 'D', 'M', 'D', 'F', 'S'],
    short: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
    abbreviated: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
    wide: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'] // https://www.unicode.org/cldr/charts/32/summary/de.html#1881

  };
  var dayPeriodValues$2 = {
    narrow: {
      am: 'vm.',
      pm: 'nm.',
      midnight: 'Mitternacht',
      noon: 'Mittag',
      morning: 'Morgen',
      afternoon: 'Nachm.',
      evening: 'Abend',
      night: 'Nacht'
    },
    abbreviated: {
      am: 'vorm.',
      pm: 'nachm.',
      midnight: 'Mitternacht',
      noon: 'Mittag',
      morning: 'Morgen',
      afternoon: 'Nachmittag',
      evening: 'Abend',
      night: 'Nacht'
    },
    wide: {
      am: 'vormittags',
      pm: 'nachmittags',
      midnight: 'Mitternacht',
      noon: 'Mittag',
      morning: 'Morgen',
      afternoon: 'Nachmittag',
      evening: 'Abend',
      night: 'Nacht'
    }
  };
  var formattingDayPeriodValues$1 = {
    narrow: {
      am: 'vm.',
      pm: 'nm.',
      midnight: 'Mitternacht',
      noon: 'Mittag',
      morning: 'morgens',
      afternoon: 'nachm.',
      evening: 'abends',
      night: 'nachts'
    },
    abbreviated: {
      am: 'vorm.',
      pm: 'nachm.',
      midnight: 'Mitternacht',
      noon: 'Mittag',
      morning: 'morgens',
      afternoon: 'nachmittags',
      evening: 'abends',
      night: 'nachts'
    },
    wide: {
      am: 'vormittags',
      pm: 'nachmittags',
      midnight: 'Mitternacht',
      noon: 'Mittag',
      morning: 'morgens',
      afternoon: 'nachmittags',
      evening: 'abends',
      night: 'nachts'
    }
  };

  function ordinalNumber$2(dirtyNumber, _dirtyOptions) {
    var number = Number(dirtyNumber);
    return number + '.';
  }

  var localize$2 = {
    ordinalNumber: ordinalNumber$2,
    era: buildLocalizeFn({
      values: eraValues$2,
      defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
      values: quarterValues$2,
      defaultWidth: 'wide',
      argumentCallback: function (quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues$2,
      defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
      values: dayValues$2,
      defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues$2,
      defaultWidth: 'wide',
      formattingValues: formattingDayPeriodValues$1,
      defaultFormattingWidth: 'wide'
    })
  };

  var matchOrdinalNumberPattern$2 = /^(\d+)(\.)?/i;
  var parseOrdinalNumberPattern$2 = /\d+/i;
  var matchEraPatterns$2 = {
    narrow: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    abbreviated: /^(v\.? ?Chr\.?|n\.? ?Chr\.?)/i,
    wide: /^(vor Christus|vor unserer Zeitrechnung|nach Christus|unserer Zeitrechnung)/i
  };
  var parseEraPatterns$2 = {
    any: [/^v/i, /^n/i]
  };
  var matchQuarterPatterns$2 = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](\.)? Quartal/i
  };
  var parseQuarterPatterns$2 = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns$2 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mär|apr|mai|jun|jul|aug|sep|okt|nov|dez)/i,
    wide: /^(januar|februar|märz|april|mai|juni|juli|august|september|oktober|november|dezember)/i
  };
  var parseMonthPatterns$2 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mär/i, /^ap/i, /^mai/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns$2 = {
    narrow: /^[smdmf]/i,
    short: /^(so|mo|di|mi|do|fr|sa)/i,
    abbreviated: /^(son?|mon?|die?|mit?|don?|fre?|sam?)\.?/i,
    wide: /^(sonntag|montag|dienstag|mittwoch|donnerstag|freitag|samstag)/i
  };
  var parseDayPatterns$2 = {
    any: [/^so/i, /^mo/i, /^di/i, /^mi/i, /^do/i, /^f/i, /^sa/i]
  };
  var matchDayPeriodPatterns$2 = {
    narrow: /^(vm\.?|nm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
    abbreviated: /^(vorm\.?|nachm\.?|Mitternacht|Mittag|morgens|nachm\.?|abends|nachts)/i,
    wide: /^(vormittags|nachmittags|Mitternacht|Mittag|morgens|nachmittags|abends|nachts)/i
  };
  var parseDayPeriodPatterns$2 = {
    any: {
      am: /^v/i,
      pm: /^n/i,
      midnight: /^Mitte/i,
      noon: /^Mitta/i,
      morning: /morgens/i,
      afternoon: /nachmittags/i,
      // will never be matched. Afternoon is matched by `pm`
      evening: /abends/i,
      night: /nachts/i // will never be matched. Night is matched by `pm`

    }
  };
  var match$3 = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern$2,
      parsePattern: parseOrdinalNumberPattern$2,
      valueCallback: function (value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns$2,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns$2,
      defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns$2,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns$2,
      defaultParseWidth: 'any',
      valueCallback: function (index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns$2,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns$2,
      defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns$2,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns$2,
      defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns$2,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPeriodPatterns$2,
      defaultParseWidth: 'any'
    })
  };

  /**
   * @type {Locale}
   * @category Locales
   * @summary German locale.
   * @language German
   * @iso-639-2 deu
   * @author Thomas Eilmsteiner [@DeMuu]{@link https://github.com/DeMuu}
   * @author Asia [@asia-t]{@link https://github.com/asia-t}
   * @author Van Vuong Ngo [@vanvuongngo]{@link https://github.com/vanvuongngo}
   * @author RomanErnst [@pex]{@link https://github.com/pex}
   * @author Philipp Keck [@Philipp91]{@link https://github.com/Philipp91}
   */

  var locale$2 = {
    code: 'de',
    formatDistance: formatDistance$2,
    formatLong: formatLong$2,
    formatRelative: formatRelative$2,
    localize: localize$2,
    match: match$3,
    options: {
      weekStartsOn: 1
      /* Monday */
      ,
      firstWeekContainsDate: 4
    }
  };

  var formatDistanceLocale$1 = {
    lessThanXSeconds: {
      one: 'moins d’une seconde',
      other: 'moins de {{count}} secondes'
    },
    xSeconds: {
      one: '1 seconde',
      other: '{{count}} secondes'
    },
    halfAMinute: '30 secondes',
    lessThanXMinutes: {
      one: 'moins d’une minute',
      other: 'moins de {{count}} minutes'
    },
    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },
    aboutXHours: {
      one: 'environ 1 heure',
      other: 'environ {{count}} heures'
    },
    xHours: {
      one: '1 heure',
      other: '{{count}} heures'
    },
    xDays: {
      one: '1 jour',
      other: '{{count}} jours'
    },
    aboutXWeeks: {
      one: 'environ 1 semaine',
      other: 'environ {{count}} semaines'
    },
    xWeeks: {
      one: '1 semaine',
      other: '{{count}} semaines'
    },
    aboutXMonths: {
      one: 'environ 1 mois',
      other: 'environ {{count}} mois'
    },
    xMonths: {
      one: '1 mois',
      other: '{{count}} mois'
    },
    aboutXYears: {
      one: 'environ 1 an',
      other: 'environ {{count}} ans'
    },
    xYears: {
      one: '1 an',
      other: '{{count}} ans'
    },
    overXYears: {
      one: 'plus d’un an',
      other: 'plus de {{count}} ans'
    },
    almostXYears: {
      one: 'presqu’un an',
      other: 'presque {{count}} ans'
    }
  };
  function formatDistance$1(token, count, options) {
    options = options || {};
    var result;

    if (typeof formatDistanceLocale$1[token] === 'string') {
      result = formatDistanceLocale$1[token];
    } else if (count === 1) {
      result = formatDistanceLocale$1[token].one;
    } else {
      result = formatDistanceLocale$1[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'dans ' + result;
      } else {
        return 'il y a ' + result;
      }
    }

    return result;
  }

  var dateFormats$1 = {
    full: 'EEEE d MMMM y',
    long: 'd MMMM y',
    medium: 'd MMM y',
    short: 'dd/MM/y'
  };
  var timeFormats$1 = {
    full: 'HH:mm:ss zzzz',
    long: 'HH:mm:ss z',
    medium: 'HH:mm:ss',
    short: 'HH:mm'
  };
  var dateTimeFormats$1 = {
    full: "{{date}} 'à' {{time}}",
    long: "{{date}} 'à' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  };
  var formatLong$1 = {
    date: buildFormatLongFn({
      formats: dateFormats$1,
      defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
      formats: timeFormats$1,
      defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats$1,
      defaultWidth: 'full'
    })
  };

  var formatRelativeLocale$1 = {
    lastWeek: "eeee 'dernier à' p",
    yesterday: "'hier à' p",
    today: "'aujourd’hui à' p",
    tomorrow: "'demain à' p'",
    nextWeek: "eeee 'prochain à' p",
    other: 'P'
  };
  function formatRelative$1(token, _date, _baseDate, _options) {
    return formatRelativeLocale$1[token];
  }

  var eraValues$1 = {
    narrow: ['av. J.-C', 'ap. J.-C'],
    abbreviated: ['av. J.-C', 'ap. J.-C'],
    wide: ['avant Jésus-Christ', 'après Jésus-Christ']
  };
  var quarterValues$1 = {
    narrow: ['T1', 'T2', 'T3', 'T4'],
    abbreviated: ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'],
    wide: ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre']
  };
  var monthValues$1 = {
    narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
    abbreviated: ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
    wide: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  };
  var dayValues$1 = {
    narrow: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
    short: ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'],
    abbreviated: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
    wide: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
  };
  var dayPeriodValues$1 = {
    narrow: {
      am: 'AM',
      pm: 'PM',
      midnight: 'minuit',
      noon: 'midi',
      morning: 'mat.',
      afternoon: 'ap.m.',
      evening: 'soir',
      night: 'mat.'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'minuit',
      noon: 'midi',
      morning: 'matin',
      afternoon: 'après-midi',
      evening: 'soir',
      night: 'matin'
    },
    wide: {
      am: 'AM',
      pm: 'PM',
      midnight: 'minuit',
      noon: 'midi',
      morning: 'du matin',
      afternoon: 'de l’après-midi',
      evening: 'du soir',
      night: 'du matin'
    }
  };

  function ordinalNumber$1(dirtyNumber, dirtyOptions) {
    var number = Number(dirtyNumber);
    var options = dirtyOptions || {};
    var unit = String(options.unit);
    var suffix;

    if (number === 0) {
      return number;
    }

    if (unit === 'year' || unit === 'hour' || unit === 'week') {
      if (number === 1) {
        suffix = 'ère';
      } else {
        suffix = 'ème';
      }
    } else {
      if (number === 1) {
        suffix = 'er';
      } else {
        suffix = 'ème';
      }
    }

    return number + suffix;
  }

  var localize$1 = {
    ordinalNumber: ordinalNumber$1,
    era: buildLocalizeFn({
      values: eraValues$1,
      defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
      values: quarterValues$1,
      defaultWidth: 'wide',
      argumentCallback: function (quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues$1,
      defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
      values: dayValues$1,
      defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues$1,
      defaultWidth: 'wide'
    })
  };

  var matchOrdinalNumberPattern$1 = /^(\d+)(ième|ère|ème|er|e)?/i;
  var parseOrdinalNumberPattern$1 = /\d+/i;
  var matchEraPatterns$1 = {
    narrow: /^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,
    abbreviated: /^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,
    wide: /^(avant Jésus-Christ|après Jésus-Christ)/i
  };
  var parseEraPatterns$1 = {
    any: [/^av/i, /^ap/i]
  };
  var matchQuarterPatterns$1 = {
    narrow: /^[1234]/i,
    abbreviated: /^t[1234]/i,
    wide: /^[1234](er|ème|e)? trimestre/i
  };
  var parseQuarterPatterns$1 = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns$1 = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(janv|févr|mars|avr|mai|juin|juill|juil|août|sept|oct|nov|déc)\.?/i,
    wide: /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i
  };
  var parseMonthPatterns$1 = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^av/i, /^ma/i, /^juin/i, /^juil/i, /^ao/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns$1 = {
    narrow: /^[lmjvsd]/i,
    short: /^(di|lu|ma|me|je|ve|sa)/i,
    abbreviated: /^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,
    wide: /^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i
  };
  var parseDayPatterns$1 = {
    narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
    any: [/^di/i, /^lu/i, /^ma/i, /^me/i, /^je/i, /^ve/i, /^sa/i]
  };
  var matchDayPeriodPatterns$1 = {
    narrow: /^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,
    any: /^([ap]\.?\s?m\.?|du matin|de l'après[-\s]midi|du soir|de la nuit)/i
  };
  var parseDayPeriodPatterns$1 = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^min/i,
      noon: /^mid/i,
      morning: /mat/i,
      afternoon: /ap/i,
      evening: /soir/i,
      night: /nuit/i
    }
  };
  var match$2 = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern$1,
      parsePattern: parseOrdinalNumberPattern$1,
      valueCallback: function (value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns$1,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns$1,
      defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns$1,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns$1,
      defaultParseWidth: 'any',
      valueCallback: function (index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns$1,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns$1,
      defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns$1,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns$1,
      defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns$1,
      defaultMatchWidth: 'any',
      parsePatterns: parseDayPeriodPatterns$1,
      defaultParseWidth: 'any'
    })
  };

  /**
   * @type {Locale}
   * @category Locales
   * @summary French locale.
   * @language French
   * @iso-639-2 fra
   * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
   * @author François B [@fbonzon]{@link https://github.com/fbonzon}
   */

  var locale$1 = {
    code: 'fr',
    formatDistance: formatDistance$1,
    formatLong: formatLong$1,
    formatRelative: formatRelative$1,
    localize: localize$1,
    match: match$2,
    options: {
      weekStartsOn: 1
      /* Monday */
      ,
      firstWeekContainsDate: 4
    }
  };

  var formatDistanceLocale = {
    lessThanXSeconds: {
      one: 'menos de um segundo',
      other: 'menos de {{count}} segundos'
    },
    xSeconds: {
      one: '1 segundo',
      other: '{{count}} segundos'
    },
    halfAMinute: 'meio minuto',
    lessThanXMinutes: {
      one: 'menos de um minuto',
      other: 'menos de {{count}} minutos'
    },
    xMinutes: {
      one: '1 minuto',
      other: '{{count}} minutos'
    },
    aboutXHours: {
      one: 'aproximadamente 1 hora',
      other: 'aproximadamente {{count}} horas'
    },
    xHours: {
      one: '1 hora',
      other: '{{count}} horas'
    },
    xDays: {
      one: '1 dia',
      other: '{{count}} dias'
    },
    aboutXWeeks: {
      one: 'aproximadamente 1 semana',
      other: 'aproximadamente {{count}} semanas'
    },
    xWeeks: {
      one: '1 semana',
      other: '{{count}} semanas'
    },
    aboutXMonths: {
      one: 'aproximadamente 1 mês',
      other: 'aproximadamente {{count}} meses'
    },
    xMonths: {
      one: '1 mês',
      other: '{{count}} meses'
    },
    aboutXYears: {
      one: 'aproximadamente 1 ano',
      other: 'aproximadamente {{count}} anos'
    },
    xYears: {
      one: '1 ano',
      other: '{{count}} anos'
    },
    overXYears: {
      one: 'mais de 1 ano',
      other: 'mais de {{count}} anos'
    },
    almostXYears: {
      one: 'quase 1 ano',
      other: 'quase {{count}} anos'
    }
  };
  function formatDistance(token, count, options) {
    options = options || {};
    var result;

    if (typeof formatDistanceLocale[token] === 'string') {
      result = formatDistanceLocale[token];
    } else if (count === 1) {
      result = formatDistanceLocale[token].one;
    } else {
      result = formatDistanceLocale[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'daqui a ' + result;
      } else {
        return 'há ' + result;
      }
    }

    return result;
  }

  var dateFormats = {
    full: "EEEE, d 'de' MMMM 'de' y",
    long: "d 'de' MMMM 'de' y",
    medium: "d 'de' MMM 'de' y",
    short: 'dd/MM/y'
  };
  var timeFormats = {
    full: 'HH:mm:ss zzzz',
    long: 'HH:mm:ss z',
    medium: 'HH:mm:ss',
    short: 'HH:mm'
  };
  var dateTimeFormats = {
    full: "{{date}} 'às' {{time}}",
    long: "{{date}} 'às' {{time}}",
    medium: '{{date}}, {{time}}',
    short: '{{date}}, {{time}}'
  };
  var formatLong = {
    date: buildFormatLongFn({
      formats: dateFormats,
      defaultWidth: 'full'
    }),
    time: buildFormatLongFn({
      formats: timeFormats,
      defaultWidth: 'full'
    }),
    dateTime: buildFormatLongFn({
      formats: dateTimeFormats,
      defaultWidth: 'full'
    })
  };

  var formatRelativeLocale = {
    lastWeek: "'na última' eeee 'às' p",
    yesterday: "'ontem às' p",
    today: "'hoje às' p",
    tomorrow: "'amanhã às' p",
    nextWeek: "eeee 'às' p",
    other: 'P'
  };
  function formatRelative(token, _date, _baseDate, _options) {
    return formatRelativeLocale[token];
  }

  function ordinalNumber(dirtyNumber) {
    var number = Number(dirtyNumber);
    return number + 'º';
  }

  var eraValues = {
    narrow: ['aC', 'dC'],
    abbreviated: ['a.C.', 'd.C.'],
    wide: ['antes de Cristo', 'depois de Cristo']
  };
  var quarterValues = {
    narrow: ['1', '2', '3', '4'],
    abbreviated: ['T1', 'T2', 'T3', 'T4'],
    wide: ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre']
  };
  var monthValues = {
    narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'],
    abbreviated: ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
    wide: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  };
  var dayValues = {
    narrow: ['d', 's', 't', 'q', 'q', 's', 's'],
    short: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    abbreviated: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
    wide: ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
  };
  var dayPeriodValues = {
    narrow: {
      am: 'AM',
      pm: 'PM',
      midnight: 'meia-noite',
      noon: 'meio-dia',
      morning: 'manhã',
      afternoon: 'tarde',
      evening: 'noite',
      night: 'madrugada'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'meia-noite',
      noon: 'meio-dia',
      morning: 'manhã',
      afternoon: 'tarde',
      evening: 'noite',
      night: 'madrugada'
    },
    wide: {
      am: 'AM',
      pm: 'PM',
      midnight: 'meia-noite',
      noon: 'meio-dia',
      morning: 'manhã',
      afternoon: 'tarde',
      evening: 'noite',
      night: 'madrugada'
    }
  };
  var formattingDayPeriodValues = {
    narrow: {
      am: 'AM',
      pm: 'PM',
      midnight: 'meia-noite',
      noon: 'meio-dia',
      morning: 'da manhã',
      afternoon: 'da tarde',
      evening: 'da noite',
      night: 'da madrugada'
    },
    abbreviated: {
      am: 'AM',
      pm: 'PM',
      midnight: 'meia-noite',
      noon: 'meio-dia',
      morning: 'da manhã',
      afternoon: 'da tarde',
      evening: 'da noite',
      night: 'da madrugada'
    },
    wide: {
      am: 'AM',
      pm: 'PM',
      midnight: 'meia-noite',
      noon: 'meio-dia',
      morning: 'da manhã',
      afternoon: 'da tarde',
      evening: 'da noite',
      night: 'da madrugada'
    }
  };
  var localize = {
    ordinalNumber: ordinalNumber,
    era: buildLocalizeFn({
      values: eraValues,
      defaultWidth: 'wide'
    }),
    quarter: buildLocalizeFn({
      values: quarterValues,
      defaultWidth: 'wide',
      argumentCallback: function (quarter) {
        return Number(quarter) - 1;
      }
    }),
    month: buildLocalizeFn({
      values: monthValues,
      defaultWidth: 'wide'
    }),
    day: buildLocalizeFn({
      values: dayValues,
      defaultWidth: 'wide'
    }),
    dayPeriod: buildLocalizeFn({
      values: dayPeriodValues,
      defaultWidth: 'wide',
      formattingValues: formattingDayPeriodValues,
      defaultFormattingWidth: 'wide'
    })
  };

  var matchOrdinalNumberPattern = /^(\d+)(º|ª)?/i;
  var parseOrdinalNumberPattern = /\d+/i;
  var matchEraPatterns = {
    narrow: /^(ac|dc|a|d)/i,
    abbreviated: /^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,
    wide: /^(antes de cristo|antes da era comum|depois de cristo|era comum)/i
  };
  var parseEraPatterns = {
    any: [/^ac/i, /^dc/i],
    wide: [/^(antes de cristo|antes da era comum)/i, /^(depois de cristo|era comum)/i]
  };
  var matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^T[1234]/i,
    wide: /^[1234](º|ª)? trimestre/i
  };
  var parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i]
  };
  var matchMonthPatterns = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
    wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
  };
  var parseMonthPatterns = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ab/i, /^mai/i, /^jun/i, /^jul/i, /^ag/i, /^s/i, /^o/i, /^n/i, /^d/i]
  };
  var matchDayPatterns = {
    narrow: /^[dstq]/i,
    short: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
    abbreviated: /^(dom|seg|ter|qua|qui|sex|s[áa]b)/i,
    wide: /^(domingo|segunda-?\s?feira|terça-?\s?feira|quarta-?\s?feira|quinta-?\s?feira|sexta-?\s?feira|s[áa]bado)/i
  };
  var parseDayPatterns = {
    narrow: [/^d/i, /^s/i, /^t/i, /^q/i, /^q/i, /^s/i, /^s/i],
    any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[áa]/i]
  };
  var matchDayPeriodPatterns = {
    narrow: /^(a|p|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i,
    any: /^([ap]\.?\s?m\.?|meia-?\s?noite|meio-?\s?dia|(da) (manh[ãa]|tarde|noite|madrugada))/i
  };
  var parseDayPeriodPatterns = {
    any: {
      am: /^a/i,
      pm: /^p/i,
      midnight: /^meia/i,
      noon: /^meio/i,
      morning: /manh[ãa]/i,
      afternoon: /tarde/i,
      evening: /noite/i,
      night: /madrugada/i
    }
  };
  var match$1 = {
    ordinalNumber: buildMatchPatternFn({
      matchPattern: matchOrdinalNumberPattern,
      parsePattern: parseOrdinalNumberPattern,
      valueCallback: function (value) {
        return parseInt(value, 10);
      }
    }),
    era: buildMatchFn({
      matchPatterns: matchEraPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseEraPatterns,
      defaultParseWidth: 'any'
    }),
    quarter: buildMatchFn({
      matchPatterns: matchQuarterPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseQuarterPatterns,
      defaultParseWidth: 'any',
      valueCallback: function (index) {
        return index + 1;
      }
    }),
    month: buildMatchFn({
      matchPatterns: matchMonthPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseMonthPatterns,
      defaultParseWidth: 'any'
    }),
    day: buildMatchFn({
      matchPatterns: matchDayPatterns,
      defaultMatchWidth: 'wide',
      parsePatterns: parseDayPatterns,
      defaultParseWidth: 'any'
    }),
    dayPeriod: buildMatchFn({
      matchPatterns: matchDayPeriodPatterns,
      defaultMatchWidth: 'any',
      parsePatterns: parseDayPeriodPatterns,
      defaultParseWidth: 'any'
    })
  };

  /**
   * @type {Locale}
   * @category Locales
   * @summary Portuguese locale.
   * @language Portuguese
   * @iso-639-2 por
   * @author Dário Freire [@dfreire]{@link https://github.com/dfreire}
   * @author Adrián de la Rosa [@adrm]{@link https://github.com/adrm}
   */

  var locale = {
    code: 'pt',
    formatDistance: formatDistance,
    formatLong: formatLong,
    formatRelative: formatRelative,
    localize: localize,
    match: match$1,
    options: {
      weekStartsOn: 1
      /* Monday */
      ,
      firstWeekContainsDate: 4
    }
  };

  var Helpers = /*#__PURE__*/function () {
    function Helpers() {
      _classCallCheck$1(this, Helpers);
    }

    _createClass$1(Helpers, null, [{
      key: "replaceNode",
      value: // Helps replacing a SSR node with a Svelte component
      function replaceNode(node) {
        if (node) {
          node.innerHTML = "";
        }

        return node;
      }
    }, {
      key: "hideFallbacks",
      value: function hideFallbacks(fileName) {
        var nodes = document.querySelectorAll("[data-svelte-hide=\"".concat(fileName, "\"]"));

        if (nodes && nodes.length) {
          nodes.forEach(function (node) {
            return node.remove();
          });
        }
      } // Returns a new url with updated fields

    }, {
      key: "getUpdatedFilterUrl",
      value: function getUpdatedFilterUrl(field, value, baseUrl) {
        var urlParts = baseUrl.split("?");

        if (urlParts.length > 1) {
          var queryString = urlParts[1];
          var queryStringParts = queryString.split("&");
          var queryStringVariables = {};
          queryStringParts.forEach(function (part) {
            var partParts = part.split("=");

            if (partParts && partParts.length > 1 && typeof partParts[1] !== "undefined") {
              queryStringVariables = _objectSpread2(_objectSpread2({}, queryStringVariables), {}, _defineProperty({}, partParts[0], partParts[1]));
            }
          });
          queryStringVariables[field] = value;
          return "".concat(urlParts[0], "?").concat(Object.keys(queryStringVariables).map(function (key) {
            return "".concat(key, "=").concat(queryStringVariables[key]);
          }).join("&"));
        } else {
          return "".concat(baseUrl, "?").concat(field, "=").concat(value);
        }
      }
    }, {
      key: "getLinkEl",
      value: function getLinkEl() {
        return document.querySelector(".hidden-filter-link");
      }
    }, {
      key: "getDateLocaleOptions",
      value: function getDateLocaleOptions() {
        var shortLocale = dist_1().split("_")[0];
        var locales = {
          de: locale$2,
          fr: locale$1,
          pt: locale
        };
        return {
          weekStartsOn: dist_6(),
          locale: locales[shortLocale]
        };
      }
    }]);

    return Helpers;
  }();

  function get_each_context$3(ctx, list, i) {
    var child_ctx = ctx.slice();
    child_ctx[24] = list[i];
    child_ctx[26] = i;
    return child_ctx;
  } // (225:0) {#if controls}


  function create_if_block_7$1(ctx) {
    var h2;
    return {
      c: function c() {
        h2 = element("h2");
        h2.textContent = "".concat(dist_4$1("timemanager", "Statistics"));
      },
      m: function m(target, anchor) {
        insert(target, h2, anchor);
      },
      p: noop$1,
      d: function d(detaching) {
        if (detaching) detach(h2);
      }
    };
  } // (229:1) {#if controls}


  function create_if_block_6$1(ctx) {
    var div;
    var figure0;
    var figcaption0;
    var t1;
    var t2_value =
    /*simpleRounding*/
    ctx[8](
    /*todayTotal*/
    ctx[4]) + "";
    var t2;
    var t3;
    var t4_value = dist_4$1("timemanager", "hrs.") + "";
    var t4;
    var t5;
    var figure1;
    var figcaption1;
    var t7;
    var t8_value =
    /*simpleRounding*/
    ctx[8](
    /*weekTotal*/
    ctx[3]) + "";
    var t8;
    var t9;
    var t10_value = dist_4$1("timemanager", "hrs.") + "";
    var t10;
    return {
      c: function c() {
        div = element("div");
        figure0 = element("figure");
        figcaption0 = element("figcaption");
        figcaption0.textContent = "".concat(dist_4$1("timemanager", "Today"));
        t1 = space();
        t2 = text(t2_value);
        t3 = space();
        t4 = text(t4_value);
        t5 = space();
        figure1 = element("figure");
        figcaption1 = element("figcaption");
        figcaption1.textContent = "".concat(dist_4$1("timemanager", "Week"));
        t7 = space();
        t8 = text(t8_value);
        t9 = space();
        t10 = text(t10_value);
        attr(figcaption0, "class", "tm_label");
        attr(figcaption1, "class", "tm_label");
        attr(div, "class", "top-stats");
      },
      m: function m(target, anchor) {
        insert(target, div, anchor);
        append(div, figure0);
        append(figure0, figcaption0);
        append(figure0, t1);
        append(figure0, t2);
        append(figure0, t3);
        append(figure0, t4);
        append(div, t5);
        append(div, figure1);
        append(figure1, figcaption1);
        append(figure1, t7);
        append(figure1, t8);
        append(figure1, t9);
        append(figure1, t10);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*todayTotal*/
        16 && t2_value !== (t2_value =
        /*simpleRounding*/
        ctx[8](
        /*todayTotal*/
        ctx[4]) + "")) set_data(t2, t2_value);
        if (dirty &
        /*weekTotal*/
        8 && t8_value !== (t8_value =
        /*simpleRounding*/
        ctx[8](
        /*weekTotal*/
        ctx[3]) + "")) set_data(t8, t8_value);
      },
      d: function d(detaching) {
        if (detaching) detach(div);
      }
    };
  } // (243:3) {#if !loading && weekTotal > 0}


  function create_if_block_3$2(ctx) {
    var each_1_anchor;
    var each_value =
    /*points*/
    ctx[2];
    var each_blocks = [];

    for (var i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$3(get_each_context$3(ctx, each_value, i));
    }

    return {
      c: function c() {
        for (var _i = 0; _i < each_blocks.length; _i += 1) {
          each_blocks[_i].c();
        }

        each_1_anchor = empty();
      },
      m: function m(target, anchor) {
        for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
          each_blocks[_i2].m(target, anchor);
        }

        insert(target, each_1_anchor, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*formatDateForScale, points, highest, translate*/
        2084) {
          each_value =
          /*points*/
          ctx[2];

          var _i3;

          for (_i3 = 0; _i3 < each_value.length; _i3 += 1) {
            var child_ctx = get_each_context$3(ctx, each_value, _i3);

            if (each_blocks[_i3]) {
              each_blocks[_i3].p(child_ctx, dirty);
            } else {
              each_blocks[_i3] = create_each_block$3(child_ctx);

              each_blocks[_i3].c();

              each_blocks[_i3].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }

          for (; _i3 < each_blocks.length; _i3 += 1) {
            each_blocks[_i3].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },
      d: function d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach(each_1_anchor);
      }
    };
  } // (246:6) {#if point && point.stats}


  function create_if_block_4$1(ctx) {
    var t0;
    var div;
    var span0;
    var t1_value =
    /*formatDateForScale*/
    ctx[11](
    /*point*/
    ctx[24].date, "primary") + "";
    var t1;
    var t2;
    var span1;
    var t3_value =
    /*formatDateForScale*/
    ctx[11](
    /*point*/
    ctx[24].date, "secondary") + "";
    var t3;
    var if_block =
    /*point*/
    ctx[24].stats.total > 0 && create_if_block_5$1(ctx);
    return {
      c: function c() {
        if (if_block) if_block.c();
        t0 = space();
        div = element("div");
        span0 = element("span");
        t1 = text(t1_value);
        t2 = space();
        span1 = element("span");
        t3 = text(t3_value);
        attr(span0, "class", "day");
        attr(span1, "class", "date");
        attr(div, "class", "date-label");
      },
      m: function m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, div, anchor);
        append(div, span0);
        append(span0, t1);
        append(div, t2);
        append(div, span1);
        append(span1, t3);
      },
      p: function p(ctx, dirty) {
        if (
        /*point*/
        ctx[24].stats.total > 0) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_5$1(ctx);
            if_block.c();
            if_block.m(t0.parentNode, t0);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*points*/
        4 && t1_value !== (t1_value =
        /*formatDateForScale*/
        ctx[11](
        /*point*/
        ctx[24].date, "primary") + "")) set_data(t1, t1_value);
        if (dirty &
        /*points*/
        4 && t3_value !== (t3_value =
        /*formatDateForScale*/
        ctx[11](
        /*point*/
        ctx[24].date, "secondary") + "")) set_data(t3, t3_value);
      },
      d: function d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(div);
      }
    };
  } // (247:7) {#if point.stats.total > 0}


  function create_if_block_5$1(ctx) {
    var span;
    var t0_value =
    /*point*/
    ctx[24].stats.total + "";
    var t0;
    var t1;
    var t2_value = dist_4$1("timemanager", "hrs.") + "";
    var t2;
    var t3;
    var div;
    var div_style_value;
    return {
      c: function c() {
        span = element("span");
        t0 = text(t0_value);
        t1 = space();
        t2 = text(t2_value);
        t3 = space();
        div = element("div");
        attr(span, "class", "hours-label");
        attr(div, "class", "column-inner");
        attr(div, "style", div_style_value = "height: ".concat(
        /*point*/
        ctx[24].stats.total /
        /*highest*/
        ctx[5] * 100, "%"));
      },
      m: function m(target, anchor) {
        insert(target, span, anchor);
        append(span, t0);
        append(span, t1);
        append(span, t2);
        insert(target, t3, anchor);
        insert(target, div, anchor);
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*points*/
        4 && t0_value !== (t0_value =
        /*point*/
        ctx[24].stats.total + "")) set_data(t0, t0_value);

        if (dirty &
        /*points, highest*/
        36 && div_style_value !== (div_style_value = "height: ".concat(
        /*point*/
        ctx[24].stats.total /
        /*highest*/
        ctx[5] * 100, "%"))) {
          attr(div, "style", div_style_value);
        }
      },
      d: function d(detaching) {
        if (detaching) detach(span);
        if (detaching) detach(t3);
        if (detaching) detach(div);
      }
    };
  } // (244:4) {#each points as point, index}


  function create_each_block$3(ctx) {
    var div;
    var t;
    var if_block =
    /*point*/
    ctx[24] &&
    /*point*/
    ctx[24].stats && create_if_block_4$1(ctx);
    return {
      c: function c() {
        div = element("div");
        if (if_block) if_block.c();
        t = space();
        attr(div, "class", "column");
      },
      m: function m(target, anchor) {
        insert(target, div, anchor);
        if (if_block) if_block.m(div, null);
        append(div, t);
      },
      p: function p(ctx, dirty) {
        if (
        /*point*/
        ctx[24] &&
        /*point*/
        ctx[24].stats) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_4$1(ctx);
            if_block.c();
            if_block.m(div, t);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function d(detaching) {
        if (detaching) detach(div);
        if (if_block) if_block.d();
      }
    };
  } // (259:3) {#if controls && !loading && weekTotal === 0}


  function create_if_block_2$2(ctx) {
    var p;
    return {
      c: function c() {
        p = element("p");
        p.textContent = "".concat(dist_4$1("timemanager", "When you add entries for this week graphs will appear here."));
        attr(p, "class", "empty");
      },
      m: function m(target, anchor) {
        insert(target, p, anchor);
      },
      p: noop$1,
      d: function d(detaching) {
        if (detaching) detach(p);
      }
    };
  } // (263:2) {#if controls}


  function create_if_block$d(ctx) {
    var nav;
    var button0;
    var t1;
    var span1;
    var t2_value = dist_4$1("timemanager", "Week") + "";
    var t2;
    var t3;
    var t4;
    var t5;
    var span0;
    var t6;
    var t7_value = format(startOfWeek(
    /*startCursor*/
    ctx[6],
    /*localeOptions*/
    ctx[9]), "iiiiii d.MM.Y",
    /*localeOptions*/
    ctx[9]) + "";
    var t7;
    var t8;
    var t9_value = format(endOfWeek(
    /*startCursor*/
    ctx[6],
    /*localeOptions*/
    ctx[9]), "iiiiii d.MM.Y",
    /*localeOptions*/
    ctx[9]) + "";
    var t9;
    var t10;
    var t11;
    var span2;
    var show_if = !isSameDay(startOfWeek(startOfToday(),
    /*localeOptions*/
    ctx[9]),
    /*startCursor*/
    ctx[6]);
    var t12;
    var button1;
    var mounted;
    var dispose;
    var if_block = show_if && create_if_block_1$3(ctx);
    return {
      c: function c() {
        nav = element("nav");
        button0 = element("button");
        button0.textContent = "".concat(dist_4$1("timemanager", "Previous week"));
        t1 = space();
        span1 = element("span");
        t2 = text(t2_value);
        t3 = space();
        t4 = text(
        /*currentWeek*/
        ctx[7]);
        t5 = space();
        span0 = element("span");
        t6 = text("(");
        t7 = text(t7_value);
        t8 = text(" – ");
        t9 = text(t9_value);
        t10 = text(")");
        t11 = space();
        span2 = element("span");
        if (if_block) if_block.c();
        t12 = space();
        button1 = element("button");
        button1.textContent = "".concat(dist_4$1("timemanager", "Next week"));
        attr(button0, "class", "previous");
        attr(span0, "class", "dates");
        attr(button1, "class", "next");
        attr(nav, "class", "week-navigation");
      },
      m: function m(target, anchor) {
        insert(target, nav, anchor);
        append(nav, button0);
        append(nav, t1);
        append(nav, span1);
        append(span1, t2);
        append(span1, t3);
        append(span1, t4);
        append(span1, t5);
        append(span1, span0);
        append(span0, t6);
        append(span0, t7);
        append(span0, t8);
        append(span0, t9);
        append(span0, t10);
        append(nav, t11);
        append(nav, span2);
        if (if_block) if_block.m(span2, null);
        append(span2, t12);
        append(span2, button1);

        if (!mounted) {
          dispose = [listen(button0, "click", prevent_default(
          /*click_handler*/
          ctx[16])), listen(button1, "click", prevent_default(
          /*click_handler_2*/
          ctx[18]))];
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*currentWeek*/
        128) set_data(t4,
        /*currentWeek*/
        ctx[7]);
        if (dirty &
        /*startCursor*/
        64 && t7_value !== (t7_value = format(startOfWeek(
        /*startCursor*/
        ctx[6],
        /*localeOptions*/
        ctx[9]), "iiiiii d.MM.Y",
        /*localeOptions*/
        ctx[9]) + "")) set_data(t7, t7_value);
        if (dirty &
        /*startCursor*/
        64 && t9_value !== (t9_value = format(endOfWeek(
        /*startCursor*/
        ctx[6],
        /*localeOptions*/
        ctx[9]), "iiiiii d.MM.Y",
        /*localeOptions*/
        ctx[9]) + "")) set_data(t9, t9_value);
        if (dirty &
        /*startCursor*/
        64) show_if = !isSameDay(startOfWeek(startOfToday(),
        /*localeOptions*/
        ctx[9]),
        /*startCursor*/
        ctx[6]);

        if (show_if) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_1$3(ctx);
            if_block.c();
            if_block.m(span2, t12);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },
      d: function d(detaching) {
        if (detaching) detach(nav);
        if (if_block) if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  } // (275:5) {#if !isSameDay(startOfWeek(startOfToday(), localeOptions), startCursor)}


  function create_if_block_1$3(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "".concat(dist_4$1("timemanager", "Current week"));
        attr(button, "class", "current");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click", prevent_default(
          /*click_handler_1*/
          ctx[17]));
          mounted = true;
        }
      },
      p: noop$1,
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$n(ctx) {
    var t0;
    var div2;
    var t1;
    var div1;
    var div0;
    var t2;
    var div0_class_value;
    var t3;
    var div2_class_value;
    var if_block0 =
    /*controls*/
    ctx[0] && create_if_block_7$1();
    var if_block1 =
    /*controls*/
    ctx[0] && create_if_block_6$1(ctx);
    var if_block2 = !
    /*loading*/
    ctx[1] &&
    /*weekTotal*/
    ctx[3] > 0 && create_if_block_3$2(ctx);
    var if_block3 =
    /*controls*/
    ctx[0] && !
    /*loading*/
    ctx[1] &&
    /*weekTotal*/
    ctx[3] === 0 && create_if_block_2$2();
    var if_block4 =
    /*controls*/
    ctx[0] && create_if_block$d(ctx);
    return {
      c: function c() {
        if (if_block0) if_block0.c();
        t0 = space();
        div2 = element("div");
        if (if_block1) if_block1.c();
        t1 = space();
        div1 = element("div");
        div0 = element("div");
        if (if_block2) if_block2.c();
        t2 = space();
        if (if_block3) if_block3.c();
        t3 = space();
        if (if_block4) if_block4.c();
        attr(div0, "class", div0_class_value = "hours-per-week ".concat(
        /*points*/
        ctx[2].length > 12 || window.clientWidth < 768 ? "many" : "few"));
        attr(div1, "class", "graphs");
        attr(div2, "class", div2_class_value = "".concat(
        /*loading*/
        ctx[1] ? "icon-loading" : ""));
      },
      m: function m(target, anchor) {
        if (if_block0) if_block0.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, div2, anchor);
        if (if_block1) if_block1.m(div2, null);
        append(div2, t1);
        append(div2, div1);
        append(div1, div0);
        if (if_block2) if_block2.m(div0, null);
        append(div0, t2);
        if (if_block3) if_block3.m(div0, null);
        append(div1, t3);
        if (if_block4) if_block4.m(div1, null);
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*controls*/
        ctx[0]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);
          } else {
            if_block0 = create_if_block_7$1();
            if_block0.c();
            if_block0.m(t0.parentNode, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }

        if (
        /*controls*/
        ctx[0]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);
          } else {
            if_block1 = create_if_block_6$1(ctx);
            if_block1.c();
            if_block1.m(div2, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }

        if (!
        /*loading*/
        ctx[1] &&
        /*weekTotal*/
        ctx[3] > 0) {
          if (if_block2) {
            if_block2.p(ctx, dirty);
          } else {
            if_block2 = create_if_block_3$2(ctx);
            if_block2.c();
            if_block2.m(div0, t2);
          }
        } else if (if_block2) {
          if_block2.d(1);
          if_block2 = null;
        }

        if (
        /*controls*/
        ctx[0] && !
        /*loading*/
        ctx[1] &&
        /*weekTotal*/
        ctx[3] === 0) {
          if (if_block3) {
            if_block3.p(ctx, dirty);
          } else {
            if_block3 = create_if_block_2$2();
            if_block3.c();
            if_block3.m(div0, null);
          }
        } else if (if_block3) {
          if_block3.d(1);
          if_block3 = null;
        }

        if (dirty &
        /*points*/
        4 && div0_class_value !== (div0_class_value = "hours-per-week ".concat(
        /*points*/
        ctx[2].length > 12 || window.clientWidth < 768 ? "many" : "few"))) {
          attr(div0, "class", div0_class_value);
        }

        if (
        /*controls*/
        ctx[0]) {
          if (if_block4) {
            if_block4.p(ctx, dirty);
          } else {
            if_block4 = create_if_block$d(ctx);
            if_block4.c();
            if_block4.m(div1, null);
          }
        } else if (if_block4) {
          if_block4.d(1);
          if_block4 = null;
        }

        if (dirty &
        /*loading*/
        2 && div2_class_value !== (div2_class_value = "".concat(
        /*loading*/
        ctx[1] ? "icon-loading" : ""))) {
          attr(div2, "class", div2_class_value);
        }
      },
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(div2);
        if (if_block1) if_block1.d();
        if (if_block2) if_block2.d();
        if (if_block3) if_block3.d();
        if (if_block4) if_block4.d();
      }
    };
  }

  var dateFormat$1 = "yyyy-MM-dd";

  function instance$m($$self, $$props, $$invalidate) {
    var loading;
    var scale;
    var points;
    var weekTotal;
    var todayTotal;
    var highest;
    var startCursor;
    var endCursor;
    var currentWeek;
    var statsApiUrl = $$props.statsApiUrl;
    var requestToken = $$props.requestToken;
    var _$$props$controls = $$props.controls,
        controls = _$$props$controls === void 0 ? true : _$$props$controls;

    var simpleRounding = function simpleRounding(number) {
      return Math.round(number * 100) / 100;
    };

    var localeOptions = Helpers.getDateLocaleOptions();
    var _$$props$start = $$props.start,
        start = _$$props$start === void 0 ? format(startOfWeek(new Date(), localeOptions), dateFormat$1, new Date()) : _$$props$start;
    var _$$props$end = $$props.end,
        end = _$$props$end === void 0 ? format(endOfWeek(new Date(), localeOptions), dateFormat$1, new Date()) : _$$props$end;

    var updateWeek = function updateWeek() {
      $$invalidate(3, weekTotal = 0);
      $$invalidate(4, todayTotal = 0);
      $$invalidate(5, highest = 0);
      $$invalidate(7, currentWeek = getWeek(startCursor, localeOptions));
    };

    onMount( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              updateWeek();
              loadData();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    var loadData = /*#__PURE__*/function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var durationDays, durationMonths, durationWeeks, durationYears, _yield$loadStats, grouped, js_date_format;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                $$invalidate(1, loading = true); // Reset points

                $$invalidate(2, points = []); // Determine duration between cursors

                durationDays = differenceInDays(endCursor, startCursor);
                durationMonths = differenceInMonths(endCursor, startCursor);
                durationWeeks = differenceInWeeks(endCursor, startCursor);
                durationYears = differenceInYears(endCursor, startCursor); // Determine scale

                if (durationDays > 31 && durationDays <= 180) {
                  scale = "week";
                  Array.from(Array(durationWeeks + 1).keys()).forEach(function (week) {
                    points.push({
                      date: addWeeks(startCursor, week)
                    });
                  });
                } else if (durationDays > 180 && durationMonths <= 24) {
                  scale = "month";
                  Array.from(Array(durationMonths + 1).keys()).forEach(function (month) {
                    points.push({
                      date: addMonths(startCursor, month)
                    });
                  });
                } else if (durationMonths > 24) {
                  scale = "year";
                  Array.from(Array(durationYears + 1).keys()).forEach(function (year) {
                    points.push({
                      date: addYears(startCursor, year)
                    });
                  });
                } else {
                  scale = "day";
                  Array.from(Array(durationDays + 1).keys()).forEach(function (day) {
                    points.push({
                      date: addDays(startCursor, day)
                    });
                  });
                } // Load data from API


                _context2.next = 9;
                return loadStats();

              case 9:
                _yield$loadStats = _context2.sent;
                grouped = _yield$loadStats.grouped;
                js_date_format = _yield$loadStats.js_date_format;
                // Extract points from grouped array
                $$invalidate(2, points = points.map(function (point) {
                  // Get total from API response
                  var total = grouped[format(point.date, js_date_format)];
                  point.stats = {
                    total: total ? simpleRounding(total) : 0
                  }; // Find highest value

                  if (total > highest) {
                    $$invalidate(5, highest = total);
                  } // Sum up total


                  $$invalidate(3, weekTotal += point.stats.total); // Day total

                  if (isSameDay(point.date, startOfToday())) {
                    $$invalidate(4, todayTotal += point.stats.total);
                  }

                  return point;
                })); // Set columns

                document.documentElement.style.setProperty("--tm-stats-columns", points.length);
                $$invalidate(1, loading = false);

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function loadData() {
        return _ref4.apply(this, arguments);
      };
    }();

    var loadStats = /*#__PURE__*/function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        var start, end, statUrl, urlParts, queryString, queryStringParts, stats;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                start = format(startOfDay(startCursor), "yyyy-MM-dd HH:mm:ss");
                end = format(endOfDay(endCursor), "yyyy-MM-dd HH:mm:ss");
                statUrl = "".concat(statsApiUrl, "?start=").concat(start, "&end=").concat(end, "&group_by=").concat(scale); // Parse current URL for filters

                urlParts = document.location.href.split("?");

                if (urlParts.length > 1) {
                  queryString = urlParts[1];
                  queryStringParts = queryString.split("&");

                  queryStringParts.forEach(function (part) {
                    // Split query params
                    var partParts = part.split("=");

                    var _partParts = _slicedToArray(partParts, 2),
                        name = _partParts[0],
                        value = _partParts[1]; // Apply filters from query params


                    if (name === "status" && value) {
                      statUrl += "&status=".concat(value);
                    }

                    if (name === "tasks" && value && value.length) {
                      statUrl += "&tasks=".concat(value);
                    }

                    if (name === "projects" && value && value.length) {
                      statUrl += "&projects=".concat(value);
                    }

                    if (name === "clients" && value && value.length) {
                      statUrl += "&clients=".concat(value);
                    }
                  });
                }

                _context3.next = 7;
                return fetch(statUrl, {
                  method: "GET",
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 7:
                stats = _context3.sent;
                _context3.next = 10;
                return stats.json();

              case 10:
                return _context3.abrupt("return", _context3.sent);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      return function loadStats() {
        return _ref5.apply(this, arguments);
      };
    }();

    var weekNavigation = function weekNavigation(mode) {
      if (mode === "reset") {
        $$invalidate(6, startCursor = startOfWeek(startOfToday(), localeOptions));
        endCursor = endOfWeek(startCursor, localeOptions);
      } else if (mode === "next") {
        $$invalidate(6, startCursor = addWeeks(startCursor, 1));
        endCursor = addWeeks(endCursor, 1);
      } else {
        $$invalidate(6, startCursor = subWeeks(startCursor, 1));
        endCursor = subWeeks(endCursor, 1);
      }

      updateWeek();
      loadData();
    };

    var formatDateForScale = function formatDateForScale(date, type) {
      if (type === "primary") {
        if (scale === "year") {
          return format(date, "yyyy", localeOptions);
        }

        if (scale === "month") {
          return format(date, "LLL", localeOptions);
        }

        if (scale === "week") {
          return "".concat(dist_4$1("timemanager", "Week"), " ").concat(format(date, "w", localeOptions));
        }

        return format(date, "iii", localeOptions);
      }

      if (type === "secondary") {
        if (scale === "year") {
          return "";
        }

        if (scale === "month") {
          return format(date, "yyyy", localeOptions);
        }

        if (scale === "week") {
          return "".concat(format(startOfWeek(date, localeOptions), "d.M.", localeOptions), " - ").concat(format(endOfWeek(date, localeOptions), "d.M.", localeOptions));
        }

        return format(date, "d.M.", localeOptions);
      }
    };

    var click_handler = function click_handler() {
      return weekNavigation("previous");
    };

    var click_handler_1 = function click_handler_1() {
      return weekNavigation("reset");
    };

    var click_handler_2 = function click_handler_2() {
      return weekNavigation("next");
    };

    $$self.$$set = function ($$props) {
      if ("statsApiUrl" in $$props) $$invalidate(12, statsApiUrl = $$props.statsApiUrl);
      if ("requestToken" in $$props) $$invalidate(13, requestToken = $$props.requestToken);
      if ("controls" in $$props) $$invalidate(0, controls = $$props.controls);
      if ("start" in $$props) $$invalidate(14, start = $$props.start);
      if ("end" in $$props) $$invalidate(15, end = $$props.end);
    };

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*start*/
      16384) {
        $$invalidate(6, startCursor = isDate(parse$1(start, dateFormat$1, new Date())) ? parse$1(start, dateFormat$1, new Date()) : startOfWeek(new Date(), localeOptions));
      }

      if ($$self.$$.dirty &
      /*end*/
      32768) {
        endCursor = isDate(parse$1(end, dateFormat$1, new Date())) ? parse$1(end, dateFormat$1, new Date()) : endOfWeek(new Date(), localeOptions);
      }
    };

    $$invalidate(1, loading = false);

    scale = "day";

    $$invalidate(2, points = []);

    $$invalidate(3, weekTotal = 0);

    $$invalidate(4, todayTotal = 0);

    $$invalidate(5, highest = 0);

    $$invalidate(7, currentWeek = null);

    return [controls, loading, points, weekTotal, todayTotal, highest, startCursor, currentWeek, simpleRounding, localeOptions, weekNavigation, formatDateForScale, statsApiUrl, requestToken, start, end, click_handler, click_handler_1, click_handler_2];
  }

  var Statistics = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Statistics, _SvelteComponent);

    var _super = _createSuper(Statistics);

    function Statistics(options) {
      var _this;

      _classCallCheck$1(this, Statistics);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$m, create_fragment$n, safe_not_equal, {
        statsApiUrl: 12,
        requestToken: 13,
        controls: 0,
        start: 14,
        end: 15
      });
      return _this;
    }

    return Statistics;
  }(SvelteComponent);

  function create_fragment$m(ctx) {
    var div0;
    var t;
    var div1;
    var div1_class_value;
    var current;
    var default_slot_template =
    /*#slots*/
    ctx[2].default;
    var default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[1], null);
    return {
      c: function c() {
        div0 = element("div");
        t = space();
        div1 = element("div");
        if (default_slot) default_slot.c();
        attr(div0, "class", "oc-dialog-dim");
        attr(div1, "class", div1_class_value = "oc-dialog ".concat(
        /*loading*/
        ctx[0] ? "icon-loading" : ""));
        set_style(div1, "position", "fixed");
      },
      m: function m(target, anchor) {
        insert(target, div0, anchor);
        insert(target, t, anchor);
        insert(target, div1, anchor);

        if (default_slot) {
          default_slot.m(div1, null);
        }

        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (default_slot) {
          if (default_slot.p && (!current || dirty &
          /*$$scope*/
          2)) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[1], !current ? -1 : dirty, null, null);
          }
        }

        if (!current || dirty &
        /*loading*/
        1 && div1_class_value !== (div1_class_value = "oc-dialog ".concat(
        /*loading*/
        ctx[0] ? "icon-loading" : ""))) {
          attr(div1, "class", div1_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(default_slot, local);
        current = true;
      },
      o: function o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(div0);
        if (detaching) detach(t);
        if (detaching) detach(div1);
        if (default_slot) default_slot.d(detaching);
      }
    };
  }

  function instance$l($$self, $$props, $$invalidate) {
    var _$$props$$$slots = $$props.$$slots,
        slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
        $$scope = $$props.$$scope;
    var _$$props$loading = $$props.loading,
        loading = _$$props$loading === void 0 ? false : _$$props$loading;

    $$self.$$set = function ($$props) {
      if ("loading" in $$props) $$invalidate(0, loading = $$props.loading);
      if ("$$scope" in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    };

    return [loading, $$scope, slots];
  }

  var Overlay = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Overlay, _SvelteComponent);

    var _super = _createSuper(Overlay);

    function Overlay(options) {
      var _this;

      _classCallCheck$1(this, Overlay);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$l, create_fragment$m, safe_not_equal, {
        loading: 0
      });
      return _this;
    }

    return Overlay;
  }(SvelteComponent);

  function create_if_block$c(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "".concat(dist_4$1("timemanager", "Cancel"));
        attr(button, "type", "reset");
        attr(button, "class", "button");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click", prevent_default(function () {
            if (is_function(
            /*onCancel*/
            ctx[3]))
              /*onCancel*/
              ctx[3].apply(this, arguments);
          }));
          mounted = true;
        }
      },
      p: function p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$l(ctx) {
    var div1;
    var h3;
    var t0;
    var t1;
    var form;
    var label0;
    var t2_value = dist_4$1("timemanager", "Client name") + "";
    var t2;
    var t3;
    var br0;
    var t4;
    var input0;
    var t5;
    var label1;
    var t6_value = dist_4$1("timemanager", "Note") + "";
    var t6;
    var t7;
    var br1;
    var t8;
    var textarea;
    var t9;
    var input1;
    var t10;
    var div0;
    var button;
    var t11;
    var t12;
    var mounted;
    var dispose;
    var if_block = !
    /*isServer*/
    ctx[2] && create_if_block$c(ctx);
    return {
      c: function c() {
        div1 = element("div");
        h3 = element("h3");
        t0 = text(
        /*clientEditorCaption*/
        ctx[5]);
        t1 = space();
        form = element("form");
        label0 = element("label");
        t2 = text(t2_value);
        t3 = space();
        br0 = element("br");
        t4 = space();
        input0 = element("input");
        t5 = space();
        label1 = element("label");
        t6 = text(t6_value);
        t7 = space();
        br1 = element("br");
        t8 = space();
        textarea = element("textarea");
        t9 = space();
        input1 = element("input");
        t10 = space();
        div0 = element("div");
        button = element("button");
        t11 = text(
        /*clientEditorButtonCaption*/
        ctx[4]);
        t12 = space();
        if (if_block) if_block.c();
        input0.autofocus = true;
        attr(input0, "type", "text");
        set_style(input0, "width", "100%");
        attr(input0, "class", "input-wide");
        attr(input0, "name", "name");
        attr(input0, "placeholder", dist_4$1("timemanager", "Example Corp."));
        input0.required = true;
        attr(label0, "class", "space-top");
        set_style(textarea, "width", "100%");
        attr(textarea, "class", "input-wide");
        attr(textarea, "name", "note");
        attr(textarea, "placeholder", "");
        textarea.value =
        /*note*/
        ctx[7];
        attr(label1, "class", "space-top");
        attr(input1, "type", "hidden");
        attr(input1, "name", "requesttoken");
        input1.value =
        /*requestToken*/
        ctx[1];
        attr(button, "type", "submit");
        attr(button, "class", "button primary");
        attr(div0, "class", "oc-dialog-buttonrow twobuttons reverse");
        attr(form, "action",
        /*action*/
        ctx[0]);
        attr(form, "method", "post");
        attr(div1, "class", "inner tm_new-item");
      },
      m: function m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, h3);
        append(h3, t0);
        append(div1, t1);
        append(div1, form);
        append(form, label0);
        append(label0, t2);
        append(label0, t3);
        append(label0, br0);
        append(label0, t4);
        append(label0, input0);
        set_input_value(input0,
        /*name*/
        ctx[6]);
        append(form, t5);
        append(form, label1);
        append(label1, t6);
        append(label1, t7);
        append(label1, br1);
        append(label1, t8);
        append(label1, textarea);
        append(form, t9);
        append(form, input1);
        append(form, t10);
        append(form, div0);
        append(div0, button);
        append(button, t11);
        append(div0, t12);
        if (if_block) if_block.m(div0, null);
        input0.focus();

        if (!mounted) {
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[11]), listen(textarea, "input",
          /*input_handler*/
          ctx[12]), listen(form, "submit", prevent_default(
          /*submit*/
          ctx[8]))];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*clientEditorCaption*/
        32) set_data(t0,
        /*clientEditorCaption*/
        ctx[5]);

        if (dirty &
        /*name*/
        64 && input0.value !==
        /*name*/
        ctx[6]) {
          set_input_value(input0,
          /*name*/
          ctx[6]);
        }

        if (dirty &
        /*note*/
        128) {
          textarea.value =
          /*note*/
          ctx[7];
        }

        if (dirty &
        /*requestToken*/
        2) {
          input1.value =
          /*requestToken*/
          ctx[1];
        }

        if (dirty &
        /*clientEditorButtonCaption*/
        16) set_data(t11,
        /*clientEditorButtonCaption*/
        ctx[4]);

        if (!
        /*isServer*/
        ctx[2]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block$c(ctx);
            if_block.c();
            if_block.m(div0, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*action*/
        1) {
          attr(form, "action",
          /*action*/
          ctx[0]);
        }
      },
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (detaching) detach(div1);
        if (if_block) if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$k($$self, $$props, $$invalidate) {
    var action = $$props.action;
    var requestToken = $$props.requestToken;
    var isServer = $$props.isServer;
    var onCancel = $$props.onCancel;
    var onSubmit = $$props.onSubmit;
    var clientEditorButtonCaption = $$props.clientEditorButtonCaption;
    var clientEditorCaption = $$props.clientEditorCaption;
    var editClientData = $$props.editClientData;
    var name = editClientData ? editClientData.name : "";
    var note = editClientData ? editClientData.note : "";

    var submit = function submit() {
      onSubmit({
        name: name,
        note: note
      });
    };

    function input0_input_handler() {
      name = this.value;
      $$invalidate(6, name);
    }

    var input_handler = function input_handler(e) {
      return $$invalidate(7, note = e.target.value);
    };

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("requestToken" in $$props) $$invalidate(1, requestToken = $$props.requestToken);
      if ("isServer" in $$props) $$invalidate(2, isServer = $$props.isServer);
      if ("onCancel" in $$props) $$invalidate(3, onCancel = $$props.onCancel);
      if ("onSubmit" in $$props) $$invalidate(9, onSubmit = $$props.onSubmit);
      if ("clientEditorButtonCaption" in $$props) $$invalidate(4, clientEditorButtonCaption = $$props.clientEditorButtonCaption);
      if ("clientEditorCaption" in $$props) $$invalidate(5, clientEditorCaption = $$props.clientEditorCaption);
      if ("editClientData" in $$props) $$invalidate(10, editClientData = $$props.editClientData);
    };

    return [action, requestToken, isServer, onCancel, clientEditorButtonCaption, clientEditorCaption, name, note, submit, onSubmit, editClientData, input0_input_handler, input_handler];
  }

  var ClientEditor = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(ClientEditor, _SvelteComponent);

    var _super = _createSuper(ClientEditor);

    function ClientEditor(options) {
      var _this;

      _classCallCheck$1(this, ClientEditor);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$k, create_fragment$l, safe_not_equal, {
        action: 0,
        requestToken: 1,
        isServer: 2,
        onCancel: 3,
        onSubmit: 9,
        clientEditorButtonCaption: 4,
        clientEditorCaption: 5,
        editClientData: 10
      });
      return _this;
    }

    return ClientEditor;
  }(SvelteComponent);

  function create_if_block$b(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        loading:
        /*loading*/
        ctx[6],
        $$slots: {
          default: [create_default_slot$6]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var overlay_changes = {};
        if (dirty &
        /*loading*/
        64) overlay_changes.loading =
        /*loading*/
        ctx[6];

        if (dirty &
        /*$$scope, action, requestToken, show, clientEditorButtonCaption, clientEditorCaption, editClientData*/
        4159) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  } // (56:1) <Overlay {loading}>


  function create_default_slot$6(ctx) {
    var clienteditor;
    var current;
    clienteditor = new ClientEditor({
      props: {
        action:
        /*action*/
        ctx[0],
        requestToken:
        /*requestToken*/
        ctx[1],
        onCancel:
        /*func*/
        ctx[11],
        onSubmit:
        /*save*/
        ctx[7],
        clientEditorButtonCaption:
        /*clientEditorButtonCaption*/
        ctx[2],
        clientEditorCaption:
        /*clientEditorCaption*/
        ctx[3],
        editClientData:
        /*editClientData*/
        ctx[4]
      }
    });
    return {
      c: function c() {
        create_component(clienteditor.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(clienteditor, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var clienteditor_changes = {};
        if (dirty &
        /*action*/
        1) clienteditor_changes.action =
        /*action*/
        ctx[0];
        if (dirty &
        /*requestToken*/
        2) clienteditor_changes.requestToken =
        /*requestToken*/
        ctx[1];
        if (dirty &
        /*show*/
        32) clienteditor_changes.onCancel =
        /*func*/
        ctx[11];
        if (dirty &
        /*clientEditorButtonCaption*/
        4) clienteditor_changes.clientEditorButtonCaption =
        /*clientEditorButtonCaption*/
        ctx[2];
        if (dirty &
        /*clientEditorCaption*/
        8) clienteditor_changes.clientEditorCaption =
        /*clientEditorCaption*/
        ctx[3];
        if (dirty &
        /*editClientData*/
        16) clienteditor_changes.editClientData =
        /*editClientData*/
        ctx[4];
        clienteditor.$set(clienteditor_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(clienteditor.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(clienteditor.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(clienteditor, detaching);
      }
    };
  }

  function create_fragment$k(ctx) {
    var a;
    var span;
    var t0;
    var t1;
    var if_block_anchor;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*show*/
    ctx[5] && create_if_block$b(ctx);
    return {
      c: function c() {
        a = element("a");
        span = element("span");
        t0 = text(
        /*clientEditorButtonCaption*/
        ctx[2]);
        t1 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr(a, "href", "#/");
        attr(a, "class", "button primary new");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, span);
        append(span, t0);
        insert(target, t1, anchor);
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;

        if (!mounted) {
          dispose = listen(a, "click", prevent_default(
          /*click_handler*/
          ctx[10]));
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (!current || dirty &
        /*clientEditorButtonCaption*/
        4) set_data(t0,
        /*clientEditorButtonCaption*/
        ctx[2]);

        if (
        /*show*/
        ctx[5]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*show*/
            32) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$b(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(a);
        if (detaching) detach(t1);
        if (if_block) if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$j($$self, $$props, $$invalidate) {
    var show;
    var loading;
    var action = $$props.action;
    var editAction = $$props.editAction;
    var requestToken = $$props.requestToken;
    var clientEditorButtonCaption = $$props.clientEditorButtonCaption;
    var clientEditorCaption = $$props.clientEditorCaption;
    var clientUuid = $$props.clientUuid;
    var editClientData = $$props.editClientData;
    onMount(function () {
      Helpers.hideFallbacks("ClientEditor.svelte");
    });

    var save = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
        var name, note, client, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref4.name, note = _ref4.note;
                $$invalidate(6, loading = true);
                _context.prev = 2;
                client = {
                  name: name,
                  note: note
                };

                if (clientUuid) {
                  client = _objectSpread2(_objectSpread2({}, client), {}, {
                    uuid: clientUuid
                  });
                }

                _context.next = 7;
                return fetch(clientUuid ? editAction : action, {
                  method: clientUuid ? "PATCH" : "POST",
                  body: JSON.stringify(client),
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 7:
                response = _context.sent;

                if (response && response.ok) {
                  $$invalidate(5, show = false);

                  if (clientUuid) {
                    document.querySelector(".app-timemanager [data-current-link]").click();
                  } else {
                    document.querySelector("#app-navigation a.active").click();
                  }
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 14:
                $$invalidate(6, loading = false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function save(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var click_handler = function click_handler() {
      return $$invalidate(5, show = !show);
    };

    var func = function func() {
      return $$invalidate(5, show = false);
    };

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("editAction" in $$props) $$invalidate(8, editAction = $$props.editAction);
      if ("requestToken" in $$props) $$invalidate(1, requestToken = $$props.requestToken);
      if ("clientEditorButtonCaption" in $$props) $$invalidate(2, clientEditorButtonCaption = $$props.clientEditorButtonCaption);
      if ("clientEditorCaption" in $$props) $$invalidate(3, clientEditorCaption = $$props.clientEditorCaption);
      if ("clientUuid" in $$props) $$invalidate(9, clientUuid = $$props.clientUuid);
      if ("editClientData" in $$props) $$invalidate(4, editClientData = $$props.editClientData);
    };

    $$invalidate(5, show = false);

    $$invalidate(6, loading = false);

    return [action, requestToken, clientEditorButtonCaption, clientEditorCaption, editClientData, show, loading, save, editAction, clientUuid, click_handler, func];
  }

  var ClientEditorDialog = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(ClientEditorDialog, _SvelteComponent);

    var _super = _createSuper(ClientEditorDialog);

    function ClientEditorDialog(options) {
      var _this;

      _classCallCheck$1(this, ClientEditorDialog);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$j, create_fragment$k, safe_not_equal, {
        action: 0,
        editAction: 8,
        requestToken: 1,
        clientEditorButtonCaption: 2,
        clientEditorCaption: 3,
        clientUuid: 9,
        editClientData: 4
      });
      return _this;
    }

    return ClientEditorDialog;
  }(SvelteComponent);

  function create_if_block$a(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "".concat(dist_4$1("timemanager", "Cancel"));
        attr(button, "type", "reset");
        attr(button, "class", "button");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click", prevent_default(function () {
            if (is_function(
            /*onCancel*/
            ctx[4]))
              /*onCancel*/
              ctx[4].apply(this, arguments);
          }));
          mounted = true;
        }
      },
      p: function p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$j(ctx) {
    var div1;
    var h3;
    var t0;
    var t1;
    var form;
    var label0;
    var t2_value = dist_4$1("timemanager", "Project name") + "";
    var t2;
    var t3;
    var br0;
    var t4;
    var input0;
    var t5;
    var label1;
    var t6_value = dist_4$1("timemanager", "For client") + "";
    var t6;
    var t7;
    var br1;
    var t8;
    var strong;
    var t9;
    var t10;
    var br2;
    var t11;
    var input1;
    var t12;
    var div0;
    var button;
    var t13;
    var t14;
    var mounted;
    var dispose;
    var if_block = !
    /*isServer*/
    ctx[3] && create_if_block$a(ctx);
    return {
      c: function c() {
        div1 = element("div");
        h3 = element("h3");
        t0 = text(
        /*projectEditorCaption*/
        ctx[6]);
        t1 = space();
        form = element("form");
        label0 = element("label");
        t2 = text(t2_value);
        t3 = space();
        br0 = element("br");
        t4 = space();
        input0 = element("input");
        t5 = space();
        label1 = element("label");
        t6 = text(t6_value);
        t7 = space();
        br1 = element("br");
        t8 = space();
        strong = element("strong");
        t9 = text(
        /*clientName*/
        ctx[2]);
        t10 = space();
        br2 = element("br");
        t11 = space();
        input1 = element("input");
        t12 = space();
        div0 = element("div");
        button = element("button");
        t13 = text(
        /*projectEditorButtonCaption*/
        ctx[5]);
        t14 = space();
        if (if_block) if_block.c();
        input0.autofocus = true;
        attr(input0, "type", "text");
        set_style(input0, "width", "100%");
        attr(input0, "class", "input-wide");
        attr(input0, "name", "name");
        attr(input0, "placeholder", dist_4$1("timemanager", "A project name"));
        input0.required = true;
        attr(label0, "class", "space-top");
        attr(label1, "class", "space-top");
        attr(input1, "type", "hidden");
        attr(input1, "name", "requesttoken");
        input1.value =
        /*requestToken*/
        ctx[1];
        attr(button, "type", "submit");
        attr(button, "class", "button primary");
        attr(div0, "class", "oc-dialog-buttonrow twobuttons reverse");
        attr(form, "action",
        /*action*/
        ctx[0]);
        attr(form, "method", "post");
        attr(div1, "class", "inner tm_new-item");
      },
      m: function m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, h3);
        append(h3, t0);
        append(div1, t1);
        append(div1, form);
        append(form, label0);
        append(label0, t2);
        append(label0, t3);
        append(label0, br0);
        append(label0, t4);
        append(label0, input0);
        set_input_value(input0,
        /*name*/
        ctx[7]);
        append(form, t5);
        append(form, label1);
        append(label1, t6);
        append(label1, t7);
        append(label1, br1);
        append(label1, t8);
        append(label1, strong);
        append(strong, t9);
        append(form, t10);
        append(form, br2);
        append(form, t11);
        append(form, input1);
        append(form, t12);
        append(form, div0);
        append(div0, button);
        append(button, t13);
        append(div0, t14);
        if (if_block) if_block.m(div0, null);
        input0.focus();

        if (!mounted) {
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[11]), listen(form, "submit", prevent_default(
          /*submit*/
          ctx[8]))];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*projectEditorCaption*/
        64) set_data(t0,
        /*projectEditorCaption*/
        ctx[6]);

        if (dirty &
        /*name*/
        128 && input0.value !==
        /*name*/
        ctx[7]) {
          set_input_value(input0,
          /*name*/
          ctx[7]);
        }

        if (dirty &
        /*clientName*/
        4) set_data(t9,
        /*clientName*/
        ctx[2]);

        if (dirty &
        /*requestToken*/
        2) {
          input1.value =
          /*requestToken*/
          ctx[1];
        }

        if (dirty &
        /*projectEditorButtonCaption*/
        32) set_data(t13,
        /*projectEditorButtonCaption*/
        ctx[5]);

        if (!
        /*isServer*/
        ctx[3]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block$a(ctx);
            if_block.c();
            if_block.m(div0, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*action*/
        1) {
          attr(form, "action",
          /*action*/
          ctx[0]);
        }
      },
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (detaching) detach(div1);
        if (if_block) if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$i($$self, $$props, $$invalidate) {
    var action = $$props.action;
    var requestToken = $$props.requestToken;
    var clientName = $$props.clientName;
    var isServer = $$props.isServer;
    var onCancel = $$props.onCancel;
    var onSubmit = $$props.onSubmit;
    var projectEditorButtonCaption = $$props.projectEditorButtonCaption;
    var projectEditorCaption = $$props.projectEditorCaption;
    var editProjectData = $$props.editProjectData;
    var name = editProjectData ? editProjectData.name : "";

    var submit = function submit() {
      onSubmit({
        name: name
      });
    };

    function input0_input_handler() {
      name = this.value;
      $$invalidate(7, name);
    }

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("requestToken" in $$props) $$invalidate(1, requestToken = $$props.requestToken);
      if ("clientName" in $$props) $$invalidate(2, clientName = $$props.clientName);
      if ("isServer" in $$props) $$invalidate(3, isServer = $$props.isServer);
      if ("onCancel" in $$props) $$invalidate(4, onCancel = $$props.onCancel);
      if ("onSubmit" in $$props) $$invalidate(9, onSubmit = $$props.onSubmit);
      if ("projectEditorButtonCaption" in $$props) $$invalidate(5, projectEditorButtonCaption = $$props.projectEditorButtonCaption);
      if ("projectEditorCaption" in $$props) $$invalidate(6, projectEditorCaption = $$props.projectEditorCaption);
      if ("editProjectData" in $$props) $$invalidate(10, editProjectData = $$props.editProjectData);
    };

    return [action, requestToken, clientName, isServer, onCancel, projectEditorButtonCaption, projectEditorCaption, name, submit, onSubmit, editProjectData, input0_input_handler];
  }

  var ProjectEditor = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(ProjectEditor, _SvelteComponent);

    var _super = _createSuper(ProjectEditor);

    function ProjectEditor(options) {
      var _this;

      _classCallCheck$1(this, ProjectEditor);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$i, create_fragment$j, safe_not_equal, {
        action: 0,
        requestToken: 1,
        clientName: 2,
        isServer: 3,
        onCancel: 4,
        onSubmit: 9,
        projectEditorButtonCaption: 5,
        projectEditorCaption: 6,
        editProjectData: 10
      });
      return _this;
    }

    return ProjectEditor;
  }(SvelteComponent);

  function create_if_block$9(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        loading:
        /*loading*/
        ctx[8],
        $$slots: {
          default: [create_default_slot$5]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var overlay_changes = {};
        if (dirty &
        /*loading*/
        256) overlay_changes.loading =
        /*loading*/
        ctx[8];

        if (dirty &
        /*$$scope, action, requestToken, show, clientName, isServer, projectEditorButtonCaption, projectEditorCaption, editProjectData*/
        16639) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  } // (54:1) <Overlay {loading}>


  function create_default_slot$5(ctx) {
    var projecteditor;
    var current;
    projecteditor = new ProjectEditor({
      props: {
        action:
        /*action*/
        ctx[0],
        requestToken:
        /*requestToken*/
        ctx[1],
        onCancel:
        /*func*/
        ctx[13],
        onSubmit:
        /*save*/
        ctx[9],
        clientName:
        /*clientName*/
        ctx[2],
        isServer:
        /*isServer*/
        ctx[3],
        projectEditorButtonCaption:
        /*projectEditorButtonCaption*/
        ctx[4],
        projectEditorCaption:
        /*projectEditorCaption*/
        ctx[5],
        editProjectData:
        /*editProjectData*/
        ctx[6]
      }
    });
    return {
      c: function c() {
        create_component(projecteditor.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(projecteditor, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var projecteditor_changes = {};
        if (dirty &
        /*action*/
        1) projecteditor_changes.action =
        /*action*/
        ctx[0];
        if (dirty &
        /*requestToken*/
        2) projecteditor_changes.requestToken =
        /*requestToken*/
        ctx[1];
        if (dirty &
        /*show*/
        128) projecteditor_changes.onCancel =
        /*func*/
        ctx[13];
        if (dirty &
        /*clientName*/
        4) projecteditor_changes.clientName =
        /*clientName*/
        ctx[2];
        if (dirty &
        /*isServer*/
        8) projecteditor_changes.isServer =
        /*isServer*/
        ctx[3];
        if (dirty &
        /*projectEditorButtonCaption*/
        16) projecteditor_changes.projectEditorButtonCaption =
        /*projectEditorButtonCaption*/
        ctx[4];
        if (dirty &
        /*projectEditorCaption*/
        32) projecteditor_changes.projectEditorCaption =
        /*projectEditorCaption*/
        ctx[5];
        if (dirty &
        /*editProjectData*/
        64) projecteditor_changes.editProjectData =
        /*editProjectData*/
        ctx[6];
        projecteditor.$set(projecteditor_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(projecteditor.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(projecteditor.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(projecteditor, detaching);
      }
    };
  }

  function create_fragment$i(ctx) {
    var a;
    var span;
    var t0;
    var t1;
    var if_block_anchor;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*show*/
    ctx[7] && create_if_block$9(ctx);
    return {
      c: function c() {
        a = element("a");
        span = element("span");
        t0 = text(
        /*projectEditorButtonCaption*/
        ctx[4]);
        t1 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr(a, "href", "#/");
        attr(a, "class", "button primary new");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, span);
        append(span, t0);
        insert(target, t1, anchor);
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;

        if (!mounted) {
          dispose = listen(a, "click", prevent_default(
          /*click_handler*/
          ctx[12]));
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (!current || dirty &
        /*projectEditorButtonCaption*/
        16) set_data(t0,
        /*projectEditorButtonCaption*/
        ctx[4]);

        if (
        /*show*/
        ctx[7]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*show*/
            128) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$9(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(a);
        if (detaching) detach(t1);
        if (if_block) if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$h($$self, $$props, $$invalidate) {
    var show;
    var loading;
    var action = $$props.action;
    var editAction = $$props.editAction;
    var requestToken = $$props.requestToken;
    var clientName = $$props.clientName;
    var isServer = $$props.isServer;
    var projectEditorButtonCaption = $$props.projectEditorButtonCaption;
    var projectEditorCaption = $$props.projectEditorCaption;
    var projectUuid = $$props.projectUuid;
    var editProjectData = $$props.editProjectData;
    onMount(function () {
      Helpers.hideFallbacks("ProjectEditor.svelte");
    });

    var save = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
        var name, project, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref4.name;
                $$invalidate(8, loading = true);
                _context.prev = 2;
                project = {
                  name: name
                };

                if (projectUuid) {
                  project = _objectSpread2(_objectSpread2({}, project), {}, {
                    uuid: projectUuid
                  });
                }

                _context.next = 7;
                return fetch(projectUuid ? editAction : action, {
                  method: projectUuid ? "PATCH" : "POST",
                  body: JSON.stringify(project),
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 7:
                response = _context.sent;

                if (response && response.ok) {
                  $$invalidate(7, show = false);
                  document.querySelector(".app-timemanager [data-current-link]").click();
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 14:
                $$invalidate(8, loading = false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function save(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var click_handler = function click_handler() {
      return $$invalidate(7, show = !show);
    };

    var func = function func() {
      return $$invalidate(7, show = false);
    };

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("editAction" in $$props) $$invalidate(10, editAction = $$props.editAction);
      if ("requestToken" in $$props) $$invalidate(1, requestToken = $$props.requestToken);
      if ("clientName" in $$props) $$invalidate(2, clientName = $$props.clientName);
      if ("isServer" in $$props) $$invalidate(3, isServer = $$props.isServer);
      if ("projectEditorButtonCaption" in $$props) $$invalidate(4, projectEditorButtonCaption = $$props.projectEditorButtonCaption);
      if ("projectEditorCaption" in $$props) $$invalidate(5, projectEditorCaption = $$props.projectEditorCaption);
      if ("projectUuid" in $$props) $$invalidate(11, projectUuid = $$props.projectUuid);
      if ("editProjectData" in $$props) $$invalidate(6, editProjectData = $$props.editProjectData);
    };

    $$invalidate(7, show = false);

    $$invalidate(8, loading = false);

    return [action, requestToken, clientName, isServer, projectEditorButtonCaption, projectEditorCaption, editProjectData, show, loading, save, editAction, projectUuid, click_handler, func];
  }

  var ProjectEditorDialog = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(ProjectEditorDialog, _SvelteComponent);

    var _super = _createSuper(ProjectEditorDialog);

    function ProjectEditorDialog(options) {
      var _this;

      _classCallCheck$1(this, ProjectEditorDialog);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$h, create_fragment$i, safe_not_equal, {
        action: 0,
        editAction: 10,
        requestToken: 1,
        clientName: 2,
        isServer: 3,
        projectEditorButtonCaption: 4,
        projectEditorCaption: 5,
        projectUuid: 11,
        editProjectData: 6
      });
      return _this;
    }

    return ProjectEditorDialog;
  }(SvelteComponent);

  function create_if_block$8(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "".concat(dist_4$1("timemanager", "Cancel"));
        attr(button, "type", "reset");
        attr(button, "class", "button");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click", prevent_default(function () {
            if (is_function(
            /*onCancel*/
            ctx[5]))
              /*onCancel*/
              ctx[5].apply(this, arguments);
          }));
          mounted = true;
        }
      },
      p: function p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$h(ctx) {
    var div1;
    var h3;
    var t0;
    var t1;
    var form;
    var label0;
    var t2_value = dist_4$1("timemanager", "Task name") + "";
    var t2;
    var t3;
    var br0;
    var t4;
    var input0;
    var t5;
    var label1;
    var t6_value = dist_4$1("timemanager", "For project") + "";
    var t6;
    var t7;
    var br1;
    var t8;
    var strong0;
    var t9;
    var t10;
    var label2;
    var t11_value = dist_4$1("timemanager", "For client") + "";
    var t11;
    var t12;
    var br2;
    var t13;
    var strong1;
    var t14;
    var t15;
    var br3;
    var t16;
    var input1;
    var t17;
    var div0;
    var button;
    var t18;
    var t19;
    var mounted;
    var dispose;
    var if_block = !
    /*isServer*/
    ctx[4] && create_if_block$8(ctx);
    return {
      c: function c() {
        div1 = element("div");
        h3 = element("h3");
        t0 = text(
        /*taskEditorCaption*/
        ctx[7]);
        t1 = space();
        form = element("form");
        label0 = element("label");
        t2 = text(t2_value);
        t3 = space();
        br0 = element("br");
        t4 = space();
        input0 = element("input");
        t5 = space();
        label1 = element("label");
        t6 = text(t6_value);
        t7 = space();
        br1 = element("br");
        t8 = space();
        strong0 = element("strong");
        t9 = text(
        /*projectName*/
        ctx[3]);
        t10 = space();
        label2 = element("label");
        t11 = text(t11_value);
        t12 = space();
        br2 = element("br");
        t13 = space();
        strong1 = element("strong");
        t14 = text(
        /*clientName*/
        ctx[2]);
        t15 = space();
        br3 = element("br");
        t16 = space();
        input1 = element("input");
        t17 = space();
        div0 = element("div");
        button = element("button");
        t18 = text(
        /*taskEditorButtonCaption*/
        ctx[6]);
        t19 = space();
        if (if_block) if_block.c();
        input0.autofocus = true;
        attr(input0, "type", "text");
        set_style(input0, "width", "100%");
        attr(input0, "class", "input-wide");
        attr(input0, "name", "name");
        attr(input0, "placeholder", dist_4$1("timemanager", "A task name"));
        input0.required = true;
        attr(label0, "class", "space-top");
        attr(label1, "class", "space-top");
        attr(label2, "class", "space-top");
        attr(input1, "type", "hidden");
        attr(input1, "name", "requesttoken");
        input1.value =
        /*requestToken*/
        ctx[1];
        attr(button, "type", "submit");
        attr(button, "class", "button primary");
        attr(div0, "class", "oc-dialog-buttonrow twobuttons reverse");
        attr(form, "action",
        /*action*/
        ctx[0]);
        attr(form, "method", "post");
        attr(div1, "class", "inner tm_new-item");
      },
      m: function m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, h3);
        append(h3, t0);
        append(div1, t1);
        append(div1, form);
        append(form, label0);
        append(label0, t2);
        append(label0, t3);
        append(label0, br0);
        append(label0, t4);
        append(label0, input0);
        set_input_value(input0,
        /*name*/
        ctx[8]);
        append(form, t5);
        append(form, label1);
        append(label1, t6);
        append(label1, t7);
        append(label1, br1);
        append(label1, t8);
        append(label1, strong0);
        append(strong0, t9);
        append(form, t10);
        append(form, label2);
        append(label2, t11);
        append(label2, t12);
        append(label2, br2);
        append(label2, t13);
        append(label2, strong1);
        append(strong1, t14);
        append(form, t15);
        append(form, br3);
        append(form, t16);
        append(form, input1);
        append(form, t17);
        append(form, div0);
        append(div0, button);
        append(button, t18);
        append(div0, t19);
        if (if_block) if_block.m(div0, null);
        input0.focus();

        if (!mounted) {
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[12]), listen(form, "submit", prevent_default(
          /*submit*/
          ctx[9]))];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*taskEditorCaption*/
        128) set_data(t0,
        /*taskEditorCaption*/
        ctx[7]);

        if (dirty &
        /*name*/
        256 && input0.value !==
        /*name*/
        ctx[8]) {
          set_input_value(input0,
          /*name*/
          ctx[8]);
        }

        if (dirty &
        /*projectName*/
        8) set_data(t9,
        /*projectName*/
        ctx[3]);
        if (dirty &
        /*clientName*/
        4) set_data(t14,
        /*clientName*/
        ctx[2]);

        if (dirty &
        /*requestToken*/
        2) {
          input1.value =
          /*requestToken*/
          ctx[1];
        }

        if (dirty &
        /*taskEditorButtonCaption*/
        64) set_data(t18,
        /*taskEditorButtonCaption*/
        ctx[6]);

        if (!
        /*isServer*/
        ctx[4]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block$8(ctx);
            if_block.c();
            if_block.m(div0, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*action*/
        1) {
          attr(form, "action",
          /*action*/
          ctx[0]);
        }
      },
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (detaching) detach(div1);
        if (if_block) if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$g($$self, $$props, $$invalidate) {
    var action = $$props.action;
    var requestToken = $$props.requestToken;
    var clientName = $$props.clientName;
    var projectName = $$props.projectName;
    var isServer = $$props.isServer;
    var onCancel = $$props.onCancel;
    var onSubmit = $$props.onSubmit;
    var taskEditorButtonCaption = $$props.taskEditorButtonCaption;
    var taskEditorCaption = $$props.taskEditorCaption;
    var editTaskData = $$props.editTaskData;
    var name = editTaskData ? editTaskData.name : "";

    var submit = function submit() {
      onSubmit({
        name: name
      });
    };

    function input0_input_handler() {
      name = this.value;
      $$invalidate(8, name);
    }

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("requestToken" in $$props) $$invalidate(1, requestToken = $$props.requestToken);
      if ("clientName" in $$props) $$invalidate(2, clientName = $$props.clientName);
      if ("projectName" in $$props) $$invalidate(3, projectName = $$props.projectName);
      if ("isServer" in $$props) $$invalidate(4, isServer = $$props.isServer);
      if ("onCancel" in $$props) $$invalidate(5, onCancel = $$props.onCancel);
      if ("onSubmit" in $$props) $$invalidate(10, onSubmit = $$props.onSubmit);
      if ("taskEditorButtonCaption" in $$props) $$invalidate(6, taskEditorButtonCaption = $$props.taskEditorButtonCaption);
      if ("taskEditorCaption" in $$props) $$invalidate(7, taskEditorCaption = $$props.taskEditorCaption);
      if ("editTaskData" in $$props) $$invalidate(11, editTaskData = $$props.editTaskData);
    };

    return [action, requestToken, clientName, projectName, isServer, onCancel, taskEditorButtonCaption, taskEditorCaption, name, submit, onSubmit, editTaskData, input0_input_handler];
  }

  var TaskEditor = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(TaskEditor, _SvelteComponent);

    var _super = _createSuper(TaskEditor);

    function TaskEditor(options) {
      var _this;

      _classCallCheck$1(this, TaskEditor);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$g, create_fragment$h, safe_not_equal, {
        action: 0,
        requestToken: 1,
        clientName: 2,
        projectName: 3,
        isServer: 4,
        onCancel: 5,
        onSubmit: 10,
        taskEditorButtonCaption: 6,
        taskEditorCaption: 7,
        editTaskData: 11
      });
      return _this;
    }

    return TaskEditor;
  }(SvelteComponent);

  function create_if_block$7(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        loading:
        /*loading*/
        ctx[9],
        $$slots: {
          default: [create_default_slot$4]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var overlay_changes = {};
        if (dirty &
        /*loading*/
        512) overlay_changes.loading =
        /*loading*/
        ctx[9];

        if (dirty &
        /*$$scope, action, requestToken, show, clientName, projectName, isServer, taskEditorButtonCaption, taskEditorCaption, editTaskData*/
        33279) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  } // (55:1) <Overlay {loading}>


  function create_default_slot$4(ctx) {
    var taskeditor;
    var current;
    taskeditor = new TaskEditor({
      props: {
        action:
        /*action*/
        ctx[0],
        requestToken:
        /*requestToken*/
        ctx[1],
        onCancel:
        /*func*/
        ctx[14],
        onSubmit:
        /*save*/
        ctx[10],
        clientName:
        /*clientName*/
        ctx[2],
        projectName:
        /*projectName*/
        ctx[3],
        isServer:
        /*isServer*/
        ctx[4],
        taskEditorButtonCaption:
        /*taskEditorButtonCaption*/
        ctx[5],
        taskEditorCaption:
        /*taskEditorCaption*/
        ctx[6],
        editTaskData:
        /*editTaskData*/
        ctx[7]
      }
    });
    return {
      c: function c() {
        create_component(taskeditor.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(taskeditor, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var taskeditor_changes = {};
        if (dirty &
        /*action*/
        1) taskeditor_changes.action =
        /*action*/
        ctx[0];
        if (dirty &
        /*requestToken*/
        2) taskeditor_changes.requestToken =
        /*requestToken*/
        ctx[1];
        if (dirty &
        /*show*/
        256) taskeditor_changes.onCancel =
        /*func*/
        ctx[14];
        if (dirty &
        /*clientName*/
        4) taskeditor_changes.clientName =
        /*clientName*/
        ctx[2];
        if (dirty &
        /*projectName*/
        8) taskeditor_changes.projectName =
        /*projectName*/
        ctx[3];
        if (dirty &
        /*isServer*/
        16) taskeditor_changes.isServer =
        /*isServer*/
        ctx[4];
        if (dirty &
        /*taskEditorButtonCaption*/
        32) taskeditor_changes.taskEditorButtonCaption =
        /*taskEditorButtonCaption*/
        ctx[5];
        if (dirty &
        /*taskEditorCaption*/
        64) taskeditor_changes.taskEditorCaption =
        /*taskEditorCaption*/
        ctx[6];
        if (dirty &
        /*editTaskData*/
        128) taskeditor_changes.editTaskData =
        /*editTaskData*/
        ctx[7];
        taskeditor.$set(taskeditor_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(taskeditor.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(taskeditor.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(taskeditor, detaching);
      }
    };
  }

  function create_fragment$g(ctx) {
    var a;
    var span;
    var t0;
    var t1;
    var if_block_anchor;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*show*/
    ctx[8] && create_if_block$7(ctx);
    return {
      c: function c() {
        a = element("a");
        span = element("span");
        t0 = text(
        /*taskEditorButtonCaption*/
        ctx[5]);
        t1 = space();
        if (if_block) if_block.c();
        if_block_anchor = empty();
        attr(a, "href", "#/");
        attr(a, "class", "button primary new");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, span);
        append(span, t0);
        insert(target, t1, anchor);
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;

        if (!mounted) {
          dispose = listen(a, "click", prevent_default(
          /*click_handler*/
          ctx[13]));
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (!current || dirty &
        /*taskEditorButtonCaption*/
        32) set_data(t0,
        /*taskEditorButtonCaption*/
        ctx[5]);

        if (
        /*show*/
        ctx[8]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*show*/
            256) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$7(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(a);
        if (detaching) detach(t1);
        if (if_block) if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$f($$self, $$props, $$invalidate) {
    var show;
    var loading;
    var action = $$props.action;
    var editAction = $$props.editAction;
    var requestToken = $$props.requestToken;
    var clientName = $$props.clientName;
    var projectName = $$props.projectName;
    var isServer = $$props.isServer;
    var taskEditorButtonCaption = $$props.taskEditorButtonCaption;
    var taskEditorCaption = $$props.taskEditorCaption;
    var taskUuid = $$props.taskUuid;
    var editTaskData = $$props.editTaskData;
    onMount(function () {
      Helpers.hideFallbacks("TaskEditor.svelte");
    });

    var save = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
        var name, task, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref4.name;
                $$invalidate(9, loading = true);
                _context.prev = 2;
                task = {
                  name: name
                };

                if (taskUuid) {
                  task = _objectSpread2(_objectSpread2({}, task), {}, {
                    uuid: taskUuid
                  });
                }

                _context.next = 7;
                return fetch(taskUuid ? editAction : action, {
                  method: taskUuid ? "PATCH" : "POST",
                  body: JSON.stringify(task),
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 7:
                response = _context.sent;

                if (response && response.ok) {
                  $$invalidate(8, show = false);
                  document.querySelector(".app-timemanager [data-current-link]").click();
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 14:
                $$invalidate(9, loading = false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function save(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var click_handler = function click_handler() {
      return $$invalidate(8, show = !show);
    };

    var func = function func() {
      return $$invalidate(8, show = false);
    };

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("editAction" in $$props) $$invalidate(11, editAction = $$props.editAction);
      if ("requestToken" in $$props) $$invalidate(1, requestToken = $$props.requestToken);
      if ("clientName" in $$props) $$invalidate(2, clientName = $$props.clientName);
      if ("projectName" in $$props) $$invalidate(3, projectName = $$props.projectName);
      if ("isServer" in $$props) $$invalidate(4, isServer = $$props.isServer);
      if ("taskEditorButtonCaption" in $$props) $$invalidate(5, taskEditorButtonCaption = $$props.taskEditorButtonCaption);
      if ("taskEditorCaption" in $$props) $$invalidate(6, taskEditorCaption = $$props.taskEditorCaption);
      if ("taskUuid" in $$props) $$invalidate(12, taskUuid = $$props.taskUuid);
      if ("editTaskData" in $$props) $$invalidate(7, editTaskData = $$props.editTaskData);
    };

    $$invalidate(8, show = false);

    $$invalidate(9, loading = false);

    return [action, requestToken, clientName, projectName, isServer, taskEditorButtonCaption, taskEditorCaption, editTaskData, show, loading, save, editAction, taskUuid, click_handler, func];
  }

  var TaskEditorDialog = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(TaskEditorDialog, _SvelteComponent);

    var _super = _createSuper(TaskEditorDialog);

    function TaskEditorDialog(options) {
      var _this;

      _classCallCheck$1(this, TaskEditorDialog);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$f, create_fragment$g, safe_not_equal, {
        action: 0,
        editAction: 11,
        requestToken: 1,
        clientName: 2,
        projectName: 3,
        isServer: 4,
        taskEditorButtonCaption: 5,
        taskEditorCaption: 6,
        taskUuid: 12,
        editTaskData: 7
      });
      return _this;
    }

    return TaskEditorDialog;
  }(SvelteComponent);

  function create_if_block$6(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "".concat(dist_4$1("timemanager", "Cancel"));
        attr(button, "type", "reset");
        attr(button, "class", "button");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click", prevent_default(function () {
            if (is_function(
            /*onCancel*/
            ctx[6]))
              /*onCancel*/
              ctx[6].apply(this, arguments);
          }));
          mounted = true;
        }
      },
      p: function p(new_ctx, dirty) {
        ctx = new_ctx;
      },
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function create_fragment$f(ctx) {
    var div1;
    var h3;
    var t0;
    var t1;
    var form;
    var label0;
    var t2_value = dist_4$1("timemanager", "Duration (in hrs.)") + "";
    var t2;
    var t3;
    var br0;
    var t4;
    var input0;
    var t5;
    var br1;
    var t6;
    var label1;
    var t7_value = dist_4$1("timemanager", "Date") + "";
    var t7;
    var t8;
    var br2;
    var t9;
    var input1;
    var t10;
    var br3;
    var t11;
    var label2;
    var t12_value = dist_4$1("timemanager", "Note") + "";
    var t12;
    var t13;
    var br4;
    var t14;
    var textarea;
    var t15;
    var br5;
    var t16;
    var label3;
    var t17_value = dist_4$1("timemanager", "For task") + "";
    var t17;
    var t18;
    var br6;
    var t19;
    var strong0;
    var t20;
    var t21;
    var label4;
    var t22_value = dist_4$1("timemanager", "For project") + "";
    var t22;
    var t23;
    var br7;
    var t24;
    var strong1;
    var t25;
    var t26;
    var label5;
    var t27_value = dist_4$1("timemanager", "For client") + "";
    var t27;
    var t28;
    var br8;
    var t29;
    var strong2;
    var t30;
    var t31;
    var br9;
    var t32;
    var input2;
    var t33;
    var div0;
    var button;
    var t34;
    var t35;
    var mounted;
    var dispose;
    var if_block = !
    /*isServer*/
    ctx[5] && create_if_block$6(ctx);
    return {
      c: function c() {
        div1 = element("div");
        h3 = element("h3");
        t0 = text(
        /*timeEditorCaption*/
        ctx[7]);
        t1 = space();
        form = element("form");
        label0 = element("label");
        t2 = text(t2_value);
        t3 = space();
        br0 = element("br");
        t4 = space();
        input0 = element("input");
        t5 = space();
        br1 = element("br");
        t6 = space();
        label1 = element("label");
        t7 = text(t7_value);
        t8 = space();
        br2 = element("br");
        t9 = space();
        input1 = element("input");
        t10 = space();
        br3 = element("br");
        t11 = space();
        label2 = element("label");
        t12 = text(t12_value);
        t13 = space();
        br4 = element("br");
        t14 = space();
        textarea = element("textarea");
        t15 = space();
        br5 = element("br");
        t16 = space();
        label3 = element("label");
        t17 = text(t17_value);
        t18 = space();
        br6 = element("br");
        t19 = space();
        strong0 = element("strong");
        t20 = text(
        /*taskName*/
        ctx[4]);
        t21 = space();
        label4 = element("label");
        t22 = text(t22_value);
        t23 = space();
        br7 = element("br");
        t24 = space();
        strong1 = element("strong");
        t25 = text(
        /*projectName*/
        ctx[3]);
        t26 = space();
        label5 = element("label");
        t27 = text(t27_value);
        t28 = space();
        br8 = element("br");
        t29 = space();
        strong2 = element("strong");
        t30 = text(
        /*clientName*/
        ctx[2]);
        t31 = space();
        br9 = element("br");
        t32 = space();
        input2 = element("input");
        t33 = space();
        div0 = element("div");
        button = element("button");
        t34 = text(
        /*timeEditorButtonCaption*/
        ctx[8]);
        t35 = space();
        if (if_block) if_block.c();
        input0.autofocus = true;
        attr(input0, "type", "number");
        attr(input0, "name", "duration");
        attr(input0, "step", "0.01");
        attr(input0, "placeholder", "");
        set_style(input0, "width", "100%");
        attr(input0, "class", "input-wide");
        input0.required = true;
        attr(input1, "type", "date");
        attr(input1, "name", "date");
        set_style(input1, "width", "100%");
        attr(input1, "class", "input-wide");
        set_style(textarea, "width", "100%");
        attr(textarea, "class", "input-wide");
        attr(textarea, "name", "note");
        attr(textarea, "placeholder", dist_4$1("timemanager", "Describe what you did..."));
        textarea.value =
        /*note*/
        ctx[11];
        attr(label3, "class", "space-top");
        attr(label4, "class", "space-top");
        attr(label5, "class", "space-top");
        attr(input2, "type", "hidden");
        attr(input2, "name", "requesttoken");
        input2.value =
        /*requestToken*/
        ctx[1];
        attr(button, "type", "submit");
        attr(button, "class", "button primary");
        attr(div0, "class", "oc-dialog-buttonrow twobuttons reverse");
        attr(form, "action",
        /*action*/
        ctx[0]);
        attr(form, "method", "post");
        attr(div1, "class", "inner tm_new-item");
      },
      m: function m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, h3);
        append(h3, t0);
        append(div1, t1);
        append(div1, form);
        append(form, label0);
        append(label0, t2);
        append(label0, t3);
        append(label0, br0);
        append(label0, t4);
        append(label0, input0);
        set_input_value(input0,
        /*duration*/
        ctx[9]);
        append(form, t5);
        append(form, br1);
        append(form, t6);
        append(form, label1);
        append(label1, t7);
        append(label1, t8);
        append(label1, br2);
        append(label1, t9);
        append(label1, input1);
        set_input_value(input1,
        /*date*/
        ctx[10]);
        append(form, t10);
        append(form, br3);
        append(form, t11);
        append(form, label2);
        append(label2, t12);
        append(label2, t13);
        append(label2, br4);
        append(label2, t14);
        append(label2, textarea);
        append(form, t15);
        append(form, br5);
        append(form, t16);
        append(form, label3);
        append(label3, t17);
        append(label3, t18);
        append(label3, br6);
        append(label3, t19);
        append(label3, strong0);
        append(strong0, t20);
        append(form, t21);
        append(form, label4);
        append(label4, t22);
        append(label4, t23);
        append(label4, br7);
        append(label4, t24);
        append(label4, strong1);
        append(strong1, t25);
        append(form, t26);
        append(form, label5);
        append(label5, t27);
        append(label5, t28);
        append(label5, br8);
        append(label5, t29);
        append(label5, strong2);
        append(strong2, t30);
        append(form, t31);
        append(form, br9);
        append(form, t32);
        append(form, input2);
        append(form, t33);
        append(form, div0);
        append(div0, button);
        append(button, t34);
        append(div0, t35);
        if (if_block) if_block.m(div0, null);
        input0.focus();

        if (!mounted) {
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[16]), listen(input1, "input",
          /*input1_input_handler*/
          ctx[17]), listen(textarea, "input",
          /*input_handler*/
          ctx[18]), listen(form, "submit", prevent_default(
          /*submit*/
          ctx[12]))];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*timeEditorCaption*/
        128) set_data(t0,
        /*timeEditorCaption*/
        ctx[7]);

        if (dirty &
        /*duration*/
        512 && to_number(input0.value) !==
        /*duration*/
        ctx[9]) {
          set_input_value(input0,
          /*duration*/
          ctx[9]);
        }

        if (dirty &
        /*date*/
        1024) {
          set_input_value(input1,
          /*date*/
          ctx[10]);
        }

        if (dirty &
        /*note*/
        2048) {
          textarea.value =
          /*note*/
          ctx[11];
        }

        if (dirty &
        /*taskName*/
        16) set_data(t20,
        /*taskName*/
        ctx[4]);
        if (dirty &
        /*projectName*/
        8) set_data(t25,
        /*projectName*/
        ctx[3]);
        if (dirty &
        /*clientName*/
        4) set_data(t30,
        /*clientName*/
        ctx[2]);

        if (dirty &
        /*requestToken*/
        2) {
          input2.value =
          /*requestToken*/
          ctx[1];
        }

        if (dirty &
        /*timeEditorButtonCaption*/
        256) set_data(t34,
        /*timeEditorButtonCaption*/
        ctx[8]);

        if (!
        /*isServer*/
        ctx[5]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block$6(ctx);
            if_block.c();
            if_block.m(div0, null);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*action*/
        1) {
          attr(form, "action",
          /*action*/
          ctx[0]);
        }
      },
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (detaching) detach(div1);
        if (if_block) if_block.d();
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function instance$e($$self, $$props, $$invalidate) {
    var action = $$props.action;
    var requestToken = $$props.requestToken;
    var clientName = $$props.clientName;
    var projectName = $$props.projectName;
    var taskName = $$props.taskName;
    var initialDate = $$props.initialDate;
    var isServer = $$props.isServer;
    var onCancel = $$props.onCancel;
    var onSubmit = $$props.onSubmit;
    var _$$props$editTimeEntr = $$props.editTimeEntryData,
        editTimeEntryData = _$$props$editTimeEntr === void 0 ? {} : _$$props$editTimeEntr;
    var timeEditorCaption = $$props.timeEditorCaption;
    var timeEditorButtonCaption = $$props.timeEditorButtonCaption;
    var duration = editTimeEntryData.duration;
    var date = editTimeEntryData.date || initialDate;
    var note = editTimeEntryData.note || "";

    var submit = function submit() {
      onSubmit({
        duration: duration,
        date: date,
        note: note
      });
    };

    function input0_input_handler() {
      duration = to_number(this.value);
      $$invalidate(9, duration);
    }

    function input1_input_handler() {
      date = this.value;
      $$invalidate(10, date);
    }

    var input_handler = function input_handler(e) {
      return $$invalidate(11, note = e.target.value);
    };

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("requestToken" in $$props) $$invalidate(1, requestToken = $$props.requestToken);
      if ("clientName" in $$props) $$invalidate(2, clientName = $$props.clientName);
      if ("projectName" in $$props) $$invalidate(3, projectName = $$props.projectName);
      if ("taskName" in $$props) $$invalidate(4, taskName = $$props.taskName);
      if ("initialDate" in $$props) $$invalidate(13, initialDate = $$props.initialDate);
      if ("isServer" in $$props) $$invalidate(5, isServer = $$props.isServer);
      if ("onCancel" in $$props) $$invalidate(6, onCancel = $$props.onCancel);
      if ("onSubmit" in $$props) $$invalidate(14, onSubmit = $$props.onSubmit);
      if ("editTimeEntryData" in $$props) $$invalidate(15, editTimeEntryData = $$props.editTimeEntryData);
      if ("timeEditorCaption" in $$props) $$invalidate(7, timeEditorCaption = $$props.timeEditorCaption);
      if ("timeEditorButtonCaption" in $$props) $$invalidate(8, timeEditorButtonCaption = $$props.timeEditorButtonCaption);
    };

    return [action, requestToken, clientName, projectName, taskName, isServer, onCancel, timeEditorCaption, timeEditorButtonCaption, duration, date, note, submit, initialDate, onSubmit, editTimeEntryData, input0_input_handler, input1_input_handler, input_handler];
  }

  var TimeEditor = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(TimeEditor, _SvelteComponent);

    var _super = _createSuper(TimeEditor);

    function TimeEditor(options) {
      var _this;

      _classCallCheck$1(this, TimeEditor);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$e, create_fragment$f, safe_not_equal, {
        action: 0,
        requestToken: 1,
        clientName: 2,
        projectName: 3,
        taskName: 4,
        initialDate: 13,
        isServer: 5,
        onCancel: 6,
        onSubmit: 14,
        editTimeEntryData: 15,
        timeEditorCaption: 7,
        timeEditorButtonCaption: 8
      });
      return _this;
    }

    return TimeEditor;
  }(SvelteComponent);

  function create_else_block$2(ctx) {
    var div;
    var button;
    var t;
    var mounted;
    var dispose;
    return {
      c: function c() {
        div = element("div");
        button = element("button");
        t = text(
        /*timeEditorButtonCaption*/
        ctx[7]);
        attr(button, "type", "button");
        attr(button, "class", "btn");
        attr(div, "class", "tm_inline-hover-form");
      },
      m: function m(target, anchor) {
        insert(target, div, anchor);
        append(div, button);
        append(button, t);

        if (!mounted) {
          dispose = listen(button, "click", prevent_default(
          /*click_handler_1*/
          ctx[16]));
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*timeEditorButtonCaption*/
        128) set_data(t,
        /*timeEditorButtonCaption*/
        ctx[7]);
      },
      d: function d(detaching) {
        if (detaching) detach(div);
        mounted = false;
        dispose();
      }
    };
  } // (53:0) {#if !timeUuid}


  function create_if_block_1$2(ctx) {
    var a;
    var span;
    var t;
    var mounted;
    var dispose;
    return {
      c: function c() {
        a = element("a");
        span = element("span");
        t = text(
        /*timeEditorButtonCaption*/
        ctx[7]);
        attr(a, "href", "#/");
        attr(a, "class", "button primary new");
      },
      m: function m(target, anchor) {
        insert(target, a, anchor);
        append(a, span);
        append(span, t);

        if (!mounted) {
          dispose = listen(a, "click", prevent_default(
          /*click_handler*/
          ctx[15]));
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*timeEditorButtonCaption*/
        128) set_data(t,
        /*timeEditorButtonCaption*/
        ctx[7]);
      },
      d: function d(detaching) {
        if (detaching) detach(a);
        mounted = false;
        dispose();
      }
    };
  } // (62:0) {#if show}


  function create_if_block$5(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        loading:
        /*loading*/
        ctx[12],
        $$slots: {
          default: [create_default_slot$3]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var overlay_changes = {};
        if (dirty &
        /*loading*/
        4096) overlay_changes.loading =
        /*loading*/
        ctx[12];

        if (dirty &
        /*$$scope, action, requestToken, show, clientName, projectName, taskName, initialDate, timeEditorButtonCaption, timeEditorCaption, editTimeEntryData, isServer*/
        266237) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  } // (63:1) <Overlay {loading}>


  function create_default_slot$3(ctx) {
    var timeeditor;
    var current;
    timeeditor = new TimeEditor({
      props: {
        action:
        /*action*/
        ctx[0],
        requestToken:
        /*requestToken*/
        ctx[2],
        onCancel:
        /*func*/
        ctx[17],
        onSubmit:
        /*save*/
        ctx[13],
        clientName:
        /*clientName*/
        ctx[3],
        projectName:
        /*projectName*/
        ctx[4],
        taskName:
        /*taskName*/
        ctx[5],
        initialDate:
        /*initialDate*/
        ctx[6],
        timeEditorButtonCaption:
        /*timeEditorButtonCaption*/
        ctx[7],
        timeEditorCaption:
        /*timeEditorCaption*/
        ctx[8],
        editTimeEntryData:
        /*editTimeEntryData*/
        ctx[9],
        isServer:
        /*isServer*/
        ctx[10]
      }
    });
    return {
      c: function c() {
        create_component(timeeditor.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(timeeditor, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var timeeditor_changes = {};
        if (dirty &
        /*action*/
        1) timeeditor_changes.action =
        /*action*/
        ctx[0];
        if (dirty &
        /*requestToken*/
        4) timeeditor_changes.requestToken =
        /*requestToken*/
        ctx[2];
        if (dirty &
        /*show*/
        2048) timeeditor_changes.onCancel =
        /*func*/
        ctx[17];
        if (dirty &
        /*clientName*/
        8) timeeditor_changes.clientName =
        /*clientName*/
        ctx[3];
        if (dirty &
        /*projectName*/
        16) timeeditor_changes.projectName =
        /*projectName*/
        ctx[4];
        if (dirty &
        /*taskName*/
        32) timeeditor_changes.taskName =
        /*taskName*/
        ctx[5];
        if (dirty &
        /*initialDate*/
        64) timeeditor_changes.initialDate =
        /*initialDate*/
        ctx[6];
        if (dirty &
        /*timeEditorButtonCaption*/
        128) timeeditor_changes.timeEditorButtonCaption =
        /*timeEditorButtonCaption*/
        ctx[7];
        if (dirty &
        /*timeEditorCaption*/
        256) timeeditor_changes.timeEditorCaption =
        /*timeEditorCaption*/
        ctx[8];
        if (dirty &
        /*editTimeEntryData*/
        512) timeeditor_changes.editTimeEntryData =
        /*editTimeEntryData*/
        ctx[9];
        if (dirty &
        /*isServer*/
        1024) timeeditor_changes.isServer =
        /*isServer*/
        ctx[10];
        timeeditor.$set(timeeditor_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(timeeditor.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(timeeditor.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(timeeditor, detaching);
      }
    };
  }

  function create_fragment$e(ctx) {
    var t;
    var if_block1_anchor;
    var current;

    function select_block_type(ctx, dirty) {
      if (!
      /*timeUuid*/
      ctx[1]) return create_if_block_1$2;
      return create_else_block$2;
    }

    var current_block_type = select_block_type(ctx);
    var if_block0 = current_block_type(ctx);
    var if_block1 =
    /*show*/
    ctx[11] && create_if_block$5(ctx);
    return {
      c: function c() {
        if_block0.c();
        t = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
      },
      m: function m(target, anchor) {
        if_block0.m(target, anchor);
        insert(target, t, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block0) {
          if_block0.p(ctx, dirty);
        } else {
          if_block0.d(1);
          if_block0 = current_block_type(ctx);

          if (if_block0) {
            if_block0.c();
            if_block0.m(t.parentNode, t);
          }
        }

        if (
        /*show*/
        ctx[11]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty &
            /*show*/
            2048) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block$5(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, function () {
            if_block1 = null;
          });
          check_outros();
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block1);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block1);
        current = false;
      },
      d: function d(detaching) {
        if_block0.d(detaching);
        if (detaching) detach(t);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach(if_block1_anchor);
      }
    };
  }

  function instance$d($$self, $$props, $$invalidate) {
    var show;
    var loading;
    var action = $$props.action;
    var editTimeEntryAction = $$props.editTimeEntryAction;
    var timeUuid = $$props.timeUuid;
    var requestToken = $$props.requestToken;
    var clientName = $$props.clientName;
    var projectName = $$props.projectName;
    var taskName = $$props.taskName;
    var initialDate = $$props.initialDate;
    var timeEditorButtonCaption = $$props.timeEditorButtonCaption;
    var timeEditorCaption = $$props.timeEditorCaption;
    var editTimeEntryData = $$props.editTimeEntryData;
    var isServer = $$props.isServer;
    onMount(function () {
      Helpers.hideFallbacks("TimeEditor.svelte");
    });

    var save = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4) {
        var duration, date, note, entry, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                duration = _ref4.duration, date = _ref4.date, note = _ref4.note;
                $$invalidate(12, loading = true);
                _context.prev = 2;
                entry = {
                  duration: duration,
                  date: date,
                  note: note
                };

                if (timeUuid) {
                  entry.uuid = timeUuid;
                }

                _context.next = 7;
                return fetch(timeUuid ? editTimeEntryAction : action, {
                  method: timeUuid ? "PATCH" : "POST",
                  body: JSON.stringify(entry),
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 7:
                response = _context.sent;

                if (response && response.ok) {
                  $$invalidate(11, show = false);
                  document.querySelector(".app-timemanager [data-current-link]").click();
                }

                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](2);
                console.error(_context.t0);

              case 14:
                $$invalidate(12, loading = false);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 11]]);
      }));

      return function save(_x) {
        return _ref3.apply(this, arguments);
      };
    }();

    var click_handler = function click_handler() {
      return $$invalidate(11, show = !show);
    };

    var click_handler_1 = function click_handler_1() {
      return $$invalidate(11, show = !show);
    };

    var func = function func() {
      return $$invalidate(11, show = false);
    };

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(0, action = $$props.action);
      if ("editTimeEntryAction" in $$props) $$invalidate(14, editTimeEntryAction = $$props.editTimeEntryAction);
      if ("timeUuid" in $$props) $$invalidate(1, timeUuid = $$props.timeUuid);
      if ("requestToken" in $$props) $$invalidate(2, requestToken = $$props.requestToken);
      if ("clientName" in $$props) $$invalidate(3, clientName = $$props.clientName);
      if ("projectName" in $$props) $$invalidate(4, projectName = $$props.projectName);
      if ("taskName" in $$props) $$invalidate(5, taskName = $$props.taskName);
      if ("initialDate" in $$props) $$invalidate(6, initialDate = $$props.initialDate);
      if ("timeEditorButtonCaption" in $$props) $$invalidate(7, timeEditorButtonCaption = $$props.timeEditorButtonCaption);
      if ("timeEditorCaption" in $$props) $$invalidate(8, timeEditorCaption = $$props.timeEditorCaption);
      if ("editTimeEntryData" in $$props) $$invalidate(9, editTimeEntryData = $$props.editTimeEntryData);
      if ("isServer" in $$props) $$invalidate(10, isServer = $$props.isServer);
    };

    $$invalidate(11, show = false);

    $$invalidate(12, loading = false);

    return [action, timeUuid, requestToken, clientName, projectName, taskName, initialDate, timeEditorButtonCaption, timeEditorCaption, editTimeEntryData, isServer, show, loading, save, editTimeEntryAction, click_handler, click_handler_1, func];
  }

  var TimeEditorDialog = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(TimeEditorDialog, _SvelteComponent);

    var _super = _createSuper(TimeEditorDialog);

    function TimeEditorDialog(options) {
      var _this;

      _classCallCheck$1(this, TimeEditorDialog);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$d, create_fragment$e, safe_not_equal, {
        action: 0,
        editTimeEntryAction: 14,
        timeUuid: 1,
        requestToken: 2,
        clientName: 3,
        projectName: 4,
        taskName: 5,
        initialDate: 6,
        timeEditorButtonCaption: 7,
        timeEditorCaption: 8,
        editTimeEntryData: 9,
        isServer: 10
      });
      return _this;
    }

    return TimeEditorDialog;
  }(SvelteComponent);

  function create_if_block$4(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        $$slots: {
          default: [create_default_slot$2]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var overlay_changes = {};

        if (dirty &
        /*$$scope, deleteQuestion*/
        2056) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  } // (38:1) <Overlay>


  function create_default_slot$2(ctx) {
    var div1;
    var t0;
    var t1;
    var div0;
    var button0;
    var t3;
    var button1;
    var mounted;
    var dispose;
    return {
      c: function c() {
        div1 = element("div");
        t0 = text(
        /*deleteQuestion*/
        ctx[3]);
        t1 = space();
        div0 = element("div");
        button0 = element("button");
        button0.textContent = "".concat(dist_4$1("timemanager", "Delete"));
        t3 = space();
        button1 = element("button");
        button1.textContent = "".concat(dist_4$1("timemanager", "Cancel"));
        attr(button0, "class", "button primary");
        attr(button1, "class", "button");
        attr(div0, "class", "oc-dialog-buttonrow twobuttons reverse");
        attr(div1, "class", "inner tm_new-item");
      },
      m: function m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, t0);
        append(div1, t1);
        append(div1, div0);
        append(div0, button0);
        append(div0, t3);
        append(div0, button1);

        if (!mounted) {
          dispose = [listen(button0, "click", prevent_default(
          /*doDelete*/
          ctx[7])), listen(button1, "click", prevent_default(
          /*cancelDelete*/
          ctx[8]))];
          mounted = true;
        }
      },
      p: function p(ctx, dirty) {
        if (dirty &
        /*deleteQuestion*/
        8) set_data(t0,
        /*deleteQuestion*/
        ctx[3]);
      },
      d: function d(detaching) {
        if (detaching) detach(div1);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function create_fragment$d(ctx) {
    var t0;
    var form_1;
    var input0;
    var t1;
    var input1;
    var t2;
    var button;
    var t3;
    var current;
    var if_block =
    /*confirmation*/
    ctx[6] && create_if_block$4(ctx);
    return {
      c: function c() {
        if (if_block) if_block.c();
        t0 = space();
        form_1 = element("form");
        input0 = element("input");
        t1 = space();
        input1 = element("input");
        t2 = space();
        button = element("button");
        t3 = text(
        /*deleteButtonCaption*/
        ctx[2]);
        attr(input0, "type", "hidden");
        attr(input0, "name", "uuid");
        input0.value =
        /*deleteUuid*/
        ctx[1];
        attr(input1, "type", "hidden");
        attr(input1, "name", "requesttoken");
        input1.value =
        /*requestToken*/
        ctx[4];
        attr(button, "type", "submit");
        attr(button, "name", "action");
        button.value = "delete";
        attr(button, "class", "btn");
        attr(form_1, "action",
        /*deleteAction*/
        ctx[0]);
        attr(form_1, "method", "post");
      },
      m: function m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, form_1, anchor);
        append(form_1, input0);
        append(form_1, t1);
        append(form_1, input1);
        append(form_1, t2);
        append(form_1, button);
        append(button, t3);
        /*form_1_binding*/

        ctx[9](form_1);
        current = true;
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*confirmation*/
        ctx[6]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*confirmation*/
            64) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$4(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t0.parentNode, t0);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }

        if (!current || dirty &
        /*deleteUuid*/
        2) {
          input0.value =
          /*deleteUuid*/
          ctx[1];
        }

        if (!current || dirty &
        /*requestToken*/
        16) {
          input1.value =
          /*requestToken*/
          ctx[4];
        }

        if (!current || dirty &
        /*deleteButtonCaption*/
        4) set_data(t3,
        /*deleteButtonCaption*/
        ctx[2]);

        if (!current || dirty &
        /*deleteAction*/
        1) {
          attr(form_1, "action",
          /*deleteAction*/
          ctx[0]);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(form_1);
        /*form_1_binding*/

        ctx[9](null);
      }
    };
  }

  function instance$c($$self, $$props, $$invalidate) {
    var confirmation;
    var deleteAction = $$props.deleteAction;
    var deleteUuid = $$props.deleteUuid;
    var deleteButtonCaption = $$props.deleteButtonCaption;
    var deleteQuestion = $$props.deleteQuestion;
    var requestToken = $$props.requestToken;
    var form;
    onMount(function () {
      Helpers.hideFallbacks("DeleteButton.svelte");
      form.addEventListener("submit", submit);
    });

    var submit = function submit(e) {
      e.preventDefault();
      $$invalidate(6, confirmation = true);
    };

    var doDelete = function doDelete() {
      $$invalidate(6, confirmation = false);
      form.removeEventListener("submit", submit);
      form.submit();
    };

    var cancelDelete = function cancelDelete() {
      $$invalidate(6, confirmation = false);
    };

    function form_1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        form = $$value;
        $$invalidate(5, form);
      });
    }

    $$self.$$set = function ($$props) {
      if ("deleteAction" in $$props) $$invalidate(0, deleteAction = $$props.deleteAction);
      if ("deleteUuid" in $$props) $$invalidate(1, deleteUuid = $$props.deleteUuid);
      if ("deleteButtonCaption" in $$props) $$invalidate(2, deleteButtonCaption = $$props.deleteButtonCaption);
      if ("deleteQuestion" in $$props) $$invalidate(3, deleteQuestion = $$props.deleteQuestion);
      if ("requestToken" in $$props) $$invalidate(4, requestToken = $$props.requestToken);
    };

    $$invalidate(6, confirmation = false);

    return [deleteAction, deleteUuid, deleteButtonCaption, deleteQuestion, requestToken, form, confirmation, doDelete, cancelDelete, form_1_binding];
  }

  var DeleteButton = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(DeleteButton, _SvelteComponent);

    var _super = _createSuper(DeleteButton);

    function DeleteButton(options) {
      var _this;

      _classCallCheck$1(this, DeleteButton);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$c, create_fragment$d, safe_not_equal, {
        deleteAction: 0,
        deleteUuid: 1,
        deleteButtonCaption: 2,
        deleteQuestion: 3,
        requestToken: 4
      });
      return _this;
    }

    return DeleteButton;
  }(SvelteComponent);

  function create_if_block$3(ctx) {
    var overlay;
    var current;
    overlay = new Overlay({
      props: {
        $$slots: {
          default: [create_default_slot$1]
        },
        $$scope: {
          ctx: ctx
        }
      }
    });
    return {
      c: function c() {
        create_component(overlay.$$.fragment);
      },
      m: function m(target, anchor) {
        mount_component(overlay, target, anchor);
        current = true;
      },
      p: function p(ctx, dirty) {
        var overlay_changes = {};

        if (dirty &
        /*$$scope*/
        128) {
          overlay_changes.$$scope = {
            dirty: dirty,
            ctx: ctx
          };
        }

        overlay.$set(overlay_changes);
      },
      i: function i(local) {
        if (current) return;
        transition_in(overlay.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(overlay.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        destroy_component(overlay, detaching);
      }
    };
  } // (56:1) <Overlay>


  function create_default_slot$1(ctx) {
    var div1;
    var t0_value = dist_4$1("timemanager", "Do you want to delete this time entry?") + "";
    var t0;
    var t1;
    var div0;
    var button0;
    var t3;
    var button1;
    var mounted;
    var dispose;
    return {
      c: function c() {
        div1 = element("div");
        t0 = text(t0_value);
        t1 = space();
        div0 = element("div");
        button0 = element("button");
        button0.textContent = "".concat(dist_4$1("timemanager", "Delete"));
        t3 = space();
        button1 = element("button");
        button1.textContent = "".concat(dist_4$1("timemanager", "Cancel"));
        attr(button0, "class", "button primary");
        attr(button1, "class", "button");
        attr(div0, "class", "oc-dialog-buttonrow twobuttons reverse");
        attr(div1, "class", "inner tm_new-item");
      },
      m: function m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, t0);
        append(div1, t1);
        append(div1, div0);
        append(div0, button0);
        append(div0, t3);
        append(div0, button1);

        if (!mounted) {
          dispose = [listen(button0, "click", prevent_default(
          /*doDelete*/
          ctx[5])), listen(button1, "click", prevent_default(
          /*cancelDelete*/
          ctx[6]))];
          mounted = true;
        }
      },
      p: noop$1,
      d: function d(detaching) {
        if (detaching) detach(div1);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  function create_fragment$c(ctx) {
    var t0;
    var form;
    var input0;
    var t1;
    var input1;
    var t2;
    var button;
    var current;
    var mounted;
    var dispose;
    var if_block =
    /*confirmation*/
    ctx[3] && create_if_block$3(ctx);
    return {
      c: function c() {
        if (if_block) if_block.c();
        t0 = space();
        form = element("form");
        input0 = element("input");
        t1 = space();
        input1 = element("input");
        t2 = space();
        button = element("button");
        button.textContent = "".concat(dist_4$1("timemanager", "Delete"));
        attr(input0, "type", "hidden");
        attr(input0, "name", "uuid");
        input0.value =
        /*deleteTimeEntryUuid*/
        ctx[1];
        attr(input1, "type", "hidden");
        attr(input1, "name", "requesttoken");
        input1.value =
        /*requestToken*/
        ctx[2];
        attr(button, "type", "submit");
        attr(button, "name", "action");
        button.value = "delete";
        attr(button, "class", "btn");
        attr(form, "action",
        /*deleteTimeEntryAction*/
        ctx[0]);
        attr(form, "method", "post");
        attr(form, "class", "tm_inline-hover-form");
      },
      m: function m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, t0, anchor);
        insert(target, form, anchor);
        append(form, input0);
        append(form, t1);
        append(form, input1);
        append(form, t2);
        append(form, button);
        current = true;

        if (!mounted) {
          dispose = listen(form, "submit",
          /*submit*/
          ctx[4]);
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (
        /*confirmation*/
        ctx[3]) {
          if (if_block) {
            if_block.p(ctx, dirty);

            if (dirty &
            /*confirmation*/
            8) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block$3(ctx);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(t0.parentNode, t0);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, function () {
            if_block = null;
          });
          check_outros();
        }

        if (!current || dirty &
        /*deleteTimeEntryUuid*/
        2) {
          input0.value =
          /*deleteTimeEntryUuid*/
          ctx[1];
        }

        if (!current || dirty &
        /*requestToken*/
        4) {
          input1.value =
          /*requestToken*/
          ctx[2];
        }

        if (!current || dirty &
        /*deleteTimeEntryAction*/
        1) {
          attr(form, "action",
          /*deleteTimeEntryAction*/
          ctx[0]);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },
      o: function o(local) {
        transition_out(if_block);
        current = false;
      },
      d: function d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(t0);
        if (detaching) detach(form);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$b($$self, $$props, $$invalidate) {
    var confirmation;
    var deleteTimeEntryAction = $$props.deleteTimeEntryAction;
    var deleteTimeEntryUuid = $$props.deleteTimeEntryUuid;
    var requestToken = $$props.requestToken;
    onMount(function () {
      Helpers.hideFallbacks("DeleteTimeEntryButton.svelte@".concat(deleteTimeEntryUuid));
    });

    var submit = function submit(e) {
      e.preventDefault();
      $$invalidate(3, confirmation = true);
    };

    var doDelete = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _element, response;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $$invalidate(3, confirmation = false);
                _context.prev = 1;
                _element = document.querySelector("#content.app-timemanager [data-remove-on-delete='".concat(deleteTimeEntryUuid, "']"));

                if (_element) {
                  _element.classList.add("warning");
                }

                _context.next = 6;
                return window.fetch(deleteTimeEntryAction, {
                  method: "POST",
                  body: JSON.stringify({
                    uuid: deleteTimeEntryUuid
                  }),
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 6:
                response = _context.sent;

                if (response && response.ok) {
                  _element.remove();

                  document.querySelector(".app-timemanager [data-current-link]").click();
                }

                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 10]]);
      }));

      return function doDelete() {
        return _ref3.apply(this, arguments);
      };
    }();

    var cancelDelete = function cancelDelete() {
      $$invalidate(3, confirmation = false);
    };

    $$self.$$set = function ($$props) {
      if ("deleteTimeEntryAction" in $$props) $$invalidate(0, deleteTimeEntryAction = $$props.deleteTimeEntryAction);
      if ("deleteTimeEntryUuid" in $$props) $$invalidate(1, deleteTimeEntryUuid = $$props.deleteTimeEntryUuid);
      if ("requestToken" in $$props) $$invalidate(2, requestToken = $$props.requestToken);
    };

    $$invalidate(3, confirmation = false);

    return [deleteTimeEntryAction, deleteTimeEntryUuid, requestToken, confirmation, submit, doDelete, cancelDelete];
  }

  var DeleteTimeEntryButton = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(DeleteTimeEntryButton, _SvelteComponent);

    var _super = _createSuper(DeleteTimeEntryButton);

    function DeleteTimeEntryButton(options) {
      var _this;

      _classCallCheck$1(this, DeleteTimeEntryButton);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$b, create_fragment$c, safe_not_equal, {
        deleteTimeEntryAction: 0,
        deleteTimeEntryUuid: 1,
        requestToken: 2
      });
      return _this;
    }

    return DeleteTimeEntryButton;
  }(SvelteComponent);

  var $filter$1 = arrayIteration$1.filter;



  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$1('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  _export$1({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $find = arrayIteration$1.find;



  var FIND = 'find';
  var SKIPS_HOLES = true; // Shouldn't skip holes

  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES = false;
  }); // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find

  _export$1({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables$1(FIND);

  /* node_modules/svelte-select/src/Item.svelte generated by Svelte v3.38.3 */

  function add_css$5() {
    var style = element("style");
    style.id = "svelte-bdnybl-style";
    style.textContent = ".item.svelte-bdnybl{cursor:default;height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--itemPadding, 0 20px);color:var(--itemColor, inherit);text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.groupHeader.svelte-bdnybl{text-transform:var(--groupTitleTextTransform, uppercase)}.groupItem.svelte-bdnybl{padding-left:var(--groupItemPaddingLeft, 40px)}.item.svelte-bdnybl:active{background:var(--itemActiveBackground, #b9daff)}.item.active.svelte-bdnybl{background:var(--itemIsActiveBG, #007aff);color:var(--itemIsActiveColor, #fff)}.item.first.svelte-bdnybl{border-radius:var(--itemFirstBorderRadius, 4px 4px 0 0)}.item.hover.svelte-bdnybl:not(.active){background:var(--itemHoverBG, #e7f2ff)}";
    append(document.head, style);
  }

  function create_fragment$b(ctx) {
    let div;
    let raw_value =
    /*getOptionLabel*/
    ctx[0](
    /*item*/
    ctx[1],
    /*filterText*/
    ctx[2]) + "";
    let div_class_value;
    return {
      c() {
        div = element("div");
        attr(div, "class", div_class_value = "item " +
        /*itemClasses*/
        ctx[3] + " svelte-bdnybl");
      },

      m(target, anchor) {
        insert(target, div, anchor);
        div.innerHTML = raw_value;
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*getOptionLabel, item, filterText*/
        7 && raw_value !== (raw_value =
        /*getOptionLabel*/
        ctx[0](
        /*item*/
        ctx[1],
        /*filterText*/
        ctx[2]) + "")) div.innerHTML = raw_value;

        if (dirty &
        /*itemClasses*/
        8 && div_class_value !== (div_class_value = "item " +
        /*itemClasses*/
        ctx[3] + " svelte-bdnybl")) {
          attr(div, "class", div_class_value);
        }
      },

      i: noop$1,
      o: noop$1,

      d(detaching) {
        if (detaching) detach(div);
      }

    };
  }

  function instance$a($$self, $$props, $$invalidate) {
    let {
      isActive = false
    } = $$props;
    let {
      isFirst = false
    } = $$props;
    let {
      isHover = false
    } = $$props;
    let {
      getOptionLabel = undefined
    } = $$props;
    let {
      item = undefined
    } = $$props;
    let {
      filterText = ""
    } = $$props;
    let itemClasses = "";

    $$self.$$set = $$props => {
      if ("isActive" in $$props) $$invalidate(4, isActive = $$props.isActive);
      if ("isFirst" in $$props) $$invalidate(5, isFirst = $$props.isFirst);
      if ("isHover" in $$props) $$invalidate(6, isHover = $$props.isHover);
      if ("getOptionLabel" in $$props) $$invalidate(0, getOptionLabel = $$props.getOptionLabel);
      if ("item" in $$props) $$invalidate(1, item = $$props.item);
      if ("filterText" in $$props) $$invalidate(2, filterText = $$props.filterText);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty &
      /*isActive, isFirst, isHover, item*/
      114) {
        {
          const classes = [];

          if (isActive) {
            classes.push("active");
          }

          if (isFirst) {
            classes.push("first");
          }

          if (isHover) {
            classes.push("hover");
          }

          if (item.isGroupHeader) {
            classes.push("groupHeader");
          }

          if (item.isGroupItem) {
            classes.push("groupItem");
          }

          $$invalidate(3, itemClasses = classes.join(" "));
        }
      }
    };

    return [getOptionLabel, item, filterText, itemClasses, isActive, isFirst, isHover];
  }

  class Item extends SvelteComponent {
    constructor(options) {
      super();
      if (!document.getElementById("svelte-bdnybl-style")) add_css$5();
      init$1(this, options, instance$a, create_fragment$b, safe_not_equal, {
        isActive: 4,
        isFirst: 5,
        isHover: 6,
        getOptionLabel: 0,
        item: 1,
        filterText: 2
      });
    }

  }

  /* node_modules/svelte-select/src/VirtualList.svelte generated by Svelte v3.38.3 */

  function add_css$4() {
    var style = element("style");
    style.id = "svelte-p6ehlv-style";
    style.textContent = "svelte-virtual-list-viewport.svelte-p6ehlv{position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch;display:block}svelte-virtual-list-contents.svelte-p6ehlv,svelte-virtual-list-row.svelte-p6ehlv{display:block}svelte-virtual-list-row.svelte-p6ehlv{overflow:hidden}";
    append(document.head, style);
  }

  function get_each_context$2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[23] = list[i];
    return child_ctx;
  }

  const get_default_slot_changes = dirty => ({
    item: dirty &
    /*visible*/
    32,
    i: dirty &
    /*visible*/
    32,
    hoverItemIndex: dirty &
    /*hoverItemIndex*/
    2
  });

  const get_default_slot_context = ctx => ({
    item:
    /*row*/
    ctx[23].data,
    i:
    /*row*/
    ctx[23].index,
    hoverItemIndex:
    /*hoverItemIndex*/
    ctx[1]
  }); // (160:57) Missing template


  function fallback_block(ctx) {
    let t;
    return {
      c() {
        t = text("Missing template");
      },

      m(target, anchor) {
        insert(target, t, anchor);
      },

      d(detaching) {
        if (detaching) detach(t);
      }

    };
  } // (158:2) {#each visible as row (row.index)}


  function create_each_block$2(key_1, ctx) {
    let svelte_virtual_list_row;
    let t;
    let current;
    const default_slot_template =
    /*#slots*/
    ctx[15].default;
    const default_slot = create_slot(default_slot_template, ctx,
    /*$$scope*/
    ctx[14], get_default_slot_context);
    const default_slot_or_fallback = default_slot || fallback_block();
    return {
      key: key_1,
      first: null,

      c() {
        svelte_virtual_list_row = element("svelte-virtual-list-row");
        if (default_slot_or_fallback) default_slot_or_fallback.c();
        t = space();
        set_custom_element_data(svelte_virtual_list_row, "class", "svelte-p6ehlv");
        this.first = svelte_virtual_list_row;
      },

      m(target, anchor) {
        insert(target, svelte_virtual_list_row, anchor);

        if (default_slot_or_fallback) {
          default_slot_or_fallback.m(svelte_virtual_list_row, null);
        }

        append(svelte_virtual_list_row, t);
        current = true;
      },

      p(new_ctx, dirty) {
        ctx = new_ctx;

        if (default_slot) {
          if (default_slot.p && (!current || dirty &
          /*$$scope, visible, hoverItemIndex*/
          16418)) {
            update_slot(default_slot, default_slot_template, ctx,
            /*$$scope*/
            ctx[14], !current ? -1 : dirty, get_default_slot_changes, get_default_slot_context);
          }
        }
      },

      i(local) {
        if (current) return;
        transition_in(default_slot_or_fallback, local);
        current = true;
      },

      o(local) {
        transition_out(default_slot_or_fallback, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(svelte_virtual_list_row);
        if (default_slot_or_fallback) default_slot_or_fallback.d(detaching);
      }

    };
  }

  function create_fragment$a(ctx) {
    let svelte_virtual_list_viewport;
    let svelte_virtual_list_contents;
    let each_blocks = [];
    let each_1_lookup = new Map();
    let svelte_virtual_list_viewport_resize_listener;
    let current;
    let mounted;
    let dispose;
    let each_value =
    /*visible*/
    ctx[5];

    const get_key = ctx =>
    /*row*/
    ctx[23].index;

    for (let i = 0; i < each_value.length; i += 1) {
      let child_ctx = get_each_context$2(ctx, each_value, i);
      let key = get_key(child_ctx);
      each_1_lookup.set(key, each_blocks[i] = create_each_block$2(key, child_ctx));
    }

    return {
      c() {
        svelte_virtual_list_viewport = element("svelte-virtual-list-viewport");
        svelte_virtual_list_contents = element("svelte-virtual-list-contents");

        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }

        set_style(svelte_virtual_list_contents, "padding-top",
        /*top*/
        ctx[6] + "px");
        set_style(svelte_virtual_list_contents, "padding-bottom",
        /*bottom*/
        ctx[7] + "px");
        set_custom_element_data(svelte_virtual_list_contents, "class", "svelte-p6ehlv");
        set_style(svelte_virtual_list_viewport, "height",
        /*height*/
        ctx[0]);
        set_custom_element_data(svelte_virtual_list_viewport, "class", "svelte-p6ehlv");
        add_render_callback(() =>
        /*svelte_virtual_list_viewport_elementresize_handler*/
        ctx[18].call(svelte_virtual_list_viewport));
      },

      m(target, anchor) {
        insert(target, svelte_virtual_list_viewport, anchor);
        append(svelte_virtual_list_viewport, svelte_virtual_list_contents);

        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(svelte_virtual_list_contents, null);
        }
        /*svelte_virtual_list_contents_binding*/


        ctx[16](svelte_virtual_list_contents);
        /*svelte_virtual_list_viewport_binding*/

        ctx[17](svelte_virtual_list_viewport);
        svelte_virtual_list_viewport_resize_listener = add_resize_listener(svelte_virtual_list_viewport,
        /*svelte_virtual_list_viewport_elementresize_handler*/
        ctx[18].bind(svelte_virtual_list_viewport));
        current = true;

        if (!mounted) {
          dispose = listen(svelte_virtual_list_viewport, "scroll",
          /*handle_scroll*/
          ctx[8]);
          mounted = true;
        }
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*$$scope, visible, hoverItemIndex*/
        16418) {
          each_value =
          /*visible*/
          ctx[5];
          group_outros();
          each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, svelte_virtual_list_contents, outro_and_destroy_block, create_each_block$2, null, get_each_context$2);
          check_outros();
        }

        if (!current || dirty &
        /*top*/
        64) {
          set_style(svelte_virtual_list_contents, "padding-top",
          /*top*/
          ctx[6] + "px");
        }

        if (!current || dirty &
        /*bottom*/
        128) {
          set_style(svelte_virtual_list_contents, "padding-bottom",
          /*bottom*/
          ctx[7] + "px");
        }

        if (!current || dirty &
        /*height*/
        1) {
          set_style(svelte_virtual_list_viewport, "height",
          /*height*/
          ctx[0]);
        }
      },

      i(local) {
        if (current) return;

        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }

        current = true;
      },

      o(local) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }

        current = false;
      },

      d(detaching) {
        if (detaching) detach(svelte_virtual_list_viewport);

        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].d();
        }
        /*svelte_virtual_list_contents_binding*/


        ctx[16](null);
        /*svelte_virtual_list_viewport_binding*/

        ctx[17](null);
        svelte_virtual_list_viewport_resize_listener();
        mounted = false;
        dispose();
      }

    };
  }

  function instance$9($$self, $$props, $$invalidate) {
    let {
      $$slots: slots = {},
      $$scope
    } = $$props;
    let {
      items = undefined
    } = $$props;
    let {
      height = "100%"
    } = $$props;
    let {
      itemHeight = 40
    } = $$props;
    let {
      hoverItemIndex = 0
    } = $$props;
    let {
      start = 0
    } = $$props;
    let {
      end = 0
    } = $$props; // local state

    let height_map = [];
    let rows;
    let viewport;
    let contents;
    let viewport_height = 0;
    let visible;
    let mounted;
    let top = 0;
    let bottom = 0;
    let average_height;

    async function refresh(items, viewport_height, itemHeight) {
      const {
        scrollTop
      } = viewport;
      await tick(); // wait until the DOM is up to date

      let content_height = top - scrollTop;
      let i = start;

      while (content_height < viewport_height && i < items.length) {
        let row = rows[i - start];

        if (!row) {
          $$invalidate(10, end = i + 1);
          await tick(); // render the newly visible row

          row = rows[i - start];
        }

        const row_height = height_map[i] = itemHeight || row.offsetHeight;
        content_height += row_height;
        i += 1;
      }

      $$invalidate(10, end = i);
      const remaining = items.length - end;
      average_height = (top + content_height) / end;
      $$invalidate(7, bottom = remaining * average_height);
      height_map.length = items.length;
      $$invalidate(3, viewport.scrollTop = 0, viewport);
    }

    async function handle_scroll() {
      const {
        scrollTop
      } = viewport;
      const old_start = start;

      for (let v = 0; v < rows.length; v += 1) {
        height_map[start + v] = itemHeight || rows[v].offsetHeight;
      }

      let i = 0;
      let y = 0;

      while (i < items.length) {
        const row_height = height_map[i] || average_height;

        if (y + row_height > scrollTop) {
          $$invalidate(9, start = i);
          $$invalidate(6, top = y);
          break;
        }

        y += row_height;
        i += 1;
      }

      while (i < items.length) {
        y += height_map[i] || average_height;
        i += 1;
        if (y > scrollTop + viewport_height) break;
      }

      $$invalidate(10, end = i);
      const remaining = items.length - end;
      average_height = y / end;

      while (i < items.length) height_map[i++] = average_height;

      $$invalidate(7, bottom = remaining * average_height); // prevent jumping if we scrolled up into unknown territory

      if (start < old_start) {
        await tick();
        let expected_height = 0;
        let actual_height = 0;

        for (let i = start; i < old_start; i += 1) {
          if (rows[i - start]) {
            expected_height += height_map[i];
            actual_height += itemHeight || rows[i - start].offsetHeight;
          }
        }

        const d = actual_height - expected_height;
        viewport.scrollTo(0, scrollTop + d);
      }
    } // TODO if we overestimated the space these
    // rows would occupy we may need to add some
    // more. maybe we can just call handle_scroll again?
    // trigger initial refresh


    onMount(() => {
      rows = contents.getElementsByTagName("svelte-virtual-list-row");
      $$invalidate(13, mounted = true);
    });

    function svelte_virtual_list_contents_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        contents = $$value;
        $$invalidate(4, contents);
      });
    }

    function svelte_virtual_list_viewport_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        viewport = $$value;
        $$invalidate(3, viewport);
      });
    }

    function svelte_virtual_list_viewport_elementresize_handler() {
      viewport_height = this.offsetHeight;
      $$invalidate(2, viewport_height);
    }

    $$self.$$set = $$props => {
      if ("items" in $$props) $$invalidate(11, items = $$props.items);
      if ("height" in $$props) $$invalidate(0, height = $$props.height);
      if ("itemHeight" in $$props) $$invalidate(12, itemHeight = $$props.itemHeight);
      if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
      if ("start" in $$props) $$invalidate(9, start = $$props.start);
      if ("end" in $$props) $$invalidate(10, end = $$props.end);
      if ("$$scope" in $$props) $$invalidate(14, $$scope = $$props.$$scope);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty &
      /*items, start, end*/
      3584) {
        $$invalidate(5, visible = items.slice(start, end).map((data, i) => {
          return {
            index: i + start,
            data
          };
        }));
      }

      if ($$self.$$.dirty &
      /*mounted, items, viewport_height, itemHeight*/
      14340) {
        // whenever `items` changes, invalidate the current heightmap
        if (mounted) refresh(items, viewport_height, itemHeight);
      }
    };

    return [height, hoverItemIndex, viewport_height, viewport, contents, visible, top, bottom, handle_scroll, start, end, items, itemHeight, mounted, $$scope, slots, svelte_virtual_list_contents_binding, svelte_virtual_list_viewport_binding, svelte_virtual_list_viewport_elementresize_handler];
  }

  class VirtualList extends SvelteComponent {
    constructor(options) {
      super();
      if (!document.getElementById("svelte-p6ehlv-style")) add_css$4();
      init$1(this, options, instance$9, create_fragment$a, safe_not_equal, {
        items: 11,
        height: 0,
        itemHeight: 12,
        hoverItemIndex: 1,
        start: 9,
        end: 10
      });
    }

  }

  /* node_modules/svelte-select/src/List.svelte generated by Svelte v3.38.3 */

  function add_css$3() {
    var style = element("style");
    style.id = "svelte-ux0sbr-style";
    style.textContent = ".listContainer.svelte-ux0sbr{box-shadow:var(--listShadow, 0 2px 3px 0 rgba(44, 62, 80, 0.24));border-radius:var(--listBorderRadius, 4px);max-height:var(--listMaxHeight, 250px);overflow-y:auto;background:var(--listBackground, #fff)}.virtualList.svelte-ux0sbr{height:var(--virtualListHeight, 200px)}.listGroupTitle.svelte-ux0sbr{color:var(--groupTitleColor, #8f8f8f);cursor:default;font-size:var(--groupTitleFontSize, 12px);font-weight:var(--groupTitleFontWeight, 600);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--groupTitlePadding, 0 20px);text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap;text-transform:var(--groupTitleTextTransform, uppercase)}.empty.svelte-ux0sbr{text-align:var(--listEmptyTextAlign, center);padding:var(--listEmptyPadding, 20px 0);color:var(--listEmptyColor, #78848F)}";
    append(document.head, style);
  }

  function get_each_context$1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[34] = list[i];
    child_ctx[36] = i;
    return child_ctx;
  } // (210:0) {#if isVirtualList}


  function create_if_block_3$1(ctx) {
    let div;
    let virtuallist;
    let current;
    virtuallist = new VirtualList({
      props: {
        items:
        /*items*/
        ctx[4],
        itemHeight:
        /*itemHeight*/
        ctx[7],
        $$slots: {
          default: [create_default_slot, ({
            item,
            i
          }) => ({
            34: item,
            36: i
          }), ({
            item,
            i
          }) => [0, (item ? 8 : 0) | (i ? 32 : 0)]]
        },
        $$scope: {
          ctx
        }
      }
    });
    return {
      c() {
        div = element("div");
        create_component(virtuallist.$$.fragment);
        attr(div, "class", "listContainer virtualList svelte-ux0sbr");
      },

      m(target, anchor) {
        insert(target, div, anchor);
        mount_component(virtuallist, div, null);
        /*div_binding*/

        ctx[20](div);
        current = true;
      },

      p(ctx, dirty) {
        const virtuallist_changes = {};
        if (dirty[0] &
        /*items*/
        16) virtuallist_changes.items =
        /*items*/
        ctx[4];
        if (dirty[0] &
        /*itemHeight*/
        128) virtuallist_changes.itemHeight =
        /*itemHeight*/
        ctx[7];

        if (dirty[0] &
        /*Item, filterText, getOptionLabel, selectedValue, optionIdentifier, hoverItemIndex, items*/
        4918 | dirty[1] &
        /*$$scope, item, i*/
        104) {
          virtuallist_changes.$$scope = {
            dirty,
            ctx
          };
        }

        virtuallist.$set(virtuallist_changes);
      },

      i(local) {
        if (current) return;
        transition_in(virtuallist.$$.fragment, local);
        current = true;
      },

      o(local) {
        transition_out(virtuallist.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        destroy_component(virtuallist);
        /*div_binding*/

        ctx[20](null);
      }

    };
  } // (213:2) <VirtualList {items} {itemHeight} let:item let:i>


  function create_default_slot(ctx) {
    let div;
    let switch_instance;
    let current;
    let mounted;
    let dispose;
    var switch_value =
    /*Item*/
    ctx[2];

    function switch_props(ctx) {
      return {
        props: {
          item:
          /*item*/
          ctx[34],
          filterText:
          /*filterText*/
          ctx[12],
          getOptionLabel:
          /*getOptionLabel*/
          ctx[5],
          isFirst: isItemFirst(
          /*i*/
          ctx[36]),
          isActive: isItemActive(
          /*item*/
          ctx[34],
          /*selectedValue*/
          ctx[8],
          /*optionIdentifier*/
          ctx[9]),
          isHover: isItemHover(
          /*hoverItemIndex*/
          ctx[1],
          /*item*/
          ctx[34],
          /*i*/
          ctx[36],
          /*items*/
          ctx[4])
        }
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }

    function mouseover_handler() {
      return (
        /*mouseover_handler*/
        ctx[18](
        /*i*/
        ctx[36])
      );
    }

    function click_handler(...args) {
      return (
        /*click_handler*/
        ctx[19](
        /*item*/
        ctx[34],
        /*i*/
        ctx[36], ...args)
      );
    }

    return {
      c() {
        div = element("div");
        if (switch_instance) create_component(switch_instance.$$.fragment);
        attr(div, "class", "listItem");
      },

      m(target, anchor) {
        insert(target, div, anchor);

        if (switch_instance) {
          mount_component(switch_instance, div, null);
        }

        current = true;

        if (!mounted) {
          dispose = [listen(div, "mouseover", mouseover_handler), listen(div, "click", click_handler)];
          mounted = true;
        }
      },

      p(new_ctx, dirty) {
        ctx = new_ctx;
        const switch_instance_changes = {};
        if (dirty[1] &
        /*item*/
        8) switch_instance_changes.item =
        /*item*/
        ctx[34];
        if (dirty[0] &
        /*filterText*/
        4096) switch_instance_changes.filterText =
        /*filterText*/
        ctx[12];
        if (dirty[0] &
        /*getOptionLabel*/
        32) switch_instance_changes.getOptionLabel =
        /*getOptionLabel*/
        ctx[5];
        if (dirty[1] &
        /*i*/
        32) switch_instance_changes.isFirst = isItemFirst(
        /*i*/
        ctx[36]);
        if (dirty[0] &
        /*selectedValue, optionIdentifier*/
        768 | dirty[1] &
        /*item*/
        8) switch_instance_changes.isActive = isItemActive(
        /*item*/
        ctx[34],
        /*selectedValue*/
        ctx[8],
        /*optionIdentifier*/
        ctx[9]);
        if (dirty[0] &
        /*hoverItemIndex, items*/
        18 | dirty[1] &
        /*item, i*/
        40) switch_instance_changes.isHover = isItemHover(
        /*hoverItemIndex*/
        ctx[1],
        /*item*/
        ctx[34],
        /*i*/
        ctx[36],
        /*items*/
        ctx[4]);

        if (switch_value !== (switch_value =
        /*Item*/
        ctx[2])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, div, null);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },

      i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },

      o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        if (switch_instance) destroy_component(switch_instance);
        mounted = false;
        run_all(dispose);
      }

    };
  } // (232:0) {#if !isVirtualList}


  function create_if_block$2(ctx) {
    let div;
    let current;
    let each_value =
    /*items*/
    ctx[4];
    let each_blocks = [];

    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    }

    const out = i => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });

    let each_1_else = null;

    if (!each_value.length) {
      each_1_else = create_else_block_1$1(ctx);
    }

    return {
      c() {
        div = element("div");

        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }

        if (each_1_else) {
          each_1_else.c();
        }

        attr(div, "class", "listContainer svelte-ux0sbr");
      },

      m(target, anchor) {
        insert(target, div, anchor);

        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(div, null);
        }

        if (each_1_else) {
          each_1_else.m(div, null);
        }
        /*div_binding_1*/


        ctx[23](div);
        current = true;
      },

      p(ctx, dirty) {
        if (dirty[0] &
        /*getGroupHeaderLabel, items, handleHover, handleClick, Item, filterText, getOptionLabel, selectedValue, optionIdentifier, hoverItemIndex, noOptionsMessage, hideEmptyState*/
        32630) {
          each_value =
          /*items*/
          ctx[4];
          let i;

          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context$1(ctx, each_value, i);

            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block$1(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(div, null);
            }
          }

          group_outros();

          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }

          check_outros();

          if (!each_value.length && each_1_else) {
            each_1_else.p(ctx, dirty);
          } else if (!each_value.length) {
            each_1_else = create_else_block_1$1(ctx);
            each_1_else.c();
            each_1_else.m(div, null);
          } else if (each_1_else) {
            each_1_else.d(1);
            each_1_else = null;
          }
        }
      },

      i(local) {
        if (current) return;

        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }

        current = true;
      },

      o(local) {
        each_blocks = each_blocks.filter(Boolean);

        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }

        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        destroy_each(each_blocks, detaching);
        if (each_1_else) each_1_else.d();
        /*div_binding_1*/

        ctx[23](null);
      }

    };
  } // (254:2) {:else}


  function create_else_block_1$1(ctx) {
    let if_block_anchor;
    let if_block = !
    /*hideEmptyState*/
    ctx[10] && create_if_block_2$1(ctx);
    return {
      c() {
        if (if_block) if_block.c();
        if_block_anchor = empty();
      },

      m(target, anchor) {
        if (if_block) if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
      },

      p(ctx, dirty) {
        if (!
        /*hideEmptyState*/
        ctx[10]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block_2$1(ctx);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
      },

      d(detaching) {
        if (if_block) if_block.d(detaching);
        if (detaching) detach(if_block_anchor);
      }

    };
  } // (255:4) {#if !hideEmptyState}


  function create_if_block_2$1(ctx) {
    let div;
    let t;
    return {
      c() {
        div = element("div");
        t = text(
        /*noOptionsMessage*/
        ctx[11]);
        attr(div, "class", "empty svelte-ux0sbr");
      },

      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
      },

      p(ctx, dirty) {
        if (dirty[0] &
        /*noOptionsMessage*/
        2048) set_data(t,
        /*noOptionsMessage*/
        ctx[11]);
      },

      d(detaching) {
        if (detaching) detach(div);
      }

    };
  } // (237:4) { :else }


  function create_else_block$1(ctx) {
    let div;
    let switch_instance;
    let t;
    let current;
    let mounted;
    let dispose;
    var switch_value =
    /*Item*/
    ctx[2];

    function switch_props(ctx) {
      return {
        props: {
          item:
          /*item*/
          ctx[34],
          filterText:
          /*filterText*/
          ctx[12],
          getOptionLabel:
          /*getOptionLabel*/
          ctx[5],
          isFirst: isItemFirst(
          /*i*/
          ctx[36]),
          isActive: isItemActive(
          /*item*/
          ctx[34],
          /*selectedValue*/
          ctx[8],
          /*optionIdentifier*/
          ctx[9]),
          isHover: isItemHover(
          /*hoverItemIndex*/
          ctx[1],
          /*item*/
          ctx[34],
          /*i*/
          ctx[36],
          /*items*/
          ctx[4])
        }
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }

    function mouseover_handler_1() {
      return (
        /*mouseover_handler_1*/
        ctx[21](
        /*i*/
        ctx[36])
      );
    }

    function click_handler_1(...args) {
      return (
        /*click_handler_1*/
        ctx[22](
        /*item*/
        ctx[34],
        /*i*/
        ctx[36], ...args)
      );
    }

    return {
      c() {
        div = element("div");
        if (switch_instance) create_component(switch_instance.$$.fragment);
        t = space();
        attr(div, "class", "listItem");
      },

      m(target, anchor) {
        insert(target, div, anchor);

        if (switch_instance) {
          mount_component(switch_instance, div, null);
        }

        append(div, t);
        current = true;

        if (!mounted) {
          dispose = [listen(div, "mouseover", mouseover_handler_1), listen(div, "click", click_handler_1)];
          mounted = true;
        }
      },

      p(new_ctx, dirty) {
        ctx = new_ctx;
        const switch_instance_changes = {};
        if (dirty[0] &
        /*items*/
        16) switch_instance_changes.item =
        /*item*/
        ctx[34];
        if (dirty[0] &
        /*filterText*/
        4096) switch_instance_changes.filterText =
        /*filterText*/
        ctx[12];
        if (dirty[0] &
        /*getOptionLabel*/
        32) switch_instance_changes.getOptionLabel =
        /*getOptionLabel*/
        ctx[5];
        if (dirty[0] &
        /*items, selectedValue, optionIdentifier*/
        784) switch_instance_changes.isActive = isItemActive(
        /*item*/
        ctx[34],
        /*selectedValue*/
        ctx[8],
        /*optionIdentifier*/
        ctx[9]);
        if (dirty[0] &
        /*hoverItemIndex, items*/
        18) switch_instance_changes.isHover = isItemHover(
        /*hoverItemIndex*/
        ctx[1],
        /*item*/
        ctx[34],
        /*i*/
        ctx[36],
        /*items*/
        ctx[4]);

        if (switch_value !== (switch_value =
        /*Item*/
        ctx[2])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, div, t);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },

      i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },

      o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        if (switch_instance) destroy_component(switch_instance);
        mounted = false;
        run_all(dispose);
      }

    };
  } // (235:4) {#if item.isGroupHeader && !item.isSelectable}


  function create_if_block_1$1(ctx) {
    let div;
    let t_value =
    /*getGroupHeaderLabel*/
    ctx[6](
    /*item*/
    ctx[34]) + "";
    let t;
    return {
      c() {
        div = element("div");
        t = text(t_value);
        attr(div, "class", "listGroupTitle svelte-ux0sbr");
      },

      m(target, anchor) {
        insert(target, div, anchor);
        append(div, t);
      },

      p(ctx, dirty) {
        if (dirty[0] &
        /*getGroupHeaderLabel, items*/
        80 && t_value !== (t_value =
        /*getGroupHeaderLabel*/
        ctx[6](
        /*item*/
        ctx[34]) + "")) set_data(t, t_value);
      },

      i: noop$1,
      o: noop$1,

      d(detaching) {
        if (detaching) detach(div);
      }

    };
  } // (234:2) {#each items as item, i}


  function create_each_block$1(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block_1$1, create_else_block$1];
    const if_blocks = [];

    function select_block_type(ctx, dirty) {
      if (
      /*item*/
      ctx[34].isGroupHeader && !
      /*item*/
      ctx[34].isSelectable) return 0;
      return 1;
    }

    current_block_type_index = select_block_type(ctx);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },

      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },

      p(ctx, dirty) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx);

        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];

          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
            if_block.c();
          } else {
            if_block.p(ctx, dirty);
          }

          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },

      i(local) {
        if (current) return;
        transition_in(if_block);
        current = true;
      },

      o(local) {
        transition_out(if_block);
        current = false;
      },

      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching) detach(if_block_anchor);
      }

    };
  }

  function create_fragment$9(ctx) {
    let t;
    let if_block1_anchor;
    let current;
    let mounted;
    let dispose;
    let if_block0 =
    /*isVirtualList*/
    ctx[3] && create_if_block_3$1(ctx);
    let if_block1 = !
    /*isVirtualList*/
    ctx[3] && create_if_block$2(ctx);
    return {
      c() {
        if (if_block0) if_block0.c();
        t = space();
        if (if_block1) if_block1.c();
        if_block1_anchor = empty();
      },

      m(target, anchor) {
        if (if_block0) if_block0.m(target, anchor);
        insert(target, t, anchor);
        if (if_block1) if_block1.m(target, anchor);
        insert(target, if_block1_anchor, anchor);
        current = true;

        if (!mounted) {
          dispose = listen(window, "keydown",
          /*handleKeyDown*/
          ctx[15]);
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (
        /*isVirtualList*/
        ctx[3]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty[0] &
            /*isVirtualList*/
            8) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_3$1(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(t.parentNode, t);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }

        if (!
        /*isVirtualList*/
        ctx[3]) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty[0] &
            /*isVirtualList*/
            8) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block$2(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(if_block1_anchor.parentNode, if_block1_anchor);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }
      },

      i(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        current = true;
      },

      o(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        current = false;
      },

      d(detaching) {
        if (if_block0) if_block0.d(detaching);
        if (detaching) detach(t);
        if (if_block1) if_block1.d(detaching);
        if (detaching) detach(if_block1_anchor);
        mounted = false;
        dispose();
      }

    };
  }

  function isItemActive(item, selectedValue, optionIdentifier) {
    return selectedValue && selectedValue[optionIdentifier] === item[optionIdentifier];
  }

  function isItemFirst(itemIndex) {
    return itemIndex === 0;
  }

  function isItemHover(hoverItemIndex, item, itemIndex, items) {
    return hoverItemIndex === itemIndex || items.length === 1;
  }

  function instance$8($$self, $$props, $$invalidate) {
    const dispatch = createEventDispatcher();
    let {
      container = undefined
    } = $$props;
    let {
      Item: Item$1 = Item
    } = $$props;
    let {
      isVirtualList = false
    } = $$props;
    let {
      items = []
    } = $$props;
    let {
      getOptionLabel = (option, filterText) => {
        if (option) return option.isCreator ? `Create \"${filterText}\"` : option.label;
      }
    } = $$props;
    let {
      getGroupHeaderLabel = option => {
        return option.label;
      }
    } = $$props;
    let {
      itemHeight = 40
    } = $$props;
    let {
      hoverItemIndex = 0
    } = $$props;
    let {
      selectedValue = undefined
    } = $$props;
    let {
      optionIdentifier = "value"
    } = $$props;
    let {
      hideEmptyState = false
    } = $$props;
    let {
      noOptionsMessage = "No options"
    } = $$props;
    let {
      isMulti = false
    } = $$props;
    let {
      activeItemIndex = 0
    } = $$props;
    let {
      filterText = ""
    } = $$props;
    let isScrollingTimer = 0;
    let isScrolling = false;
    let prev_items;
    onMount(() => {
      if (items.length > 0 && !isMulti && selectedValue) {
        const _hoverItemIndex = items.findIndex(item => item[optionIdentifier] === selectedValue[optionIdentifier]);

        if (_hoverItemIndex) {
          $$invalidate(1, hoverItemIndex = _hoverItemIndex);
        }
      }

      scrollToActiveItem("active");
      container.addEventListener("scroll", () => {
        clearTimeout(isScrollingTimer);
        isScrollingTimer = setTimeout(() => {
          isScrolling = false;
        }, 100);
      }, false);
    });
    onDestroy(() => {}); // clearTimeout(isScrollingTimer);

    beforeUpdate(() => {
      if (items !== prev_items && items.length > 0) {
        $$invalidate(1, hoverItemIndex = 0);
      } // if (prev_activeItemIndex && activeItemIndex > -1) {
      //   hoverItemIndex = activeItemIndex;
      //   scrollToActiveItem('active');
      // }
      // if (prev_selectedValue && selectedValue) {
      //   scrollToActiveItem('active');
      //   if (items && !isMulti) {
      //     const hoverItemIndex = items.findIndex((item) => item[optionIdentifier] === selectedValue[optionIdentifier]);
      //     if (hoverItemIndex) {
      //       hoverItemIndex = hoverItemIndex;
      //     }
      //   }
      // }


      prev_items = items;
    });

    function handleSelect(item) {
      if (item.isCreator) return;
      dispatch("itemSelected", item);
    }

    function handleHover(i) {
      if (isScrolling) return;
      $$invalidate(1, hoverItemIndex = i);
    }

    function handleClick(args) {
      const {
        item,
        i,
        event
      } = args;
      event.stopPropagation();
      if (selectedValue && !isMulti && selectedValue[optionIdentifier] === item[optionIdentifier]) return closeList();

      if (item.isCreator) {
        dispatch("itemCreated", filterText);
      } else {
        $$invalidate(16, activeItemIndex = i);
        $$invalidate(1, hoverItemIndex = i);
        handleSelect(item);
      }
    }

    function closeList() {
      dispatch("closeList");
    }

    async function updateHoverItem(increment) {
      if (isVirtualList) return;
      let isNonSelectableItem = true;

      while (isNonSelectableItem) {
        if (increment > 0 && hoverItemIndex === items.length - 1) {
          $$invalidate(1, hoverItemIndex = 0);
        } else if (increment < 0 && hoverItemIndex === 0) {
          $$invalidate(1, hoverItemIndex = items.length - 1);
        } else {
          $$invalidate(1, hoverItemIndex = hoverItemIndex + increment);
        }

        isNonSelectableItem = items[hoverItemIndex].isGroupHeader && !items[hoverItemIndex].isSelectable;
      }

      await tick();
      scrollToActiveItem("hover");
    }

    function handleKeyDown(e) {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          items.length && updateHoverItem(1);
          break;

        case "ArrowUp":
          e.preventDefault();
          items.length && updateHoverItem(-1);
          break;

        case "Enter":
          e.preventDefault();
          if (items.length === 0) break;
          const hoverItem = items[hoverItemIndex];

          if (selectedValue && !isMulti && selectedValue[optionIdentifier] === hoverItem[optionIdentifier]) {
            closeList();
            break;
          }

          if (hoverItem.isCreator) {
            dispatch("itemCreated", filterText);
          } else {
            $$invalidate(16, activeItemIndex = hoverItemIndex);
            handleSelect(items[hoverItemIndex]);
          }

          break;

        case "Tab":
          e.preventDefault();
          if (items.length === 0) break;
          if (selectedValue && selectedValue[optionIdentifier] === items[hoverItemIndex][optionIdentifier]) return closeList();
          $$invalidate(16, activeItemIndex = hoverItemIndex);
          handleSelect(items[hoverItemIndex]);
          break;
      }
    }

    function scrollToActiveItem(className) {
      if (isVirtualList || !container) return;
      let offsetBounding;
      const focusedElemBounding = container.querySelector(`.listItem .${className}`);

      if (focusedElemBounding) {
        offsetBounding = container.getBoundingClientRect().bottom - focusedElemBounding.getBoundingClientRect().bottom;
      }

      $$invalidate(0, container.scrollTop -= offsetBounding, container);
    }

    const mouseover_handler = i => handleHover(i);

    const click_handler = (item, i, event) => handleClick({
      item,
      i,
      event
    });

    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        container = $$value;
        $$invalidate(0, container);
      });
    }

    const mouseover_handler_1 = i => handleHover(i);

    const click_handler_1 = (item, i, event) => handleClick({
      item,
      i,
      event
    });

    function div_binding_1($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        container = $$value;
        $$invalidate(0, container);
      });
    }

    $$self.$$set = $$props => {
      if ("container" in $$props) $$invalidate(0, container = $$props.container);
      if ("Item" in $$props) $$invalidate(2, Item$1 = $$props.Item);
      if ("isVirtualList" in $$props) $$invalidate(3, isVirtualList = $$props.isVirtualList);
      if ("items" in $$props) $$invalidate(4, items = $$props.items);
      if ("getOptionLabel" in $$props) $$invalidate(5, getOptionLabel = $$props.getOptionLabel);
      if ("getGroupHeaderLabel" in $$props) $$invalidate(6, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
      if ("itemHeight" in $$props) $$invalidate(7, itemHeight = $$props.itemHeight);
      if ("hoverItemIndex" in $$props) $$invalidate(1, hoverItemIndex = $$props.hoverItemIndex);
      if ("selectedValue" in $$props) $$invalidate(8, selectedValue = $$props.selectedValue);
      if ("optionIdentifier" in $$props) $$invalidate(9, optionIdentifier = $$props.optionIdentifier);
      if ("hideEmptyState" in $$props) $$invalidate(10, hideEmptyState = $$props.hideEmptyState);
      if ("noOptionsMessage" in $$props) $$invalidate(11, noOptionsMessage = $$props.noOptionsMessage);
      if ("isMulti" in $$props) $$invalidate(17, isMulti = $$props.isMulti);
      if ("activeItemIndex" in $$props) $$invalidate(16, activeItemIndex = $$props.activeItemIndex);
      if ("filterText" in $$props) $$invalidate(12, filterText = $$props.filterText);
    };

    return [container, hoverItemIndex, Item$1, isVirtualList, items, getOptionLabel, getGroupHeaderLabel, itemHeight, selectedValue, optionIdentifier, hideEmptyState, noOptionsMessage, filterText, handleHover, handleClick, handleKeyDown, activeItemIndex, isMulti, mouseover_handler, click_handler, div_binding, mouseover_handler_1, click_handler_1, div_binding_1];
  }

  class List extends SvelteComponent {
    constructor(options) {
      super();
      if (!document.getElementById("svelte-ux0sbr-style")) add_css$3();
      init$1(this, options, instance$8, create_fragment$9, safe_not_equal, {
        container: 0,
        Item: 2,
        isVirtualList: 3,
        items: 4,
        getOptionLabel: 5,
        getGroupHeaderLabel: 6,
        itemHeight: 7,
        hoverItemIndex: 1,
        selectedValue: 8,
        optionIdentifier: 9,
        hideEmptyState: 10,
        noOptionsMessage: 11,
        isMulti: 17,
        activeItemIndex: 16,
        filterText: 12
      }, [-1, -1]);
    }

  }

  /* node_modules/svelte-select/src/Selection.svelte generated by Svelte v3.38.3 */

  function add_css$2() {
    var style = element("style");
    style.id = "svelte-ch6bh7-style";
    style.textContent = ".selection.svelte-ch6bh7{text-overflow:ellipsis;overflow-x:hidden;white-space:nowrap}";
    append(document.head, style);
  }

  function create_fragment$8(ctx) {
    let div;
    let raw_value =
    /*getSelectionLabel*/
    ctx[0](
    /*item*/
    ctx[1]) + "";
    return {
      c() {
        div = element("div");
        attr(div, "class", "selection svelte-ch6bh7");
      },

      m(target, anchor) {
        insert(target, div, anchor);
        div.innerHTML = raw_value;
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*getSelectionLabel, item*/
        3 && raw_value !== (raw_value =
        /*getSelectionLabel*/
        ctx[0](
        /*item*/
        ctx[1]) + "")) div.innerHTML = raw_value;
      },

      i: noop$1,
      o: noop$1,

      d(detaching) {
        if (detaching) detach(div);
      }

    };
  }

  function instance$7($$self, $$props, $$invalidate) {
    let {
      getSelectionLabel = undefined
    } = $$props;
    let {
      item = undefined
    } = $$props;

    $$self.$$set = $$props => {
      if ("getSelectionLabel" in $$props) $$invalidate(0, getSelectionLabel = $$props.getSelectionLabel);
      if ("item" in $$props) $$invalidate(1, item = $$props.item);
    };

    return [getSelectionLabel, item];
  }

  class Selection extends SvelteComponent {
    constructor(options) {
      super();
      if (!document.getElementById("svelte-ch6bh7-style")) add_css$2();
      init$1(this, options, instance$7, create_fragment$8, safe_not_equal, {
        getSelectionLabel: 0,
        item: 1
      });
    }

  }

  /* node_modules/svelte-select/src/MultiSelection.svelte generated by Svelte v3.38.3 */

  function add_css$1() {
    var style = element("style");
    style.id = "svelte-14r1jr2-style";
    style.textContent = ".multiSelectItem.svelte-14r1jr2.svelte-14r1jr2{background:var(--multiItemBG, #EBEDEF);margin:var(--multiItemMargin, 5px 5px 0 0);border-radius:var(--multiItemBorderRadius, 16px);height:var(--multiItemHeight, 32px);line-height:var(--multiItemHeight, 32px);display:flex;cursor:default;padding:var(--multiItemPadding, 0 10px 0 15px);max-width:100%}.multiSelectItem_label.svelte-14r1jr2.svelte-14r1jr2{margin:var(--multiLabelMargin, 0 5px 0 0);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.multiSelectItem.svelte-14r1jr2.svelte-14r1jr2:hover,.multiSelectItem.active.svelte-14r1jr2.svelte-14r1jr2{background-color:var(--multiItemActiveBG, #006FFF);color:var(--multiItemActiveColor, #fff)}.multiSelectItem.disabled.svelte-14r1jr2.svelte-14r1jr2:hover{background:var(--multiItemDisabledHoverBg, #EBEDEF);color:var(--multiItemDisabledHoverColor, #C1C6CC)}.multiSelectItem_clear.svelte-14r1jr2.svelte-14r1jr2{border-radius:var(--multiClearRadius, 50%);background:var(--multiClearBG, #52616F);min-width:var(--multiClearWidth, 16px);max-width:var(--multiClearWidth, 16px);height:var(--multiClearHeight, 16px);position:relative;top:var(--multiClearTop, 8px);text-align:var(--multiClearTextAlign, center);padding:var(--multiClearPadding, 1px)}.multiSelectItem_clear.svelte-14r1jr2.svelte-14r1jr2:hover,.active.svelte-14r1jr2 .multiSelectItem_clear.svelte-14r1jr2{background:var(--multiClearHoverBG, #fff)}.multiSelectItem_clear.svelte-14r1jr2:hover svg.svelte-14r1jr2,.active.svelte-14r1jr2 .multiSelectItem_clear svg.svelte-14r1jr2{fill:var(--multiClearHoverFill, #006FFF)}.multiSelectItem_clear.svelte-14r1jr2 svg.svelte-14r1jr2{fill:var(--multiClearFill, #EBEDEF);vertical-align:top}";
    append(document.head, style);
  }

  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    child_ctx[11] = i;
    return child_ctx;
  } // (23:2) {#if !isDisabled && !multiFullItemClearable}


  function create_if_block$1(ctx) {
    let div;
    let mounted;
    let dispose;

    function click_handler(...args) {
      return (
        /*click_handler*/
        ctx[6](
        /*i*/
        ctx[11], ...args)
      );
    }

    return {
      c() {
        div = element("div");
        div.innerHTML = `<svg width="100%" height="100%" viewBox="-2 -2 50 50" focusable="false" role="presentation" class="svelte-14r1jr2"><path d="M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124 l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z"></path></svg>`;
        attr(div, "class", "multiSelectItem_clear svelte-14r1jr2");
      },

      m(target, anchor) {
        insert(target, div, anchor);

        if (!mounted) {
          dispose = listen(div, "click", click_handler);
          mounted = true;
        }
      },

      p(new_ctx, dirty) {
        ctx = new_ctx;
      },

      d(detaching) {
        if (detaching) detach(div);
        mounted = false;
        dispose();
      }

    };
  } // (18:0) {#each selectedValue as value, i}


  function create_each_block(ctx) {
    let div1;
    let div0;
    let raw_value =
    /*getSelectionLabel*/
    ctx[4](
    /*value*/
    ctx[9]) + "";
    let t0;
    let t1;
    let div1_class_value;
    let mounted;
    let dispose;
    let if_block = !
    /*isDisabled*/
    ctx[2] && !
    /*multiFullItemClearable*/
    ctx[3] && create_if_block$1(ctx);

    function click_handler_1(...args) {
      return (
        /*click_handler_1*/
        ctx[7](
        /*i*/
        ctx[11], ...args)
      );
    }

    return {
      c() {
        div1 = element("div");
        div0 = element("div");
        t0 = space();
        if (if_block) if_block.c();
        t1 = space();
        attr(div0, "class", "multiSelectItem_label svelte-14r1jr2");
        attr(div1, "class", div1_class_value = "multiSelectItem " + (
        /*activeSelectedValue*/
        ctx[1] ===
        /*i*/
        ctx[11] ? "active" : "") + " " + (
        /*isDisabled*/
        ctx[2] ? "disabled" : "") + " svelte-14r1jr2");
      },

      m(target, anchor) {
        insert(target, div1, anchor);
        append(div1, div0);
        div0.innerHTML = raw_value;
        append(div1, t0);
        if (if_block) if_block.m(div1, null);
        append(div1, t1);

        if (!mounted) {
          dispose = listen(div1, "click", click_handler_1);
          mounted = true;
        }
      },

      p(new_ctx, dirty) {
        ctx = new_ctx;
        if (dirty &
        /*getSelectionLabel, selectedValue*/
        17 && raw_value !== (raw_value =
        /*getSelectionLabel*/
        ctx[4](
        /*value*/
        ctx[9]) + "")) div0.innerHTML = raw_value;

        if (!
        /*isDisabled*/
        ctx[2] && !
        /*multiFullItemClearable*/
        ctx[3]) {
          if (if_block) {
            if_block.p(ctx, dirty);
          } else {
            if_block = create_if_block$1(ctx);
            if_block.c();
            if_block.m(div1, t1);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }

        if (dirty &
        /*activeSelectedValue, isDisabled*/
        6 && div1_class_value !== (div1_class_value = "multiSelectItem " + (
        /*activeSelectedValue*/
        ctx[1] ===
        /*i*/
        ctx[11] ? "active" : "") + " " + (
        /*isDisabled*/
        ctx[2] ? "disabled" : "") + " svelte-14r1jr2")) {
          attr(div1, "class", div1_class_value);
        }
      },

      d(detaching) {
        if (detaching) detach(div1);
        if (if_block) if_block.d();
        mounted = false;
        dispose();
      }

    };
  }

  function create_fragment$7(ctx) {
    let each_1_anchor;
    let each_value =
    /*selectedValue*/
    ctx[0];
    let each_blocks = [];

    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }

    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }

        each_1_anchor = empty();
      },

      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }

        insert(target, each_1_anchor, anchor);
      },

      p(ctx, [dirty]) {
        if (dirty &
        /*activeSelectedValue, isDisabled, multiFullItemClearable, handleClear, getSelectionLabel, selectedValue*/
        63) {
          each_value =
          /*selectedValue*/
          ctx[0];
          let i;

          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx, each_value, i);

            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }

          for (; i < each_blocks.length; i += 1) {
            each_blocks[i].d(1);
          }

          each_blocks.length = each_value.length;
        }
      },

      i: noop$1,
      o: noop$1,

      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching) detach(each_1_anchor);
      }

    };
  }

  function instance$6($$self, $$props, $$invalidate) {
    const dispatch = createEventDispatcher();
    let {
      selectedValue = []
    } = $$props;
    let {
      activeSelectedValue = undefined
    } = $$props;
    let {
      isDisabled = false
    } = $$props;
    let {
      multiFullItemClearable = false
    } = $$props;
    let {
      getSelectionLabel = undefined
    } = $$props;

    function handleClear(i, event) {
      event.stopPropagation();
      dispatch("multiItemClear", {
        i
      });
    }

    const click_handler = (i, event) => handleClear(i, event);

    const click_handler_1 = (i, event) => multiFullItemClearable ? handleClear(i, event) : {};

    $$self.$$set = $$props => {
      if ("selectedValue" in $$props) $$invalidate(0, selectedValue = $$props.selectedValue);
      if ("activeSelectedValue" in $$props) $$invalidate(1, activeSelectedValue = $$props.activeSelectedValue);
      if ("isDisabled" in $$props) $$invalidate(2, isDisabled = $$props.isDisabled);
      if ("multiFullItemClearable" in $$props) $$invalidate(3, multiFullItemClearable = $$props.multiFullItemClearable);
      if ("getSelectionLabel" in $$props) $$invalidate(4, getSelectionLabel = $$props.getSelectionLabel);
    };

    return [selectedValue, activeSelectedValue, isDisabled, multiFullItemClearable, getSelectionLabel, handleClear, click_handler, click_handler_1];
  }

  class MultiSelection extends SvelteComponent {
    constructor(options) {
      super();
      if (!document.getElementById("svelte-14r1jr2-style")) add_css$1();
      init$1(this, options, instance$6, create_fragment$7, safe_not_equal, {
        selectedValue: 0,
        activeSelectedValue: 1,
        isDisabled: 2,
        multiFullItemClearable: 3,
        getSelectionLabel: 4
      });
    }

  }

  function isOutOfViewport (elem) {
    const bounding = elem.getBoundingClientRect();
    const out = {};
    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);
    out.any = out.top || out.left || out.bottom || out.right;
    return out;
  }

  function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
      let context = this;
      let args = arguments;

      let later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  /* node_modules/svelte-select/src/ClearIcon.svelte generated by Svelte v3.38.3 */

  function create_fragment$6(ctx) {
    let svg;
    let path;
    return {
      c() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr(path, "fill", "currentColor");
        attr(path, "d", "M34.923,37.251L24,26.328L13.077,37.251L9.436,33.61l10.923-10.923L9.436,11.765l3.641-3.641L24,19.047L34.923,8.124\n    l3.641,3.641L27.641,22.688L38.564,33.61L34.923,37.251z");
        attr(svg, "width", "100%");
        attr(svg, "height", "100%");
        attr(svg, "viewBox", "-2 -2 50 50");
        attr(svg, "focusable", "false");
        attr(svg, "role", "presentation");
      },

      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, path);
      },

      p: noop$1,
      i: noop$1,
      o: noop$1,

      d(detaching) {
        if (detaching) detach(svg);
      }

    };
  }

  class ClearIcon extends SvelteComponent {
    constructor(options) {
      super();
      init$1(this, options, null, create_fragment$6, safe_not_equal, {});
    }

  }

  /* node_modules/svelte-select/src/Select.svelte generated by Svelte v3.38.3 */
  const {
    document: document_1
  } = globals;

  function add_css() {
    var style = element("style");
    style.id = "svelte-17qb5ew-style";
    style.textContent = ".selectContainer.svelte-17qb5ew.svelte-17qb5ew{--padding:0 16px;border:var(--border, 1px solid #d8dbdf);border-radius:var(--borderRadius, 3px);height:var(--height, 42px);position:relative;display:flex;align-items:center;padding:var(--padding);background:var(--background, #fff)}.selectContainer.svelte-17qb5ew input.svelte-17qb5ew{cursor:default;border:none;color:var(--inputColor, #3f4f5f);height:var(--height, 42px);line-height:var(--height, 42px);padding:var(--inputPadding, var(--padding));width:100%;background:transparent;font-size:var(--inputFontSize, 14px);letter-spacing:var(--inputLetterSpacing, -0.08px);position:absolute;left:var(--inputLeft, 0)}.selectContainer.svelte-17qb5ew input.svelte-17qb5ew::placeholder{color:var(--placeholderColor, #78848f);opacity:var(--placeholderOpacity, 1)}.selectContainer.svelte-17qb5ew input.svelte-17qb5ew:focus{outline:none}.selectContainer.svelte-17qb5ew.svelte-17qb5ew:hover{border-color:var(--borderHoverColor, #b2b8bf)}.selectContainer.focused.svelte-17qb5ew.svelte-17qb5ew{border-color:var(--borderFocusColor, #006fe8)}.selectContainer.disabled.svelte-17qb5ew.svelte-17qb5ew{background:var(--disabledBackground, #ebedef);border-color:var(--disabledBorderColor, #ebedef);color:var(--disabledColor, #c1c6cc)}.selectContainer.disabled.svelte-17qb5ew input.svelte-17qb5ew::placeholder{color:var(--disabledPlaceholderColor, #c1c6cc);opacity:var(--disabledPlaceholderOpacity, 1)}.selectedItem.svelte-17qb5ew.svelte-17qb5ew{line-height:var(--height, 42px);height:var(--height, 42px);overflow-x:hidden;padding:var(--selectedItemPadding, 0 20px 0 0)}.selectedItem.svelte-17qb5ew.svelte-17qb5ew:focus{outline:none}.clearSelect.svelte-17qb5ew.svelte-17qb5ew{position:absolute;right:var(--clearSelectRight, 10px);top:var(--clearSelectTop, 11px);bottom:var(--clearSelectBottom, 11px);width:var(--clearSelectWidth, 20px);color:var(--clearSelectColor, #c5cacf);flex:none !important}.clearSelect.svelte-17qb5ew.svelte-17qb5ew:hover{color:var(--clearSelectHoverColor, #2c3e50)}.selectContainer.focused.svelte-17qb5ew .clearSelect.svelte-17qb5ew{color:var(--clearSelectFocusColor, #3f4f5f)}.indicator.svelte-17qb5ew.svelte-17qb5ew{position:absolute;right:var(--indicatorRight, 10px);top:var(--indicatorTop, 11px);width:var(--indicatorWidth, 20px);height:var(--indicatorHeight, 20px);color:var(--indicatorColor, #c5cacf)}.indicator.svelte-17qb5ew svg.svelte-17qb5ew{display:inline-block;fill:var(--indicatorFill, currentcolor);line-height:1;stroke:var(--indicatorStroke, currentcolor);stroke-width:0}.spinner.svelte-17qb5ew.svelte-17qb5ew{position:absolute;right:var(--spinnerRight, 10px);top:var(--spinnerLeft, 11px);width:var(--spinnerWidth, 20px);height:var(--spinnerHeight, 20px);color:var(--spinnerColor, #51ce6c);animation:svelte-17qb5ew-rotate 0.75s linear infinite}.spinner_icon.svelte-17qb5ew.svelte-17qb5ew{display:block;height:100%;transform-origin:center center;width:100%;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;-webkit-transform:none}.spinner_path.svelte-17qb5ew.svelte-17qb5ew{stroke-dasharray:90;stroke-linecap:round}.multiSelect.svelte-17qb5ew.svelte-17qb5ew{display:flex;padding:var(--multiSelectPadding, 0 35px 0 16px);height:auto;flex-wrap:wrap;align-items:stretch}.multiSelect.svelte-17qb5ew>.svelte-17qb5ew{flex:1 1 50px}.selectContainer.multiSelect.svelte-17qb5ew input.svelte-17qb5ew{padding:var(--multiSelectInputPadding, 0);position:relative;margin:var(--multiSelectInputMargin, 0)}.hasError.svelte-17qb5ew.svelte-17qb5ew{border:var(--errorBorder, 1px solid #ff2d55);background:var(--errorBackground, #fff)}@keyframes svelte-17qb5ew-rotate{100%{transform:rotate(360deg)}}";
    append(document_1.head, style);
  } // (827:2) {#if Icon}


  function create_if_block_7(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    const switch_instance_spread_levels = [
    /*iconProps*/
    ctx[18]];
    var switch_value =
    /*Icon*/
    ctx[17];

    function switch_props(ctx) {
      let switch_instance_props = {};

      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign$1(switch_instance_props, switch_instance_spread_levels[i]);
      }

      return {
        props: switch_instance_props
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props());
    }

    return {
      c() {
        if (switch_instance) create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },

      m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }

        insert(target, switch_instance_anchor, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const switch_instance_changes = dirty[0] &
        /*iconProps*/
        262144 ? get_spread_update(switch_instance_spread_levels, [get_spread_object(
        /*iconProps*/
        ctx[18])]) : {};

        if (switch_value !== (switch_value =
        /*Icon*/
        ctx[17])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props());
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },

      i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },

      o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(switch_instance_anchor);
        if (switch_instance) destroy_component(switch_instance, detaching);
      }

    };
  } // (831:2) {#if isMulti && selectedValue && selectedValue.length > 0}


  function create_if_block_6(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value =
    /*MultiSelection*/
    ctx[7];

    function switch_props(ctx) {
      return {
        props: {
          selectedValue:
          /*selectedValue*/
          ctx[0],
          getSelectionLabel:
          /*getSelectionLabel*/
          ctx[13],
          activeSelectedValue:
          /*activeSelectedValue*/
          ctx[25],
          isDisabled:
          /*isDisabled*/
          ctx[10],
          multiFullItemClearable:
          /*multiFullItemClearable*/
          ctx[9]
        }
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
      switch_instance.$on("multiItemClear",
      /*handleMultiItemClear*/
      ctx[29]);
      switch_instance.$on("focus",
      /*handleFocus*/
      ctx[32]);
    }

    return {
      c() {
        if (switch_instance) create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },

      m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }

        insert(target, switch_instance_anchor, anchor);
        current = true;
      },

      p(ctx, dirty) {
        const switch_instance_changes = {};
        if (dirty[0] &
        /*selectedValue*/
        1) switch_instance_changes.selectedValue =
        /*selectedValue*/
        ctx[0];
        if (dirty[0] &
        /*getSelectionLabel*/
        8192) switch_instance_changes.getSelectionLabel =
        /*getSelectionLabel*/
        ctx[13];
        if (dirty[0] &
        /*activeSelectedValue*/
        33554432) switch_instance_changes.activeSelectedValue =
        /*activeSelectedValue*/
        ctx[25];
        if (dirty[0] &
        /*isDisabled*/
        1024) switch_instance_changes.isDisabled =
        /*isDisabled*/
        ctx[10];
        if (dirty[0] &
        /*multiFullItemClearable*/
        512) switch_instance_changes.multiFullItemClearable =
        /*multiFullItemClearable*/
        ctx[9];

        if (switch_value !== (switch_value =
        /*MultiSelection*/
        ctx[7])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx));
            switch_instance.$on("multiItemClear",
            /*handleMultiItemClear*/
            ctx[29]);
            switch_instance.$on("focus",
            /*handleFocus*/
            ctx[32]);
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },

      i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },

      o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(switch_instance_anchor);
        if (switch_instance) destroy_component(switch_instance, detaching);
      }

    };
  } // (852:2) {:else}


  function create_else_block_1(ctx) {
    let input_1;
    let mounted;
    let dispose;
    let input_1_levels = [
    /*_inputAttributes*/
    ctx[26], {
      placeholder:
      /*placeholderText*/
      ctx[28]
    }, {
      style:
      /*inputStyles*/
      ctx[15]
    }];
    let input_1_data = {};

    for (let i = 0; i < input_1_levels.length; i += 1) {
      input_1_data = assign$1(input_1_data, input_1_levels[i]);
    }

    return {
      c() {
        input_1 = element("input");
        set_attributes(input_1, input_1_data);
        toggle_class(input_1, "svelte-17qb5ew", true);
      },

      m(target, anchor) {
        insert(target, input_1, anchor);
        /*input_1_binding_1*/

        ctx[63](input_1);
        set_input_value(input_1,
        /*filterText*/
        ctx[1]);

        if (!mounted) {
          dispose = [listen(input_1, "focus",
          /*handleFocus*/
          ctx[32]), listen(input_1, "input",
          /*input_1_input_handler_1*/
          ctx[64])];
          mounted = true;
        }
      },

      p(ctx, dirty) {
        set_attributes(input_1, input_1_data = get_spread_update(input_1_levels, [dirty[0] &
        /*_inputAttributes*/
        67108864 &&
        /*_inputAttributes*/
        ctx[26], dirty[0] &
        /*placeholderText*/
        268435456 && {
          placeholder:
          /*placeholderText*/
          ctx[28]
        }, dirty[0] &
        /*inputStyles*/
        32768 && {
          style:
          /*inputStyles*/
          ctx[15]
        }]));

        if (dirty[0] &
        /*filterText*/
        2 && input_1.value !==
        /*filterText*/
        ctx[1]) {
          set_input_value(input_1,
          /*filterText*/
          ctx[1]);
        }

        toggle_class(input_1, "svelte-17qb5ew", true);
      },

      d(detaching) {
        if (detaching) detach(input_1);
        /*input_1_binding_1*/

        ctx[63](null);
        mounted = false;
        run_all(dispose);
      }

    };
  } // (843:2) {#if isDisabled}


  function create_if_block_5(ctx) {
    let input_1;
    let mounted;
    let dispose;
    let input_1_levels = [
    /*_inputAttributes*/
    ctx[26], {
      placeholder:
      /*placeholderText*/
      ctx[28]
    }, {
      style:
      /*inputStyles*/
      ctx[15]
    }, {
      disabled: true
    }];
    let input_1_data = {};

    for (let i = 0; i < input_1_levels.length; i += 1) {
      input_1_data = assign$1(input_1_data, input_1_levels[i]);
    }

    return {
      c() {
        input_1 = element("input");
        set_attributes(input_1, input_1_data);
        toggle_class(input_1, "svelte-17qb5ew", true);
      },

      m(target, anchor) {
        insert(target, input_1, anchor);
        /*input_1_binding*/

        ctx[61](input_1);
        set_input_value(input_1,
        /*filterText*/
        ctx[1]);

        if (!mounted) {
          dispose = [listen(input_1, "focus",
          /*handleFocus*/
          ctx[32]), listen(input_1, "input",
          /*input_1_input_handler*/
          ctx[62])];
          mounted = true;
        }
      },

      p(ctx, dirty) {
        set_attributes(input_1, input_1_data = get_spread_update(input_1_levels, [dirty[0] &
        /*_inputAttributes*/
        67108864 &&
        /*_inputAttributes*/
        ctx[26], dirty[0] &
        /*placeholderText*/
        268435456 && {
          placeholder:
          /*placeholderText*/
          ctx[28]
        }, dirty[0] &
        /*inputStyles*/
        32768 && {
          style:
          /*inputStyles*/
          ctx[15]
        }, {
          disabled: true
        }]));

        if (dirty[0] &
        /*filterText*/
        2 && input_1.value !==
        /*filterText*/
        ctx[1]) {
          set_input_value(input_1,
          /*filterText*/
          ctx[1]);
        }

        toggle_class(input_1, "svelte-17qb5ew", true);
      },

      d(detaching) {
        if (detaching) detach(input_1);
        /*input_1_binding*/

        ctx[61](null);
        mounted = false;
        run_all(dispose);
      }

    };
  } // (862:2) {#if !isMulti && showSelectedItem}


  function create_if_block_4(ctx) {
    let div;
    let switch_instance;
    let current;
    let mounted;
    let dispose;
    var switch_value =
    /*Selection*/
    ctx[6];

    function switch_props(ctx) {
      return {
        props: {
          item:
          /*selectedValue*/
          ctx[0],
          getSelectionLabel:
          /*getSelectionLabel*/
          ctx[13]
        }
      };
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
    }

    return {
      c() {
        div = element("div");
        if (switch_instance) create_component(switch_instance.$$.fragment);
        attr(div, "class", "selectedItem svelte-17qb5ew");
      },

      m(target, anchor) {
        insert(target, div, anchor);

        if (switch_instance) {
          mount_component(switch_instance, div, null);
        }

        current = true;

        if (!mounted) {
          dispose = listen(div, "focus",
          /*handleFocus*/
          ctx[32]);
          mounted = true;
        }
      },

      p(ctx, dirty) {
        const switch_instance_changes = {};
        if (dirty[0] &
        /*selectedValue*/
        1) switch_instance_changes.item =
        /*selectedValue*/
        ctx[0];
        if (dirty[0] &
        /*getSelectionLabel*/
        8192) switch_instance_changes.getSelectionLabel =
        /*getSelectionLabel*/
        ctx[13];

        if (switch_value !== (switch_value =
        /*Selection*/
        ctx[6])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx));
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, div, null);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },

      i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },

      o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        if (switch_instance) destroy_component(switch_instance);
        mounted = false;
        dispose();
      }

    };
  } // (871:2) {#if showSelectedItem && isClearable && !isDisabled && !isWaiting}


  function create_if_block_3(ctx) {
    let div;
    let switch_instance;
    let current;
    let mounted;
    let dispose;
    var switch_value =
    /*ClearIcon*/
    ctx[23];

    function switch_props(ctx) {
      return {};
    }

    if (switch_value) {
      switch_instance = new switch_value(switch_props());
    }

    return {
      c() {
        div = element("div");
        if (switch_instance) create_component(switch_instance.$$.fragment);
        attr(div, "class", "clearSelect svelte-17qb5ew");
      },

      m(target, anchor) {
        insert(target, div, anchor);

        if (switch_instance) {
          mount_component(switch_instance, div, null);
        }

        current = true;

        if (!mounted) {
          dispose = listen(div, "click", prevent_default(
          /*handleClear*/
          ctx[24]));
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (switch_value !== (switch_value =
        /*ClearIcon*/
        ctx[23])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }

          if (switch_value) {
            switch_instance = new switch_value(switch_props());
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, div, null);
          } else {
            switch_instance = null;
          }
        }
      },

      i(local) {
        if (current) return;
        if (switch_instance) transition_in(switch_instance.$$.fragment, local);
        current = true;
      },

      o(local) {
        if (switch_instance) transition_out(switch_instance.$$.fragment, local);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        if (switch_instance) destroy_component(switch_instance);
        mounted = false;
        dispose();
      }

    };
  } // (877:2) {#if showIndicator || (showChevron && !selectedValue || (!isSearchable && !isDisabled && !isWaiting && ((showSelectedItem && !isClearable) || !showSelectedItem)))}


  function create_if_block_1(ctx) {
    let div;

    function select_block_type_1(ctx, dirty) {
      if (
      /*indicatorSvg*/
      ctx[22]) return create_if_block_2;
      return create_else_block;
    }

    let current_block_type = select_block_type_1(ctx);
    let if_block = current_block_type(ctx);
    return {
      c() {
        div = element("div");
        if_block.c();
        attr(div, "class", "indicator svelte-17qb5ew");
      },

      m(target, anchor) {
        insert(target, div, anchor);
        if_block.m(div, null);
      },

      p(ctx, dirty) {
        if (current_block_type === (current_block_type = select_block_type_1(ctx)) && if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block.d(1);
          if_block = current_block_type(ctx);

          if (if_block) {
            if_block.c();
            if_block.m(div, null);
          }
        }
      },

      d(detaching) {
        if (detaching) detach(div);
        if_block.d();
      }

    };
  } // (881:6) {:else}


  function create_else_block(ctx) {
    let svg;
    let path;
    return {
      c() {
        svg = svg_element("svg");
        path = svg_element("path");
        attr(path, "d", "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747\n            3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0\n            1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502\n            0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0\n            0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z");
        attr(svg, "width", "100%");
        attr(svg, "height", "100%");
        attr(svg, "viewBox", "0 0 20 20");
        attr(svg, "focusable", "false");
        attr(svg, "class", "svelte-17qb5ew");
      },

      m(target, anchor) {
        insert(target, svg, anchor);
        append(svg, path);
      },

      p: noop$1,

      d(detaching) {
        if (detaching) detach(svg);
      }

    };
  } // (879:6) {#if indicatorSvg}


  function create_if_block_2(ctx) {
    let html_tag;
    let html_anchor;
    return {
      c() {
        html_tag = new HtmlTag();
        html_anchor = empty();
        html_tag.a = html_anchor;
      },

      m(target, anchor) {
        html_tag.m(
        /*indicatorSvg*/
        ctx[22], target, anchor);
        insert(target, html_anchor, anchor);
      },

      p(ctx, dirty) {
        if (dirty[0] &
        /*indicatorSvg*/
        4194304) html_tag.p(
        /*indicatorSvg*/
        ctx[22]);
      },

      d(detaching) {
        if (detaching) detach(html_anchor);
        if (detaching) html_tag.d();
      }

    };
  } // (898:2) {#if isWaiting}


  function create_if_block(ctx) {
    let div;
    return {
      c() {
        div = element("div");
        div.innerHTML = `<svg class="spinner_icon svelte-17qb5ew" viewBox="25 25 50 50"><circle class="spinner_path svelte-17qb5ew" cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="5" stroke-miterlimit="10"></circle></svg>`;
        attr(div, "class", "spinner svelte-17qb5ew");
      },

      m(target, anchor) {
        insert(target, div, anchor);
      },

      d(detaching) {
        if (detaching) detach(div);
      }

    };
  }

  function create_fragment$5(ctx) {
    let div;
    let t0;
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    let div_class_value;
    let current;
    let mounted;
    let dispose;
    let if_block0 =
    /*Icon*/
    ctx[17] && create_if_block_7(ctx);
    let if_block1 =
    /*isMulti*/
    ctx[8] &&
    /*selectedValue*/
    ctx[0] &&
    /*selectedValue*/
    ctx[0].length > 0 && create_if_block_6(ctx);

    function select_block_type(ctx, dirty) {
      if (
      /*isDisabled*/
      ctx[10]) return create_if_block_5;
      return create_else_block_1;
    }

    let current_block_type = select_block_type(ctx);
    let if_block2 = current_block_type(ctx);
    let if_block3 = !
    /*isMulti*/
    ctx[8] &&
    /*showSelectedItem*/
    ctx[27] && create_if_block_4(ctx);
    let if_block4 =
    /*showSelectedItem*/
    ctx[27] &&
    /*isClearable*/
    ctx[16] && !
    /*isDisabled*/
    ctx[10] && !
    /*isWaiting*/
    ctx[5] && create_if_block_3(ctx);
    let if_block5 = (
    /*showIndicator*/
    ctx[20] ||
    /*showChevron*/
    ctx[19] && !
    /*selectedValue*/
    ctx[0] || !
    /*isSearchable*/
    ctx[14] && !
    /*isDisabled*/
    ctx[10] && !
    /*isWaiting*/
    ctx[5] && (
    /*showSelectedItem*/
    ctx[27] && !
    /*isClearable*/
    ctx[16] || !
    /*showSelectedItem*/
    ctx[27])) && create_if_block_1(ctx);
    let if_block6 =
    /*isWaiting*/
    ctx[5] && create_if_block();
    return {
      c() {
        div = element("div");
        if (if_block0) if_block0.c();
        t0 = space();
        if (if_block1) if_block1.c();
        t1 = space();
        if_block2.c();
        t2 = space();
        if (if_block3) if_block3.c();
        t3 = space();
        if (if_block4) if_block4.c();
        t4 = space();
        if (if_block5) if_block5.c();
        t5 = space();
        if (if_block6) if_block6.c();
        attr(div, "class", div_class_value = "selectContainer " +
        /*containerClasses*/
        ctx[21] + " svelte-17qb5ew");
        attr(div, "style",
        /*containerStyles*/
        ctx[12]);
        toggle_class(div, "hasError",
        /*hasError*/
        ctx[11]);
        toggle_class(div, "multiSelect",
        /*isMulti*/
        ctx[8]);
        toggle_class(div, "disabled",
        /*isDisabled*/
        ctx[10]);
        toggle_class(div, "focused",
        /*isFocused*/
        ctx[4]);
      },

      m(target, anchor) {
        insert(target, div, anchor);
        if (if_block0) if_block0.m(div, null);
        append(div, t0);
        if (if_block1) if_block1.m(div, null);
        append(div, t1);
        if_block2.m(div, null);
        append(div, t2);
        if (if_block3) if_block3.m(div, null);
        append(div, t3);
        if (if_block4) if_block4.m(div, null);
        append(div, t4);
        if (if_block5) if_block5.m(div, null);
        append(div, t5);
        if (if_block6) if_block6.m(div, null);
        /*div_binding*/

        ctx[65](div);
        current = true;

        if (!mounted) {
          dispose = [listen(window, "click",
          /*handleWindowClick*/
          ctx[33]), listen(window, "keydown",
          /*handleKeyDown*/
          ctx[31]), listen(window, "resize",
          /*getPosition*/
          ctx[30]), listen(div, "click",
          /*handleClick*/
          ctx[34])];
          mounted = true;
        }
      },

      p(ctx, dirty) {
        if (
        /*Icon*/
        ctx[17]) {
          if (if_block0) {
            if_block0.p(ctx, dirty);

            if (dirty[0] &
            /*Icon*/
            131072) {
              transition_in(if_block0, 1);
            }
          } else {
            if_block0 = create_if_block_7(ctx);
            if_block0.c();
            transition_in(if_block0, 1);
            if_block0.m(div, t0);
          }
        } else if (if_block0) {
          group_outros();
          transition_out(if_block0, 1, 1, () => {
            if_block0 = null;
          });
          check_outros();
        }

        if (
        /*isMulti*/
        ctx[8] &&
        /*selectedValue*/
        ctx[0] &&
        /*selectedValue*/
        ctx[0].length > 0) {
          if (if_block1) {
            if_block1.p(ctx, dirty);

            if (dirty[0] &
            /*isMulti, selectedValue*/
            257) {
              transition_in(if_block1, 1);
            }
          } else {
            if_block1 = create_if_block_6(ctx);
            if_block1.c();
            transition_in(if_block1, 1);
            if_block1.m(div, t1);
          }
        } else if (if_block1) {
          group_outros();
          transition_out(if_block1, 1, 1, () => {
            if_block1 = null;
          });
          check_outros();
        }

        if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block2) {
          if_block2.p(ctx, dirty);
        } else {
          if_block2.d(1);
          if_block2 = current_block_type(ctx);

          if (if_block2) {
            if_block2.c();
            if_block2.m(div, t2);
          }
        }

        if (!
        /*isMulti*/
        ctx[8] &&
        /*showSelectedItem*/
        ctx[27]) {
          if (if_block3) {
            if_block3.p(ctx, dirty);

            if (dirty[0] &
            /*isMulti, showSelectedItem*/
            134217984) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_4(ctx);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(div, t3);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }

        if (
        /*showSelectedItem*/
        ctx[27] &&
        /*isClearable*/
        ctx[16] && !
        /*isDisabled*/
        ctx[10] && !
        /*isWaiting*/
        ctx[5]) {
          if (if_block4) {
            if_block4.p(ctx, dirty);

            if (dirty[0] &
            /*showSelectedItem, isClearable, isDisabled, isWaiting*/
            134284320) {
              transition_in(if_block4, 1);
            }
          } else {
            if_block4 = create_if_block_3(ctx);
            if_block4.c();
            transition_in(if_block4, 1);
            if_block4.m(div, t4);
          }
        } else if (if_block4) {
          group_outros();
          transition_out(if_block4, 1, 1, () => {
            if_block4 = null;
          });
          check_outros();
        }

        if (
        /*showIndicator*/
        ctx[20] ||
        /*showChevron*/
        ctx[19] && !
        /*selectedValue*/
        ctx[0] || !
        /*isSearchable*/
        ctx[14] && !
        /*isDisabled*/
        ctx[10] && !
        /*isWaiting*/
        ctx[5] && (
        /*showSelectedItem*/
        ctx[27] && !
        /*isClearable*/
        ctx[16] || !
        /*showSelectedItem*/
        ctx[27])) {
          if (if_block5) {
            if_block5.p(ctx, dirty);
          } else {
            if_block5 = create_if_block_1(ctx);
            if_block5.c();
            if_block5.m(div, t5);
          }
        } else if (if_block5) {
          if_block5.d(1);
          if_block5 = null;
        }

        if (
        /*isWaiting*/
        ctx[5]) {
          if (if_block6) ; else {
            if_block6 = create_if_block();
            if_block6.c();
            if_block6.m(div, null);
          }
        } else if (if_block6) {
          if_block6.d(1);
          if_block6 = null;
        }

        if (!current || dirty[0] &
        /*containerClasses*/
        2097152 && div_class_value !== (div_class_value = "selectContainer " +
        /*containerClasses*/
        ctx[21] + " svelte-17qb5ew")) {
          attr(div, "class", div_class_value);
        }

        if (!current || dirty[0] &
        /*containerStyles*/
        4096) {
          attr(div, "style",
          /*containerStyles*/
          ctx[12]);
        }

        if (dirty[0] &
        /*containerClasses, hasError*/
        2099200) {
          toggle_class(div, "hasError",
          /*hasError*/
          ctx[11]);
        }

        if (dirty[0] &
        /*containerClasses, isMulti*/
        2097408) {
          toggle_class(div, "multiSelect",
          /*isMulti*/
          ctx[8]);
        }

        if (dirty[0] &
        /*containerClasses, isDisabled*/
        2098176) {
          toggle_class(div, "disabled",
          /*isDisabled*/
          ctx[10]);
        }

        if (dirty[0] &
        /*containerClasses, isFocused*/
        2097168) {
          toggle_class(div, "focused",
          /*isFocused*/
          ctx[4]);
        }
      },

      i(local) {
        if (current) return;
        transition_in(if_block0);
        transition_in(if_block1);
        transition_in(if_block3);
        transition_in(if_block4);
        current = true;
      },

      o(local) {
        transition_out(if_block0);
        transition_out(if_block1);
        transition_out(if_block3);
        transition_out(if_block4);
        current = false;
      },

      d(detaching) {
        if (detaching) detach(div);
        if (if_block0) if_block0.d();
        if (if_block1) if_block1.d();
        if_block2.d();
        if (if_block3) if_block3.d();
        if (if_block4) if_block4.d();
        if (if_block5) if_block5.d();
        if (if_block6) if_block6.d();
        /*div_binding*/

        ctx[65](null);
        mounted = false;
        run_all(dispose);
      }

    };
  }

  function instance$5($$self, $$props, $$invalidate) {
    let showSelectedItem;
    let placeholderText;
    const dispatch = createEventDispatcher();
    let {
      container = undefined
    } = $$props;
    let {
      input = undefined
    } = $$props;
    let {
      Item: Item$1 = Item
    } = $$props;
    let {
      Selection: Selection$1 = Selection
    } = $$props;
    let {
      MultiSelection: MultiSelection$1 = MultiSelection
    } = $$props;
    let {
      isMulti = false
    } = $$props;
    let {
      multiFullItemClearable = false
    } = $$props;
    let {
      isDisabled = false
    } = $$props;
    let {
      isCreatable = false
    } = $$props;
    let {
      isFocused = false
    } = $$props;
    let {
      selectedValue = undefined
    } = $$props;
    let {
      filterText = ""
    } = $$props;
    let {
      placeholder = "Select..."
    } = $$props;
    let {
      items = []
    } = $$props;
    let {
      itemFilter = (label, filterText, option) => label.toLowerCase().includes(filterText.toLowerCase())
    } = $$props;
    let {
      groupBy = undefined
    } = $$props;
    let {
      groupFilter = groups => groups
    } = $$props;
    let {
      isGroupHeaderSelectable = false
    } = $$props;
    let {
      getGroupHeaderLabel = option => {
        return option.label;
      }
    } = $$props;
    let {
      getOptionLabel = (option, filterText) => {
        return option.isCreator ? `Create \"${filterText}\"` : option.label;
      }
    } = $$props;
    let {
      optionIdentifier = "value"
    } = $$props;
    let {
      loadOptions = undefined
    } = $$props;
    let {
      hasError = false
    } = $$props;
    let {
      containerStyles = ""
    } = $$props;
    let {
      getSelectionLabel = option => {
        if (option) return option.label;
      }
    } = $$props;
    let {
      createGroupHeaderItem = groupValue => {
        return {
          value: groupValue,
          label: groupValue
        };
      }
    } = $$props;
    let {
      createItem = filterText => {
        return {
          value: filterText,
          label: filterText
        };
      }
    } = $$props;
    let {
      isSearchable = true
    } = $$props;
    let {
      inputStyles = ""
    } = $$props;
    let {
      isClearable = true
    } = $$props;
    let {
      isWaiting = false
    } = $$props;
    let {
      listPlacement = "auto"
    } = $$props;
    let {
      listOpen = false
    } = $$props;
    let {
      list = undefined
    } = $$props;
    let {
      isVirtualList = false
    } = $$props;
    let {
      loadOptionsInterval = 300
    } = $$props;
    let {
      noOptionsMessage = "No options"
    } = $$props;
    let {
      hideEmptyState = false
    } = $$props;
    let {
      filteredItems = []
    } = $$props;
    let {
      inputAttributes = {}
    } = $$props;
    let {
      listAutoWidth = true
    } = $$props;
    let {
      itemHeight = 40
    } = $$props;
    let {
      Icon = undefined
    } = $$props;
    let {
      iconProps = {}
    } = $$props;
    let {
      showChevron = false
    } = $$props;
    let {
      showIndicator = false
    } = $$props;
    let {
      containerClasses = ""
    } = $$props;
    let {
      indicatorSvg = undefined
    } = $$props;
    let {
      ClearIcon: ClearIcon$1 = ClearIcon
    } = $$props;
    let target;
    let activeSelectedValue;
    let originalItemsClone;
    let prev_selectedValue;
    let prev_listOpen;
    let prev_filterText;
    let prev_isFocused;
    let prev_filteredItems;

    async function resetFilter() {
      await tick();
      $$invalidate(1, filterText = "");
    }

    let getItemsHasInvoked = false;
    const getItems = debounce(async () => {
      getItemsHasInvoked = true;
      $$invalidate(5, isWaiting = true);
      let res = await loadOptions(filterText).catch(err => {
        console.warn("svelte-select loadOptions error :>> ", err);
        dispatch("error", {
          type: "loadOptions",
          details: err
        });
      });

      if (res && !res.cancelled) {
        if (res) {
          $$invalidate(35, items = [...res]);
          dispatch("loaded", {
            items
          });
        } else {
          $$invalidate(35, items = []);
        }

        $$invalidate(5, isWaiting = false);
        $$invalidate(4, isFocused = true);
        $$invalidate(37, listOpen = true);
      }
    }, loadOptionsInterval);
    let _inputAttributes = {};
    beforeUpdate(() => {
      if (isMulti && selectedValue && selectedValue.length > 1) {
        checkSelectedValueForDuplicates();
      }

      if (!isMulti && selectedValue && prev_selectedValue !== selectedValue) {
        if (!prev_selectedValue || JSON.stringify(selectedValue[optionIdentifier]) !== JSON.stringify(prev_selectedValue[optionIdentifier])) {
          dispatch("select", selectedValue);
        }
      }

      if (isMulti && JSON.stringify(selectedValue) !== JSON.stringify(prev_selectedValue)) {
        if (checkSelectedValueForDuplicates()) {
          dispatch("select", selectedValue);
        }
      }

      if (container && listOpen !== prev_listOpen) {
        if (listOpen) {
          loadList();
        } else {
          removeList();
        }
      }

      if (filterText !== prev_filterText) {
        if (filterText.length > 0) {
          $$invalidate(4, isFocused = true);
          $$invalidate(37, listOpen = true);

          if (loadOptions) {
            getItems();
          } else {
            loadList();
            $$invalidate(37, listOpen = true);

            if (isMulti) {
              $$invalidate(25, activeSelectedValue = undefined);
            }
          }
        } else {
          setList([]);
        }

        if (list) {
          list.$set({
            filterText
          });
        }
      }

      if (isFocused !== prev_isFocused) {
        if (isFocused || listOpen) {
          handleFocus();
        } else {
          resetFilter();
          if (input) input.blur();
        }
      }

      if (prev_filteredItems !== filteredItems) {
        let _filteredItems = [...filteredItems];

        if (isCreatable && filterText) {
          const itemToCreate = createItem(filterText);
          itemToCreate.isCreator = true;

          const existingItemWithFilterValue = _filteredItems.find(item => {
            return item[optionIdentifier] === itemToCreate[optionIdentifier];
          });

          let existingSelectionWithFilterValue;

          if (selectedValue) {
            if (isMulti) {
              existingSelectionWithFilterValue = selectedValue.find(selection => {
                return selection[optionIdentifier] === itemToCreate[optionIdentifier];
              });
            } else if (selectedValue[optionIdentifier] === itemToCreate[optionIdentifier]) {
              existingSelectionWithFilterValue = selectedValue;
            }
          }

          if (!existingItemWithFilterValue && !existingSelectionWithFilterValue) {
            _filteredItems = [..._filteredItems, itemToCreate];
          }
        }

        setList(_filteredItems);
      }

      prev_selectedValue = selectedValue;
      prev_listOpen = listOpen;
      prev_filterText = filterText;
      prev_isFocused = isFocused;
      prev_filteredItems = filteredItems;
    });

    function checkSelectedValueForDuplicates() {
      let noDuplicates = true;

      if (selectedValue) {
        const ids = [];
        const uniqueValues = [];
        selectedValue.forEach(val => {
          if (!ids.includes(val[optionIdentifier])) {
            ids.push(val[optionIdentifier]);
            uniqueValues.push(val);
          } else {
            noDuplicates = false;
          }
        });
        if (!noDuplicates) $$invalidate(0, selectedValue = uniqueValues);
      }

      return noDuplicates;
    }

    function findItem(selection) {
      let matchTo = selection ? selection[optionIdentifier] : selectedValue[optionIdentifier];
      return items.find(item => item[optionIdentifier] === matchTo);
    }

    function updateSelectedValueDisplay(items) {
      if (!items || items.length === 0 || items.some(item => typeof item !== "object")) return;
      if (!selectedValue || (isMulti ? selectedValue.some(selection => !selection || !selection[optionIdentifier]) : !selectedValue[optionIdentifier])) return;

      if (Array.isArray(selectedValue)) {
        $$invalidate(0, selectedValue = selectedValue.map(selection => findItem(selection) || selection));
      } else {
        $$invalidate(0, selectedValue = findItem() || selectedValue);
      }
    }

    async function setList(items) {
      await tick();
      if (!listOpen) return;
      if (list) return list.$set({
        items
      });
      if (loadOptions && getItemsHasInvoked && items.length > 0) loadList();
    }

    function handleMultiItemClear(event) {
      const {
        detail
      } = event;
      const itemToRemove = selectedValue[detail ? detail.i : selectedValue.length - 1];

      if (selectedValue.length === 1) {
        $$invalidate(0, selectedValue = undefined);
      } else {
        $$invalidate(0, selectedValue = selectedValue.filter(item => {
          return item !== itemToRemove;
        }));
      }

      dispatch("clear", itemToRemove);
      getPosition();
    }

    async function getPosition() {
      await tick();
      if (!target || !container) return;
      const {
        top,
        height,
        width
      } = container.getBoundingClientRect();
      target.style["min-width"] = `${width}px`;
      target.style.width = `${listAutoWidth ? "auto" : "100%"}`;
      target.style.left = "0";

      if (listPlacement === "top") {
        target.style.bottom = `${height + 5}px`;
      } else {
        target.style.top = `${height + 5}px`;
      }

      target = target;

      if (listPlacement === "auto" && isOutOfViewport(target).bottom) {
        target.style.top = ``;
        target.style.bottom = `${height + 5}px`;
      }

      target.style.visibility = "";
    }

    function handleKeyDown(e) {
      if (!isFocused) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          $$invalidate(37, listOpen = true);
          $$invalidate(25, activeSelectedValue = undefined);
          break;

        case "ArrowUp":
          e.preventDefault();
          $$invalidate(37, listOpen = true);
          $$invalidate(25, activeSelectedValue = undefined);
          break;

        case "Tab":
          if (!listOpen) $$invalidate(4, isFocused = false);
          break;

        case "Backspace":
          if (!isMulti || filterText.length > 0) return;

          if (isMulti && selectedValue && selectedValue.length > 0) {
            handleMultiItemClear(activeSelectedValue !== undefined ? activeSelectedValue : selectedValue.length - 1);
            if (activeSelectedValue === 0 || activeSelectedValue === undefined) break;
            $$invalidate(25, activeSelectedValue = selectedValue.length > activeSelectedValue ? activeSelectedValue - 1 : undefined);
          }

          break;

        case "ArrowLeft":
          if (list) list.$set({
            hoverItemIndex: -1
          });
          if (!isMulti || filterText.length > 0) return;

          if (activeSelectedValue === undefined) {
            $$invalidate(25, activeSelectedValue = selectedValue.length - 1);
          } else if (selectedValue.length > activeSelectedValue && activeSelectedValue !== 0) {
            $$invalidate(25, activeSelectedValue -= 1);
          }

          break;

        case "ArrowRight":
          if (list) list.$set({
            hoverItemIndex: -1
          });
          if (!isMulti || filterText.length > 0 || activeSelectedValue === undefined) return;

          if (activeSelectedValue === selectedValue.length - 1) {
            $$invalidate(25, activeSelectedValue = undefined);
          } else if (activeSelectedValue < selectedValue.length - 1) {
            $$invalidate(25, activeSelectedValue += 1);
          }

          break;
      }
    }

    function handleFocus() {
      $$invalidate(4, isFocused = true);
      if (input) input.focus();
    }

    function removeList() {
      resetFilter();
      $$invalidate(25, activeSelectedValue = undefined);
      if (!list) return;
      list.$destroy();
      $$invalidate(36, list = undefined);
      if (!target) return;
      if (target.parentNode) target.parentNode.removeChild(target);
      target = undefined;
      $$invalidate(36, list);
      target = target;
    }

    function handleWindowClick(event) {
      if (!container) return;
      const eventTarget = event.path && event.path.length > 0 ? event.path[0] : event.target;
      if (container.contains(eventTarget)) return;
      $$invalidate(4, isFocused = false);
      $$invalidate(37, listOpen = false);
      $$invalidate(25, activeSelectedValue = undefined);
      if (input) input.blur();
    }

    function handleClick() {
      if (isDisabled) return;
      $$invalidate(4, isFocused = true);
      $$invalidate(37, listOpen = !listOpen);
    }

    function handleClear() {
      $$invalidate(0, selectedValue = undefined);
      $$invalidate(37, listOpen = false);
      dispatch("clear", selectedValue);
      handleFocus();
    }

    async function loadList() {
      await tick();
      if (target && list) return;
      const data = {
        Item: Item$1,
        filterText,
        optionIdentifier,
        noOptionsMessage,
        hideEmptyState,
        isVirtualList,
        selectedValue,
        isMulti,
        getGroupHeaderLabel,
        items: filteredItems,
        itemHeight
      };

      if (getOptionLabel) {
        data.getOptionLabel = getOptionLabel;
      }

      target = document.createElement("div");
      Object.assign(target.style, {
        position: "absolute",
        "z-index": 2,
        visibility: "hidden"
      });
      $$invalidate(36, list);
      target = target;
      if (container) container.appendChild(target);
      $$invalidate(36, list = new List({
        target,
        props: data
      }));
      list.$on("itemSelected", event => {
        const {
          detail
        } = event;

        if (detail) {
          const item = Object.assign({}, detail);

          if (!item.isGroupHeader || item.isSelectable) {
            if (isMulti) {
              $$invalidate(0, selectedValue = selectedValue ? selectedValue.concat([item]) : [item]);
            } else {
              $$invalidate(0, selectedValue = item);
            }

            resetFilter();
            ($$invalidate(0, selectedValue), $$invalidate(48, optionIdentifier)), $$invalidate(8, isMulti);
            setTimeout(() => {
              $$invalidate(37, listOpen = false);
              $$invalidate(25, activeSelectedValue = undefined);
            });
          }
        }
      });
      list.$on("itemCreated", event => {
        const {
          detail
        } = event;

        if (isMulti) {
          $$invalidate(0, selectedValue = selectedValue || []);
          $$invalidate(0, selectedValue = [...selectedValue, createItem(detail)]);
        } else {
          $$invalidate(0, selectedValue = createItem(detail));
        }

        dispatch("itemCreated", detail);
        $$invalidate(1, filterText = "");
        $$invalidate(37, listOpen = false);
        $$invalidate(25, activeSelectedValue = undefined);
        resetFilter();
      });
      list.$on("closeList", () => {
        $$invalidate(37, listOpen = false);
      });
      $$invalidate(36, list), target = target;
      getPosition();
    }

    onMount(() => {
      if (isFocused) input.focus();
      if (listOpen) loadList();

      if (items && items.length > 0) {
        $$invalidate(60, originalItemsClone = JSON.stringify(items));
      }
    });
    onDestroy(() => {
      removeList();
    });

    function input_1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        input = $$value;
        $$invalidate(3, input);
      });
    }

    function input_1_input_handler() {
      filterText = this.value;
      $$invalidate(1, filterText);
    }

    function input_1_binding_1($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        input = $$value;
        $$invalidate(3, input);
      });
    }

    function input_1_input_handler_1() {
      filterText = this.value;
      $$invalidate(1, filterText);
    }

    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        container = $$value;
        $$invalidate(2, container);
      });
    }

    $$self.$$set = $$props => {
      if ("container" in $$props) $$invalidate(2, container = $$props.container);
      if ("input" in $$props) $$invalidate(3, input = $$props.input);
      if ("Item" in $$props) $$invalidate(39, Item$1 = $$props.Item);
      if ("Selection" in $$props) $$invalidate(6, Selection$1 = $$props.Selection);
      if ("MultiSelection" in $$props) $$invalidate(7, MultiSelection$1 = $$props.MultiSelection);
      if ("isMulti" in $$props) $$invalidate(8, isMulti = $$props.isMulti);
      if ("multiFullItemClearable" in $$props) $$invalidate(9, multiFullItemClearable = $$props.multiFullItemClearable);
      if ("isDisabled" in $$props) $$invalidate(10, isDisabled = $$props.isDisabled);
      if ("isCreatable" in $$props) $$invalidate(40, isCreatable = $$props.isCreatable);
      if ("isFocused" in $$props) $$invalidate(4, isFocused = $$props.isFocused);
      if ("selectedValue" in $$props) $$invalidate(0, selectedValue = $$props.selectedValue);
      if ("filterText" in $$props) $$invalidate(1, filterText = $$props.filterText);
      if ("placeholder" in $$props) $$invalidate(41, placeholder = $$props.placeholder);
      if ("items" in $$props) $$invalidate(35, items = $$props.items);
      if ("itemFilter" in $$props) $$invalidate(42, itemFilter = $$props.itemFilter);
      if ("groupBy" in $$props) $$invalidate(43, groupBy = $$props.groupBy);
      if ("groupFilter" in $$props) $$invalidate(44, groupFilter = $$props.groupFilter);
      if ("isGroupHeaderSelectable" in $$props) $$invalidate(45, isGroupHeaderSelectable = $$props.isGroupHeaderSelectable);
      if ("getGroupHeaderLabel" in $$props) $$invalidate(46, getGroupHeaderLabel = $$props.getGroupHeaderLabel);
      if ("getOptionLabel" in $$props) $$invalidate(47, getOptionLabel = $$props.getOptionLabel);
      if ("optionIdentifier" in $$props) $$invalidate(48, optionIdentifier = $$props.optionIdentifier);
      if ("loadOptions" in $$props) $$invalidate(49, loadOptions = $$props.loadOptions);
      if ("hasError" in $$props) $$invalidate(11, hasError = $$props.hasError);
      if ("containerStyles" in $$props) $$invalidate(12, containerStyles = $$props.containerStyles);
      if ("getSelectionLabel" in $$props) $$invalidate(13, getSelectionLabel = $$props.getSelectionLabel);
      if ("createGroupHeaderItem" in $$props) $$invalidate(50, createGroupHeaderItem = $$props.createGroupHeaderItem);
      if ("createItem" in $$props) $$invalidate(51, createItem = $$props.createItem);
      if ("isSearchable" in $$props) $$invalidate(14, isSearchable = $$props.isSearchable);
      if ("inputStyles" in $$props) $$invalidate(15, inputStyles = $$props.inputStyles);
      if ("isClearable" in $$props) $$invalidate(16, isClearable = $$props.isClearable);
      if ("isWaiting" in $$props) $$invalidate(5, isWaiting = $$props.isWaiting);
      if ("listPlacement" in $$props) $$invalidate(52, listPlacement = $$props.listPlacement);
      if ("listOpen" in $$props) $$invalidate(37, listOpen = $$props.listOpen);
      if ("list" in $$props) $$invalidate(36, list = $$props.list);
      if ("isVirtualList" in $$props) $$invalidate(53, isVirtualList = $$props.isVirtualList);
      if ("loadOptionsInterval" in $$props) $$invalidate(54, loadOptionsInterval = $$props.loadOptionsInterval);
      if ("noOptionsMessage" in $$props) $$invalidate(55, noOptionsMessage = $$props.noOptionsMessage);
      if ("hideEmptyState" in $$props) $$invalidate(56, hideEmptyState = $$props.hideEmptyState);
      if ("filteredItems" in $$props) $$invalidate(38, filteredItems = $$props.filteredItems);
      if ("inputAttributes" in $$props) $$invalidate(57, inputAttributes = $$props.inputAttributes);
      if ("listAutoWidth" in $$props) $$invalidate(58, listAutoWidth = $$props.listAutoWidth);
      if ("itemHeight" in $$props) $$invalidate(59, itemHeight = $$props.itemHeight);
      if ("Icon" in $$props) $$invalidate(17, Icon = $$props.Icon);
      if ("iconProps" in $$props) $$invalidate(18, iconProps = $$props.iconProps);
      if ("showChevron" in $$props) $$invalidate(19, showChevron = $$props.showChevron);
      if ("showIndicator" in $$props) $$invalidate(20, showIndicator = $$props.showIndicator);
      if ("containerClasses" in $$props) $$invalidate(21, containerClasses = $$props.containerClasses);
      if ("indicatorSvg" in $$props) $$invalidate(22, indicatorSvg = $$props.indicatorSvg);
      if ("ClearIcon" in $$props) $$invalidate(23, ClearIcon$1 = $$props.ClearIcon);
    };

    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] &
      /*isDisabled*/
      1024) ;

      if ($$self.$$.dirty[1] &
      /*items*/
      16) {
        updateSelectedValueDisplay(items);
      }

      if ($$self.$$.dirty[0] &
      /*selectedValue, isMulti*/
      257 | $$self.$$.dirty[1] &
      /*optionIdentifier*/
      131072) {
        {
          if (typeof selectedValue === "string") {
            $$invalidate(0, selectedValue = {
              [optionIdentifier]: selectedValue,
              label: selectedValue
            });
          } else if (isMulti && Array.isArray(selectedValue) && selectedValue.length > 0) {
            $$invalidate(0, selectedValue = selectedValue.map(item => typeof item === "string" ? {
              value: item,
              label: item
            } : item));
          }
        }
      }

      if ($$self.$$.dirty[1] &
      /*noOptionsMessage, list*/
      16777248) {
        {
          if (noOptionsMessage && list) list.$set({
            noOptionsMessage
          });
        }
      }

      if ($$self.$$.dirty[0] &
      /*selectedValue, filterText*/
      3) {
        $$invalidate(27, showSelectedItem = selectedValue && filterText.length === 0);
      }

      if ($$self.$$.dirty[0] &
      /*selectedValue*/
      1 | $$self.$$.dirty[1] &
      /*placeholder*/
      1024) {
        $$invalidate(28, placeholderText = selectedValue ? "" : placeholder);
      }

      if ($$self.$$.dirty[0] &
      /*isSearchable*/
      16384 | $$self.$$.dirty[1] &
      /*inputAttributes*/
      67108864) {
        {
          $$invalidate(26, _inputAttributes = Object.assign({
            autocomplete: "off",
            autocorrect: "off",
            spellcheck: false
          }, inputAttributes));

          if (!isSearchable) {
            $$invalidate(26, _inputAttributes.readonly = true, _inputAttributes);
          }
        }
      }

      if ($$self.$$.dirty[0] &
      /*filterText, isMulti, selectedValue*/
      259 | $$self.$$.dirty[1] &
      /*items, loadOptions, originalItemsClone, optionIdentifier, itemFilter, getOptionLabel, groupBy, createGroupHeaderItem, isGroupHeaderSelectable, groupFilter*/
      537884688) {
        {
          let _filteredItems;

          let _items = items;

          if (items && items.length > 0 && typeof items[0] !== "object") {
            _items = items.map((item, index) => {
              return {
                index,
                value: item,
                label: item
              };
            });
          }

          if (loadOptions && filterText.length === 0 && originalItemsClone) {
            _filteredItems = JSON.parse(originalItemsClone);
            _items = JSON.parse(originalItemsClone);
          } else {
            _filteredItems = loadOptions ? filterText.length === 0 ? [] : _items : _items.filter(item => {
              let keepItem = true;

              if (isMulti && selectedValue) {
                keepItem = !selectedValue.some(value => {
                  return value[optionIdentifier] === item[optionIdentifier];
                });
              }

              if (!keepItem) return false;
              if (filterText.length < 1) return true;
              return itemFilter(getOptionLabel(item, filterText), filterText, item);
            });
          }

          if (groupBy) {
            const groupValues = [];
            const groups = {};

            _filteredItems.forEach(item => {
              const groupValue = groupBy(item);

              if (!groupValues.includes(groupValue)) {
                groupValues.push(groupValue);
                groups[groupValue] = [];

                if (groupValue) {
                  groups[groupValue].push(Object.assign(createGroupHeaderItem(groupValue, item), {
                    id: groupValue,
                    isGroupHeader: true,
                    isSelectable: isGroupHeaderSelectable
                  }));
                }
              }

              groups[groupValue].push(Object.assign({
                isGroupItem: !!groupValue
              }, item));
            });

            const sortedGroupedItems = [];
            groupFilter(groupValues).forEach(groupValue => {
              sortedGroupedItems.push(...groups[groupValue]);
            });
            $$invalidate(38, filteredItems = sortedGroupedItems);
          } else {
            $$invalidate(38, filteredItems = _filteredItems);
          }
        }
      }
    };

    return [selectedValue, filterText, container, input, isFocused, isWaiting, Selection$1, MultiSelection$1, isMulti, multiFullItemClearable, isDisabled, hasError, containerStyles, getSelectionLabel, isSearchable, inputStyles, isClearable, Icon, iconProps, showChevron, showIndicator, containerClasses, indicatorSvg, ClearIcon$1, handleClear, activeSelectedValue, _inputAttributes, showSelectedItem, placeholderText, handleMultiItemClear, getPosition, handleKeyDown, handleFocus, handleWindowClick, handleClick, items, list, listOpen, filteredItems, Item$1, isCreatable, placeholder, itemFilter, groupBy, groupFilter, isGroupHeaderSelectable, getGroupHeaderLabel, getOptionLabel, optionIdentifier, loadOptions, createGroupHeaderItem, createItem, listPlacement, isVirtualList, loadOptionsInterval, noOptionsMessage, hideEmptyState, inputAttributes, listAutoWidth, itemHeight, originalItemsClone, input_1_binding, input_1_input_handler, input_1_binding_1, input_1_input_handler_1, div_binding];
  }

  class Select extends SvelteComponent {
    constructor(options) {
      super();
      if (!document_1.getElementById("svelte-17qb5ew-style")) add_css();
      init$1(this, options, instance$5, create_fragment$5, safe_not_equal, {
        container: 2,
        input: 3,
        Item: 39,
        Selection: 6,
        MultiSelection: 7,
        isMulti: 8,
        multiFullItemClearable: 9,
        isDisabled: 10,
        isCreatable: 40,
        isFocused: 4,
        selectedValue: 0,
        filterText: 1,
        placeholder: 41,
        items: 35,
        itemFilter: 42,
        groupBy: 43,
        groupFilter: 44,
        isGroupHeaderSelectable: 45,
        getGroupHeaderLabel: 46,
        getOptionLabel: 47,
        optionIdentifier: 48,
        loadOptions: 49,
        hasError: 11,
        containerStyles: 12,
        getSelectionLabel: 13,
        createGroupHeaderItem: 50,
        createItem: 51,
        isSearchable: 14,
        inputStyles: 15,
        isClearable: 16,
        isWaiting: 5,
        listPlacement: 52,
        listOpen: 37,
        list: 36,
        isVirtualList: 53,
        loadOptionsInterval: 54,
        noOptionsMessage: 55,
        hideEmptyState: 56,
        filteredItems: 38,
        inputAttributes: 57,
        listAutoWidth: 58,
        itemHeight: 59,
        Icon: 17,
        iconProps: 18,
        showChevron: 19,
        showIndicator: 20,
        containerClasses: 21,
        indicatorSvg: 22,
        ClearIcon: 23,
        handleClear: 24
      }, [-1, -1, -1]);
    }

    get handleClear() {
      return this.$$.ctx[24];
    }

  }

  function create_fragment$4(ctx) {
    var form;
    var label0;
    var t0_value = dist_4$1("timemanager", "Note") + "";
    var t0;
    var t1;
    var input0;
    var t2;
    var label1;
    var html_tag;
    var raw0_value = dist_4$1("timemanager", "Duration (in hrs.) & Date") + "";
    var t3;
    var span0;
    var input1;
    var t4;
    var input2;
    var t5;
    var label2;
    var t6_value = dist_4$1("timemanager", "Client") + "";
    var t6;
    var t7;
    var select0;
    var updating_selectedValue;
    var label2_class_value;
    var t8;
    var label3;
    var span1;
    var html_tag_1;
    var raw1_value = dist_4$1("timemanager", "Project & Task for") + "";
    var t9;
    var strong;
    var t10_value = (
    /*client*/
    ctx[4] &&
    /*client*/
    ctx[4].label) + "";
    var t10;
    var t11;
    var a;
    var t13;
    var select1;
    var updating_selectedValue_1;
    var label3_class_value;
    var t14;
    var span2;
    var button;
    var t15_value = dist_4$1("timemanager", "Add") + "";
    var t15;
    var form_class_value;
    var current;
    var mounted;
    var dispose;

    function select0_selectedValue_binding(value) {
      /*select0_selectedValue_binding*/
      ctx[21](value);
    }

    var select0_props = {
      noOptionsMessage: dist_4$1("timemanager", "No options"),
      placeholder: dist_4$1("timemanager", "Select..."),
      items:
      /*clients*/
      ctx[0]
    };

    if (
    /*client*/
    ctx[4] !== void 0) {
      select0_props.selectedValue =
      /*client*/
      ctx[4];
    }

    select0 = new Select({
      props: select0_props
    });
    binding_callbacks.push(function () {
      return bind(select0, "selectedValue", select0_selectedValue_binding);
    });
    select0.$on("select",
    /*clientSelected*/
    ctx[11]);

    function select1_selectedValue_binding(value) {
      /*select1_selectedValue_binding*/
      ctx[24](value);
    }

    var select1_props = {
      items:
      /*tasksWithProject*/
      ctx[9] &&
      /*tasksWithProject*/
      ctx[9].filter(
      /*func*/
      ctx[23]),
      groupBy: func_1,
      noOptionsMessage: dist_4$1("timemanager", "No projects/tasks or no client selected."),
      placeholder: dist_4$1("timemanager", "Select...")
    };

    if (
    /*task*/
    ctx[5] !== void 0) {
      select1_props.selectedValue =
      /*task*/
      ctx[5];
    }

    select1 = new Select({
      props: select1_props
    });
    binding_callbacks.push(function () {
      return bind(select1, "selectedValue", select1_selectedValue_binding);
    });
    return {
      c: function c() {
        form = element("form");
        label0 = element("label");
        t0 = text(t0_value);
        t1 = space();
        input0 = element("input");
        t2 = space();
        label1 = element("label");
        html_tag = new HtmlTag();
        t3 = space();
        span0 = element("span");
        input1 = element("input");
        t4 = space();
        input2 = element("input");
        t5 = space();
        label2 = element("label");
        t6 = text(t6_value);
        t7 = space();
        create_component(select0.$$.fragment);
        t8 = space();
        label3 = element("label");
        span1 = element("span");
        html_tag_1 = new HtmlTag();
        t9 = space();
        strong = element("strong");
        t10 = text(t10_value);
        t11 = space();
        a = element("a");
        a.textContent = "".concat(dist_4$1("timemanager", "Change client"));
        t13 = space();
        create_component(select1.$$.fragment);
        t14 = space();
        span2 = element("span");
        button = element("button");
        t15 = text(t15_value);
        attr(input0, "type", "text");
        attr(input0, "name", "note");
        attr(input0, "class", "note");
        attr(input0, "placeholder", dist_4$1("timemanager", "Describe what you did..."));
        attr(label0, "class", "note");
        html_tag.a = t3;
        attr(input1, "type", "number");
        attr(input1, "name", "duration");
        attr(input1, "step", "0.01");
        attr(input1, "placeholder", "");
        attr(input1, "class", "duration-input");
        attr(input2, "type", "date");
        attr(input2, "name", "date");
        attr(input2, "class", "date-input");
        attr(span0, "class", "double");
        attr(label2, "class", label2_class_value = "client".concat(
        /*taskError*/
        ctx[8] ? " error" : "").concat(
        /*client*/
        ctx[4] ? " hidden-visually" : ""));
        html_tag_1.a = t9;
        attr(a, "href", "#/");
        attr(a, "class", "change");
        attr(span1, "class", "task-caption");
        attr(label3, "class", label3_class_value = "task".concat(
        /*taskError*/
        ctx[8] ? " error" : "").concat(!
        /*client*/
        ctx[4] ? " hidden-visually" : ""));
        button.disabled =
        /*loading*/
        ctx[7];
        attr(button, "type", "submit");
        attr(button, "class", "button primary");
        attr(span2, "class", "actions");
        attr(form, "class", form_class_value = "quick-add".concat(
        /*loading*/
        ctx[7] ? " icon-loading" : ""));
      },
      m: function m(target, anchor) {
        insert(target, form, anchor);
        append(form, label0);
        append(label0, t0);
        append(label0, t1);
        append(label0, input0);
        set_input_value(input0,
        /*note*/
        ctx[3]);
        /*input0_binding*/

        ctx[18](input0);
        append(form, t2);
        append(form, label1);
        html_tag.m(raw0_value, label1);
        append(label1, t3);
        append(label1, span0);
        append(span0, input1);
        set_input_value(input1,
        /*duration*/
        ctx[1]);
        append(span0, t4);
        append(span0, input2);
        set_input_value(input2,
        /*date*/
        ctx[2]);
        append(form, t5);
        append(form, label2);
        append(label2, t6);
        append(label2, t7);
        mount_component(select0, label2, null);
        append(form, t8);
        append(form, label3);
        append(label3, span1);
        html_tag_1.m(raw1_value, span1);
        append(span1, t9);
        append(span1, strong);
        append(strong, t10);
        append(span1, t11);
        append(span1, a);
        append(label3, t13);
        mount_component(select1, label3, null);
        append(form, t14);
        append(form, span2);
        append(span2, button);
        append(button, t15);
        current = true;

        if (!mounted) {
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[17]), listen(input1, "input",
          /*input1_input_handler*/
          ctx[19]), listen(input2, "input",
          /*input2_input_handler*/
          ctx[20]), listen(a, "click", prevent_default(
          /*click_handler*/
          ctx[22])), listen(form, "submit", prevent_default(
          /*save*/
          ctx[10]))];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*note*/
        8 && input0.value !==
        /*note*/
        ctx[3]) {
          set_input_value(input0,
          /*note*/
          ctx[3]);
        }

        if (dirty &
        /*duration*/
        2 && to_number(input1.value) !==
        /*duration*/
        ctx[1]) {
          set_input_value(input1,
          /*duration*/
          ctx[1]);
        }

        if (dirty &
        /*date*/
        4) {
          set_input_value(input2,
          /*date*/
          ctx[2]);
        }

        var select0_changes = {};
        if (dirty &
        /*clients*/
        1) select0_changes.items =
        /*clients*/
        ctx[0];

        if (!updating_selectedValue && dirty &
        /*client*/
        16) {
          updating_selectedValue = true;
          select0_changes.selectedValue =
          /*client*/
          ctx[4];
          add_flush_callback(function () {
            return updating_selectedValue = false;
          });
        }

        select0.$set(select0_changes);

        if (!current || dirty &
        /*taskError, client*/
        272 && label2_class_value !== (label2_class_value = "client".concat(
        /*taskError*/
        ctx[8] ? " error" : "").concat(
        /*client*/
        ctx[4] ? " hidden-visually" : ""))) {
          attr(label2, "class", label2_class_value);
        }

        if ((!current || dirty &
        /*client*/
        16) && t10_value !== (t10_value = (
        /*client*/
        ctx[4] &&
        /*client*/
        ctx[4].label) + "")) set_data(t10, t10_value);
        var select1_changes = {};
        if (dirty &
        /*client*/
        16) select1_changes.items =
        /*tasksWithProject*/
        ctx[9] &&
        /*tasksWithProject*/
        ctx[9].filter(
        /*func*/
        ctx[23]);

        if (!updating_selectedValue_1 && dirty &
        /*task*/
        32) {
          updating_selectedValue_1 = true;
          select1_changes.selectedValue =
          /*task*/
          ctx[5];
          add_flush_callback(function () {
            return updating_selectedValue_1 = false;
          });
        }

        select1.$set(select1_changes);

        if (!current || dirty &
        /*taskError, client*/
        272 && label3_class_value !== (label3_class_value = "task".concat(
        /*taskError*/
        ctx[8] ? " error" : "").concat(!
        /*client*/
        ctx[4] ? " hidden-visually" : ""))) {
          attr(label3, "class", label3_class_value);
        }

        if (!current || dirty &
        /*loading*/
        128) {
          button.disabled =
          /*loading*/
          ctx[7];
        }

        if (!current || dirty &
        /*loading*/
        128 && form_class_value !== (form_class_value = "quick-add".concat(
        /*loading*/
        ctx[7] ? " icon-loading" : ""))) {
          attr(form, "class", form_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(select0.$$.fragment, local);
        transition_in(select1.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(select0.$$.fragment, local);
        transition_out(select1.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(form);
        /*input0_binding*/

        ctx[18](null);
        destroy_component(select0);
        destroy_component(select1);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  var func_1 = function func_1(item) {
    return item.project.label;
  };

  function instance$4($$self, $$props, $$invalidate) {
    var loading;
    var taskError;
    var action = $$props.action;
    var requestToken = $$props.requestToken;
    var clients = $$props.clients;
    var projects = $$props.projects;
    var tasks = $$props.tasks;
    var initialDate = $$props.initialDate;
    var duration = 1;
    var date = initialDate;
    var note;
    var client;
    var task;
    var noteInput;
    var tasksWithProject = tasks && tasks.length ? tasks.map(function (aTask) {
      aTask.project = projects.find(function (aProject) {
        return aProject.value === aTask.projectUuid;
      });
      return aTask;
    }) : [];
    onMount(function () {
      document.addEventListener("DOMContentLoaded", function () {
        if (noteInput) {
          noteInput.focus();
        }
      });

      if (noteInput) {
        noteInput.focus();
      }
    });

    var save = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var entry, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $$invalidate(7, loading = true);
                $$invalidate(8, taskError = false);

                if (task) {
                  _context.next = 6;
                  break;
                }

                $$invalidate(7, loading = false);
                $$invalidate(8, taskError = true);
                return _context.abrupt("return");

              case 6:
                _context.prev = 6;
                entry = {
                  duration: duration,
                  date: date,
                  note: note,
                  task: task.value
                };
                _context.next = 10;
                return fetch(action, {
                  method: "POST",
                  body: JSON.stringify(entry),
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 10:
                response = _context.sent;

                if (response && response.ok) {
                  document.querySelector(".app-timemanager [data-current-link]").click();
                }

                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](6);
                console.error(_context.t0);

              case 17:
                $$invalidate(7, loading = false);

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[6, 14]]);
      }));

      return function save() {
        return _ref3.apply(this, arguments);
      };
    }();

    var clientSelected = function clientSelected() {
      var input = document.querySelector(".task input");

      if (input) {
        input.focus();
      }
    };

    function input0_input_handler() {
      note = this.value;
      $$invalidate(3, note);
    }

    function input0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](function () {
        noteInput = $$value;
        $$invalidate(6, noteInput);
      });
    }

    function input1_input_handler() {
      duration = to_number(this.value);
      $$invalidate(1, duration);
    }

    function input2_input_handler() {
      date = this.value;
      $$invalidate(2, date);
    }

    function select0_selectedValue_binding(value) {
      client = value;
      $$invalidate(4, client);
    }

    var click_handler = function click_handler() {
      return $$invalidate(4, client = null);
    };

    var func = function func(oneTask) {
      return client && oneTask.project.clientUuid === client.value;
    };

    function select1_selectedValue_binding(value) {
      task = value;
      $$invalidate(5, task);
    }

    $$self.$$set = function ($$props) {
      if ("action" in $$props) $$invalidate(12, action = $$props.action);
      if ("requestToken" in $$props) $$invalidate(13, requestToken = $$props.requestToken);
      if ("clients" in $$props) $$invalidate(0, clients = $$props.clients);
      if ("projects" in $$props) $$invalidate(14, projects = $$props.projects);
      if ("tasks" in $$props) $$invalidate(15, tasks = $$props.tasks);
      if ("initialDate" in $$props) $$invalidate(16, initialDate = $$props.initialDate);
    };

    $$invalidate(7, loading = false);

    $$invalidate(8, taskError = false);

    return [clients, duration, date, note, client, task, noteInput, loading, taskError, tasksWithProject, save, clientSelected, action, requestToken, projects, tasks, initialDate, input0_input_handler, input0_binding, input1_input_handler, input2_input_handler, select0_selectedValue_binding, click_handler, func, select1_selectedValue_binding];
  }

  var QuickAdd = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(QuickAdd, _SvelteComponent);

    var _super = _createSuper(QuickAdd);

    function QuickAdd(options) {
      var _this;

      _classCallCheck$1(this, QuickAdd);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$4, create_fragment$4, safe_not_equal, {
        action: 12,
        requestToken: 13,
        clients: 0,
        projects: 14,
        tasks: 15,
        initialDate: 16
      });
      return _this;
    }

    return QuickAdd;
  }(SvelteComponent);

  function create_fragment$3(ctx) {
    var span0;
    var input;
    var input_id_value;
    var input_checked_value;
    var t0;
    var label;
    var label_for_value;
    var t1;
    var span1;
    var span1_class_value;
    var mounted;
    var dispose;
    return {
      c: function c() {
        span0 = element("span");
        input = element("input");
        t0 = space();
        label = element("label");
        t1 = space();
        span1 = element("span");
        attr(input, "type", "checkbox");
        attr(input, "id", input_id_value = "check_".concat(
        /*uuid*/
        ctx[0]));
        attr(input, "class", "checkbox");
        input.checked = input_checked_value =
        /*initialState*/
        ctx[1] === "paid";
        input.disabled =
        /*loading*/
        ctx[3];
        attr(label, "for", label_for_value = "check_".concat(
        /*uuid*/
        ctx[0]));
        attr(span0, "class", "checkbox-action");
        attr(span1, "class", span1_class_value = "checkbox-action-loading".concat(
        /*loading*/
        ctx[3] ? " icon-loading" : ""));
      },
      m: function m(target, anchor) {
        insert(target, span0, anchor);
        append(span0, input);
        append(span0, t0);
        append(span0, label);
        insert(target, t1, anchor);
        insert(target, span1, anchor);

        if (!mounted) {
          dispose = listen(input, "change", prevent_default(
          /*change_handler*/
          ctx[7]));
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*uuid*/
        1 && input_id_value !== (input_id_value = "check_".concat(
        /*uuid*/
        ctx[0]))) {
          attr(input, "id", input_id_value);
        }

        if (dirty &
        /*initialState*/
        2 && input_checked_value !== (input_checked_value =
        /*initialState*/
        ctx[1] === "paid")) {
          input.checked = input_checked_value;
        }

        if (dirty &
        /*loading*/
        8) {
          input.disabled =
          /*loading*/
          ctx[3];
        }

        if (dirty &
        /*uuid*/
        1 && label_for_value !== (label_for_value = "check_".concat(
        /*uuid*/
        ctx[0]))) {
          attr(label, "for", label_for_value);
        }

        if (dirty &
        /*loading*/
        8 && span1_class_value !== (span1_class_value = "checkbox-action-loading".concat(
        /*loading*/
        ctx[3] ? " icon-loading" : ""))) {
          attr(span1, "class", span1_class_value);
        }
      },
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (detaching) detach(span0);
        if (detaching) detach(t1);
        if (detaching) detach(span1);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$3($$self, $$props, $$invalidate) {
    var loading;
    var uuid = $$props.uuid;
    var initialState = $$props.initialState;
    var action = $$props.action;
    var requestToken = $$props.requestToken;
    var state = initialState;
    onMount(function () {
      Helpers.hideFallbacks("Checkmark.svelte");
    });

    var save = /*#__PURE__*/function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                $$invalidate(3, loading = true);
                _context.prev = 1;
                _context.next = 4;
                return fetch("".concat(action, "/").concat(state), {
                  method: "POST",
                  body: JSON.stringify({
                    uuid: uuid
                  }),
                  headers: {
                    requesttoken: requestToken,
                    "content-type": "application/json"
                  }
                });

              case 4:
                response = _context.sent;

                if (!response || !response.ok) {
                  // Roll back selection
                  $$invalidate(2, state = state === "paid" ? "unpaid" : "paid");
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                console.error(_context.t0);

              case 11:
                $$invalidate(3, loading = false);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      return function save() {
        return _ref3.apply(this, arguments);
      };
    }();

    var change_handler = function change_handler() {
      $$invalidate(2, state = state === "paid" ? "unpaid" : "paid");
      save();
    };

    $$self.$$set = function ($$props) {
      if ("uuid" in $$props) $$invalidate(0, uuid = $$props.uuid);
      if ("initialState" in $$props) $$invalidate(1, initialState = $$props.initialState);
      if ("action" in $$props) $$invalidate(5, action = $$props.action);
      if ("requestToken" in $$props) $$invalidate(6, requestToken = $$props.requestToken);
    };

    $$invalidate(3, loading = false);

    return [uuid, initialState, state, loading, save, action, requestToken, change_handler];
  }

  var Checkmark = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Checkmark, _SvelteComponent);

    var _super = _createSuper(Checkmark);

    function Checkmark(options) {
      var _this;

      _classCallCheck$1(this, Checkmark);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$3, create_fragment$3, safe_not_equal, {
        uuid: 0,
        initialState: 1,
        action: 5,
        requestToken: 6
      });
      return _this;
    }

    return Checkmark;
  }(SvelteComponent);

  function create_fragment$2(ctx) {
    var form;
    var label0;
    var t0_value = dist_4$1("timemanager", "Clients") + "";
    var t0;
    var t1;
    var select0;
    var t2;
    var label1;
    var t3_value = dist_4$1("timemanager", "Projects") + "";
    var t3;
    var t4;
    var select1;
    var t5;
    var label2;
    var t6_value = dist_4$1("timemanager", "Tasks") + "";
    var t6;
    var t7;
    var select2;
    var t8;
    var label3;
    var t9_value = dist_4$1("timemanager", "Status") + "";
    var t9;
    var t10;
    var select3;
    var t11;
    var span;
    var button;
    var t12_value = dist_4$1("timemanager", "Apply filters") + "";
    var t12;
    var form_class_value;
    var current;
    var mounted;
    var dispose;
    select0 = new Select({
      props: {
        noOptionsMessage: dist_4$1("timemanager", "No options"),
        placeholder: dist_4$1("timemanager", "Select..."),
        inputAttributes: {
          id: "client-select"
        },
        items:
        /*clients*/
        ctx[0],
        selectedValue:
        /*selectedClients*/
        ctx[1],
        isMulti: true
      }
    });
    select0.$on("select",
    /*handleSelectClients*/
    ctx[10]);
    select1 = new Select({
      props: {
        noOptionsMessage: dist_4$1("timemanager", "No options"),
        placeholder: dist_4$1("timemanager", "Select..."),
        inputAttributes: {
          id: "projects-select"
        },
        items:
        /*availableProjects*/
        ctx[6],
        selectedValue:
        /*selectedProjects*/
        ctx[2],
        isMulti: true
      }
    });
    select1.$on("select",
    /*handleSelectProjects*/
    ctx[11]);
    select2 = new Select({
      props: {
        noOptionsMessage: dist_4$1("timemanager", "No options"),
        placeholder: dist_4$1("timemanager", "Select..."),
        inputAttributes: {
          id: "tasks-select"
        },
        items:
        /*availableTasks*/
        ctx[7],
        selectedValue:
        /*selectedTasks*/
        ctx[3],
        isMulti: true
      }
    });
    select2.$on("select",
    /*handleSelectTasks*/
    ctx[12]);
    select3 = new Select({
      props: {
        noOptionsMessage: dist_4$1("timemanager", "No options"),
        placeholder: dist_4$1("timemanager", "Select..."),
        inputAttributes: {
          id: "status-select"
        },
        items:
        /*availableStatus*/
        ctx[8],
        selectedValue:
        /*selectedStatus*/
        ctx[4]
      }
    });
    select3.$on("select",
    /*handleSelectStatus*/
    ctx[13]);
    select3.$on("clear",
    /*handleClearStatus*/
    ctx[14]);
    return {
      c: function c() {
        form = element("form");
        label0 = element("label");
        t0 = text(t0_value);
        t1 = space();
        create_component(select0.$$.fragment);
        t2 = space();
        label1 = element("label");
        t3 = text(t3_value);
        t4 = space();
        create_component(select1.$$.fragment);
        t5 = space();
        label2 = element("label");
        t6 = text(t6_value);
        t7 = space();
        create_component(select2.$$.fragment);
        t8 = space();
        label3 = element("label");
        t9 = text(t9_value);
        t10 = space();
        create_component(select3.$$.fragment);
        t11 = space();
        span = element("span");
        button = element("button");
        t12 = text(t12_value);
        attr(label0, "for", "client-select");
        attr(label0, "class", "clients");
        attr(label1, "for", "projects-select");
        attr(label1, "class", "projects");
        attr(label2, "for", "tasks-select");
        attr(label2, "class", "tasks");
        attr(label3, "for", "status-select");
        attr(label3, "class", "status");
        button.disabled =
        /*loading*/
        ctx[5];
        attr(button, "type", "submit");
        attr(button, "class", "button primary");
        attr(span, "class", "actions");
        attr(form, "class", form_class_value = "reports-filters".concat(
        /*loading*/
        ctx[5] ? " icon-loading" : ""));
      },
      m: function m(target, anchor) {
        insert(target, form, anchor);
        append(form, label0);
        append(label0, t0);
        append(label0, t1);
        mount_component(select0, label0, null);
        append(form, t2);
        append(form, label1);
        append(label1, t3);
        append(label1, t4);
        mount_component(select1, label1, null);
        append(form, t5);
        append(form, label2);
        append(label2, t6);
        append(label2, t7);
        mount_component(select2, label2, null);
        append(form, t8);
        append(form, label3);
        append(label3, t9);
        append(label3, t10);
        mount_component(select3, label3, null);
        append(form, t11);
        append(form, span);
        append(span, button);
        append(button, t12);
        current = true;

        if (!mounted) {
          dispose = listen(form, "submit", prevent_default(
          /*apply*/
          ctx[9]));
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        var select0_changes = {};
        if (dirty &
        /*clients*/
        1) select0_changes.items =
        /*clients*/
        ctx[0];
        if (dirty &
        /*selectedClients*/
        2) select0_changes.selectedValue =
        /*selectedClients*/
        ctx[1];
        select0.$set(select0_changes);
        var select1_changes = {};
        if (dirty &
        /*availableProjects*/
        64) select1_changes.items =
        /*availableProjects*/
        ctx[6];
        if (dirty &
        /*selectedProjects*/
        4) select1_changes.selectedValue =
        /*selectedProjects*/
        ctx[2];
        select1.$set(select1_changes);
        var select2_changes = {};
        if (dirty &
        /*availableTasks*/
        128) select2_changes.items =
        /*availableTasks*/
        ctx[7];
        if (dirty &
        /*selectedTasks*/
        8) select2_changes.selectedValue =
        /*selectedTasks*/
        ctx[3];
        select2.$set(select2_changes);
        var select3_changes = {};
        if (dirty &
        /*selectedStatus*/
        16) select3_changes.selectedValue =
        /*selectedStatus*/
        ctx[4];
        select3.$set(select3_changes);

        if (!current || dirty &
        /*loading*/
        32) {
          button.disabled =
          /*loading*/
          ctx[5];
        }

        if (!current || dirty &
        /*loading*/
        32 && form_class_value !== (form_class_value = "reports-filters".concat(
        /*loading*/
        ctx[5] ? " icon-loading" : ""))) {
          attr(form, "class", form_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(select0.$$.fragment, local);
        transition_in(select1.$$.fragment, local);
        transition_in(select2.$$.fragment, local);
        transition_in(select3.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(select0.$$.fragment, local);
        transition_out(select1.$$.fragment, local);
        transition_out(select2.$$.fragment, local);
        transition_out(select3.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(form);
        destroy_component(select0);
        destroy_component(select1);
        destroy_component(select2);
        destroy_component(select3);
        mounted = false;
        dispose();
      }
    };
  }

  function instance$2($$self, $$props, $$invalidate) {
    var loading;
    var availableProjects;
    var availableTasks;
    var clients = $$props.clients;
    var projects = $$props.projects;
    var tasks = $$props.tasks;
    var selectedClients;
    var selectedProjects;
    var selectedTasks;
    var selectedStatus;
    var availableStatus = [{
      value: "unpaid",
      label: dist_4$1("timemanager", "Unresolved")
    }, {
      value: "paid",
      label: dist_4$1("timemanager", "Resolved")
    }];

    var apply = function apply(e) {
      // Prepare a link with get attributes
      var filterLinkElement = Helpers.getLinkEl(); // Base off current url

      var newUrl = document.location.href; // Add filter attributes to url

      newUrl = Helpers.getUpdatedFilterUrl("clients", selectedClients ? selectedClients.map(function (c) {
        return c.value;
      }).join(",") : "", newUrl);
      newUrl = Helpers.getUpdatedFilterUrl("projects", selectedProjects ? selectedProjects.map(function (p) {
        return p.value;
      }).join(",") : "", newUrl);
      newUrl = Helpers.getUpdatedFilterUrl("tasks", selectedTasks ? selectedTasks.map(function (t) {
        return t.value;
      }).join(",") : "", newUrl);
      newUrl = Helpers.getUpdatedFilterUrl("status", selectedStatus ? selectedStatus.value : "", newUrl); // Attach url to hidden pjax link

      filterLinkElement.href = newUrl; // Navigate

      filterLinkElement.click();
    };

    var handleSelectClients = function handleSelectClients(event) {
      $$invalidate(1, selectedClients = event.detail);

      if (selectedClients && selectedClients.length) {
        $$invalidate(6, availableProjects = projects.filter(function (project) {
          return selectedClients.find(function (client) {
            return project.clientUuid === client.value;
          });
        }));
      } else {
        $$invalidate(6, availableProjects = projects);
      }

      if (selectedProjects && selectedProjects.length) {
        $$invalidate(7, availableTasks = tasks.filter(function (task) {
          return selectedProjects.find(function (project) {
            return task.projectUuid === project.value;
          });
        }));
      } else {
        $$invalidate(7, availableTasks = tasks);
      }
    };

    var handleSelectProjects = function handleSelectProjects(event) {
      $$invalidate(2, selectedProjects = event.detail);

      if (selectedClients && selectedClients.length) {
        $$invalidate(6, availableProjects = projects.filter(function (project) {
          return selectedClients.find(function (client) {
            return project.clientUuid === client.value;
          });
        }));
      } else {
        $$invalidate(6, availableProjects = projects);
      }

      if (selectedProjects && selectedProjects.length) {
        $$invalidate(7, availableTasks = tasks.filter(function (task) {
          return selectedProjects.find(function (project) {
            return task.projectUuid === project.value;
          });
        }));
      } else {
        $$invalidate(7, availableTasks = tasks);
      }
    };

    var handleSelectTasks = function handleSelectTasks(event) {
      $$invalidate(3, selectedTasks = event.detail);
    };

    var handleSelectStatus = function handleSelectStatus(event) {
      $$invalidate(4, selectedStatus = event.detail);
    };

    var handleClearStatus = function handleClearStatus() {
      $$invalidate(4, selectedStatus = "");
    };

    onMount(function () {
      // Parse current URL
      var urlParts = document.location.href.split("?");

      if (urlParts.length > 1) {
        var queryString = urlParts[1];
        var queryStringParts = queryString.split("&");

        queryStringParts.map(function (part) {
          // Split query params
          var partParts = part.split("=");

          var _partParts = _slicedToArray(partParts, 2),
              name = _partParts[0],
              value = _partParts[1]; // Apply filters from query params


          if (name === "status" && value) {
            $$invalidate(4, selectedStatus = availableStatus.find(function (status) {
              return status.value === value;
            }));
          }

          if (name === "tasks" && value && value.length) {
            $$invalidate(3, selectedTasks = value.split(",").map(function (taskId) {
              return tasks.find(function (task) {
                return task.value === taskId;
              });
            }));
          }

          if (name === "projects" && value && value.length) {
            handleSelectProjects({
              detail: value.split(",").map(function (projectId) {
                return projects.find(function (project) {
                  return project.value === projectId;
                });
              })
            });
          }

          if (name === "clients" && value && value.length) {
            handleSelectClients({
              detail: value.split(",").map(function (clientId) {
                return clients.find(function (client) {
                  return client.value === clientId;
                });
              })
            });
          }
        });
      }
    });

    $$self.$$set = function ($$props) {
      if ("clients" in $$props) $$invalidate(0, clients = $$props.clients);
      if ("projects" in $$props) $$invalidate(15, projects = $$props.projects);
      if ("tasks" in $$props) $$invalidate(16, tasks = $$props.tasks);
    };

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*projects*/
      32768) {
        $$invalidate(6, availableProjects = projects);
      }

      if ($$self.$$.dirty &
      /*tasks*/
      65536) {
        $$invalidate(7, availableTasks = tasks);
      }
    };

    $$invalidate(5, loading = false);

    return [clients, selectedClients, selectedProjects, selectedTasks, selectedStatus, loading, availableProjects, availableTasks, availableStatus, apply, handleSelectClients, handleSelectProjects, handleSelectTasks, handleSelectStatus, handleClearStatus, projects, tasks];
  }

  var Filters = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Filters, _SvelteComponent);

    var _super = _createSuper(Filters);

    function Filters(options) {
      var _this;

      _classCallCheck$1(this, Filters);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$2, create_fragment$2, safe_not_equal, {
        clients: 0,
        projects: 15,
        tasks: 16
      });
      return _this;
    }

    return Filters;
  }(SvelteComponent);

  function create_fragment$1(ctx) {
    var form;
    var label0;
    var t0_value = dist_4$1("timemanager", "From") + "";
    var t0;
    var t1;
    var input0;
    var t2;
    var label1;
    var t3_value = dist_4$1("timemanager", "To") + "";
    var t3;
    var t4;
    var input1;
    var t5;
    var label2;
    var t6_value = dist_4$1("timemanager", "Presets") + "";
    var t6;
    var t7;
    var select;
    var t8;
    var span;
    var button;
    var t9_value = dist_4$1("timemanager", "Apply range") + "";
    var t9;
    var form_class_value;
    var current;
    var mounted;
    var dispose;
    select = new Select({
      props: {
        noOptionsMessage: dist_4$1("timemanager", "No options"),
        placeholder: dist_4$1("timemanager", "Select..."),
        inputAttributes: {
          id: "preset-select"
        },
        items:
        /*presets*/
        ctx[3]
      }
    });
    select.$on("select",
    /*handleSelectPreset*/
    ctx[5]);
    return {
      c: function c() {
        form = element("form");
        label0 = element("label");
        t0 = text(t0_value);
        t1 = space();
        input0 = element("input");
        t2 = space();
        label1 = element("label");
        t3 = text(t3_value);
        t4 = space();
        input1 = element("input");
        t5 = space();
        label2 = element("label");
        t6 = text(t6_value);
        t7 = space();
        create_component(select.$$.fragment);
        t8 = space();
        span = element("span");
        button = element("button");
        t9 = text(t9_value);
        attr(input0, "id", "start");
        attr(input0, "type", "date");
        attr(input0, "pattern", "Y-m-d");
        attr(label0, "for", "start");
        attr(label0, "class", "start");
        attr(input1, "id", "end");
        attr(input1, "type", "date");
        attr(input1, "pattern", "Y-m-d");
        attr(label1, "for", "end");
        attr(label1, "class", "end");
        attr(label2, "for", "preset-select");
        attr(label2, "class", "status");
        button.disabled =
        /*loading*/
        ctx[0];
        attr(button, "type", "submit");
        attr(button, "class", "button primary");
        attr(span, "class", "actions");
        attr(form, "class", form_class_value = "reports-timerange".concat(
        /*loading*/
        ctx[0] ? " icon-loading" : ""));
      },
      m: function m(target, anchor) {
        insert(target, form, anchor);
        append(form, label0);
        append(label0, t0);
        append(label0, t1);
        append(label0, input0);
        set_input_value(input0,
        /*start*/
        ctx[1]);
        append(form, t2);
        append(form, label1);
        append(label1, t3);
        append(label1, t4);
        append(label1, input1);
        set_input_value(input1,
        /*end*/
        ctx[2]);
        append(form, t5);
        append(form, label2);
        append(label2, t6);
        append(label2, t7);
        mount_component(select, label2, null);
        append(form, t8);
        append(form, span);
        append(span, button);
        append(button, t9);
        current = true;

        if (!mounted) {
          dispose = [listen(input0, "input",
          /*input0_input_handler*/
          ctx[8]), listen(input1, "input",
          /*input1_input_handler*/
          ctx[9]), listen(form, "submit", prevent_default(
          /*applyRange*/
          ctx[4]))];
          mounted = true;
        }
      },
      p: function p(ctx, _ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            dirty = _ref2[0];

        if (dirty &
        /*start*/
        2) {
          set_input_value(input0,
          /*start*/
          ctx[1]);
        }

        if (dirty &
        /*end*/
        4) {
          set_input_value(input1,
          /*end*/
          ctx[2]);
        }

        if (!current || dirty &
        /*loading*/
        1) {
          button.disabled =
          /*loading*/
          ctx[0];
        }

        if (!current || dirty &
        /*loading*/
        1 && form_class_value !== (form_class_value = "reports-timerange".concat(
        /*loading*/
        ctx[0] ? " icon-loading" : ""))) {
          attr(form, "class", form_class_value);
        }
      },
      i: function i(local) {
        if (current) return;
        transition_in(select.$$.fragment, local);
        current = true;
      },
      o: function o(local) {
        transition_out(select.$$.fragment, local);
        current = false;
      },
      d: function d(detaching) {
        if (detaching) detach(form);
        destroy_component(select);
        mounted = false;
        run_all(dispose);
      }
    };
  }

  var dateFormat = "yyyy-MM-dd";

  function instance$1($$self, $$props, $$invalidate) {
    var loading;
    var start;
    var end;
    var startOfMonth$1 = $$props.startOfMonth;
    var endOfMonth$1 = $$props.endOfMonth;
    var presets = [{
      label: dist_4$1("timemanager", "Today"),
      value: "today"
    }, {
      label: dist_4$1("timemanager", "Yesterday"),
      value: "yesterday"
    }, {
      label: dist_4$1("timemanager", "This Week"),
      value: "week"
    }, {
      label: dist_4$1("timemanager", "Last week"),
      value: "week-1"
    }, {
      label: dist_4$1("timemanager", "This month"),
      value: "month"
    }, {
      label: dist_4$1("timemanager", "Last month"),
      value: "month-1"
    }, {
      label: dist_4$1("timemanager", "This year"),
      value: "year"
    }, {
      label: dist_4$1("timemanager", "Last year"),
      value: "year-1"
    }];

    var applyRange = function applyRange() {
      // Prepare a link with get attributes
      var filterLinkElement = Helpers.getLinkEl(); // Base off current url

      var newUrl = document.location.href; // Add filter attributes to url

      newUrl = Helpers.getUpdatedFilterUrl("start", start ? start : "", newUrl);
      newUrl = Helpers.getUpdatedFilterUrl("end", end ? end : "", newUrl); // Attach url to hidden pjax link

      filterLinkElement.href = newUrl; // Navigate

      filterLinkElement.click();
    };

    var handleSelectPreset = function handleSelectPreset(selectedValue) {
      var preset = selectedValue.detail.value;

      switch (preset) {
        case "today":
          $$invalidate(1, start = format(startOfToday(), dateFormat));
          $$invalidate(2, end = format(startOfToday(), dateFormat));
          break;

        case "yesterday":
          $$invalidate(1, start = format(startOfYesterday(), dateFormat));
          $$invalidate(2, end = format(startOfYesterday(), dateFormat));
          break;

        case "week":
          $$invalidate(1, start = format(startOfWeek(startOfToday(), {
            weekStartsOn: dist_6()
          }), dateFormat));
          $$invalidate(2, end = format(endOfWeek(startOfToday(), {
            weekStartsOn: dist_6()
          }), dateFormat));
          break;

        case "week-1":
          $$invalidate(1, start = format(startOfWeek(sub(startOfToday(), {
            weeks: 1
          }), {
            weekStartsOn: dist_6()
          }), dateFormat));
          $$invalidate(2, end = format(endOfWeek(sub(startOfToday(), {
            weeks: 1
          }), {
            weekStartsOn: dist_6()
          }), dateFormat));
          break;

        case "month":
          $$invalidate(1, start = format(startOfMonth(startOfToday()), dateFormat));
          $$invalidate(2, end = format(endOfMonth(startOfToday()), dateFormat));
          break;

        case "month-1":
          $$invalidate(1, start = format(startOfMonth(sub(startOfToday(), {
            months: 1
          })), dateFormat));
          $$invalidate(2, end = format(endOfMonth(sub(startOfToday(), {
            months: 1
          })), dateFormat));
          break;

        case "year":
          $$invalidate(1, start = format(startOfYear(startOfToday()), dateFormat));
          $$invalidate(2, end = format(endOfYear(startOfToday()), dateFormat));
          break;

        case "year-1":
          $$invalidate(1, start = format(startOfYear(sub(startOfToday(), {
            years: 1
          })), dateFormat));
          $$invalidate(2, end = format(endOfYear(sub(startOfToday(), {
            years: 1
          })), dateFormat));
          break;
      }
    };

    onMount(function () {
      // Parse current URL
      var urlParts = document.location.href.split("?");

      if (urlParts.length > 1) {
        var queryString = urlParts[1];
        var queryStringParts = queryString.split("&");

        queryStringParts.map(function (part) {
          // Split query params
          var partParts = part.split("=");

          var _partParts = _slicedToArray(partParts, 2),
              name = _partParts[0],
              value = _partParts[1]; // Apply filters from query params


          if (name === "start" && value) {
            $$invalidate(1, start = value);
          }

          if (name === "end" && value) {
            $$invalidate(2, end = value);
          }
        });
      }
    });

    function input0_input_handler() {
      start = this.value;
      $$invalidate(1, start), $$invalidate(6, startOfMonth$1);
    }

    function input1_input_handler() {
      end = this.value;
      $$invalidate(2, end), $$invalidate(7, endOfMonth$1);
    }

    $$self.$$set = function ($$props) {
      if ("startOfMonth" in $$props) $$invalidate(6, startOfMonth$1 = $$props.startOfMonth);
      if ("endOfMonth" in $$props) $$invalidate(7, endOfMonth$1 = $$props.endOfMonth);
    };

    $$self.$$.update = function () {
      if ($$self.$$.dirty &
      /*startOfMonth*/
      64) {
        $$invalidate(1, start = startOfMonth$1);
      }

      if ($$self.$$.dirty &
      /*endOfMonth*/
      128) {
        $$invalidate(2, end = endOfMonth$1);
      }
    };

    $$invalidate(0, loading = false);

    return [loading, start, end, presets, applyRange, handleSelectPreset, startOfMonth$1, endOfMonth$1, input0_input_handler, input1_input_handler];
  }

  var Timerange = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(Timerange, _SvelteComponent);

    var _super = _createSuper(Timerange);

    function Timerange(options) {
      var _this;

      _classCallCheck$1(this, Timerange);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
        startOfMonth: 6,
        endOfMonth: 7
      });
      return _this;
    }

    return Timerange;
  }(SvelteComponent);

  function create_fragment(ctx) {
    var button;
    var mounted;
    var dispose;
    return {
      c: function c() {
        button = element("button");
        button.textContent = "".concat(dist_4$1("timemanager", "Print report"));
        attr(button, "type", "button");
        attr(button, "class", "button secondary");
      },
      m: function m(target, anchor) {
        insert(target, button, anchor);

        if (!mounted) {
          dispose = listen(button, "click",
          /*click_handler*/
          ctx[0]);
          mounted = true;
        }
      },
      p: noop$1,
      i: noop$1,
      o: noop$1,
      d: function d(detaching) {
        if (detaching) detach(button);
        mounted = false;
        dispose();
      }
    };
  }

  function instance($$self) {
    onMount(function () {
      var openDetailsBeforePrint = function openDetailsBeforePrint() {
        var details = document.querySelectorAll("details");
        details && details.length && details.forEach(function (details) {
          if (!details.open) {
            details.setAttribute("open", "open");
            details.setAttribute("data-print", "true");
          }
        });
      };

      var closeDetailsAfterPrint = function closeDetailsAfterPrint() {
        var details = document.querySelectorAll("details[data-print=true]");
        details && details.length && details.forEach(function (details) {
          details.removeAttribute("open");
          details.removeAttribute("data-print");
        });
      };

      window.addEventListener("beforeprint", openDetailsBeforePrint);
      window.addEventListener("afterprint", closeDetailsAfterPrint);
      return function () {
        window.removeEventListener("beforeprint", openDetailsBeforePrint);
        window.removeEventListener("afterprint", closeDetailsAfterPrint);
      };
    });

    var click_handler = function click_handler() {
      return window.print();
    };

    return [click_handler];
  }

  var PrintButton = /*#__PURE__*/function (_SvelteComponent) {
    _inherits(PrintButton, _SvelteComponent);

    var _super = _createSuper(PrintButton);

    function PrintButton(options) {
      var _this;

      _classCallCheck$1(this, PrintButton);

      _this = _super.call(this);
      init$1(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
      return _this;
    }

    return PrintButton;
  }(SvelteComponent);

  /* global HTMLCollection: true */
  var foreachEls = function (els, fn, context) {
    if (els instanceof HTMLCollection || els instanceof NodeList || els instanceof Array) {
      return Array.prototype.forEach.call(els, fn, context);
    } // assume simple DOM element


    return fn.call(context, els);
  };

  var evalScript = function (el) {
    var code = el.text || el.textContent || el.innerHTML || "";
    var src = el.src || "";
    var parent = el.parentNode || document.querySelector("head") || document.documentElement;
    var script = document.createElement("script");

    if (code.match("document.write")) {
      if (console && console.log) {
        console.log("Script contains document.write. Can’t be executed correctly. Code skipped ", el);
      }

      return false;
    }

    script.type = "text/javascript";
    script.id = el.id;
    /* istanbul ignore if */

    if (src !== "") {
      script.src = src;
      script.async = false; // force synchronous loading of peripheral JS
    }

    if (code !== "") {
      try {
        script.appendChild(document.createTextNode(code));
      } catch (e) {
        /* istanbul ignore next */
        // old IEs have funky script nodes
        script.text = code;
      }
    } // execute


    parent.appendChild(script); // avoid pollution only in head or body tags

    if ((parent instanceof HTMLHeadElement || parent instanceof HTMLBodyElement) && parent.contains(script)) {
      parent.removeChild(script);
    }

    return true;
  };

  // Finds and executes scripts (used for newly added elements)
  // Needed since innerHTML does not run scripts


  var executeScripts = function (el) {
    if (el.tagName.toLowerCase() === "script") {
      evalScript(el);
    }

    foreachEls(el.querySelectorAll("script"), function (script) {
      if (!script.type || script.type.toLowerCase() === "text/javascript") {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }

        evalScript(script);
      }
    });
  };

  var on = function (els, events, listener, useCapture) {
    events = typeof events === "string" ? events.split(" ") : events;
    events.forEach(function (e) {
      foreachEls(els, function (el) {
        el.addEventListener(e, listener, useCapture);
      });
    });
  };

  var switches = {
    outerHTML: function (oldEl, newEl) {
      oldEl.outerHTML = newEl.outerHTML;
      this.onSwitch();
    },
    innerHTML: function (oldEl, newEl) {
      oldEl.innerHTML = newEl.innerHTML;

      if (newEl.className === "") {
        oldEl.removeAttribute("class");
      } else {
        oldEl.className = newEl.className;
      }

      this.onSwitch();
    },
    switchElementsAlt: function (oldEl, newEl) {
      oldEl.innerHTML = newEl.innerHTML; // Copy attributes from the new element to the old one

      if (newEl.hasAttributes()) {
        var attrs = newEl.attributes;

        for (var i = 0; i < attrs.length; i++) {
          oldEl.attributes.setNamedItem(attrs[i].cloneNode());
        }
      }

      this.onSwitch();
    },
    // Equivalent to outerHTML(), but doesn't require switchElementsAlt() for <head> and <body>
    replaceNode: function (oldEl, newEl) {
      oldEl.parentNode.replaceChild(newEl, oldEl);
      this.onSwitch();
    },
    sideBySide: function (oldEl, newEl, options, switchOptions) {
      var forEach = Array.prototype.forEach;
      var elsToRemove = [];
      var elsToAdd = [];
      var fragToAppend = document.createDocumentFragment();
      var animationEventNames = "animationend webkitAnimationEnd MSAnimationEnd oanimationend";
      var animatedElsNumber = 0;

      var sexyAnimationEnd = function (e) {
        if (e.target !== e.currentTarget) {
          // end triggered by an animation on a child
          return;
        }

        animatedElsNumber--;

        if (animatedElsNumber <= 0 && elsToRemove) {
          elsToRemove.forEach(function (el) {
            // browsing quickly can make the el
            // already removed by last page update ?
            if (el.parentNode) {
              el.parentNode.removeChild(el);
            }
          });
          elsToAdd.forEach(function (el) {
            el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "");
            el.removeAttribute("data-pjax-classes");
          });
          elsToAdd = null; // free memory

          elsToRemove = null; // free memory
          // this is to trigger some repaint (example: picturefill)

          this.onSwitch();
        }
      }.bind(this);

      switchOptions = switchOptions || {};
      forEach.call(oldEl.childNodes, function (el) {
        elsToRemove.push(el);

        if (el.classList && !el.classList.contains("js-Pjax-remove")) {
          // for fast switch, clean element that just have been added, & not cleaned yet.
          if (el.hasAttribute("data-pjax-classes")) {
            el.className = el.className.replace(el.getAttribute("data-pjax-classes"), "");
            el.removeAttribute("data-pjax-classes");
          }

          el.classList.add("js-Pjax-remove");

          if (switchOptions.callbacks && switchOptions.callbacks.removeElement) {
            switchOptions.callbacks.removeElement(el);
          }

          if (switchOptions.classNames) {
            el.className += " " + switchOptions.classNames.remove + " " + (options.backward ? switchOptions.classNames.backward : switchOptions.classNames.forward);
          }

          animatedElsNumber++;
          on(el, animationEventNames, sexyAnimationEnd, true);
        }
      });
      forEach.call(newEl.childNodes, function (el) {
        if (el.classList) {
          var addClasses = "";

          if (switchOptions.classNames) {
            addClasses = " js-Pjax-add " + switchOptions.classNames.add + " " + (options.backward ? switchOptions.classNames.forward : switchOptions.classNames.backward);
          }

          if (switchOptions.callbacks && switchOptions.callbacks.addElement) {
            switchOptions.callbacks.addElement(el);
          }

          el.className += addClasses;
          el.setAttribute("data-pjax-classes", addClasses);
          elsToAdd.push(el);
          fragToAppend.appendChild(el);
          animatedElsNumber++;
          on(el, animationEventNames, sexyAnimationEnd, true);
        }
      }); // pass all className of the parent

      oldEl.className = newEl.className;
      oldEl.appendChild(fragToAppend);
    }
  };
  switches.outerHTML;
  switches.innerHTML;
  switches.switchElementsAlt;
  switches.replaceNode;
  switches.sideBySide;

  /* global _gaq: true, ga: true */


  var parseOptions$1 = function (options) {
    options = options || {};
    options.elements = options.elements || "a[href], form[action]";
    options.selectors = options.selectors || ["title", ".js-Pjax"];
    options.switches = options.switches || {};
    options.switchesOptions = options.switchesOptions || {};
    options.history = typeof options.history === "undefined" ? true : options.history;
    options.analytics = typeof options.analytics === "function" || options.analytics === false ? options.analytics : defaultAnalytics;
    options.scrollTo = typeof options.scrollTo === "undefined" ? 0 : options.scrollTo;
    options.scrollRestoration = typeof options.scrollRestoration !== "undefined" ? options.scrollRestoration : true;
    options.cacheBust = typeof options.cacheBust === "undefined" ? true : options.cacheBust;
    options.debug = options.debug || false;
    options.timeout = options.timeout || 0;
    options.currentUrlFullReload = typeof options.currentUrlFullReload === "undefined" ? false : options.currentUrlFullReload; // We can’t replace body.outerHTML or head.outerHTML.
    // It creates a bug where a new body or head are created in the DOM.
    // If you set head.outerHTML, a new body tag is appended, so the DOM has 2 body nodes, and vice versa

    if (!options.switches.head) {
      options.switches.head = switches.switchElementsAlt;
    }

    if (!options.switches.body) {
      options.switches.body = switches.switchElementsAlt;
    }

    return options;
  };
  /* istanbul ignore next */


  function defaultAnalytics() {
    if (window._gaq) {
      _gaq.push(["_trackPageview"]);
    }

    if (window.ga) {
      ga("send", "pageview", {
        page: location.pathname,
        title: document.title
      });
    }
  }

  var uniqueid = function () {
    var counter = 0;
    return function () {
      var id = "pjax" + new Date().getTime() + "_" + counter;
      counter++;
      return id;
    };
  }();

  var trigger = function (els, events, opts) {
    events = typeof events === "string" ? events.split(" ") : events;
    events.forEach(function (e) {
      var event;
      event = document.createEvent("HTMLEvents");
      event.initEvent(e, true, true);
      event.eventName = e;

      if (opts) {
        Object.keys(opts).forEach(function (key) {
          event[key] = opts[key];
        });
      }

      foreachEls(els, function (el) {
        var domFix = false;

        if (!el.parentNode && el !== document && el !== window) {
          // THANK YOU IE (9/10/11)
          // dispatchEvent doesn't work if the element is not in the DOM
          domFix = true;
          document.body.appendChild(el);
        }

        el.dispatchEvent(event);

        if (domFix) {
          el.parentNode.removeChild(el);
        }
      });
    });
  };

  var clone = function (obj) {
    /* istanbul ignore if */
    if (null === obj || "object" !== typeof obj) {
      return obj;
    }

    var copy = obj.constructor();

    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) {
        copy[attr] = obj[attr];
      }
    }

    return copy;
  };

  var contains = function contains(doc, selectors, el) {
    for (var i = 0; i < selectors.length; i++) {
      var selectedEls = doc.querySelectorAll(selectors[i]);

      for (var j = 0; j < selectedEls.length; j++) {
        if (selectedEls[j].contains(el)) {
          return true;
        }
      }
    }

    return false;
  };

  var extend = function (target) {
    if (target == null) {
      return null;
    }

    var to = Object(target);

    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      if (source != null) {
        for (var key in source) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            to[key] = source[key];
          }
        }
      }
    }

    return to;
  };

  var noop = function () {};

  var log = function () {
    if (this.options.debug && console) {
      if (typeof console.log === "function") {
        console.log.apply(console, arguments);
      } // IE is weird
      else if (console.log) {
          console.log(arguments);
        }
    }
  };

  var attrState$2 = "data-pjax-state";

  var parseElement = function (el) {
    switch (el.tagName.toLowerCase()) {
      case "a":
        // only attach link if el does not already have link attached
        if (!el.hasAttribute(attrState$2)) {
          this.attachLink(el);
        }

        break;

      case "form":
        // only attach link if el does not already have link attached
        if (!el.hasAttribute(attrState$2)) {
          this.attachForm(el);
        }

        break;

      default:
        throw "Pjax can only be applied on <a> or <form> submit";
    }
  };

  var attrState$1 = "data-pjax-state";

  var linkAction = function (el, event) {
    if (isDefaultPrevented$1(event)) {
      return;
    } // Since loadUrl modifies options and we may add our own modifications below,
    // clone it so the changes don't persist


    var options = clone(this.options);
    var attrValue = checkIfShouldAbort$1(el, event);

    if (attrValue) {
      el.setAttribute(attrState$1, attrValue);
      return;
    }

    event.preventDefault(); // don’t do "nothing" if user try to reload the page by clicking the same link twice

    if (this.options.currentUrlFullReload && el.href === window.location.href.split("#")[0]) {
      el.setAttribute(attrState$1, "reload");
      this.reload();
      return;
    }

    el.setAttribute(attrState$1, "load");
    options.triggerElement = el;
    this.loadUrl(el.href, options);
  };

  function checkIfShouldAbort$1(el, event) {
    // Don’t break browser special behavior on links (like page in new window)
    if (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return "modifier";
    } // we do test on href now to prevent unexpected behavior if for some reason
    // user have href that can be dynamically updated
    // Ignore external links.


    if (el.protocol !== window.location.protocol || el.host !== window.location.host) {
      return "external";
    } // Ignore anchors on the same page (keep native behavior)


    if (el.hash && el.href.replace(el.hash, "") === window.location.href.replace(location.hash, "")) {
      return "anchor";
    } // Ignore empty anchor "foo.html#"


    if (el.href === window.location.href.split("#")[0] + "#") {
      return "anchor-empty";
    }
  }

  var isDefaultPrevented$1 = function (event) {
    return event.defaultPrevented || event.returnValue === false;
  };

  var attachLink = function (el) {
    var that = this;
    el.setAttribute(attrState$1, "");
    on(el, "click", function (event) {
      linkAction.call(that, el, event);
    });
    on(el, "keyup", function (event) {
      if (event.keyCode === 13) {
        linkAction.call(that, el, event);
      }
    }.bind(this));
  };

  var attrState = "data-pjax-state";

  var formAction = function (el, event) {
    if (isDefaultPrevented(event)) {
      return;
    } // Since loadUrl modifies options and we may add our own modifications below,
    // clone it so the changes don't persist


    var options = clone(this.options); // Initialize requestOptions

    options.requestOptions = {
      requestUrl: el.getAttribute("action") || window.location.href,
      requestMethod: el.getAttribute("method") || "GET"
    }; // create a testable virtual link of the form action

    var virtLinkElement = document.createElement("a");
    virtLinkElement.setAttribute("href", options.requestOptions.requestUrl);
    var attrValue = checkIfShouldAbort(virtLinkElement, options);

    if (attrValue) {
      el.setAttribute(attrState, attrValue);
      return;
    }

    event.preventDefault();

    if (el.enctype === "multipart/form-data") {
      options.requestOptions.formData = new FormData(el);
    } else {
      options.requestOptions.requestParams = parseFormElements(el);
    }

    el.setAttribute(attrState, "submit");
    options.triggerElement = el;
    this.loadUrl(virtLinkElement.href, options);
  };

  function parseFormElements(el) {
    var requestParams = [];
    var formElements = el.elements;

    for (var i = 0; i < formElements.length; i++) {
      var element = formElements[i];
      var tagName = element.tagName.toLowerCase(); // jscs:disable disallowImplicitTypeConversion

      if (!!element.name && element.attributes !== undefined && tagName !== "button") {
        // jscs:enable disallowImplicitTypeConversion
        var type = element.attributes.type;

        if (!type || type.value !== "checkbox" && type.value !== "radio" || element.checked) {
          // Build array of values to submit
          var values = [];

          if (tagName === "select") {
            var opt;

            for (var j = 0; j < element.options.length; j++) {
              opt = element.options[j];

              if (opt.selected && !opt.disabled) {
                values.push(opt.hasAttribute("value") ? opt.value : opt.text);
              }
            }
          } else {
            values.push(element.value);
          }

          for (var k = 0; k < values.length; k++) {
            requestParams.push({
              name: encodeURIComponent(element.name),
              value: encodeURIComponent(values[k])
            });
          }
        }
      }
    }

    return requestParams;
  }

  function checkIfShouldAbort(virtLinkElement, options) {
    // Ignore external links.
    if (virtLinkElement.protocol !== window.location.protocol || virtLinkElement.host !== window.location.host) {
      return "external";
    } // Ignore click if we are on an anchor on the same page


    if (virtLinkElement.hash && virtLinkElement.href.replace(virtLinkElement.hash, "") === window.location.href.replace(location.hash, "")) {
      return "anchor";
    } // Ignore empty anchor "foo.html#"


    if (virtLinkElement.href === window.location.href.split("#")[0] + "#") {
      return "anchor-empty";
    } // if declared as a full reload, just normally submit the form


    if (options.currentUrlFullReload && virtLinkElement.href === window.location.href.split("#")[0]) {
      return "reload";
    }
  }

  var isDefaultPrevented = function (event) {
    return event.defaultPrevented || event.returnValue === false;
  };

  var attachForm = function (el) {
    var that = this;
    el.setAttribute(attrState, "");
    on(el, "submit", function (event) {
      formAction.call(that, el, event);
    });
  };

  var foreachSelectors = function (selectors, cb, context, DOMcontext) {
    DOMcontext = DOMcontext || document;
    selectors.forEach(function (selector) {
      foreachEls(DOMcontext.querySelectorAll(selector), cb, context);
    });
  };

  var switchesSelectors = function (switches$1, switchesOptions, selectors, fromEl, toEl, options) {
    var switchesQueue = [];
    selectors.forEach(function (selector) {
      var newEls = fromEl.querySelectorAll(selector);
      var oldEls = toEl.querySelectorAll(selector);

      if (this.log) {
        this.log("Pjax switch", selector, newEls, oldEls);
      }

      if (newEls.length !== oldEls.length) {
        throw "DOM doesn’t look the same on new loaded page: ’" + selector + "’ - new " + newEls.length + ", old " + oldEls.length;
      }

      foreachEls(newEls, function (newEl, i) {
        var oldEl = oldEls[i];

        if (this.log) {
          this.log("newEl", newEl, "oldEl", oldEl);
        }

        var callback = switches$1[selector] ? switches$1[selector].bind(this, oldEl, newEl, options, switchesOptions[selector]) : switches.outerHTML.bind(this, oldEl, newEl, options);
        switchesQueue.push(callback);
      }, this);
    }, this);
    this.state.numPendingSwitches = switchesQueue.length;
    switchesQueue.forEach(function (queuedSwitch) {
      queuedSwitch();
    });
  };

  var abortRequest = function (request) {
    if (request && request.readyState < 4) {
      request.onreadystatechange = noop;
      request.abort();
    }
  };

  var updateQueryString = function (uri, key, value) {
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf("?") !== -1 ? "&" : "?";

    if (uri.match(re)) {
      return uri.replace(re, "$1" + key + "=" + value + "$2");
    } else {
      return uri + separator + key + "=" + value;
    }
  };

  var sendRequest = function (location, options, callback) {
    options = options || {};
    var queryString;
    var requestOptions = options.requestOptions || {};
    var requestMethod = (requestOptions.requestMethod || "GET").toUpperCase();
    var requestParams = requestOptions.requestParams || null;
    var formData = requestOptions.formData || null;
    var requestPayload = null;
    var request = new XMLHttpRequest();
    var timeout = options.timeout || 0;

    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status === 200) {
          callback(request.responseText, request, location, options);
        } else if (request.status !== 0) {
          callback(null, request, location, options);
        }
      }
    };

    request.onerror = function (e) {
      console.log(e);
      callback(null, request, location, options);
    };

    request.ontimeout = function () {
      callback(null, request, location, options);
    }; // Prepare the request payload for forms, if available


    if (requestParams && requestParams.length) {
      // Build query string
      queryString = requestParams.map(function (param) {
        return param.name + "=" + param.value;
      }).join("&");

      switch (requestMethod) {
        case "GET":
          // Reset query string to avoid an issue with repeat submissions where checkboxes that were
          // previously checked are incorrectly preserved
          location = location.split("?")[0]; // Append new query string

          location += "?" + queryString;
          break;

        case "POST":
          // Send query string as request payload
          requestPayload = queryString;
          break;
      }
    } else if (formData) {
      requestPayload = formData;
    } // Add a timestamp as part of the query string if cache busting is enabled


    if (options.cacheBust) {
      location = updateQueryString(location, "t", Date.now());
    }

    request.open(requestMethod, location, true);
    request.timeout = timeout;
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    request.setRequestHeader("X-PJAX", "true");
    request.setRequestHeader("X-PJAX-Selectors", JSON.stringify(options.selectors)); // Send the proper header information for POST forms

    if (requestPayload && requestMethod === "POST" && !formData) {
      request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    }

    request.send(requestPayload);
    return request;
  };

  var handleResponse = function (responseText, request, href, options) {
    options = clone(options || this.options);
    options.request = request; // Fail if unable to load HTML via AJAX

    if (responseText === false) {
      trigger(document, "pjax:complete pjax:error", options);
      return;
    } // push scroll position to history


    var currentState = window.history.state || {};
    window.history.replaceState({
      url: currentState.url || window.location.href,
      title: currentState.title || document.title,
      uid: currentState.uid || uniqueid(),
      scrollPos: [document.documentElement.scrollLeft || document.body.scrollLeft, document.documentElement.scrollTop || document.body.scrollTop]
    }, document.title, window.location.href); // Check for redirects

    var oldHref = href;

    if (request.responseURL) {
      if (href !== request.responseURL) {
        href = request.responseURL;
      }
    } else if (request.getResponseHeader("X-PJAX-URL")) {
      href = request.getResponseHeader("X-PJAX-URL");
    } else if (request.getResponseHeader("X-XHR-Redirected-To")) {
      href = request.getResponseHeader("X-XHR-Redirected-To");
    } // Add back the hash if it was removed


    var a = document.createElement("a");
    a.href = oldHref;
    var oldHash = a.hash;
    a.href = href;

    if (oldHash && !a.hash) {
      a.hash = oldHash;
      href = a.href;
    }

    this.state.href = href;
    this.state.options = options;

    try {
      this.loadContent(responseText, options);
    } catch (e) {
      trigger(document, "pjax:error", options);

      if (!this.options.debug) {
        if (console && console.error) {
          console.error("Pjax switch fail: ", e);
        }

        return this.latestChance(href);
      } else {
        throw e;
      }
    }
  };

  var isSupported = function () {
    // Borrowed wholesale from https://github.com/defunkt/jquery-pjax
    return window.history && window.history.pushState && window.history.replaceState && // pushState isn’t reliable on iOS until 5.
    !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/);
  };

  var pjax = createCommonjsModule$1(function (module) {
  var Pjax = function (options) {
    this.state = {
      numPendingSwitches: 0,
      href: null,
      options: null
    };
    this.options = parseOptions$1(options);
    this.log("Pjax options", this.options);

    if (this.options.scrollRestoration && "scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    this.maxUid = this.lastUid = uniqueid();
    this.parseDOM(document);
    on(window, "popstate", function (st) {
      if (st.state) {
        var opt = clone(this.options);
        opt.url = st.state.url;
        opt.title = st.state.title; // Since state already exists, prevent it from being pushed again

        opt.history = false;
        opt.scrollPos = st.state.scrollPos;

        if (st.state.uid < this.lastUid) {
          opt.backward = true;
        } else {
          opt.forward = true;
        }

        this.lastUid = st.state.uid; // @todo implement history cache here, based on uid

        this.loadUrl(st.state.url, opt);
      }
    }.bind(this));
  };

  Pjax.switches = switches;
  Pjax.prototype = {
    log: log,
    getElements: function (el) {
      return el.querySelectorAll(this.options.elements);
    },
    parseDOM: function (el) {
      var parseElement$1 = parseElement;

      foreachEls(this.getElements(el), parseElement$1, this);
    },
    refresh: function (el) {
      this.parseDOM(el || document);
    },
    reload: function () {
      window.location.reload();
    },
    attachLink: attachLink,
    attachForm: attachForm,
    forEachSelectors: function (cb, context, DOMcontext) {
      return foreachSelectors.bind(this)(this.options.selectors, cb, context, DOMcontext);
    },
    switchSelectors: function (selectors, fromEl, toEl, options) {
      return switchesSelectors.bind(this)(this.options.switches, this.options.switchesOptions, selectors, fromEl, toEl, options);
    },
    latestChance: function (href) {
      window.location = href;
    },
    onSwitch: function () {
      trigger(window, "resize scroll");
      this.state.numPendingSwitches--; // debounce calls, so we only run this once after all switches are finished.

      if (this.state.numPendingSwitches === 0) {
        this.afterAllSwitches();
      }
    },
    loadContent: function (html, options) {
      if (typeof html !== "string") {
        trigger(document, "pjax:complete pjax:error", options);
        return;
      }

      var tmpEl = document.implementation.createHTMLDocument("pjax"); // parse HTML attributes to copy them
      // since we are forced to use documentElement.innerHTML (outerHTML can't be used for <html>)

      var htmlRegex = /<html[^>]+>/gi;
      var htmlAttribsRegex = /\s?[a-z:]+(?:=['"][^'">]+['"])*/gi;
      var matches = html.match(htmlRegex);

      if (matches && matches.length) {
        matches = matches[0].match(htmlAttribsRegex);

        if (matches.length) {
          matches.shift();
          matches.forEach(function (htmlAttrib) {
            var attr = htmlAttrib.trim().split("=");

            if (attr.length === 1) {
              tmpEl.documentElement.setAttribute(attr[0], true);
            } else {
              tmpEl.documentElement.setAttribute(attr[0], attr[1].slice(1, -1));
            }
          });
        }
      }

      tmpEl.documentElement.innerHTML = html;
      this.log("load content", tmpEl.documentElement.attributes, tmpEl.documentElement.innerHTML.length); // Clear out any focused controls before inserting new page contents.

      if (document.activeElement && contains(document, this.options.selectors, document.activeElement)) {
        try {
          document.activeElement.blur();
        } catch (e) {} // eslint-disable-line no-empty

      }

      this.switchSelectors(this.options.selectors, tmpEl, document, options);
    },
    abortRequest: abortRequest,
    doRequest: sendRequest,
    handleResponse: handleResponse,
    loadUrl: function (href, options) {
      options = typeof options === "object" ? extend({}, this.options, options) : clone(this.options);
      this.log("load href", href, options); // Abort any previous request

      this.abortRequest(this.request);
      trigger(document, "pjax:send", options); // Do the request

      this.request = this.doRequest(href, options, this.handleResponse.bind(this));
    },
    afterAllSwitches: function () {
      // FF bug: Won’t autofocus fields that are inserted via JS.
      // This behavior is incorrect. So if theres no current focus, autofocus
      // the last field.
      //
      // http://www.w3.org/html/wg/drafts/html/master/forms.html
      var autofocusEl = Array.prototype.slice.call(document.querySelectorAll("[autofocus]")).pop();

      if (autofocusEl && document.activeElement !== autofocusEl) {
        autofocusEl.focus();
      } // execute scripts when DOM have been completely updated


      this.options.selectors.forEach(function (selector) {
        foreachEls(document.querySelectorAll(selector), function (el) {
          executeScripts(el);
        });
      });
      var state = this.state;

      if (state.options.history) {
        if (!window.history.state) {
          this.lastUid = this.maxUid = uniqueid();
          window.history.replaceState({
            url: window.location.href,
            title: document.title,
            uid: this.maxUid,
            scrollPos: [0, 0]
          }, document.title);
        } // Update browser history


        this.lastUid = this.maxUid = uniqueid();
        window.history.pushState({
          url: state.href,
          title: state.options.title,
          uid: this.maxUid,
          scrollPos: [0, 0]
        }, state.options.title, state.href);
      }

      this.forEachSelectors(function (el) {
        this.parseDOM(el);
      }, this); // Fire Events

      trigger(document, "pjax:complete pjax:success", state.options);

      if (typeof state.options.analytics === "function") {
        state.options.analytics();
      }

      if (state.options.history) {
        // First parse url and check for hash to override scroll
        var a = document.createElement("a");
        a.href = this.state.href;

        if (a.hash) {
          var name = a.hash.slice(1);
          name = decodeURIComponent(name);
          var curtop = 0;
          var target = document.getElementById(name) || document.getElementsByName(name)[0];

          if (target) {
            // http://stackoverflow.com/questions/8111094/cross-browser-javascript-function-to-find-actual-position-of-an-element-in-page
            if (target.offsetParent) {
              do {
                curtop += target.offsetTop;
                target = target.offsetParent;
              } while (target);
            }
          }

          window.scrollTo(0, curtop);
        } else if (state.options.scrollTo !== false) {
          // Scroll page to top on new page load
          if (state.options.scrollTo.length > 1) {
            window.scrollTo(state.options.scrollTo[0], state.options.scrollTo[1]);
          } else {
            window.scrollTo(0, state.options.scrollTo);
          }
        }
      } else if (state.options.scrollRestoration && state.options.scrollPos) {
        window.scrollTo(state.options.scrollPos[0], state.options.scrollPos[1]);
      }

      this.state = {
        numPendingSwitches: 0,
        href: null,
        options: null
      };
    }
  };
  Pjax.isSupported = isSupported; // arguably could do `if( require("./lib/is-supported")()) {` but that might be a little to simple

  if (Pjax.isSupported()) {
    module.exports = Pjax;
  } // if there isn’t required browser functions, returning stupid api
  else {
      var stupidPjax = noop;

      for (var key in Pjax.prototype) {
        if (Pjax.prototype.hasOwnProperty(key) && typeof Pjax.prototype[key] === "function") {
          stupidPjax[key] = noop;
        }
      }

      module.exports = stupidPjax;
    }
  });

  var dist$1 = createCommonjsModule$1(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getRootUrl = exports.generateFilePath = exports.imagePath = exports.generateUrl = exports.generateOcsUrl = exports.generateRemoteUrl = exports.linkTo = void 0;

   /// <reference types="@nextcloud/typings" />

  /**
   * Get an url with webroot to a file in an app
   *
   * @param {string} app the id of the app the file belongs to
   * @param {string} file the file path relative to the app folder
   * @return {string} URL with webroot to a file
   */


  const linkTo = (app, file) => generateFilePath(app, '', file);
  /**
   * Creates a relative url for remote use
   *
   * @param {string} service id
   * @return {string} the url
   */


  exports.linkTo = linkTo;

  const linkToRemoteBase = service => getRootUrl() + '/remote.php/' + service;
  /**
   * @brief Creates an absolute url for remote use
   * @param {string} service id
   * @return {string} the url
   */


  const generateRemoteUrl = service => window.location.protocol + '//' + window.location.host + linkToRemoteBase(service);
  /**
   * Get the base path for the given OCS API service
   *
   * @param {string} url OCS API service url
   * @param {object} params parameters to be replaced into the service url
   * @param {UrlOptions} options options for the parameter replacement
   * @param {boolean} options.escape Set to false if parameters should not be URL encoded (default true)
   * @param {Number} options.ocsVersion OCS version to use (defaults to 2)
   * @return {string} Absolute path for the OCS URL
   */


  exports.generateRemoteUrl = generateRemoteUrl;

  const generateOcsUrl = (url, params, options) => {
    const allOptions = Object.assign({
      ocsVersion: 2
    }, options || {});
    const version = allOptions.ocsVersion === 1 ? 1 : 2;
    return window.location.protocol + '//' + window.location.host + getRootUrl() + '/ocs/v' + version + '.php' + _generateUrlPath(url, params, options);
  };

  exports.generateOcsUrl = generateOcsUrl;
  /**
   * Generate a url path, which can contain parameters
   *
   * Parameters will be URL encoded automatically
   *
   * @param {string} url address (can contain placeholders e.g. /call/{token} would replace {token} with the value of params.token
   * @param {object} params parameters to be replaced into the address
   * @param {UrlOptions} options options for the parameter replacement
   * @return {string} Path part for the given URL
   */

  const _generateUrlPath = (url, params, options) => {
    const allOptions = Object.assign({
      escape: true
    }, options || {});

    const _build = function (text, vars) {
      vars = vars || {};
      return text.replace(/{([^{}]*)}/g, function (a, b) {
        var r = vars[b];

        if (allOptions.escape) {
          return typeof r === 'string' || typeof r === 'number' ? encodeURIComponent(r.toString()) : encodeURIComponent(a);
        } else {
          return typeof r === 'string' || typeof r === 'number' ? r.toString() : a;
        }
      });
    };

    if (url.charAt(0) !== '/') {
      url = '/' + url;
    }

    return _build(url, params || {});
  };
  /**
   * Generate the url with webroot for the given relative url, which can contain parameters
   *
   * Parameters will be URL encoded automatically
   *
   * @param {string} url address (can contain placeholders e.g. /call/{token} would replace {token} with the value of params.token
   * @param {object} params parameters to be replaced into the url
   * @param {UrlOptions} options options for the parameter replacement
   * @param {boolean} options.noRewrite True if you want to force index.php being added
   * @param {boolean} options.escape Set to false if parameters should not be URL encoded (default true)
   * @return {string} URL with webroot for the given relative URL
   */


  const generateUrl = (url, params, options) => {
    const allOptions = Object.assign({
      noRewrite: false
    }, options || {});

    if (OC.config.modRewriteWorking === true && !allOptions.noRewrite) {
      return getRootUrl() + _generateUrlPath(url, params, options);
    }

    return getRootUrl() + '/index.php' + _generateUrlPath(url, params, options);
  };
  /**
   * Get the path with webroot to an image file
   * if no extension is given for the image, it will automatically decide
   * between .png and .svg based on what the browser supports
   *
   * @param {string} app the app id to which the image belongs
   * @param {string} file the name of the image file
   * @return {string}
   */


  exports.generateUrl = generateUrl;

  const imagePath = (app, file) => {
    if (file.indexOf('.') === -1) {
      //if no extension is given, use svg
      return generateFilePath(app, 'img', file + '.svg');
    }

    return generateFilePath(app, 'img', file);
  };
  /**
   * Get the url with webroot for a file in an app
   *
   * @param {string} app the id of the app
   * @param {string} type the type of the file to link to (e.g. css,img,ajax.template)
   * @param {string} file the filename
   * @return {string} URL with webroot for a file in an app
   */


  exports.imagePath = imagePath;

  const generateFilePath = (app, type, file) => {
    const isCore = OC.coreApps.indexOf(app) !== -1;
    let link = getRootUrl();

    if (file.substring(file.length - 3) === 'php' && !isCore) {
      link += '/index.php/apps/' + app;

      if (file !== 'index.php') {
        link += '/';

        if (type) {
          link += encodeURI(type + '/');
        }

        link += file;
      }
    } else if (file.substring(file.length - 3) !== 'php' && !isCore) {
      link = OC.appswebroots[app];

      if (type) {
        link += '/' + type + '/';
      }

      if (link.substring(link.length - 1) !== '/') {
        link += '/';
      }

      link += file;
    } else {
      if ((app === 'settings' || app === 'core' || app === 'search') && type === 'ajax') {
        link += '/index.php/';
      } else {
        link += '/';
      }

      if (!isCore) {
        link += 'apps/';
      }

      if (app !== '') {
        app += '/';
        link += app;
      }

      if (type) {
        link += type + '/';
      }

      link += file;
    }

    return link;
  };
  /**
   * Return the web root path where this Nextcloud instance
   * is accessible, with a leading slash.
   * For example "/nextcloud".
   *
   * @return {string} web root path
   */


  exports.generateFilePath = generateFilePath;

  const getRootUrl = () => OC.webroot;

  exports.getRootUrl = getRootUrl;
  });

  unwrapExports(dist$1);
  dist$1.getRootUrl;
  dist$1.generateFilePath;
  dist$1.imagePath;
  var dist_4 = dist$1.generateUrl;
  dist$1.generateOcsUrl;
  dist$1.generateRemoteUrl;
  dist$1.linkTo;

  var PagePjax = function PagePjax(reload) {
    _classCallCheck$1(this, PagePjax);

    /**
     * Enable seamless page navigation with pjax.
     */
    this.pjaxInstance = new pjax({
      elements: [".timemanager-pjax-link"],
      selectors: [".app-timemanager #app-navigation", ".app-timemanager #app-content"],
      cacheBust: false,
      scrollTo: true
    });
    document.addEventListener("pjax:send", function () {
      document.body.classList.add("loading");
      document.body.classList.remove("loading-error");
    });
    document.addEventListener("pjax:success", function () {
      setTimeout(function () {
        document.body.classList.remove("loading");
        reload();
      }, 300);
    });
    document.addEventListener("pjax:error", function (error) {
      // Catch session timeout and redirect to login
      if (error && error.request && error.request.status === 401) {
        document.location.href = "".concat(dist_4("login"), "?redirect_url=").concat(dist_4("timemanager", "index"));
      }

      document.body.classList.remove("loading");
      document.body.classList.add("loading-error");
    });
  };

  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe


  _export$1({
    target: 'Array',
    proto: true,
    forced: [].forEach != arrayForEach$1
  }, {
    forEach: arrayForEach$1
  });

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn) {
    var module = {
      exports: {}
    };
    return fn(module, module.exports), module.exports;
  }

  var check = function (it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global$1 = // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  }; // Detect IE8's incomplete defineProperty implementation


  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
  var $propertyIsEnumerable = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$2 && !$propertyIsEnumerable.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  var f$4 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$2(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;
  var objectPropertyIsEnumerable = {
    f: f$4
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var toString = {}.toString;

  var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var split = ''.split; // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
  } : Object; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible = function (it) {
    if (it == undefined) throw TypeError("Can't call method on " + it);
    return it;
  }; // toObject with fallback for non-array-like ES3 strings


  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  }; // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string


  var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input)) return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
    throw TypeError("Can't convert object to primitive value");
  }; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject


  var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
  };

  var hasOwnProperty = {}.hasOwnProperty;

  var has$1 = function hasOwn(it, key) {
    return hasOwnProperty.call(toObject(it), key);
  };

  var document$1 = global$1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
  }; // Thank's IE8 for his funny defineProperty


  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  }); // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  var f$3 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor(O, P);
    } catch (error) {
      /* empty */
    }
    if (has$1(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
  };
  var objectGetOwnPropertyDescriptor = {
    f: f$3
  };

  var anObject = function (it) {
    if (!isObject(it)) {
      throw TypeError(String(it) + ' is not an object');
    }

    return it;
  }; // eslint-disable-next-line es/no-object-defineproperty -- safe


  var $defineProperty = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  var f$2 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var objectDefineProperty = {
    f: f$2
  };
  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var setGlobal = function (key, value) {
    try {
      createNonEnumerableProperty(global$1, key, value);
    } catch (error) {
      global$1[key] = value;
    }

    return value;
  };

  var SHARED = '__core-js_shared__';
  var store$1 = global$1[SHARED] || setGlobal(SHARED, {});
  var sharedStore = store$1;
  var functionToString = Function.toString; // this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper

  if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
      return functionToString.call(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;
  var WeakMap$1 = global$1.WeakMap;
  var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));
  var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.11.2',
      mode: 'global',
      copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
    });
  });
  var id = 0;
  var postfix = Math.random();

  var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
  };

  var keys$2 = shared('keys');

  var sharedKey = function (key) {
    return keys$2[key] || (keys$2[key] = uid(key));
  };

  var hiddenKeys$1 = {};
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var WeakMap = global$1.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap());
    var wmget = store.get;
    var wmhas = store.has;
    var wmset = store.set;

    set = function (it, metadata) {
      if (wmhas.call(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset.call(store, it, metadata);
      return metadata;
    };

    get = function (it) {
      return wmget.call(store, it) || {};
    };

    has = function (it) {
      return wmhas.call(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;

    set = function (it, metadata) {
      if (has$1(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };

    get = function (it) {
      return has$1(it, STATE) ? it[STATE] : {};
    };

    has = function (it) {
      return has$1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };
  var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var state;

      if (typeof value == 'function') {
        if (typeof key == 'string' && !has$1(value, 'name')) {
          createNonEnumerableProperty(value, 'name', key);
        }

        state = enforceInternalState(value);

        if (!state.source) {
          state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
        }
      }

      if (O === global$1) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
  });
  var path = global$1;

  var aFunction$1 = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction$1(path[namespace]) || aFunction$1(global$1[namespace]) : path[namespace] && path[namespace][method] || global$1[namespace] && global$1[namespace][method];
  };

  var ceil = Math.ceil;
  var floor = Math.floor; // `ToInteger` abstract operation
  // https://tc39.es/ecma262/#sec-tointeger

  var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
  };

  var min$2 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength = function (argument) {
    return argument > 0 ? min$2(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  var max = Math.max;
  var min$1 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
  }; // `Array.prototype.{ indexOf, includes }` methods implementation


  var createMethod$3 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$3(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$3(false)
  };
  var indexOf = arrayIncludes.indexOf;

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) !has$1(hiddenKeys$1, key) && has$1(O, key) && result.push(key); // Don't enum bug & hidden keys


    while (names.length > i) if (has$1(O, key = names[i++])) {
      ~indexOf(result, key) || result.push(key);
    }

    return result;
  }; // IE8- don't enum bug keys


  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  var f$1 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
    f: f$1
  }; // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe

  var f = Object.getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f
  }; // all object keys, includes non-enumerable and symbols

  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!has$1(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : typeof detection == 'function' ? fails(detection) : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
  */

  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global$1;
    } else if (STATIC) {
      target = global$1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty === typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  }; // `Number.MAX_SAFE_INTEGER` constant
  // https://tc39.es/ecma262/#sec-number.max_safe_integer


  _export({
    target: 'Number',
    stat: true
  }, {
    MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
  });

  var aPossiblePrototype = function (it) {
    if (!isObject(it) && it !== null) {
      throw TypeError("Can't set " + String(it) + ' as a prototype');
    }

    return it;
  };
  /* eslint-disable no-proto -- safe */
  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe


  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
      setter.call(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter.call(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined); // makes subclassing work correct for wrapped built-ins

  var inheritIfRequired = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  }; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe


  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  }; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe


  var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);

    return O;
  };
  var html = getBuiltIn('document', 'documentElement');
  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey('IE_PROTO');

  var EmptyConstructor = function () {
    /* empty */
  };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument;

  var NullProtoObject = function () {
    try {
      /* global ActiveXObject -- old IE */
      activeXDocument = document.domain && new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;

    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];

    return NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();

    return Properties === undefined ? result : objectDefineProperties(result, Properties);
  }; // a string of all valid unicode whitespaces


  var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  var whitespace = '[' + whitespaces + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$2 = function (TYPE) {
    return function ($this) {
      var string = String(requireObjectCoercible($this));
      if (TYPE & 1) string = string.replace(ltrim, '');
      if (TYPE & 2) string = string.replace(rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3)
  };
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var defineProperty$3 = objectDefineProperty.f;
  var trim = stringTrim.trim;
  var NUMBER = 'Number';
  var NativeNumber = global$1[NUMBER];
  var NumberPrototype = NativeNumber.prototype; // Opera ~12 has broken Object#toString

  var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER; // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber

  var toNumber = function (argument) {
    var it = toPrimitive(argument, false);
    var first, third, radix, maxCode, digits, length, index, code;

    if (typeof it == 'string' && it.length > 2) {
      it = trim(it);
      first = it.charCodeAt(0);

      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal of /^0o[0-7]+$/i

          default:
            return +it;
        }

        digits = it.slice(2);
        length = digits.length;

        for (index = 0; index < length; index++) {
          code = digits.charCodeAt(index); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  }; // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor


  if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var it = arguments.length < 1 ? 0 : value;
      var dummy = this;
      return dummy instanceof NumberWrapper // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () {
        NumberPrototype.valueOf.call(dummy);
      }) : classofRaw(dummy) != NUMBER) ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
    };

    for (var keys$1 = descriptors ? getOwnPropertyNames$1(NativeNumber) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' + // ESNext
    'fromString,range').split(','), j = 0, key; keys$1.length > j; j++) {
      if (has$1(NativeNumber, key = keys$1[j]) && !has$1(NumberWrapper, key)) {
        defineProperty$3(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
      }
    }

    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global$1, NUMBER, NumberWrapper);
  } // Note: this is the semver.org version of the spec that it implements
  // Not necessarily the package version of this code.


  var SEMVER_SPEC_VERSION = '2.0.0';
  var MAX_LENGTH$2 = 256;
  var MAX_SAFE_INTEGER$2 = Number.MAX_SAFE_INTEGER ||
  /* istanbul ignore next */
  9007199254740991; // Max safe segment length for coercion.

  var MAX_SAFE_COMPONENT_LENGTH = 16;
  var constants = {
    SEMVER_SPEC_VERSION: SEMVER_SPEC_VERSION,
    MAX_LENGTH: MAX_LENGTH$2,
    MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$2,
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH
  };
  var engineIsNode = classofRaw(global$1.process) == 'process';
  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';
  var process$1 = global$1.process;
  var versions = process$1 && process$1.versions;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
  } else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = match[1];
    }
  }

  var engineV8Version = version && +version; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // eslint-disable-next-line es/no-symbol -- required for testing
    return !Symbol.sham && ( // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    engineIsNode ? engineV8Version === 38 : engineV8Version > 37 && engineV8Version < 41);
  });
  /* eslint-disable es/no-symbol -- required for testing */

  var useSymbolAsUid = nativeSymbol && !Symbol.sham && typeof Symbol.iterator == 'symbol';
  var WellKnownSymbolsStore = shared('wks');
  var Symbol$1 = global$1.Symbol;
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!has$1(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
      if (nativeSymbol && has$1(Symbol$1, name)) {
        WellKnownSymbolsStore[name] = Symbol$1[name];
      } else {
        WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
      }
    }

    return WellKnownSymbolsStore[name];
  };

  var MATCH$1 = wellKnownSymbol('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  }; // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  }; // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
  // so we use an intermediate function.


  function RE(s, f) {
    return RegExp(s, f);
  }

  var UNSUPPORTED_Y$3 = fails(function () {
    // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
    var re = RE('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  var BROKEN_CARET = fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = RE('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    UNSUPPORTED_Y: UNSUPPORTED_Y$3,
    BROKEN_CARET: BROKEN_CARET
  };
  var SPECIES$4 = wellKnownSymbol('species');

  var setSpecies = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES$4]) {
      defineProperty(Constructor, SPECIES$4, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };

  var defineProperty$2 = objectDefineProperty.f;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var enforceInternalState = internalState.enforce;
  var MATCH = wellKnownSymbol('match');
  var NativeRegExp = global$1.RegExp;
  var RegExpPrototype$1 = NativeRegExp.prototype;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y;
  var FORCED$1 = descriptors && isForced_1('RegExp', !CORRECT_NEW || UNSUPPORTED_Y$2 || fails(function () {
    re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  })); // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor

  if (FORCED$1) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = this instanceof RegExpWrapper;
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var sticky;

      if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
        return pattern;
      }

      if (CORRECT_NEW) {
        if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
      } else if (pattern instanceof RegExpWrapper) {
        if (flagsAreUndefined) flags = regexpFlags.call(pattern);
        pattern = pattern.source;
      }

      if (UNSUPPORTED_Y$2) {
        sticky = !!flags && flags.indexOf('y') > -1;
        if (sticky) flags = flags.replace(/y/g, '');
      }

      var result = inheritIfRequired(CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$1, RegExpWrapper);

      if (UNSUPPORTED_Y$2 && sticky) {
        var state = enforceInternalState(result);
        state.sticky = true;
      }

      return result;
    };

    var proxy = function (key) {
      key in RegExpWrapper || defineProperty$2(RegExpWrapper, key, {
        configurable: true,
        get: function () {
          return NativeRegExp[key];
        },
        set: function (it) {
          NativeRegExp[key] = it;
        }
      });
    };

    var keys = getOwnPropertyNames(NativeRegExp);
    var index = 0;

    while (keys.length > index) proxy(keys[index++]);

    RegExpPrototype$1.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$1;
    redefine(global$1, 'RegExp', RegExpWrapper);
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species


  setSpecies('RegExp');
  var nativeExec = RegExp.prototype.exec;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var patchedExec = nativeExec;

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    nativeExec.call(re1, 'a');
    nativeExec.call(re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.
  // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;

  if (PATCH) {
    patchedExec = function exec(str) {
      var re = this;
      var lastIndex, reCopy, match, i;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = regexpFlags.call(re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = flags.replace('y', '');

        if (flags.indexOf('g') === -1) {
          flags += 'g';
        }

        strCopy = String(str).slice(re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = nativeExec.call(sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = match.input.slice(charsAdded);
          match[0] = match[0].slice(charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        nativeReplace.call(match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      return match;
    };
  }

  var regexpExec = patchedExec; // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec

  _export({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== regexpExec
  }, {
    exec: regexpExec
  });

  var TO_STRING = 'toString';
  var RegExpPrototype = RegExp.prototype;
  var nativeToString = RegExpPrototype[TO_STRING];
  var NOT_GENERIC = fails(function () {
    return nativeToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = nativeToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = String(R.source);
      var rf = R.flags;
      var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  } // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe


  var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var SPECIES$3 = wellKnownSymbol('species'); // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate = function (originalArray, length) {
    var C;

    if (isArray(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
        C = C[SPECIES$3];
        if (C === null) C = undefined;
      }
    }

    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
  };

  var SPECIES$2 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$2] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded'; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  _export({
    target: 'Array',
    proto: true,
    forced: FORCED
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = toLength(E.length);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var debug = (typeof process === "undefined" ? "undefined" : _typeof(process)) === 'object' && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? function () {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_console = console).error.apply(_console, ['SEMVER'].concat(args));
  } : function () {};
  var debug_1 = debug;
  var re_1 = createCommonjsModule(function (module, exports) {
    var MAX_SAFE_COMPONENT_LENGTH = constants.MAX_SAFE_COMPONENT_LENGTH;
    exports = module.exports = {}; // The actual regexps go on exports.re

    var re = exports.re = [];
    var src = exports.src = [];
    var t = exports.t = {};
    var R = 0;

    var createToken = function createToken(name, value, isGlobal) {
      var index = R++;
      debug_1(index, value);
      t[name] = index;
      src[index] = value;
      re[index] = new RegExp(value, isGlobal ? 'g' : undefined);
    }; // The following Regular Expressions can be used for tokenizing,
    // validating, and parsing SemVer version strings.
    // ## Numeric Identifier
    // A single `0`, or a non-zero digit followed by zero or more digits.


    createToken('NUMERICIDENTIFIER', '0|[1-9]\\d*');
    createToken('NUMERICIDENTIFIERLOOSE', '[0-9]+'); // ## Non-numeric Identifier
    // Zero or more digits, followed by a letter or hyphen, and then zero or
    // more letters, digits, or hyphens.

    createToken('NONNUMERICIDENTIFIER', '\\d*[a-zA-Z-][a-zA-Z0-9-]*'); // ## Main Version
    // Three dot-separated numeric identifiers.

    createToken('MAINVERSION', "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIER], ")"));
    createToken('MAINVERSIONLOOSE', "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(src[t.NUMERICIDENTIFIERLOOSE], ")")); // ## Pre-release Version Identifier
    // A numeric identifier, or a non-numeric identifier.

    createToken('PRERELEASEIDENTIFIER', "(?:".concat(src[t.NUMERICIDENTIFIER], "|").concat(src[t.NONNUMERICIDENTIFIER], ")"));
    createToken('PRERELEASEIDENTIFIERLOOSE', "(?:".concat(src[t.NUMERICIDENTIFIERLOOSE], "|").concat(src[t.NONNUMERICIDENTIFIER], ")")); // ## Pre-release Version
    // Hyphen, followed by one or more dot-separated pre-release version
    // identifiers.

    createToken('PRERELEASE', "(?:-(".concat(src[t.PRERELEASEIDENTIFIER], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIER], ")*))"));
    createToken('PRERELEASELOOSE', "(?:-?(".concat(src[t.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(src[t.PRERELEASEIDENTIFIERLOOSE], ")*))")); // ## Build Metadata Identifier
    // Any combination of digits, letters, or hyphens.

    createToken('BUILDIDENTIFIER', '[0-9A-Za-z-]+'); // ## Build Metadata
    // Plus sign, followed by one or more period-separated build metadata
    // identifiers.

    createToken('BUILD', "(?:\\+(".concat(src[t.BUILDIDENTIFIER], "(?:\\.").concat(src[t.BUILDIDENTIFIER], ")*))")); // ## Full Version String
    // A main version, followed optionally by a pre-release version and
    // build metadata.
    // Note that the only major, minor, patch, and pre-release sections of
    // the version string are capturing groups.  The build metadata is not a
    // capturing group, because it should not ever be used in version
    // comparison.

    createToken('FULLPLAIN', "v?".concat(src[t.MAINVERSION]).concat(src[t.PRERELEASE], "?").concat(src[t.BUILD], "?"));
    createToken('FULL', "^".concat(src[t.FULLPLAIN], "$")); // like full, but allows v1.2.3 and =1.2.3, which people do sometimes.
    // also, 1.0.0alpha1 (prerelease without the hyphen) which is pretty
    // common in the npm registry.

    createToken('LOOSEPLAIN', "[v=\\s]*".concat(src[t.MAINVERSIONLOOSE]).concat(src[t.PRERELEASELOOSE], "?").concat(src[t.BUILD], "?"));
    createToken('LOOSE', "^".concat(src[t.LOOSEPLAIN], "$"));
    createToken('GTLT', '((?:<|>)?=?)'); // Something like "2.*" or "1.2.x".
    // Note that "x.x" is a valid xRange identifer, meaning "any version"
    // Only the first item is strictly required.

    createToken('XRANGEIDENTIFIERLOOSE', "".concat(src[t.NUMERICIDENTIFIERLOOSE], "|x|X|\\*"));
    createToken('XRANGEIDENTIFIER', "".concat(src[t.NUMERICIDENTIFIER], "|x|X|\\*"));
    createToken('XRANGEPLAIN', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIER], ")") + "(?:".concat(src[t.PRERELEASE], ")?").concat(src[t.BUILD], "?") + ")?)?");
    createToken('XRANGEPLAINLOOSE', "[v=\\s]*(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(src[t.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(src[t.PRERELEASELOOSE], ")?").concat(src[t.BUILD], "?") + ")?)?");
    createToken('XRANGE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAIN], "$"));
    createToken('XRANGELOOSE', "^".concat(src[t.GTLT], "\\s*").concat(src[t.XRANGEPLAINLOOSE], "$")); // Coercion.
    // Extract anything that could conceivably be a part of a valid semver

    createToken('COERCE', "".concat('(^|[^\\d])' + '(\\d{1,').concat(MAX_SAFE_COMPONENT_LENGTH, "})") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:\\.(\\d{1,".concat(MAX_SAFE_COMPONENT_LENGTH, "}))?") + "(?:$|[^\\d])");
    createToken('COERCERTL', src[t.COERCE], true); // Tilde ranges.
    // Meaning is "reasonably at or greater than"

    createToken('LONETILDE', '(?:~>?)');
    createToken('TILDETRIM', "(\\s*)".concat(src[t.LONETILDE], "\\s+"), true);
    exports.tildeTrimReplace = '$1~';
    createToken('TILDE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAIN], "$"));
    createToken('TILDELOOSE', "^".concat(src[t.LONETILDE]).concat(src[t.XRANGEPLAINLOOSE], "$")); // Caret ranges.
    // Meaning is "at least and backwards compatible with"

    createToken('LONECARET', '(?:\\^)');
    createToken('CARETTRIM', "(\\s*)".concat(src[t.LONECARET], "\\s+"), true);
    exports.caretTrimReplace = '$1^';
    createToken('CARET', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAIN], "$"));
    createToken('CARETLOOSE', "^".concat(src[t.LONECARET]).concat(src[t.XRANGEPLAINLOOSE], "$")); // A simple gt/lt/eq thing, or just "" to indicate "any version"

    createToken('COMPARATORLOOSE', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], ")$|^$"));
    createToken('COMPARATOR', "^".concat(src[t.GTLT], "\\s*(").concat(src[t.FULLPLAIN], ")$|^$")); // An expression to strip any whitespace between the gtlt and the thing
    // it modifies, so that `> 1.2.3` ==> `>1.2.3`

    createToken('COMPARATORTRIM', "(\\s*)".concat(src[t.GTLT], "\\s*(").concat(src[t.LOOSEPLAIN], "|").concat(src[t.XRANGEPLAIN], ")"), true);
    exports.comparatorTrimReplace = '$1$2$3'; // Something like `1.2.3 - 1.2.4`
    // Note that these all use the loose form, because they'll be
    // checked against either the strict or loose comparator form
    // later.

    createToken('HYPHENRANGE', "^\\s*(".concat(src[t.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAIN], ")") + "\\s*$");
    createToken('HYPHENRANGELOOSE', "^\\s*(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(src[t.XRANGEPLAINLOOSE], ")") + "\\s*$"); // Star ranges basically just allow anything at all.

    createToken('STAR', '(<|>)?=?\\s*\\*'); // >=0.0.0 is like a star

    createToken('GTE0', '^\\s*>=\\s*0\.0\.0\\s*$');
    createToken('GTE0PRE', '^\\s*>=\\s*0\.0\.0-0\\s*$');
  }); // TODO: Remove from `core-js@4` since it's moved to entry points

  var SPECIES$1 = wellKnownSymbol('species');
  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    // #replace needs built-in support for named groups.
    // #match works fine because it just return the exec results, even if it has
    // a "grops" property.
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    };

    return ''.replace(re, '$<a>') !== '7';
  }); // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0

  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }();

  var REPLACE = wellKnownSymbol('replace'); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string

  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE]) {
      return /./[REPLACE]('a', '$0') === '';
    }

    return false;
  }(); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper


  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  });

  var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES$1] = function () {
          return re;
        };

        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
      var nativeRegExpMethod = /./[SYMBOL];
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === RegExp.prototype.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: nativeRegExpMethod.call(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: nativeMethod.call(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      }, {
        REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
      });
      var stringMethod = methods[0];
      var regexMethod = methods[1];
      redefine(String.prototype, KEY, stringMethod);
      redefine(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return regexMethod.call(string, this, arg);
      } // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return regexMethod.call(string, this);
      });
    }

    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }; // `String.prototype.{ codePointAt, at }` methods implementation


  var createMethod$1 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = String(requireObjectCoercible($this));
      var position = toInteger(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = S.charCodeAt(position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$1(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$1(true)
  };
  var charAt$1 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex

  var advanceStringIndex = function (S, index, unicode) {
    return index + (unicode ? charAt$1(S, index).length : 1);
  }; // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec


  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;

    if (typeof exec === 'function') {
      var result = exec.call(R, S);

      if (typeof result !== 'object') {
        throw TypeError('RegExp exec method returned something other than an Object or null');
      }

      return result;
    }

    if (classofRaw(R) !== 'RegExp') {
      throw TypeError('RegExp#exec called on incompatible receiver');
    }

    return regexpExec.call(R, S);
  }; // @@match logic


  fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });
  var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function (METHOD_NAME) {
    return fails(function () {
      return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim

  _export({
    target: 'String',
    proto: true,
    forced: stringTrimForced('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var aFunction = function (it) {
    if (typeof it != 'function') {
      throw TypeError(String(it) + ' is not a function');
    }

    return it;
  }; // optional / simple context binding


  var functionBindContext = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;

    switch (length) {
      case 0:
        return function () {
          return fn.call(that);
        };

      case 1:
        return function (a) {
          return fn.call(that, a);
        };

      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };

      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }

    return function ()
    /* ...args */
    {
      return fn.apply(that, arguments);
    };
  };

  var push = [].push; // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation

  var createMethod = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that, 3);
      var length = toLength(self.length);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);

        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                push.call(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push.call(target, value);
              // filterOut
            }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod(7)
  };
  var $map = arrayIteration.map;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var SPECIES = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor = function (O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
  };

  var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;
  var arrayPush = [].push;
  var min = Math.min;
  var MAX_UINT32 = 0xFFFFFFFF; // @@split logic

  fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = String(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegexp(separator)) {
          return nativeSplit.call(string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = regexpExec.call(separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));

        return output.length > lim ? output.slice(0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regexpExecAbstract(splitter, UNSUPPORTED_Y ? S.slice(q) : S);
        var e;

        if (z === null || (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      A.push(S.slice(p));
      return A;
    }];
  }, UNSUPPORTED_Y);

  var arrayMethodIsStrict = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };

  var nativeJoin = [].join;
  var ES3_STRINGS = indexedObject != Object;
  var STRICT_METHOD$1 = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join

  _export({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD$1
  }, {
    join: function join(separator) {
      return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  var $filter = arrayIteration.filter;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // parse out just the options we care about so we always get a consistent
  // obj with keys in a consistent order.


  var opts = ['includePrerelease', 'loose', 'rtl'];

  var parseOptions = function parseOptions(options) {
    return !options ? {} : _typeof(options) !== 'object' ? {
      loose: true
    } : opts.filter(function (k) {
      return options[k];
    }).reduce(function (options, k) {
      options[k] = true;
      return options;
    }, {});
  };

  var parseOptions_1 = parseOptions;
  var numeric = /^[0-9]+$/;

  var compareIdentifiers$1 = function compareIdentifiers(a, b) {
    var anum = numeric.test(a);
    var bnum = numeric.test(b);

    if (anum && bnum) {
      a = +a;
      b = +b;
    }

    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };

  var rcompareIdentifiers = function rcompareIdentifiers(a, b) {
    return compareIdentifiers$1(b, a);
  };

  var identifiers = {
    compareIdentifiers: compareIdentifiers$1,
    rcompareIdentifiers: rcompareIdentifiers
  };
  var MAX_LENGTH$1 = constants.MAX_LENGTH,
      MAX_SAFE_INTEGER = constants.MAX_SAFE_INTEGER;
  var re$1 = re_1.re,
      t$1 = re_1.t;
  var compareIdentifiers = identifiers.compareIdentifiers;

  var SemVer = /*#__PURE__*/function () {
    function SemVer(version, options) {
      _classCallCheck(this, SemVer);

      options = parseOptions_1(options);

      if (version instanceof SemVer) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== 'string') {
        throw new TypeError("Invalid Version: ".concat(version));
      }

      if (version.length > MAX_LENGTH$1) {
        throw new TypeError("version is longer than ".concat(MAX_LENGTH$1, " characters"));
      }

      debug_1('SemVer', version, options);
      this.options = options;
      this.loose = !!options.loose; // this isn't actually relevant for versions, but keep it so that we
      // don't run into trouble passing this.options around.

      this.includePrerelease = !!options.includePrerelease;
      var m = version.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);

      if (!m) {
        throw new TypeError("Invalid Version: ".concat(version));
      }

      this.raw = version; // these are actually numbers

      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];

      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError('Invalid major version');
      }

      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError('Invalid minor version');
      }

      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError('Invalid patch version');
      } // numberify any prerelease numeric ids


      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split('.').map(function (id) {
          if (/^[0-9]+$/.test(id)) {
            var num = +id;

            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }

          return id;
        });
      }

      this.build = m[5] ? m[5].split('.') : [];
      this.format();
    }

    _createClass(SemVer, [{
      key: "format",
      value: function format() {
        this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch);

        if (this.prerelease.length) {
          this.version += "-".concat(this.prerelease.join('.'));
        }

        return this.version;
      }
    }, {
      key: "toString",
      value: function toString() {
        return this.version;
      }
    }, {
      key: "compare",
      value: function compare(other) {
        debug_1('SemVer.compare', this.version, this.options, other);

        if (!(other instanceof SemVer)) {
          if (typeof other === 'string' && other === this.version) {
            return 0;
          }

          other = new SemVer(other, this.options);
        }

        if (other.version === this.version) {
          return 0;
        }

        return this.compareMain(other) || this.comparePre(other);
      }
    }, {
      key: "compareMain",
      value: function compareMain(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }

        return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
      }
    }, {
      key: "comparePre",
      value: function comparePre(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        } // NOT having a prerelease is > having one


        if (this.prerelease.length && !other.prerelease.length) {
          return -1;
        } else if (!this.prerelease.length && other.prerelease.length) {
          return 1;
        } else if (!this.prerelease.length && !other.prerelease.length) {
          return 0;
        }

        var i = 0;

        do {
          var a = this.prerelease[i];
          var b = other.prerelease[i];
          debug_1('prerelease compare', i, a, b);

          if (a === undefined && b === undefined) {
            return 0;
          } else if (b === undefined) {
            return 1;
          } else if (a === undefined) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      }
    }, {
      key: "compareBuild",
      value: function compareBuild(other) {
        if (!(other instanceof SemVer)) {
          other = new SemVer(other, this.options);
        }

        var i = 0;

        do {
          var a = this.build[i];
          var b = other.build[i];
          debug_1('prerelease compare', i, a, b);

          if (a === undefined && b === undefined) {
            return 0;
          } else if (b === undefined) {
            return 1;
          } else if (a === undefined) {
            return -1;
          } else if (a === b) {
            continue;
          } else {
            return compareIdentifiers(a, b);
          }
        } while (++i);
      } // preminor will bump the version up to the next minor release, and immediately
      // down to pre-release. premajor and prepatch work the same way.

    }, {
      key: "inc",
      value: function inc(release, identifier) {
        switch (release) {
          case 'premajor':
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor = 0;
            this.major++;
            this.inc('pre', identifier);
            break;

          case 'preminor':
            this.prerelease.length = 0;
            this.patch = 0;
            this.minor++;
            this.inc('pre', identifier);
            break;

          case 'prepatch':
            // If this is already a prerelease, it will bump to the next version
            // drop any prereleases that might already exist, since they are not
            // relevant at this point.
            this.prerelease.length = 0;
            this.inc('patch', identifier);
            this.inc('pre', identifier);
            break;
          // If the input is a non-prerelease version, this acts the same as
          // prepatch.

          case 'prerelease':
            if (this.prerelease.length === 0) {
              this.inc('patch', identifier);
            }

            this.inc('pre', identifier);
            break;

          case 'major':
            // If this is a pre-major version, bump up to the same major version.
            // Otherwise increment major.
            // 1.0.0-5 bumps to 1.0.0
            // 1.1.0 bumps to 2.0.0
            if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
              this.major++;
            }

            this.minor = 0;
            this.patch = 0;
            this.prerelease = [];
            break;

          case 'minor':
            // If this is a pre-minor version, bump up to the same minor version.
            // Otherwise increment minor.
            // 1.2.0-5 bumps to 1.2.0
            // 1.2.1 bumps to 1.3.0
            if (this.patch !== 0 || this.prerelease.length === 0) {
              this.minor++;
            }

            this.patch = 0;
            this.prerelease = [];
            break;

          case 'patch':
            // If this is not a pre-release version, it will increment the patch.
            // If it is a pre-release it will bump up to the same patch version.
            // 1.2.0-5 patches to 1.2.0
            // 1.2.0 patches to 1.2.1
            if (this.prerelease.length === 0) {
              this.patch++;
            }

            this.prerelease = [];
            break;
          // This probably shouldn't be used publicly.
          // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.

          case 'pre':
            if (this.prerelease.length === 0) {
              this.prerelease = [0];
            } else {
              var i = this.prerelease.length;

              while (--i >= 0) {
                if (typeof this.prerelease[i] === 'number') {
                  this.prerelease[i]++;
                  i = -2;
                }
              }

              if (i === -1) {
                // didn't increment anything
                this.prerelease.push(0);
              }
            }

            if (identifier) {
              // 1.2.0-beta.1 bumps to 1.2.0-beta.2,
              // 1.2.0-beta.fooblz or 1.2.0-beta bumps to 1.2.0-beta.0
              if (this.prerelease[0] === identifier) {
                if (isNaN(this.prerelease[1])) {
                  this.prerelease = [identifier, 0];
                }
              } else {
                this.prerelease = [identifier, 0];
              }
            }

            break;

          default:
            throw new Error("invalid increment argument: ".concat(release));
        }

        this.format();
        this.raw = this.version;
        return this;
      }
    }]);

    return SemVer;
  }();

  var semver = SemVer;
  var MAX_LENGTH = constants.MAX_LENGTH;
  var re = re_1.re,
      t = re_1.t;

  var parse = function parse(version, options) {
    options = parseOptions_1(options);

    if (version instanceof semver) {
      return version;
    }

    if (typeof version !== 'string') {
      return null;
    }

    if (version.length > MAX_LENGTH) {
      return null;
    }

    var r = options.loose ? re[t.LOOSE] : re[t.FULL];

    if (!r.test(version)) {
      return null;
    }

    try {
      return new semver(version, options);
    } catch (er) {
      return null;
    }
  };

  var parse_1 = parse;

  var valid = function valid(version, options) {
    var v = parse_1(version, options);
    return v ? v.version : null;
  };

  var valid_1 = valid;

  var major = function major(a, loose) {
    return new semver(a, loose).major;
  };

  var major_1 = major;
  var packageJson$1 = {
    name: "@nextcloud/event-bus",
    version: "1.3.0",
    description: "",
    main: "dist/index.js",
    module: "dist/index.es.js",
    types: "dist/index.d.ts",
    scripts: {
      build: "NODE_ENV=production rollup -c",
      "build:doc": "typedoc --out dist/doc lib/index.ts && touch dist/doc/.nojekyll",
      "check-types": "tsc",
      dev: "NODE_ENV=development rollup -c --watch",
      test: "jest",
      "test:watch": "jest --watchAll"
    },
    keywords: ["nextcloud"],
    homepage: "https://github.com/nextcloud/nextcloud-event-bus#readme",
    author: "Christoph Wurst",
    license: "GPL-3.0-or-later",
    repository: {
      type: "git",
      url: "https://github.com/nextcloud/nextcloud-event-bus"
    },
    dependencies: {
      "@types/semver": "^7.3.5",
      "core-js": "^3.11.2",
      semver: "^7.3.5"
    },
    devDependencies: {
      "@babel/cli": "^7.13.16",
      "@babel/core": "^7.14.0",
      "@babel/plugin-proposal-class-properties": "^7.13.0",
      "@babel/preset-env": "^7.14.1",
      "@babel/preset-typescript": "^7.13.0",
      "@nextcloud/browserslist-config": "^1.0.0",
      "@rollup/plugin-babel": "^5.3.0",
      "@rollup/plugin-commonjs": "^18.0.0",
      "@rollup/plugin-node-resolve": "^11.2.1",
      "babel-jest": "^26.6.3",
      "babel-plugin-inline-json-import": "^0.3.2",
      jest: "^26.6.3",
      rollup: "^2.47.0",
      "rollup-plugin-inject-process-env": "^1.3.1",
      "rollup-plugin-typescript2": "^0.30.0",
      typedoc: "^0.20.36",
      typescript: "^4.2.4"
    },
    browserslist: ["extends @nextcloud/browserslist-config"]
  };

  var ProxyBus =
  /** @class */
  function () {
    function ProxyBus(bus) {
      if (typeof bus.getVersion !== 'function' || !valid_1(bus.getVersion())) {
        console.warn('Proxying an event bus with an unknown or invalid version');
      } else if (major_1(bus.getVersion()) !== major_1(this.getVersion())) {
        console.warn('Proxying an event bus of version ' + bus.getVersion() + ' with ' + this.getVersion());
      }

      this.bus = bus;
    }

    ProxyBus.prototype.getVersion = function () {
      return packageJson$1.version;
    };

    ProxyBus.prototype.subscribe = function (name, handler) {
      this.bus.subscribe(name, handler);
    };

    ProxyBus.prototype.unsubscribe = function (name, handler) {
      this.bus.unsubscribe(name, handler);
    };

    ProxyBus.prototype.emit = function (name, event) {
      this.bus.emit(name, event);
    };

    return ProxyBus;
  }();

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype$1 = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables = function (key) {
    ArrayPrototype$1[UNSCOPABLES][key] = true;
  };

  var iterators = {};
  var correctPrototypeGetter = !fails(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var IE_PROTO = sharedKey('IE_PROTO');
  var ObjectPrototype = Object.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  // eslint-disable-next-line es/no-object-getprototypeof -- safe

  var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
    O = toObject(O);
    if (has$1(O, IE_PROTO)) return O[IE_PROTO];

    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }

    return O instanceof Object ? ObjectPrototype : null;
  };
  var ITERATOR$5 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false;

  var returnThis$2 = function () {
    return this;
  }; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object


  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$2[ITERATOR$5].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

  if (!has$1(IteratorPrototype$2, ITERATOR$5)) {
    createNonEnumerableProperty(IteratorPrototype$2, ITERATOR$5, returnThis$2);
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };
  var defineProperty$1 = objectDefineProperty.f;
  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

  var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has$1(it = STATIC ? it : it.prototype, TO_STRING_TAG$3)) {
      defineProperty$1(it, TO_STRING_TAG$3, {
        configurable: true,
        value: TAG
      });
    }
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

  var returnThis$1 = function () {
    return this;
  };

  var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(1, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$4 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function () {
    return this;
  };

  var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$4] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

      if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
            createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array#{values, @@iterator}.name in V8 / FF


    if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      INCORRECT_VALUES_NAME = true;

      defaultIterator = function values() {
        return nativeIterator.call(this);
      };
    } // define iterator


    if (IterablePrototype[ITERATOR$4] !== defaultIterator) {
      createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
    }

    iterators[NAME] = defaultIterator; // export additional methods

    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    }

    return methods;
  };

  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$2 = internalState.set;
  var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$2(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$1(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  iterators.Arguments = iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  var freezing = !fails(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f;
    var METADATA = uid('meta');
    var id = 0; // eslint-disable-next-line es/no-object-isextensible -- safe

    var isExtensible = Object.isExtensible || function () {
      return true;
    };

    var setMetadata = function (it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + ++id,
          // object ID
          weakData: {} // weak collections IDs

        }
      });
    };

    var fastKey = function (it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!has$1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMetadata(it); // return object ID
      }

      return it[METADATA].objectID;
    };

    var getWeakData = function (it, create) {
      if (!has$1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!isExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMetadata(it); // return the store of weak collections IDs
      }

      return it[METADATA].weakData;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function (it) {
      if (freezing && meta.REQUIRED && isExtensible(it) && !has$1(it, METADATA)) setMetadata(it);
      return it;
    };

    var meta = module.exports = {
      REQUIRED: false,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys$1[METADATA] = true;
  });
  var ITERATOR$3 = wellKnownSymbol('iterator');
  var ArrayPrototype = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod = function (it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR$3] === it);
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var test = {};
  test[TO_STRING_TAG$2] = 'z';
  var toStringTagSupport = String(test) === '[object z]';
  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag'); // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
  };
  var ITERATOR$2 = wellKnownSymbol('iterator');

  var getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || iterators[classof(it)];
  };

  var iteratorClose = function (iterator) {
    var returnMethod = iterator['return'];

    if (returnMethod !== undefined) {
      return anObject(returnMethod.call(iterator)).value;
    }
  };

  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var iterate = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function (condition) {
      if (iterator) iteratorClose(iterator);
      return new Result(true, condition);
    };

    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (typeof iterFn != 'function') throw TypeError('Target is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = toLength(iterable.length); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && result instanceof Result) return result;
        }

        return new Result(false);
      }

      iterator = iterFn.call(iterable);
    }

    next = iterator.next;

    while (!(step = next.call(iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator);
        throw error;
      }

      if (typeof result == 'object' && result && result instanceof Result) return result;
    }

    return new Result(false);
  };

  var anInstance = function (it, Constructor, name) {
    if (!(it instanceof Constructor)) {
      throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
    }

    return it;
  };

  var ITERATOR$1 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return {
          done: !!called++
        };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR$1] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$1] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function (KEY) {
      var nativeMethod = NativePrototype[KEY];
      redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      });
    };

    var REPLACE = isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    })));

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      internalMetadata.REQUIRED = true;
    } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing

      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
        new NativeConstructor(iterable);
      }); // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;

        while (index--) $instance[ADDER](index, index);

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;

    _export({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);

    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var redefineAll = function (target, src, options) {
    for (var key in src) redefine(target, key, src[key], options);

    return target;
  };

  var defineProperty = objectDefineProperty.f;
  var fastKey = internalMetadata.fastKey;
  var setInternalState$1 = internalState.set;
  var internalStateGetterFor = internalState.getterFor;
  var collectionStrong = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, CONSTRUCTOR_NAME);
        setInternalState$1(that, {
          type: CONSTRUCTOR_NAME,
          index: objectCreate(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!descriptors) that.size = 0;
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry

        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (descriptors) state.size++;else that.size++; // add to index

          if (index !== 'F') state.index[index] = entry;
        }

        return that;
      };

      var getEntry = function (that, key) {
        var state = getInternalState(that); // fast case

        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case

        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;

          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }

          state.first = state.last = undefined;
          if (descriptors) state.size = 0;else that.size = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (descriptors) state.size--;else that.size--;
          }

          return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
          var entry;

          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry

            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll(C.prototype, IS_MAP ? {
        // 23.1.3.6 Map.prototype.get(key)
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // 23.1.3.9 Map.prototype.set(key, value)
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // 23.2.3.1 Set.prototype.add(value)
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (descriptors) defineProperty(C.prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
      return C;
    },
    setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME); // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11

      defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$1(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry

        while (entry && entry.removed) entry = entry.previous; // get next entry


        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind


        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

      setSpecies(CONSTRUCTOR_NAME);
    }
  }; // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects

  collection('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong); // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  }; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, {
      unsafe: true
    });
  }

  var charAt = stringMultibyte.charAt;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState = internalState.set;
  var getInternalState = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator(String, 'String', function (iterated) {
    setInternalState(this, {
      type: STRING_ITERATOR,
      string: String(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  }); // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods

  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };
  var ITERATOR = wellKnownSymbol('iterator');
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  for (var COLLECTION_NAME$1 in domIterables) {
    var Collection$1 = global$1[COLLECTION_NAME$1];
    var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;

    if (CollectionPrototype$1) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype$1[ITERATOR] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype$1, ITERATOR, ArrayValues);
      } catch (error) {
        CollectionPrototype$1[ITERATOR] = ArrayValues;
      }

      if (!CollectionPrototype$1[TO_STRING_TAG]) {
        createNonEnumerableProperty(CollectionPrototype$1, TO_STRING_TAG, COLLECTION_NAME$1);
      }

      if (domIterables[COLLECTION_NAME$1]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype$1[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype$1, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype$1[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  }

  var $forEach = arrayIteration.forEach;
  var STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  for (var COLLECTION_NAME in domIterables) {
    var Collection = global$1[COLLECTION_NAME];
    var CollectionPrototype = Collection && Collection.prototype; // some Chrome versions have non-configurable methods on DOMTokenList

    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  }

  var packageJson = {
    name: "@nextcloud/event-bus",
    version: "1.3.0",
    description: "",
    main: "dist/index.js",
    module: "dist/index.es.js",
    types: "dist/index.d.ts",
    scripts: {
      build: "NODE_ENV=production rollup -c",
      "build:doc": "typedoc --out dist/doc lib/index.ts && touch dist/doc/.nojekyll",
      "check-types": "tsc",
      dev: "NODE_ENV=development rollup -c --watch",
      test: "jest",
      "test:watch": "jest --watchAll"
    },
    keywords: ["nextcloud"],
    homepage: "https://github.com/nextcloud/nextcloud-event-bus#readme",
    author: "Christoph Wurst",
    license: "GPL-3.0-or-later",
    repository: {
      type: "git",
      url: "https://github.com/nextcloud/nextcloud-event-bus"
    },
    dependencies: {
      "@types/semver": "^7.3.5",
      "core-js": "^3.11.2",
      semver: "^7.3.5"
    },
    devDependencies: {
      "@babel/cli": "^7.13.16",
      "@babel/core": "^7.14.0",
      "@babel/plugin-proposal-class-properties": "^7.13.0",
      "@babel/preset-env": "^7.14.1",
      "@babel/preset-typescript": "^7.13.0",
      "@nextcloud/browserslist-config": "^1.0.0",
      "@rollup/plugin-babel": "^5.3.0",
      "@rollup/plugin-commonjs": "^18.0.0",
      "@rollup/plugin-node-resolve": "^11.2.1",
      "babel-jest": "^26.6.3",
      "babel-plugin-inline-json-import": "^0.3.2",
      jest: "^26.6.3",
      rollup: "^2.47.0",
      "rollup-plugin-inject-process-env": "^1.3.1",
      "rollup-plugin-typescript2": "^0.30.0",
      typedoc: "^0.20.36",
      typescript: "^4.2.4"
    },
    browserslist: ["extends @nextcloud/browserslist-config"]
  };

  var SimpleBus =
  /** @class */
  function () {
    function SimpleBus() {
      this.handlers = new Map();
    }

    SimpleBus.prototype.getVersion = function () {
      return packageJson.version;
    };

    SimpleBus.prototype.subscribe = function (name, handler) {
      this.handlers.set(name, (this.handlers.get(name) || []).concat(handler));
    };

    SimpleBus.prototype.unsubscribe = function (name, handler) {
      this.handlers.set(name, (this.handlers.get(name) || []).filter(function (h) {
        return h != handler;
      }));
    };

    SimpleBus.prototype.emit = function (name, event) {
      (this.handlers.get(name) || []).forEach(function (h) {
        try {
          h(event);
        } catch (e) {
          console.error('could not invoke event listener', e);
        }
      });
    };

    return SimpleBus;
  }();

  function getBus() {
    if (typeof window.OC !== 'undefined' && window.OC._eventBus && typeof window._nc_event_bus === 'undefined') {
      console.warn('found old event bus instance at OC._eventBus. Update your version!');
      window._nc_event_bus = window.OC._eventBus;
    } // Either use an existing event bus instance or create one


    if (typeof window._nc_event_bus !== 'undefined') {
      return new ProxyBus(window._nc_event_bus);
    } else {
      return window._nc_event_bus = new SimpleBus();
    }
  }

  var bus = getBus();
  /**
   * Register an event listener
   *
   * @param name name of the event
   * @param handler callback invoked for every matching event emitted on the bus
   */

  function subscribe(name, handler) {
    bus.subscribe(name, handler);
  }
  /**
   * Unregister a previously registered event listener
   *
   * Note: doesn't work with anonymous functions (closures). Use method of an object or store listener function in variable.
   *
   * @param name name of the event
   * @param handler callback passed to `subscribed`
   */


  function unsubscribe(name, handler) {
    bus.unsubscribe(name, handler);
  }
  /**
   * Emit an event
   *
   * @param name name of the event
   * @param event event payload
   */


  function emit(name, event) {
    bus.emit(name, event);
  }

  var index_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    emit: emit,
    subscribe: subscribe,
    unsubscribe: unsubscribe
  });

  var requesttoken = createCommonjsModule$1(function (module, exports) {



  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getRequestToken = getRequestToken;
  exports.onRequestTokenUpdate = onRequestTokenUpdate;



  var tokenElement = document.getElementsByTagName('head')[0];
  var token = tokenElement ? tokenElement.getAttribute('data-requesttoken') : null;
  var observers = [];

  function getRequestToken() {
    return token;
  }

  function onRequestTokenUpdate(observer) {
    observers.push(observer);
  } // Listen to server event and keep token in sync


  (0, index_es.subscribe)('csrf-token-update', function (e) {
    token = e.token;
    observers.forEach(function (observer) {
      try {
        observer(e.token);
      } catch (e) {
        console.error('error updating CSRF token observer', e);
      }
    });
  });
  });

  unwrapExports(requesttoken);
  requesttoken.getRequestToken;
  requesttoken.onRequestTokenUpdate;

  var user = createCommonjsModule$1(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.getCurrentUser = getCurrentUser; /// <reference types="@nextcloud/typings" />

  var uidElement = document.getElementsByTagName('head')[0];
  var uid = uidElement ? uidElement.getAttribute('data-user') : null;
  var displayNameElement = document.getElementsByTagName('head')[0];
  var displayName = displayNameElement ? displayNameElement.getAttribute('data-user-displayname') : null;
  var isAdmin = typeof OC === 'undefined' ? false : OC.isUserAdmin();

  function getCurrentUser() {
    if (uid === null) {
      return null;
    }

    return {
      uid: uid,
      displayName: displayName,
      isAdmin: isAdmin
    };
  }
  });

  unwrapExports(user);
  user.getCurrentUser;

  var dist = createCommonjsModule$1(function (module, exports) {

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "getRequestToken", {
    enumerable: true,
    get: function get() {
      return requesttoken.getRequestToken;
    }
  });
  Object.defineProperty(exports, "onRequestTokenUpdate", {
    enumerable: true,
    get: function get() {
      return requesttoken.onRequestTokenUpdate;
    }
  });
  Object.defineProperty(exports, "getCurrentUser", {
    enumerable: true,
    get: function get() {
      return user.getCurrentUser;
    }
  });
  });

  var auth = unwrapExports(dist);

  var token = auth.getRequestToken();
  var components = [];
  $(document).ready(function () {
    if ($('input[name="duration"]').length > 0) {
      $('input[name="duration"]')[0].focus();
    }
  });

  var init = function init() {
    var store = {};
    var storeElement = document.querySelector("#content.app-timemanager [data-store]");

    if (storeElement) {
      try {
        store = JSON.parse(storeElement.getAttribute("data-store"));
      } catch (error) {
        console.error(error);
      }
    }

    components.push(new Statistics({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='Statistics.svelte']")),
      props: _objectSpread2({}, store)
    }));
    components.push(new Filters({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='Filters.svelte']")),
      props: _objectSpread2({}, store)
    }));
    components.push(new Timerange({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='Timerange.svelte']")),
      props: _objectSpread2({}, store)
    }));
    components.push(new ClientEditorDialog({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='ClientEditorDialog.svelte']")),
      props: _objectSpread2(_objectSpread2({}, store), {}, {
        action: "",
        requestToken: token
      })
    }));
    components.push(new ProjectEditorDialog({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='ProjectEditorDialog.svelte']")),
      props: _objectSpread2(_objectSpread2({}, store), {}, {
        requestToken: token
      })
    }));
    components.push(new TaskEditorDialog({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='TaskEditorDialog.svelte']")),
      props: _objectSpread2(_objectSpread2({}, store), {}, {
        requestToken: token
      })
    }));
    components.push(new TimeEditorDialog({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='TimeEditorDialog.svelte']")),
      props: _objectSpread2(_objectSpread2({}, store), {}, {
        requestToken: token
      })
    }));
    components.push(new DeleteButton({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='DeleteButton.svelte']")),
      props: _objectSpread2(_objectSpread2({}, store), {}, {
        requestToken: token
      })
    }));
    var deleteTimeEntryButtons = document.querySelectorAll("#content.app-timemanager [data-svelte='DeleteTimeEntryButton.svelte']");

    if (deleteTimeEntryButtons && deleteTimeEntryButtons.length > 0) {
      deleteTimeEntryButtons.forEach(function (button) {
        components.push(new DeleteTimeEntryButton({
          target: Helpers.replaceNode(button),
          props: _objectSpread2(_objectSpread2({}, store), {}, {
            deleteTimeEntryUuid: button.getAttribute("data-uuid"),
            requestToken: token
          })
        }));
      });
    }

    var editTimeEntryButtons = document.querySelectorAll("#content.app-timemanager [data-svelte='EditTimeEntryButton.svelte']");

    if (editTimeEntryButtons && editTimeEntryButtons.length > 0) {
      editTimeEntryButtons.forEach(function (button) {
        components.push(new TimeEditorDialog({
          target: Helpers.replaceNode(button),
          props: _objectSpread2(_objectSpread2({}, store), {}, {
            timeUuid: button.getAttribute("data-uuid"),
            editTimeEntryData: JSON.parse(button.getAttribute("data-edit-data")),
            timeEditorButtonCaption: dist_4$1("timemanager", "Edit"),
            timeEditorCaption: dist_4$1("timemanager", "Edit time entry"),
            requestToken: token
          })
        }));
      });
    }

    components.push(new QuickAdd({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='QuickAdd.svelte']")),
      props: _objectSpread2(_objectSpread2({}, store), {}, {
        requestToken: token
      })
    }));
    var checkmarkButtons = document.querySelectorAll("#content.app-timemanager [data-svelte='Checkmark.svelte']");

    if (checkmarkButtons && checkmarkButtons.length > 0) {
      checkmarkButtons.forEach(function (button) {
        components.push(new Checkmark({
          target: Helpers.replaceNode(button),
          props: _objectSpread2(_objectSpread2({}, store), {}, {
            uuid: button.getAttribute("data-uuid"),
            action: button.getAttribute("data-action"),
            initialState: button.getAttribute("data-initialState"),
            requestToken: token
          })
        }));
      });
    }

    components.push(new PrintButton({
      target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='PrintButton.svelte']"))
    })); // components.push(
    // 	new Settings({
    // 		target: Helpers.replaceNode(document.querySelector("#content.app-timemanager [data-svelte='Settings.svelte']")),
    // 		props: {
    // 			...store,
    // 			requestToken: token,
    // 		},
    // 	})
    // );
  };

  init();
  components.push(new PagePjax(init));

}());
