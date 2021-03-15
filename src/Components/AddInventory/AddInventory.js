import React, { useEffect, useState} from 'react';
import  productsData from '../../data/products'; 
import './Addinventory.css'


function AddInventory(props) {

    const [products, setProducts] = useState([]);
    const [productInventory, setProductInventory] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const prevInventory = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : null;
        if(!prevInventory) {
            setProductInventory(productsData);
            return localStorage.setItem('products', JSON.stringify(productsData));
        }
        setProductInventory(prevInventory);
    }, [])

    const addProduct = product => {
        const updated=products;
        const selected = productInventory.filter(prod => prod.name==product.name);
        product.stock=selected[0].stock; 
        products.push(product);
        console.log(updated);
        setProducts(updated);
        setToggle(!toggle);
    }

    const removeProduct = (productId) => {       
        const updated=products.filter(product => product.id!=productId);
        console.log(updated);
        setProducts(updated);
    }

    const handleProductSelect = e => {
        const productName = e.target.value;
        if(!productName) return
        const prod = productsData.filter(prod => prod.name==productName)
        console.log(prod[0]);
        addProduct(prod[0]);
    }

    const addQunatities = {};

    const handleProductStockChange= (e, index) => {
        e.preventDefault();
        console.log(e.target);
        const addQty = Number(e.target.value);
        const updated=products;
        addQunatities[updated[index].id]=addQty;
        console.log(addQunatities);
    }

    const addInventory = () => {
        setError(false);
        if(products.length==0)
            return setError('Add products to update inventory');
        for(const product of productInventory) {
            if(addQunatities[product.id])
            product.stock+=addQunatities[product.id];
        }
        for(const product of products) {
            if(addQunatities[product.id])
            product.stock+=addQunatities[product.id];
        }
        localStorage.setItem('products', JSON.stringify(productInventory));
        console.log(productInventory);
        console.log(addQunatities);
        setToggle(!toggle);
        alert('Product Inventory updated successfully'); 
    }
     

    return (
        <div className="inventory">
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
                    <th>Stock</th>
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
                        <td>{product.stock}</td>
                        <td>
                            <input  className="qty-input" type="number" name="addQty" defaultValue="1" onChange={e => handleProductStockChange(e, index)}/>
                        </td>
                        <td>
                            <div  className="remove-row-btn"onClick={() => removeProduct(product.id)}>x</div>
                        </td>
                     </tr>
                )}
                </tbody>
            </table>
            <div>
                {error && <p style={{color:'red', fontSize:'12px'}}>{error}</p>}
                <button className="order-btn" onClick={addInventory}>Add</button>
            </div>
        </div>)
}

export default AddInventory;
