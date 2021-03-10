import './Home.css';
import React, { useEffect, useState } from 'react';
import playground from '../../Images/playground.jpg';
import Card from '../Card/Card';

const Home = () => {
    const [leagues, setLeagues] = useState([]);

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.leagues);
            setLeagues(data.leagues);
        });
    }, [])
    return (
        <div className="home">
            <div className="home-banner" style={{ 
                backgroundImage: `url(${playground})`,
                backgroundRepeat: 'no-repeat',
                height:'250px' ,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                borderBottom: '3px solid lightgrey'
                }}>
                <h1 style={{zIndex: '15', color: 'white', fontWeight: '800', fontSize: '51px', fontStyle: 'italic', textAlign: 'center', paddingTop: '85px'}}>World-Wide Sports League</h1>
            </div>
                
                <div className="card-body row justify-content-evenly">
                {
                    leagues.map(league => <Card league={league} key={league.idLeague}></Card>)
                }
                </div>
            
        </div>
    );
};

export default Home;