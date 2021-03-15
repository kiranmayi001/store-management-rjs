import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './Order.css';

function Order(props) {
    const [order, setOrder] = useState({
        customerName: '',
        contactNumber: '',
        totalAmt: 0
    });
    
    useEffect(() => {
        const orderId = props.match.params.orderId;
        if(!orderId) return;
        const prevOrders = JSON.parse(localStorage.getItem('orders'));
        if(!prevOrders) return;
        const currentOrder = prevOrders.filter(order => order.id==orderId);
        console.log(currentOrder[0]);
        setOrder(currentOrder[0]);
    }, [order.totalAmt])

    return (
        <div>
            {/* Regular fields */}
        <div>

            <table className="order-page-table">
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                  <td>Customer Name</td>
                  <td>{order.customerName}</td>  
                </tr>
                <tr>
                  <td>Contact Number</td>
                  <td>{order.contactNumber}</td>  
                </tr>
                <tr>
                  <td>Total Amt</td>
                  <td>{order.totalAmt}</td>  
                </tr>
                </tbody>
            </table>
        </div>
        {/* Products  Table */}
        <div>
            <table className="order-page-table">
                <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
                </thead>
                <tbody>
                {order.products && order.products.length > 0 && order.products.map((product, index) =>
                     <tr key={order.id+'-'+product.id+'-'+index}>
                         <td>{product.id}</td>
                         <td>{product.name}</td>
                         <td>{product.price}</td>
                         <td>{product.quantity}</td>
                     </tr>
                )}
                </tbody>
            </table>
        </div>
            <Link to="/dashboard/executive">Back</Link>
        </div>  
       
    )
}

export default Order
