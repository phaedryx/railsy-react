var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Increase =
  React.createClass({displayName: 'Increase',
    handleClick:function(){
      AppActions.increaseItem(this.props.index);
    },
    render:function(){
      return React.DOM.button({onClick: this.handleClick}, "+")
    }
  });
module.exports = Increase;
