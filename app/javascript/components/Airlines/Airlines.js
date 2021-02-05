import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Airlines() {
    const [airlines, setAirlines] = useState([]);

    const list = airlines.map(item => {
        return (<li key={item.attributes.name}>{item.attributes.name}</li>)
    })

    useEffect(() => {
        // Get all of our airlines from api
        // Update airlines in our state

        axios.get('/api/v1/airlines.json')
            .then(resp => {
                setAirlines(resp.data.data)
            })
            .catch(resp => console.log(resp))
    }, [airlines.length])

    return (
        <div className="home">
            <div className="header">
                <h1>Flights</h1>
                <div className="subheader">Honest, unbiased airline reviews.</div>
            </div>
            <div className="grid">
                <ul>{list}</ul>
            </div>
        </div>
    )
}

export default Airlines;