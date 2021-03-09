import './Home.css';
import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Home = (props) => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => setUsers(data))
    }, []);
    return (
        <div className='contry-container'>
            {
                users.map(user => <User user={user} key={user.alpha3Code}></User>)
            }
        </div>
    );
};

export default Home;