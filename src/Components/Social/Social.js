import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import './Social.css';

const Social = (props) => {
    console.log(props.socialLink);
    const {strTwitter, strFacebook, strYoutube} = props.socialLink;
    return (
        <div className="social-icon">
            <a href="https://www.facebook.com" target="blank"><FontAwesomeIcon icon={faFacebook}/></a>
            <a href="https://www.twitter.com" target="blank"><FontAwesomeIcon icon={faTwitter}/></a>
            <a href="https://www.youtube.com" target="blank"><FontAwesomeIcon icon={faYoutube}/></a>
        </div>
    );
};

export default Social;