import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryDetails from '../CountryDeteails/CountryDetails';
import './Country.css';

const UserDetails = () => {
    const {userAlpha3Code} = useParams();


    const [countries, setCountries] = useState([]);
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/callingcode/${userAlpha3Code}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.country);
            setCountries(data);
        })
    }, [])
    return (
        <div className="countries-div">
            <h3>The Country Details Here...Component {userAlpha3Code }</h3>
            {
                countries.map(country => <CountryDetails country={country} key={country.alpha2Code}></CountryDetails>)
            }
        </div>
    );
};

export default UserDetails;