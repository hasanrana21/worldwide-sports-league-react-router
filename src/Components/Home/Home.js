import './Home.css';
import React, { useEffect, useState } from 'react';
import playground from '../../Images/ground3.jpg';
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
            <div style={{ 
                backgroundImage: `url(${playground})`,
                backgroundRepeat: 'no-repeat',
                height:'200px' ,
                backgroundPosition: 'bottom',
                backgroundSize: 'cover',
                }}>
                <h1 style={{zIndex: '5', color: 'white', textAlign: 'center', paddingTop: '80px'}}>World-Wide Sports League {leagues.length}</h1>
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