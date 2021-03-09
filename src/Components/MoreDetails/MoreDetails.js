import React from 'react';
import { Link } from 'react-router-dom';
import './MoreDetails.css';

const MoreDetails = (props) => {
    console.log(props.singleCountry);
    const {borders, regionalBlocs, callingCodes, demonym, subregion} = props.singleCountry;
    return (
        <div className="more-info">
            <h5>
            Borders: <p>{borders[0]}</p>
            <p>{borders[2]}</p>
            <p>{borders[3]}</p>
            <p>{borders[4]}</p>
            <p>{borders[1]}</p>
            <p>{borders[5]}</p>
            </h5>
            <h5>RegionalBlocs: <p>{regionalBlocs[0].name}</p>
                <p>{regionalBlocs[0].acronym}</p>
            </h5>

            <h5>Demonym: <span>{demonym}</span> </h5>
            <h5>Subregion: <span> {subregion}</span> </h5>
            <h5> Calling Codes: <span>{callingCodes}</span> </h5>
            <Link to="/home">
                <button className='btn btn-warning px-4 my-3 text-white fw-bold'>Back</button>
            </Link>
        </div>
    );
};

export default MoreDetails;