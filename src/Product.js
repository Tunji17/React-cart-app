import React, { Component } from 'react';

class Product extends Component {
  constructor(props){
    super(props);

    this.state = {
      selected: false
    };
    this.cartClicker = this.cartClicker.bind(this);
  }

  cartClicker(){
    var selected = !this.state.selected;
    this.setState({selected:selected});
    this.props.totalCartPrice(selected ? this.props.price : -this.props.price)

  }
  render(){
    return(
      <div>
        <div className="allignHorizontally" onClick={this.cartClicker}>
        <h3>  {this.props.name} </h3>
        <h5> with price <b>{this.props.price}</b></h5>
        </div>
      </div>
    );
  }
}

export default Product;
