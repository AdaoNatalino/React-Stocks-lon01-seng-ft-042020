import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderStocks = () => this.props.stocks.map(stock => {
    return <Stock 
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
