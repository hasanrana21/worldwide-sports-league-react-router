import React from 'react';
import './Details.css';
import playgroundImg from '../../Images/ground3.jpg';
import gentleman from '../../Images/Rectangle28.png';
import ladies from '../../Images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faFlag, faFutbol, faMarsStroke, faPodcast } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Details = (props) => {
    const {strLeague, dateFirstEvent, strCountry, strGender, strBadge} = props.detail;
    
    let imageURL = "";
    strGender === "Male" ? imageURL = gentleman : imageURL = ladies;
    
    return (
        <>
            <div style={{backgroundImage: `url(${playgroundImg})`,
            backgroundRepeat: 'no-repeat',
            height:'200px' ,
            backgroundPosition: 'bottom',
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
                            <p> Sports Type: Football</p>
                            <p> Gender: {strGender}</p>
                        </div>
                    </div>
                    
                </div>
                <div className="league-image col-md-6 text-center">
                   <img src={imageURL} alt=""/>
                </div>
            </div>
            <div className="description w-75 mx-auto my-4 text-justify">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione id nulla architecto voluptates consequatur qui doloremque iure autem, porro, temporibus beatae veniam eius, eum nobis alias quod facere. Ipsa tempora reiciendis unde facilis quibusdam, optio doloribus! Maxime neque officia quibusdam voluptate quos illum aliquid necessitatibus magni dolore dolorum impedit expedita fugit, assumenda iusto fugiat voluptatibus, esse consequuntur enim non voluptas? Unde expedita rem est. Obcaecati id cum quod minus nulla beatae perferendis, velit dolores quo illum exercitationem eligendi ex magni aliquid natus quibusdam ab. Nemo omnis excepturi quod accusamus, minima amet doloribus neque, facilis voluptatum reprehenderit non quibusdam, optio quos.</p>

                <br/>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusamus ut minus sit nulla. Voluptate magnam quam laborum incidunt ratione quia pariatur molestias alias velit explicabo fugit provident consectetur eaque repellendus illo, impedit aspernatur perspiciatis, asperiores vitae repellat veritatis error. Quibusdam ipsa blanditiis esse, totam voluptatum commodi iusto magni enim, ipsam odit doloremque quaerat error sint nostrum aperiam quae veritatis dignissimos vero id molestiae ut alias distinctio? Dolores doloribus quisquam quas, veniam illum, minus possimus fugit dolore eaque perspiciatis delectus reprehenderit adipisci vitae quia similique ea tenetur numquam consequatur voluptas ipsum laborum? Autem, harum porro reiciendis fuga earum dolorem laborum.</p>
            </div>
            <div className="w-100 text-center">
                <Link to="/home">
                    <button className="btn btn-primary w-25"><FontAwesomeIcon icon={faArrowCircleLeft}/> Back</button>
                </Link>
            </div>
        </>
    );
};

export default Details;