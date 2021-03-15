import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import './Orders.css';

function Orders(props) {
    const [orders, setOrders] = useState([]);
    const [execOrders, setExecOrders] = useState([]);

    useEffect(() => {
        if(!props.username) return;
        const prevOrders = JSON.parse(localStorage.getItem('orders'));
        if(!prevOrders) return;
        const execOrders = prevOrders.filter(order => order.createdBy==props.username)
        setOrders(execOrders);
        setExecOrders(execOrders);
        console.log(execOrders);
    }, []);

    const handleSearch = e => {
        if(e.target.value=="")
            return setOrders(execOrders);
        const results=[];
        const searchText=e.target.value;
        for(const order of execOrders) {
            if(order.customerName.toLowerCase().includes(searchText))
                results.push(order);
        }
        setOrders(results);
    }

    return (
        <div>
             <input type="text" name="customerName" placeholder="Search By Customer Name" onChange={handleSearch} />
            <table id="exec-orders-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Customer name</th>
                    <th>Contact number</th>
                    <th>Total Amount</th>
                </tr>
                </thead>
                <tbody>
                {orders.map(({ id, customerName, contactNumber, totalAmt }, index) =>
                    <tr key={id+'-'+index}>
                        <td>
                            <Link to={`/order/${id}`}>{id}</Link>
                        </td>
                        <td>{customerName}</td>
                        <td>{contactNumber}</td>
                        <td>{totalAmt}</td>
                    </tr>
                )} 
            
            </tbody>
            </table>
        </div>
    )

}

export default Orders;
