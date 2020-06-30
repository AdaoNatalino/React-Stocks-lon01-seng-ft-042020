import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API  from "../API"

class MainContainer extends Component {

  state = {
    stocks: [],
    filter: "All",
    sortByLetter: false,
    sortByPrice: false
  }

  componentDidMount = () => {
    API.getAllStocks().then(arrayOfStocks => {
      const stocksWithBusinessKey = this.addBusinessKeyToStock(arrayOfStocks)
      this.setState({ stocks: stocksWithBusinessKey })
    })
  }

  addBusinessKeyToStock = (arrayOfStocks) => {
    return arrayOfStocks.map(stock => {
      stock.openForBusiness = true
      return stock
    })
  }

  buyOrSellStock = (stockId) => {
    const stocks = this.state.stocks.map(stock => 
      stock.id === stockId ? {...stock, openForBusiness: !stock.openForBusiness} : stock
      )
      this.setState({stocks: stocks})
  }

  handleFilter = (filter) => {
    this.setState( {filter: filter} )
  }

  filterByType = () => { 
    const filter = this.state.filter

    if (filter === "All") { return this.state.stocks 
      } else {
        return this.state.stocks.filter(stock => stock.type === filter)
      }
  }

  changeSortByPrice = () => this.setState( { sortByPrice: !this.state.sortByPrice } )
  changeSortByLetter = () => this.setState( { sortByLetter: !this.state.sortByLetter } )

  sortStocksBy = () => {
    if (this.state.sortByPrice) { return [...this.state.stocks].sort((a, b) => (a.price > b.price) ? 1 : -1) }
    if (this.state.sortByLetter) { return [...this.state.stocks].sort((a, b) => (a.name > b.name) ? 1 : -1) }
    return this.state.stocks
  }

  myPortfolioStocks = () => this.filterByType().filter(stock => stock.openForBusiness === false)
  stocksAvailable = () => this.filterByType().filter(stock => stock.openForBusiness === true)

  render() {
    return (
      <div>
        <SearchBar
        price={this.state.sortByPrice}
        letter={this.state.sortByLetter}
        changeSortByLetter={this.changeSortByLetter}
        changeSortByPrice={this.changeSortByPrice} 
        handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer buyOrSellStock={this.buyOrSellStock} stocks={this.stocksAvailable()}/>

            </div>
            <div className="col-4">

              <PortfolioContainer buyOrSellStock={this.buyOrSellStock} stocks={this.myPortfolioStocks()}/>

            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;
