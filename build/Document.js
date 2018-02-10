'use strict';
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function(d, b) {
          d.__proto__ = b;
        }) ||
      function(d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
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
Object.defineProperty(exports, '__esModule', { value: true });
var React = require('react');
var Document = /** @class */ (function(_super) {
  __extends(Document, _super);
  function Document() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Document.getInitialProps = function(_a) {
    var assets = _a.assets,
      data = _a.data,
      renderPage = _a.renderPage;
    var page = renderPage();
    return __assign({ assets: assets, data: data }, page);
  };
  Document.prototype.render = function() {
    var _a = this.props,
      helmet = _a.helmet,
      assets = _a.assets,
      data = _a.data;
    // get attributes from React Helmet
    var htmlAttrs = helmet.htmlAttributes.toComponent();
    var bodyAttrs = helmet.bodyAttributes.toComponent();
    return React.createElement(
      'html',
      __assign({}, htmlAttrs),
      React.createElement(
        'head',
        null,
        React.createElement('meta', {
          httpEquiv: 'X-UA-Compatible',
          content: 'IE=edge',
        }),
        React.createElement('meta', { charSet: 'utf-8' }),
        React.createElement('title', null, 'Welcome to the Afterparty'),
        React.createElement('meta', {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }),
        helmet.title.toComponent(),
        helmet.meta.toComponent(),
        helmet.link.toComponent(),
        assets.client.css &&
          React.createElement('link', {
            rel: 'stylesheet',
            href: assets.client.css,
          })
      ),
      React.createElement(
        'body',
        __assign({}, bodyAttrs),
        React.createElement(AfterRoot, null),
        React.createElement(AfterData, { data: data }),
        React.createElement('script', {
          type: 'text/javascript',
          src: assets.client.js,
          defer: true,
          crossOrigin: 'anonymous',
        })
      )
    );
  };
  return Document;
})(React.Component);
exports.Document = Document;
function AfterRoot() {
  return React.createElement(
    'div',
    { id: 'root' },
    'DO_NOT_DELETE_THIS_YOU_WILL_BREAK_YOUR_APP'
  );
}
exports.AfterRoot = AfterRoot;
function AfterData(_a) {
  var data = _a.data;
  return React.createElement('script', {
    id: 'server-app-state',
    type: 'application/json',
    dangerouslySetInnerHTML: {
      __html: JSON.stringify(__assign({}, data)).replace(
        /<\/script>/g,
        '%3C/script%3E'
      ),
    },
  });
}
exports.AfterData = AfterData;
//# sourceMappingURL=Document.js.map
