import React from 'react';
import './Card.css';
import logo from '../../Images/image6.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { strLeague, idLeague } = props.league;
    return (
        <div className="card  col-md-4">
            <div className="text-center">
                <img src={logo} alt=""/>
            </div>
            <h6><strong>{strLeague}</strong></h6>
            <p>Sports Type: Football</p>
            <div className="card-btn">
                <Link to={`/league/details/${idLeague}`}>
                    <button className="btn btn-primary w-50">Explore  <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                </Link>
            </div>
        </div>
    );
};

export default Card;