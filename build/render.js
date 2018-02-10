'use strict';
var __assign =
  (this && this.__assign) ||
  Object.assign ||
  function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.');
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t = y[op[0] & 2 ? 'return' : op[0] ? 'throw' : 'next']) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [0, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === 'function')
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var react_helmet_1 = require('react-helmet');
var react_router_dom_1 = require('react-router-dom');
var Document_1 = require('./Document');
var After_1 = require('./After');
var loadInitialProps_1 = require('./loadInitialProps');
var url = require('url');
var modPageFn = function(Page) {
  return function(props) {
    return React.createElement(Page, __assign({}, props));
  };
};
function render(options) {
  return __awaiter(this, void 0, void 0, function() {
    var _a,
      req,
      res,
      routes,
      assets,
      document,
      rest,
      Doc,
      context,
      renderPage,
      _b,
      _c,
      match,
      data,
      _d,
      html,
      docProps,
      doc;
    return __generator(this, function(_e) {
      switch (_e.label) {
        case 0:
          (_a = options),
            (req = _a.req),
            (res = _a.res),
            (routes = _a.routes),
            (assets = _a.assets),
            (document = _a.document),
            (rest = __rest(_a, ['req', 'res', 'routes', 'assets', 'document']));
          Doc = document || Document_1.Document;
          context = {};
          renderPage = function(fn) {
            if (fn === void 0) {
              fn = modPageFn;
            }
            var html = ReactDOMServer.renderToString(
              React.createElement(
                react_router_dom_1.StaticRouter,
                { location: req.url, context: context },
                fn(After_1.After)({ routes: routes, data: data })
              )
            );
            var helmet = react_helmet_1.default.renderStatic();
            return { html: html, helmet: helmet };
          };
          return [
            4 /*yield*/,
            loadInitialProps_1.loadInitialProps(
              routes,
              url.parse(req.url).pathname,
              __assign(
                {
                  req: req,
                  res: res,
                },
                rest
              )
            ),
          ];
        case 1:
          (_b = _e.sent()),
            (_c = _b.match),
            (match = _c === void 0 ? {} : _c),
            (data = _b.data);
          if (match.path === '**') {
            res.status(404);
          } else if (match.redirectTo) {
            res.redirect(
              301,
              req.originalUrl.replace(match.path, match.redirectTo)
            );
            return [2 /*return*/];
          }
          return [
            4 /*yield*/,
            Doc.getInitialProps({
              req: req,
              res: res,
              assets: assets,
              renderPage: renderPage,
              data: data,
            }),
          ];
        case 2:
          (_d = _e.sent()), (html = _d.html), (docProps = __rest(_d, ['html']));
          doc = ReactDOMServer.renderToStaticMarkup(
            React.createElement(Doc, __assign({}, docProps))
          );
          return [
            2 /*return*/,
            '<!doctype html>' +
              doc.replace('DO_NOT_DELETE_THIS_YOU_WILL_BREAK_YOUR_APP', html),
          ];
      }
    });
  });
}
exports.render = render;
//# sourceMappingURL=render.js.map
