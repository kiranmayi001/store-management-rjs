import React, { useState, useEffect } from 'react'
import AdminNav from '../../Components/AdminNav/AdminNav';
import Inventory from '../../Components/Inventory/Inventory';
import AddInventory from '../../Components/AddInventory/AddInventory';
import Execs from '../../Components/Execs/Execs';
import AddExec from '../../Components/AddExec/AddExec';
import  productsData from '../../data/products'; 
import execData from '../../data/execs';
import './AdminDash.css';

function AdminDash(props) {
    const [showInventory, setShowInventory] = useState(true);
    const [showAddInventory, setShowAddInventory] = useState(false); 
    const [showExecs, setShowExecs] = useState(false);
    const [showAddExec, setShowAddExec] = useState(false);
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
        const prevInventory = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : null;
        if(!prevInventory) 
            localStorage.setItem('products', JSON.stringify(productsData));
        const prevExecs = localStorage.getItem('team-members') ? JSON.parse(localStorage.getItem('team-members')) : null;
        if(!prevExecs)
            localStorage.setItem('team-members', JSON.stringify(execData));
    }, [])


    const handleLogout = () => {
        localStorage.clear('loggedIn');
        return props.history.push('/');
    }
    return (
        <div className="AdminDash">
            <AdminNav 
                showInventory={showInventory}
                setShowInventory={setShowInventory}
                showAddInventory={showAddInventory}
                setShowAddInventory={setShowAddInventory}
                showExecs={showExecs}
                setShowExecs={setShowExecs}
                showAddExec={showAddExec}
                setShowAddExec={setShowAddExec}
                handleLogout={handleLogout}
            />
            {showInventory && <Inventory  />}
            {showAddInventory && <AddInventory />}
            {showExecs && <Execs />}
            {showAddExec && <AddExec />}
        </div>
    )
}

export default AdminDash;
