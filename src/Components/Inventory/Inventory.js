import React, { useState, useEffect } from 'react';
import './Inventory.css';

function Inventory() {

    const [inventory, setInventory] = useState([]);
    const [totalInventory, setTotalInventory] = useState([]);

    useEffect(() => {
        const prevInventory = JSON.parse(localStorage.getItem('products'));
        if(!prevInventory) return;
        setInventory(prevInventory);
        setTotalInventory(prevInventory)
    }, []);

    const HandleDelete = (id) => {
        alert("Delete the Entry?")

        let leftData = inventory.filter(item => {
            return item.id !== id
        })
        setInventory(leftData)
    }

    const handleSearch = e => {
        if(e.target.value=="")
            return setInventory(totalInventory);
        const results=[];
        const searchText=e.target.value;
        for(const inv of totalInventory) {
            if(inv.name.toLowerCase().includes(searchText))
                results.push(inv);
        }
        setInventory(results);
    }

    return (
        <div>
             <input type="text" name="productName" placeholder="Search By Product Name" onChange={handleSearch} />
            <table id="admin-inv-table">
                <thead>
                <tr>
                    <th>Product Id</th>
                    <th>Product Name</th>
                    <th>Manufacturer</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Discount</th>
                </tr>
                </thead>
                <tbody>
                {inventory.map(({ id, name, manufacturername, price, stock, discount }, index) =>
                    <tr key={id+'-'+index}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{manufacturername}</td>
                        <td>{price}</td>
                        <td>{stock}</td>
                        <td>{discount}</td>
                        <td className="inDel" onClick={()=>{HandleDelete(id)}}>X</td>
                    </tr>
                )} 
            
            </tbody>
            </table>
        </div>
    )
}

export default Inventory
