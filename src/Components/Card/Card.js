import React from 'react';
import './Card.css';
import logo from '../../Images/image6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { strLeague, idLeague, strSport } = props.league;
    return (
        <div className="card  col-md-4">
            <div className="text-center">
                <img src={logo} alt=""/>
            </div>
            <h6><strong>{strLeague}</strong></h6>
            <p>Sports Type: {strSport}</p>
            <div className="card-btn">
                <Link to={`/league/details/${idLeague}`}>
                    <button className="main-button btn btn-primary w-50 rounded-pill">Explore  <FontAwesomeIcon icon={faArrowRight} /></button>
                </Link>
            </div>
        </div>
    );
};

export default Card;