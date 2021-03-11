import React from 'react';
import './Details.css';
import gentleman from '../../Images/Rectangle28.png';
import ladies from '../../Images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faFlag, faFutbol, faMarsStroke, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const {strLeague, dateFirstEvent, strCountry, strGender, strBadge, strBanner, strSport, strDescriptionEN, strDescriptionFR} = props.detail;
    
    let imageURL = "";
    strGender === "Male" ? imageURL = gentleman : imageURL = ladies;
    
    return (
        <>
            <div style={{backgroundImage: `url(${strBanner})`,
            backgroundRepeat: 'no-repeat',
            height:'270px' ,
            backgroundPosition: 'center',
            backgroundSize: 'cover'}} className="details-banner-image">

                <div style={{backgroundImage: `url(${strBadge})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center', backgroundSize: 'cover', zIndex: '100', color: 'white', textAlign: 'center', margin: '0 auto'}} className='details-logo'>
                    
                </div>

            </div>
            
            <div className="league-info-container container row align-items-center w-75">
                <div className="league-info col-md-6">
                    <h3>{strLeague}</h3>
                    <div className="row">
                        <div className="col-md-1">
                            <p><FontAwesomeIcon icon={faPodcast}/></p>
                            <p><FontAwesomeIcon icon={faFlag}/></p>
                            <p><FontAwesomeIcon icon={faFutbol}/></p>
                            <p><FontAwesomeIcon icon={faMarsStroke}/></p>
                        </div>
                        <div className="col-md-11">
                            <p> Founded: {dateFirstEvent}</p>
                            <p>  Country: {strCountry}</p>
                            <p> Sports Type: {strSport}</p>
                            <p> Gender: {strGender}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="league-image col-md-6 text-center">
                   <img src={imageURL} alt=""/>
                </div>
            </div>
            <div className="description w-75 mx-auto my-4 text-justify">
                <p>{strDescriptionEN}</p>
                <br/>
                <p>{strDescriptionFR}</p>
            </div>
            <div className="w-100 text-center mb-4">
                <Link to="/home">
                    <button className="main-button btn btn-primary w-25"><FontAwesomeIcon icon={faArrowCircleLeft}/> Back</button>
                </Link>
            </div>
        </>
    );
};

export default Details;