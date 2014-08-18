var React = require('react');
var AppActions = require('../actions/app-actions.js');
var Decrease =
  React.createClass({displayName: 'Decrease',
    handleClick:function(){
      AppActions.decreaseItem(this.props.index);
    },
    render:function(){
      return React.DOM.button({onClick: this.handleClick}, "-")
    }
  });
module.exports = Decrease;
