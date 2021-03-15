import React, { useState } from 'react';
import  productsData from '../../data/products'; 
import './CreateOrder.css';

function CreateOrder(props) {
    const [customerName, setCustomerName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [products, setProducts] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [error, setError] = useState(false);
    const [totalAmt, setTotalAmt] = useState(0);

    const addProduct = product => {
        const updated=products;
        products.push(product);
        console.log(updated);
        setProducts(updated);
        setToggle(!toggle);
    }

    const removeProduct = (productId) => {       
        const updated=products.filter(product => product.id!=productId);
        const amt=_getTotalAmt(updated);
        setTotalAmt(amt);
        console.log(updated);
        setProducts(updated);
    }

    const handleProductSelect = e => {
        const productName = e.target.value;
        if(!productName) return
        const prod = productsData.filter(prod => prod.name==productName)
        console.log(prod[0]);
        addProduct(prod[0]);
        const amt = _getTotalAmt(products);
        setTotalAmt(amt);
    }

    const handleCustomerDetailChange= e => {
        e.preventDefault();
        if(e.target.name==="customerName") return setCustomerName(e.target.value);
        if(e.target.name==="contactNumber") return setContactNumber(e.target.value);

    }

    const handleProductQtyChange= (e, index) => {
        e.preventDefault();
        const qty = Number(e.target.value);
        const updated=products;
        if(updated[index].stock<qty)
            return setError('Order quantity is more than stock available');
        updated[index].quantity=qty;
        console.log(updated);
        setProducts(updated);
        const amt = _getTotalAmt(updated);
        setTotalAmt(amt);
    }


    const _getTotalAmt = products => {
        console.log(products);
        let amt=0;
        for(const product of products) {
            if(product.quantity==0) continue;
            if(isNaN(product.quantity)) product.quantity=1; 
            amt+=(product.quantity*product.price);
        }
        console.log(amt);
        console.log(totalAmt);
        return amt;
    }
    const placeOrder = () => {
        setError(false);
        if(!customerName || !contactNumber)
         return setError('customer name and contact number are required to place order');
        const order = { customerName, contactNumber, createdBy: props.username }
        order.products=products;
        const amt = _getTotalAmt(products);
        order.totalAmt=amt;
        console.log(order);
        setTotalAmt(amt);
        const prevOrders =localStorage.getItem('orders') ? JSON.parse(localStorage.getItem('orders')) : [];
        const orderId = prevOrders.length+1;
        order.id=orderId;
        prevOrders.push(order);
        localStorage.setItem('orders', JSON.stringify(prevOrders));
        alert('Order placed successfully');
    }

    return (
        <div>
            <div>
                <input type="text" name="customerName" value={customerName}  placeholder="Customer Name" onChange={handleCustomerDetailChange} />
                <input type="text" name="contactNumber" value ={contactNumber} placeholder="Customer Contact" onChange={handleCustomerDetailChange} />
            </div>
            <div>
                <p>Add Products</p>
                <select 
                    name="add-product"
                    onChange={handleProductSelect}
                >   
                    <option value="">Select Product</option>
                    {productsData.length > 0 && productsData.map(product =>
                    <option 
                        key={product.id+'-'+'data'+Math.random()} 
                        value={product.name}
                    >{product.name}
                    </option>
                    )}
                </select>
            </div>

            <table> 
                <thead>
                <tr> 
                    <th>Product Id</th>
                    <th>Product Name</th> 
                    <th>Manufacturer</th> 
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {products.length > 0 && products.map((product, index) =>
                     <tr key={product.id+'-'+index}>
                        <td>{product.id}</td>   
                        <td>{product.name}</td>
                        <td>{product.manufacturername}</td>
                        <td>{product.price}</td>
                        <td>
                            <input  className="qty-input" type="number" name="quantity" defaultValue="1" onChange={e => handleProductQtyChange(e, index)}/>
                        </td>
                        <td>
                            <div  className="remove-row-btn"onClick={() => removeProduct(product.id)}>x</div>
                        </td>
                     </tr>
                )}
                </tbody>
            </table>
            <div>
                <p>Total Amount {totalAmt}</p>
                {error && <p style={{color:'red', fontSize:'12px'}}>{error}</p>}
                <button className="order-btn" onClick={placeOrder}>Place Order</button>
            </div>
        </div>
    )
}

export default CreateOrder
