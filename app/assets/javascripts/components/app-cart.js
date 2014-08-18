var React = require('react');
var AppStore = require('../stores/app-store.js');
var RemoveFromCart = require('../components/app-removefromcart.js');
var Increase = require('../components/app-increase.js');
var Decrease = require('../components/app-decrease.js');


function cartItems(){
  return {items: AppStore.getCart()}
}

var Cart =
  React.createClass({displayName: 'Cart',
    getInitialState:function(){
      return cartItems();
    },
    componentWillMount:function(){
      AppStore.addChangeListener(this._onChange)
    },
    _onChange:function(){
      this.setState(cartItems())
    },
    render:function(){
      var total=0;
      var items = this.state.items.map(function(item, i){
        var subtotal = item.cost*item.qty;
        total += subtotal;
        return (
          React.DOM.tr({key: i},
            React.DOM.td(null, RemoveFromCart({index: i})),
            React.DOM.td(null, item.title),
            React.DOM.td(null, item.qty),
            React.DOM.td(null,
              Increase({index: i}),
              Decrease({index: i})
            ),
            React.DOM.td(null, "$", subtotal)
          )
          )
      });
      return (
          React.DOM.table({className: "table table-hover"},
            React.DOM.thead(null,
              React.DOM.tr(null,
                React.DOM.th(null),
                React.DOM.th(null, "Item"),
                React.DOM.th(null, "Qty"),
                React.DOM.th(null),
                React.DOM.th(null, "Subtotal")
              )
            ),
            React.DOM.tbody(null,
              items
            ),
            React.DOM.tfoot(null,
              React.DOM.tr(null,
                React.DOM.td({colSpan: "4", className: "text-right"}, "Total"),
                React.DOM.td(null, "$", total)
              )
            )
          )
        )
    }
  });
module.exports = Cart;
