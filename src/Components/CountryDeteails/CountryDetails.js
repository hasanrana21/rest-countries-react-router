import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetails.css';

const CountryDetails = (props) => {
    const {name, flag, capital, cioc, alpha3Code, population, area} = props.country;
    return (
        <div className="country-details">
            <img src={flag} alt=""/>
            <h3>Name: {name}</h3>
            <h6>Alpha3Code: {alpha3Code}</h6>
            <h6>Capital: {capital}</h6>
            <h6>Shortform(cioc): {cioc}</h6>
            <h6>Population: {population}</h6>
            <h6>Area: {area}</h6>
            <Link to="/home">
            <button className="btn btn-primary px-4 fw-bold">Back</button>
            </Link>
        </div>
    );
};

export default CountryDetails;