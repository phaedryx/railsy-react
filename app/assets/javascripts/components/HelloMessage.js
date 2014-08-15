var React = require('react');

var HelloMessage = React.createClass({displayName: 'HelloMessage',
  render: function() {
    return React.DOM.div(null, "Hey ", this.props.name);
  }
});

module.exports = HelloMessage;
