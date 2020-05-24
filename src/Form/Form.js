import React, { Component } from 'react';
import './Form.css';

class Form extends Component{

    state = this.getInitState();

    getInitState(){
        const {productToEdit} = this.props;

        return Object.keys(productToEdit).length ? productToEdit: {
            productName: '',
            category: '',
            description: '',
            price: ''
        }
    }

    // componentWillReceiveProps({productToEdit}){
    //     this.setState({
    //       ...productToEdit
    //     })
    //   }
    
    componentDidUpdate({productToEdit}){
        if(productToEdit !== this.props.productToEdit){
            this.setState({
                ...this.props.productToEdit
            })
        }
    }
    
    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const {productName, category, price} = this.state;

        if(productName && category && price){

            Object.keys(this.props.productToEdit).length 
            ? this.props.handleEditProduct(this.state)
            : this.props.addNewProduct(this.state)

            this.setState({
                productName: '',
                category: '',
                description: '',
                price: ''
            })
        }
    }

    render(){
        return(
            <div className="formContainer">
                <form className="form">
                    <div className="formInput">
                        <div className="label"><label>Product Name*</label></div>
                        <div className="input">
                            <input type="text" name="productName" value={this.state.productName} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="formInput">
                    <   div className="label"><label>Category*</label></div>
                        <div className="input">
                            <select name="category" value={this.state.category} onChange={this.handleChange}>
                                <option value=""> 
                                    Select an Option 
                                </option> 
                                <option value="Electronics">Electronics</option>
                                <option value="Appliances">Appliances</option>
                                <option value="Groceries">Groceries</option>
                                <option value="Sports">Sports</option>
                                <option value="Miscellaneous">Miscellaneous</option>
                            </select>
                        </div>
                    </div>

                    <div className="formInput">
                        <div className="label"><label>Description</label></div>
                        <div className="input">
                            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="formInput">
                        <div className="label"><label>Price*</label></div>
                        <div className="input">
                            <input type="number" name="price" value={this.state.price} onChange={this.handleChange} />
                        </div>
                    </div>

                    <div className="btnDiv">
                        <button className="btn" onClick={this.handleSubmit}>Save</button>
                    </div>
                </form>
            </div>
        )
    }

}
export default Form;