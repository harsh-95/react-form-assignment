import React from 'react';
import './ViewProducts.css';

const ViewProducts = ({products, getEditProduct}) => {

    const showProductsTable = (
        <table cellSpacing="5px">
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="center">
                {products.map(({productName, category, description, price},i) => 
                            <tr key={i}>
                                <td>
                                    {productName}
                                </td>
                                <td>
                                    <span>{category}</span>
                                </td>
                                <td>
                                    <span>{description}</span>
                                </td>
                                <td>
                                    <span>₹ {price}</span>
                                </td>
                                <td>
                                    <button className="btnEdit" onClick={() => getEditProduct(i)}>Edit</button>
                                </td>
                            </tr>)
                            }
                
            </tbody>
        </table>
);

    return(
        <div>
            {showProductsTable}
        </div>
    )
}

export default ViewProducts;