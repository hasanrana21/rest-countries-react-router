import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MoreDetails from '../MoreDetails/MoreDetails';
import './More.css';

const More = () => {
    const {countryName} = useParams();

    const [country, setCountry] = useState([]); 
    useEffect(()=>{
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setCountry(data);
        })
    }, [])
    return (
        <div className='more-container'>
            <h2 style={{ marginTop: '15px', textAlign: 'center' }}>Here is Learn More About <span style={{fontSize: '46px', color: 'cyan'}}>{countryName}</span></h2>
                {
                    country.map(singleCountry => <MoreDetails singleCountry={singleCountry} key={singleCountry.alpha3Code}></MoreDetails>)
                }
        </div>
    );
};

export default More;