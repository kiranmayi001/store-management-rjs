import React, { useState, useEffect } from 'react';
import execData from '../../data/execs';
import './Execs.css';

function Execs(props) {
    const [execs, setExecs] = useState([]);
    const [allExecs, setAllExecs] = useState([]);

    useEffect(() => {
        const prevExecs = localStorage.getItem('team-members')  ? JSON.parse(localStorage.getItem('team-members')) : null;
        if(!prevExecs) {
            setExecs(execData);
            setAllExecs(execData);
            localStorage.setItem('team-members', JSON.stringify(execData));
            return;
        }
        setExecs(prevExecs);
        setAllExecs(prevExecs);
        console.log(prevExecs);
    }, []);

    const handleSearch = e => {
        if(e.target.value=="")
            return setExecs(allExecs);
        const results=[];
        const searchText=e.target.value;
        for(const exec of execs) {
            if(exec.firstName.toLowerCase().includes(searchText) || exec.lastName.toLowerCase().includes(searchText))
                results.push(exec);
        }
        setExecs(results);
    }

    return (
        <div>
             <input type="text" name="execName" placeholder="Search Executive By Name" onChange={handleSearch} />
            <table id="execs-table">
                <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>DOB</th>
                    <th>Gender</th>
                    <th>Experience</th>
                </tr>
                </thead>
                <tbody>
                {execs.map(({ id, firstName, lastName, DOB, gender, Experience }, index) => {
                    console.log(execs);
                   return <tr key={id+'-'+index}>
                        <td>{id}</td>
                        <td>{firstName}</td>
                        <td>{lastName}</td>
                        <td>{DOB}</td>
                        <td>{gender}</td>
                        <td>{Experience}</td>
                    </tr>
                }
                )} 
            
            </tbody>
            </table>
        </div>
    )
}

export default Execs
