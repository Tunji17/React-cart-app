import React, { Component } from 'react';
import Product from './Product'
import './App.css'

class Products extends  Component {
  constructor(props){
    super(props);

    this.state = {
      total : 0

    };
    this.totalCartPrice = this.totalCartPrice.bind(this);
  }

  totalCartPrice(price){
    this.setState({ total: this.state.total + price});
  }
  render(){
    var Productiterator = this.props.items.map((item, i) =>{
      return <Product name={item.name} price={item.price} key={i}
          totalCartPrice={this.totalCartPrice} selected={item.selected}/>
    });
    return(
      <div>
        <h1>These are a list of earphones:</h1>
        <div>
          {Productiterator}
          <h3>Your cart total price : {this.state.total}</h3>
        </div>
      </div>
    );
  }
}



export default Products;
