import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API  from "../API"

class MainContainer extends Component {

  state = {
    stocks: [],
    filter: "All",
    sortByLetter: true,
    // portfolioStocks: [],
    // sortByPrice: false
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

  filterByType = (stocks) => { 
    const filter = this.state.filter

    if (filter === "All") { 
      return stocks 
    } else {
      return stocks.filter(stock => stock.type === filter)
    }
  }

  sortByPrice = () => this.setState({
    // sortByPrice: true,
    sortByLetter: false,
  })

  sortByLetter = () => this.setState({
    sortByLetter: true,
    // sortByPrice: false,
  })

  sortStocksBy = (stocks) => {
    return this.state.sortByLetter 
    ? [...stocks].sort((a, b) => (a.name > b.name) ? 1 : -1)
    : [...stocks].sort((a, b) => (a.price > b.price) ? 1 : -1) 
    
    // if (this.state.sortByPrice) { return [...this.state.stocks].sort((a, b) => (a.price > b.price) ? 1 : -1) }
    // if (this.state.sortByLetter) { return [...this.state.stocks].sort((a, b) => (a.name > b.name) ? 1 : -1) }
    // return this.state.stocks
  }

  stocksToRender = (stocks) => {
    const filteredStocks = this.filterByType(stocks)
    const sortedAndFilteredStocks = this.sortStocksBy(filteredStocks)
    return sortedAndFilteredStocks

  }

  myPortfolioStocks = () => this.filterByType(this.state.stocks).filter(stock => stock.openForBusiness === false)
  stocksAvailable = () => this.filterByType().filter(stock => stock.openForBusiness === true)

  render() {
    return (
      <div>
        <SearchBar
        //price={this.state.sortByPrice}
        letter={this.state.sortByLetter}
        sortByLetter={this.sortByLetter}
        sortByPrice={this.sortByPrice} 
        handleFilter={this.handleFilter}/>

          <div className="row">
            <div className="col-8">

              <StockContainer buyOrSellStock={this.buyOrSellStock} stocks={this.stocksToRender(this.state.stocks)}/>

            </div>
            <div className="col-4">

              <PortfolioContainer buyOrSellStock={this.buyOrSellStock} stocks={this.stocksToRender(this.state.portfolioStocks)}/>

            </div>
          </div>
      </div>
    );
  }
}

export default MainContainer;
