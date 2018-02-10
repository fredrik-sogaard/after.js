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
var react_router_dom_1 = require('react-router-dom');
var loadInitialProps_1 = require('./loadInitialProps');
var Afterparty = /** @class */ (function(_super) {
  __extends(Afterparty, _super);
  function Afterparty(props) {
    var _this = _super.call(this, props) || this;
    _this.prefetch = function(pathname) {
      loadInitialProps_1
        .loadInitialProps(_this.props.routes, pathname, {
          history: _this.props.history,
        })
        .then(function(data) {
          _this.prefetcherCache = Object.assign(
            {},
            _this.prefetcherCache,
            ((_a = {}), (_a[pathname] = data[0]), _a)
          );
          var _a;
        })
        .catch(function(e) {
          return console.log(e);
        });
    };
    _this.state = {
      data: props.data,
      previousLocation: null,
    };
    _this.prefetcherCache = {};
    return _this;
  }
  // only runs clizzient
  Afterparty.prototype.componentWillReceiveProps = function(
    nextProps,
    nextState
  ) {
    var _this = this;
    var navigated = nextProps.location !== this.props.location;
    if (navigated) {
      window.scrollTo(0, 0);
      // save the location so we can render the old screen
      this.setState({
        previousLocation: this.props.location,
        data: undefined,
      });
      // const { data, match, routes, history, location } = nextProps
      loadInitialProps_1
        .loadInitialProps(this.props.routes, nextProps.location.pathname, {
          location: nextProps.location,
          history: nextProps.history,
        })
        .then(function(data) {
          _this.setState({ previousLocation: null, data: data[0] });
        })
        .catch(function(e) {
          // @todo we should more cleverly handle errors???
          console.log(e);
        });
    }
  };
  Afterparty.prototype.render = function() {
    var _this = this;
    var _a = this.state,
      previousLocation = _a.previousLocation,
      data = _a.data;
    var _b = this.props,
      location = _b.location,
      history = _b.history,
      match = _b.match;
    var initialData = this.prefetcherCache[location.pathname] || data;
    return React.createElement(
      react_router_dom_1.Switch,
      { location: previousLocation || location },
      this.props.routes.map(function(r, i) {
        return React.createElement(react_router_dom_1.Route, {
          key: 'route--' + i,
          path: r.path,
          exact: r.exact,
          location: previousLocation || location,
          render: function(props) {
            return React.createElement(
              r.component,
              __assign({}, initialData, {
                history: history,
                location: previousLocation || location,
                match: match,
                prefetch: _this.prefetch,
              })
            );
          },
        });
      })
    );
  };
  return Afterparty;
})(React.Component);
exports.After = react_router_dom_1.withRouter(Afterparty);
//# sourceMappingURL=After.js.map
