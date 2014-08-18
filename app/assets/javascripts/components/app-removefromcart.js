var React = require('react');
var AppActions = require('../actions/app-actions.js');
var RemoveFromCart =
  React.createClass({displayName: 'RemoveFromCart',
    handleClick:function(){
      AppActions.removeItem(this.props.index);
    },
    render:function(){
      return React.DOM.button({onClick: this.handleClick}, "x")
    }
  });
module.exports = RemoveFromCart;
