React = require 'react'
{button} = React.DOM

AppActions = require 'actions/app-actions'

AddToCart = React.createClass(
  handleClick: -> AppActions.addItem(@props.item)

  render: -> button({onClick: @handleClick}, "Add To cart")
)

module.exports = AddToCart
