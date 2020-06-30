import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  renderStocks = () => this.props.stocks.map(stock => {
    return <Stock 
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
