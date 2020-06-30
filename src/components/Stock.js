import React from 'react'

const Stock = (props) => (
  <div onClick={() => props.buyOrSellStock(props.stock.id)}>

    <div className="card">
      <div className="card-body">
        <h5 onClick={() => console.log(props)} className="card-title">{
            props.stock.name
        }</h5>
        <p className="card-text">{
            `${props.stock.ticker}: ${props.stock.price}`
            //ticker: stock price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
