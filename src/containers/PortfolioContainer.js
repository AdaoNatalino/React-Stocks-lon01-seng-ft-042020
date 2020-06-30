import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  sayHello = () => {
    console.log("hello");
  }

  renderStocks = () => this.props.stocks.map(stock => {
    return < Stock
    saySomething={this.sayHello} 
    key={stock.ticker} 
    buyOrSellStock={this.props.buyOrSellStock} 
    stock={stock}/>
  })
  

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          { this.renderStocks() }
      </div>
    );
  }

}

export default PortfolioContainer;
