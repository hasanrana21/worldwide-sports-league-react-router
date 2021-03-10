import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../Details/Details';
import './LeagueDetails.css';

const LeagueDetails = () => {
    const {idLeague} = useParams();
    const [details, setDetails] =  useState([]);

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data.leagues);
            setDetails(data.leagues);
        })
    }, [idLeague])
    return (
        <div>
            {
                details.map(detail => <Details detail ={detail} key={detail.idLeague}></Details>)
            }
            <h3 className="text-center pt-2">League Id '{idLeague}'</h3>
        </div>
    );
};

export default LeagueDetails;