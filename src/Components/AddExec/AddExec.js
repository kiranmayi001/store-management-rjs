import React, { useState, useEffect } from 'react';
import execsData from '../../data/execs';
import './AddExec.css'

function AddExec() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [DOB, setDOB] = useState("")
    const [gender, setGender] = useState("")
    const [Experience, setExperience] = useState("")
    const [error, setError] = useState(false);

    const addExec = () => {
        setError(false);
        if(!firstName || !lastName || !DOB || !Experience)
            return setError('fields firstName, lastName, DOB, Experience are required');
        const executive = { firstName, lastName, DOB, Experience};
        if(gender!=="") executive.gender=gender;
        const execs = JSON.parse(localStorage.getItem('team-members'));
        executive.id=execs.length+1;
        execs.push(executive);
        localStorage.setItem('team-members', JSON.stringify(execs));
        alert('Executive added successfully');
    }

    const handleInputChange = e => {
        setError(false);
        if (e.target.name=='firstName') 
            setFirstName(e.target.value)
        
        if (e.target.name=='lastName') 
            setLastName(e.target.value)
        
        if (e.target.name=='DOB') 
            setDOB(e.target.value.toString())
        
        if (e.target.name=='gender') 
            setGender(e.target.value)
        
        if (e.target.name=='Experience') 
            setExperience(e.target.value)
        console.log(e.target.value)
    }
     

    return (
        <div className="Exec">
            <div>
                <h3>Add Executive</h3>
                <div>
                <input type="text" name="firstName" value={firstName}  placeholder="First Name" onChange={handleInputChange} />
                <input type="text" name="lastName" value ={lastName} placeholder="Last Name" onChange={handleInputChange} />                
                </div>
                <div>
                <input type="date" name="DOB" value ={DOB} placeholder="Date of Birth" onChange={handleInputChange} />                
                <input type="text" name="gender" value ={gender} placeholder="Gender" onChange={handleInputChange} />                
                </div>
                <div>
                <input type="number" name="Experience" value ={Experience} placeholder="Experience in years" onChange={handleInputChange} />                
                </div>
            </div>          
            <div>
                {error && <p style={{color:'red', fontSize:'12px'}}>{error}</p>}
                <button className="order-btn" onClick={addExec}>Add</button>
            </div>
        </div>)
}

export default AddExec
