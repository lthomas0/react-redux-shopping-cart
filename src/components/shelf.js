import React, { Component } from 'react';


class Shelf extends Component {
  constructor(props) {
    super(props);
    this.onClickAdd = this.onClickAdd.bind(this);
    this.state = {
      shelfItems: [
        'Nestea Iced Tea - 6 pk',
        'DiGiorno Frozen Pizza: Pepperoni',
        'Godiva Dark Chocolate',
        'Diet Coke - 6 pk',
        'Kraft Easy Mac Cups - 2 pk'
      ]
    }
  }
  onClickAdd(item) {
      this.props.addItem(item);
  }
  render() {
    const shelfItems = this.state.shelfItems.map((item, idx) => {
      return <li class="shelf" key={idx}><button onClick={()=>this.onClickAdd(item)}>[+]</button>{item}</li>
    }); 
    return (
      
      <div>
      <h2>Products Available</h2> 
      <ul class="shelfBtn">
      {shelfItems}
      </ul>
      
      </div>
      
    );
  }
}

export default Shelf;
