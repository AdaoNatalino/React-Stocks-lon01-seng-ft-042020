import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  sayGoodbye = () => console.log("Goodbye") 

  renderStocks = () => this.props.stocks.map(stock => {
    return < Stock 
    saySomething={this.sayGoodbye} 
    key={stock.ticker} 
    buyOrSellStock={this.props.buyOrSellStock} 
    stock={stock}/>
  })

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        { this.renderStocks() }
      </div>
    );
  }

}

export default StockContainer;
