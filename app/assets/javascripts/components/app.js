var React = require('react');
var AppActions = require('actions/app-actions');
var Catalog = require('components/app-catalog');
var Cart = require('components/app-cart');
var APP =
  React.createClass({displayName: 'APP',
    render: function(){
      return (
        React.DOM.div(null,
          React.DOM.h1(null, "Catalog"),
          Catalog(null),
          React.DOM.h1(null, "Cart"),
          Cart(null)
        )
      )
    }
  });
module.exports = APP;
