import React from 'react'
import './AdminNav.css';
function AdminNav(props) {

    const {
        setShowInventory,
        setShowAddInventory,
        setShowExecs,
        setShowAddExec,
        handleLogout
    } = props;
    return (
        <div className="AdminNav">
            <button onClick={() => {
                setShowAddInventory(true);
                setShowInventory(false);
                setShowAddExec(false);
                setShowExecs(false);

            }}>Add Inventory</button>
            <button onClick={() => {
                setShowAddInventory(false);
                setShowInventory(true);
                setShowAddExec(false);
                setShowExecs(false);

            }}>View Inventory</button>
            <button onClick={() => {
                setShowAddInventory(false);
                setShowInventory(false);
                setShowAddExec(true);
                setShowExecs(false);

            }}>Add Sales Executive</button>
            <button  onClick={() => {
                setShowAddInventory(false);
                setShowInventory(false);
                setShowAddExec(false);
                setShowExecs(true);

            }}>View Team</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default AdminNav;
