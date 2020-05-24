import React, { Component } from 'react';
import './App.css';
import Form from './Form/Form';
import ViewProducts from './ViewProducts/ViewProducts';

class App extends Component {

  state={
    products: [],
    productToEdit: {}
  }

  addNewProduct = (product) => {
    this.setState({
      products: [...this.state.products, {...product}]
    })
  }

  handleEditProduct = (product) => {

    const index = this.state.products.findIndex((ob) => 
                        ob.productName === this.state.productToEdit.productName
                      )
    const newProducts = [...this.state.products];

    newProducts[index] = product;

    this.setState({
      products: newProducts,
      productToEdit: {}
    })
  }

  getEditProduct = (index) =>{
    this.setState({
      productToEdit: this.state.products[index]
    })
  }

  render(){
    return (
      <div className="App">
          <h2>React Assignment</h2>
          <Form 
            addNewProduct={this.addNewProduct} 
            productToEdit={this.state.productToEdit}
            handleEditProduct={this.handleEditProduct}/>
          <ViewProducts products={this.state.products} getEditProduct={this.getEditProduct}/>
      </div>
  );
  }
}

export default App;
