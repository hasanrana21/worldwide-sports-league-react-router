import React from 'react';
import './Details.css';
import playgroundImg from '../../Images/ground3.jpg';
import gentleman from '../../Images/Rectangle28.png';
import ladies from '../../Images/female.png';

const Details = (props) => {
    const {strLeague, dateFirstEvent, strCountry, strGender} = props.detail;
    
    let imageURL = "";
    strGender === "Male" ? imageURL = gentleman : imageURL = ladies;
    
    return (
        <>
            <div style={{backgroundImage: `url(${playgroundImg})`,
            backgroundRepeat: 'no-repeat',
            height:'200px' ,
            backgroundPosition: 'center',
            backgroundSize: 'cover'}}>
                <h1 style={{zIndex: '5', color: 'white', textAlign: 'center', paddingTop: '80px'}}>This is Details page</h1>
            </div>
            
            <div className="league-info-container container row align-items-center w-75">
                <div className="league-info col-md-6">
                    <h3>{strLeague}</h3>
                    <p>Founded: {dateFirstEvent}</p>
                    <p>Country: {strCountry}</p>
                    <p>Sports Type: Football</p>
                    <p>Gender: {strGender}</p>
                </div>
                <div className="league-image col-md-6 text-center">
                   <img src={imageURL} alt=""/>
                </div>
            </div>
        </>
    );
};

export default Details;