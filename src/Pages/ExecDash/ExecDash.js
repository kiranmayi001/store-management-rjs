import React, { useState, useEffect } from 'react'
import ExecNav from '../../Components/ExecNav/ExecNav';
import Orders from '../../Components/Orders/Orders';
import CreateOrder from '../../Components/CreateOrder/CreateOrder';
import ordersData from '../../data/orders';
import './ExecDash.css';

function ExecDash(props) {
    const [showOrders, setShowOrders] = useState(false);
    const [showCreateOrder, setShowCreateOrder] = useState(true); 
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const loggedIn = localStorage.getItem('loggedIn') ? JSON.parse(localStorage.getItem('loggedIn')) : null;
        if(!loggedIn)
            return props.history.push('/');
        if(loggedIn.role=='admin')
            return props.history.push('/dashboard/admin');
        if(loggedIn.role=='exec')
            setUsername(loggedIn.username);
       
    }, [])

    useEffect(() => {
        const prevOrders = localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : null;
        if(!prevOrders) 
            localStorage.setItem('orders', JSON.stringify(ordersData));
    }, [])

    const handleLogout = () => {
        localStorage.clear('loggedIn');
        return props.history.push('/');
    }

    return (
        <div className="ExecDash">
            {/* Hello Exec! */}
            <ExecNav 
                showOrders={showOrders}
                setShowOrders={setShowOrders}
                showCreateOrder={showCreateOrder}
                setShowCreateOrder={setShowCreateOrder}
                handleLogout={handleLogout}
            />
            <div className="ExecWrapper">
            {showOrders && <Orders username={username}/>}
            {showCreateOrder && <CreateOrder username={username} />}
            </div>
        </div>
    )
}

export default ExecDash
