import React from 'react'
import './ExecNav.css';

function ExecNav(props) {
    const { showOrders, setShowOrders, showCreateOrder, setShowCreateOrder, handleLogout } = props;

    return (
        <div className="ExecNav">
            <button onClick={() => { 
                   setShowCreateOrder(true);
                    setShowOrders(false);
            }}>Create Orders</button>
            <button onClick={() => {
                setShowOrders(true);
                setShowCreateOrder(false);
        }}>View Orders</button>
        <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default ExecNav;
