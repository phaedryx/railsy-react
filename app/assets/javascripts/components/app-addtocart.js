var React = require('react');
var AppActions = require('actions/app-actions');

var AddToCart =
  React.createClass({displayName: 'AddToCart',
    handleClick:function(){
      AppActions.addItem(this.props.item);
    },
    render:function(){
      return React.DOM.button({onClick: this.handleClick}, "Add To cart")
    }
  });
module.exports = AddToCart;
