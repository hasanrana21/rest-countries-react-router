import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';

const User = (props) => {
    const {name, flag, region, callingCodes} = props.user;
    return (
        <div>
            <div className='countries-info'>
                <img src={flag} alt=""/>
                <h3>{name}</h3>
                <p>Region: {region}</p>
                <div className="country-link">
                    <Link to={`/user/${callingCodes}`}>
                        <button className='details-btn btn btn-primary px-5 py-2'>Details</button>
                    </Link>
                    <Link to={`/more/${name}`}>Learn More...</Link>
                </div>
            </div>
        </div>
    );
};

export default User;