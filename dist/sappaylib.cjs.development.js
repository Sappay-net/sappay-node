'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@apimatic/core');
var schema = require('@apimatic/schema');

function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

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

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
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

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
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

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/**
 * SAPPAYLib
 *
 */
var accessTokenAuthenticationProvider = function accessTokenAuthenticationProvider(_ref) {
  var accessToken = _ref.accessToken;
  return function (requiresAuth) {
    if (!requiresAuth) {
      return core.passThroughInterceptor;
    }

    return function (request, options, next) {
      var _request$headers;

      request.headers = (_request$headers = request.headers) != null ? _request$headers : {};
      core.setHeader(request.headers, core.AUTHORIZATION_HEADER, "Basic " + accessToken);
      return next(request, options);
    };
  };
};

/**
 * SAPPAYLib
 *
 */

(function (Environment) {
  Environment["Production"] = "production";
  Environment["Development"] = "development";
})(exports.Environment || (exports.Environment = {}));

/**
 * SAPPAYLib
 *
 */
/** Default values for the configuration parameters of the client. */

var DEFAULT_CONFIGURATION = {
  timeout: 0,
  environment: exports.Environment.Production,
  accessToken: ''
};
/** Default values for retry configuration parameters. */

var DEFAULT_RETRY_CONFIG = {
  maxNumberOfRetries: 0,
  retryOnTimeout: true,
  retryInterval: 1,
  maximumRetryWaitTime: 0,
  backoffFactor: 2,
  httpStatusCodesToRetry: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
  httpMethodsToRetry: ['GET', 'PUT']
};

/**
 * SAPPAYLib
 *
 */
var XmlSerialization = /*#__PURE__*/function () {
  function XmlSerialization() {}

  var _proto = XmlSerialization.prototype;

  _proto.xmlSerialize = function xmlSerialize(_rootName, _value) {
    throw new Error('XML serialization is not available.');
  };

  _proto.xmlDeserialize = function xmlDeserialize(_rootName, _xmlString) {
    throw new Error('XML deserialization is not available.');
  };

  return XmlSerialization;
}();

require('dotenv').config();

var USER_AGENT = 'APIMATIC 3.0';
var Client = /*#__PURE__*/function () {
  function Client(config) {
    var _this$_config$httpCli,
        _this$_config$httpCli2,
        _this = this,
        _this$_config$httpCli3,
        _this$_config$httpCli4;

    this._config = _extends({}, DEFAULT_CONFIGURATION, config);
    this._retryConfig = _extends({}, DEFAULT_RETRY_CONFIG, (_this$_config$httpCli = this._config.httpClientOptions) == null ? void 0 : _this$_config$httpCli.retryConfig);
    this._timeout = typeof ((_this$_config$httpCli2 = this._config.httpClientOptions) == null ? void 0 : _this$_config$httpCli2.timeout) != 'undefined' ? this._config.httpClientOptions.timeout : this._config.timeout;
    this._requestBuilderFactory = createRequestHandlerFactory(function (server) {
      return getBaseUri(server, _this._config);
    }, accessTokenAuthenticationProvider(this._config), new core.HttpClient({
      timeout: this._timeout,
      clientConfigOverrides: this._config.unstable_httpClientOptions,
      httpAgent: (_this$_config$httpCli3 = this._config.httpClientOptions) == null ? void 0 : _this$_config$httpCli3.httpAgent,
      httpsAgent: (_this$_config$httpCli4 = this._config.httpClientOptions) == null ? void 0 : _this$_config$httpCli4.httpsAgent
    }), [withErrorHandlers, withUserAgent, withAuthenticationByDefault], new XmlSerialization(), this._retryConfig);
  }

  var _proto = Client.prototype;

  _proto.getRequestBuilderFactory = function getRequestBuilderFactory() {
    return this._requestBuilderFactory;
  };

  _proto.getCreds = function getCreds() {
    if (this._config.credentials) {
      return this._config.credentials;
    }

    throw new Error('Credentials not found');
  }
  /**
   * Clone this client and override given configuration options
   */
  ;

  _proto.withConfiguration = function withConfiguration(config) {
    return new Client(_extends({}, this._config, config));
  };

  return Client;
}();

function createHttpClientAdapter(client) {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(request, requestOptions) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return client.executeRequest(request, requestOptions);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
}

function getBaseUri(server, config) {
  if (server === void 0) {
    server = 'default';
  }

  if (config.environment === exports.Environment.Production) {
    if (server === 'default') {
      return 'https://api.prod.sappay.net/';
    }

    if (server === 'DURL') {
      return 'https://api.stg.sappay.net/';
    }
  }

  if (config.environment === exports.Environment.Development) {
    if (server === 'default') {
      return 'https://api.stg.sappay.net/';
    }
  }

  throw new Error('Could not get Base URL. Invalid environment or server.');
}

function createRequestHandlerFactory(baseUrlProvider, authProvider, httpClient, addons, xmlSerializer, retryConfig) {
  var requestBuilderFactory = core.createRequestBuilderFactory(createHttpClientAdapter(httpClient), baseUrlProvider, core.ApiError, authProvider, xmlSerializer, retryConfig);
  return tap.apply(void 0, [requestBuilderFactory].concat(addons));
}

function tap(requestBuilderFactory) {
  for (var _len = arguments.length, callback = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    callback[_key - 1] = arguments[_key];
  }

  return function () {
    var requestBuilder = requestBuilderFactory.apply(void 0, arguments);
    callback.forEach(function (c) {
      return c(requestBuilder);
    });
    return requestBuilder;
  };
}

function withErrorHandlers(rb) {
  rb.defaultToError(core.ApiError);
}

function withUserAgent(rb) {
  rb.header('user-agent', USER_AGENT);
}

function withAuthenticationByDefault(rb) {
  rb.authenticate(false);
}

/**
 * SAPPAYLib
 *
 */
var checkoutPayloadSchema = /*#__PURE__*/schema.object({
  invoice_id: ['invoice_id', /*#__PURE__*/schema.string()],
  payment_processor_id: ['payment_processor_id', /*#__PURE__*/schema.string()],
  customer_msisdn: ['customer_msisdn', /*#__PURE__*/schema.string()],
  otp: ['otp', /*#__PURE__*/schema.string()]
});

/**
 * SAPPAYLib
 *
 */
var customerSchema = /*#__PURE__*/schema.object({
  name: ['name', /*#__PURE__*/schema.string()],
  email: ['email', /*#__PURE__*/schema.string()],
  country: ['country', /*#__PURE__*/schema.number()],
  city: ['city', /*#__PURE__*/schema.number()],
  details: ['details', /*#__PURE__*/schema.optional( /*#__PURE__*/schema.unknown())]
});

/**
 * SAPPAYLib
 *
 */
var Type;

(function (Type) {
  Type["POS"] = "POS";
  Type["ECOMMERCE"] = "ECOMMERCE";
})(Type || (Type = {}));

var typeSchema = /*#__PURE__*/schema.string();
var invoiceSchema = /*#__PURE__*/schema.object({
  customer: ['customer', /*#__PURE__*/schema.lazy(function () {
    return customerSchema;
  })],
  type: ['type', /*#__PURE__*/schema.lazy(function () {
    return typeSchema;
  })],
  amount: ['amount', /*#__PURE__*/schema.number()],
  reference_id: ['reference_id', /*#__PURE__*/schema.string()],
  token: ['token', /*#__PURE__*/schema.string()]
});

/**
 * SAPPAYLib
 *
 */

/** Base class for all controllers */
var BaseController = function BaseController(client) {
  this.createRequest = client.getRequestBuilderFactory();
  this.credentials = client.getCreds();
};

require('dotenv').config();

var ApiController = /*#__PURE__*/function (_BaseController) {
  _inheritsLoose(ApiController, _BaseController);

  function ApiController() {
    var _this;

    _this = _BaseController.apply(this, arguments) || this;
    _this.accessToken = null;
    return _this;
  }
  /**
   * Authenticate
   *
   * @param clientId      client_id of Merchant
   * @param clientSecret  client_secret of Merchant
   * @return accessToken  Response from the API call
   */


  var _proto = ApiController.prototype;

  _proto.authentication =
  /*#__PURE__*/
  function () {
    var _authentication = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(credentials, requestOptions) {
      var _credentials$clientId,
          _credentials$clientSe,
          _this2 = this;

      var req, mapped;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              req = this.createRequest('POST', '/api/o/token/');
              mapped = req.prepareArgs({
                clientId: [(_credentials$clientId = credentials == null ? void 0 : credentials.clientId) != null ? _credentials$clientId : this.credentials.clientId, schema.string()],
                clientSecret: [(_credentials$clientSe = credentials == null ? void 0 : credentials.clientSecret) != null ? _credentials$clientSe : this.credentials.clientSecret, schema.string()]
              });
              req.contentType('application/json');
              req.text(JSON.stringify({
                client_id: mapped.clientId,
                client_secret: mapped.clientSecret,
                grant_type: 'password',
                username: this.credentials.username,
                password: this.credentials.password
              }));
              return _context.abrupt("return", req.callAsJson(schema.unknown(), requestOptions).then(function (res) {
                return _this2.accessToken = res.result.access_token;
              }));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function authentication(_x, _x2) {
      return _authentication.apply(this, arguments);
    }

    return authentication;
  }()
  /**
   * Create Invoice
   *
   * @param invoicePayload payload having invoice details
   * @return accessToken  Response from the API call
   */
  ;

  _proto.createInvoice =
  /*#__PURE__*/
  function () {
    var _createInvoice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(invoicePayload, requestOptions) {
      var req, mapped;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = this.createRequest('POST', '/api/public/invoice/');
              mapped = req.prepareArgs({
                invoicePayload: [invoicePayload, schema.lazy(function () {
                  return invoiceSchema;
                })]
              });
              req.contentType('application/json');
              req.header('Authorization', "Bearer " + this.accessToken);
              req.text(JSON.stringify(mapped.invoicePayload));
              /*
              return req.call(requestOptions);
              */

              return _context2.abrupt("return", req.callAsJson(schema.unknown(), requestOptions).then(function (res) {
                return res.result.response.invoice_detail.invoice_id;
              }));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function createInvoice(_x3, _x4) {
      return _createInvoice.apply(this, arguments);
    }

    return createInvoice;
  }()
  /**
   * Get Invoice
   *
   * @param invoiceId invoice id
   * @return Invoice  Response from the API call
   */
  ;

  _proto.getCheckout =
  /*#__PURE__*/
  function () {
    var _getCheckout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(invoiceId) {
      var req;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              req = this.createRequest('GET', "/api/checkout/initiate/?invoice_id=" + invoiceId);
              req.contentType('application/json');
              req.header('Authorization', "Bearer " + this.accessToken);
              return _context3.abrupt("return", req.call().then(function (res) {
                return JSON.parse(res.body);
              }));

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));

    function getCheckout(_x5) {
      return _getCheckout.apply(this, arguments);
    }

    return getCheckout;
  }()
  /**
   * Perform Checkout
   *
   * @param checkoutPayload payload having otp and invoice id
   * @return accessToken  Response from the API call
   */
  ;

  _proto.performCheckout =
  /*#__PURE__*/
  function () {
    var _performCheckout = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(checkoutPayload, requestOptions) {
      var req, mapped;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              req = this.createRequest('POST', '/api/checkout/perform/');
              mapped = req.prepareArgs({
                checkoutPayload: [checkoutPayload, schema.lazy(function () {
                  return checkoutPayloadSchema;
                })]
              });
              req.contentType('application/json');
              req.header('Authorization', "Bearer " + this.accessToken);
              req.text(JSON.stringify(mapped.checkoutPayload));
              return _context4.abrupt("return", req.callAsJson(schema.unknown(), requestOptions).then(function (res) {
                return JSON.parse(res.body);
              }));

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));

    function performCheckout(_x6, _x7) {
      return _performCheckout.apply(this, arguments);
    }

    return performCheckout;
  }()
  /**
   * Get Status
   *
   * @param invoiceId invoice id
   * @return TransactionStatus  last transaction status against invoiceId from the API call
   */
  ;

  _proto.getStatus =
  /*#__PURE__*/
  function () {
    var _getStatus = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(invoiceId) {
      var req;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              req = this.createRequest('GET', "/api/transaction_status/?invoice=" + invoiceId);
              req.contentType('application/json');
              req.header('Authorization', "Bearer " + this.accessToken);
              return _context5.abrupt("return", req.call().then(function (res) {
                return JSON.parse(res.body).response;
              })["catch"](function (err) {
                console.log(err);
                return null;
              }));

            case 4:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));

    function getStatus(_x8) {
      return _getStatus.apply(this, arguments);
    }

    return getStatus;
  }();

  return ApiController;
}(BaseController);

Object.defineProperty(exports, 'AbortError', {
  enumerable: true,
  get: function () {
    return core.AbortError;
  }
});
Object.defineProperty(exports, 'ApiError', {
  enumerable: true,
  get: function () {
    return core.ApiError;
  }
});
Object.defineProperty(exports, 'ArgumentsValidationError', {
  enumerable: true,
  get: function () {
    return core.ArgumentsValidationError;
  }
});
Object.defineProperty(exports, 'FileWrapper', {
  enumerable: true,
  get: function () {
    return core.FileWrapper;
  }
});
Object.defineProperty(exports, 'ResponseValidationError', {
  enumerable: true,
  get: function () {
    return core.ResponseValidationError;
  }
});
Object.defineProperty(exports, 'cloneFileWrapper', {
  enumerable: true,
  get: function () {
    return core.cloneFileWrapper;
  }
});
Object.defineProperty(exports, 'isFileWrapper', {
  enumerable: true,
  get: function () {
    return core.isFileWrapper;
  }
});
exports.ApiController = ApiController;
exports.Client = Client;
exports.DEFAULT_CONFIGURATION = DEFAULT_CONFIGURATION;
exports.DEFAULT_RETRY_CONFIG = DEFAULT_RETRY_CONFIG;
//# sourceMappingURL=sappaylib.cjs.development.js.map
