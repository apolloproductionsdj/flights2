import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Airline from './Airline';
import styled from 'styled-components';


function Airlines() {
    const Home = styled.div`
      text-align: center;
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    `

    const Header = styled.div`
      padding: 100px 100px 10px 100px;

      h1 {
          fontsize: 42px;
      }
    `
    const Subheader = styled.div`
      font-weight: 300;
      font-size: 26px;
    `
    const Grid = styled.div`
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 20px;
      width: 100%;
      padding: 20px;
    `

    const [airlines, setAirlines] = useState([]);

    const grid = airlines.map(item => {
        return (
            <Airline
                key={item.attributes.name}
                attributes={item.attributes}
            />
        )
    })

    useEffect(() => {
        axios.get('/api/v1/airlines.json')
            .then(resp => setAirlines(resp.data.data))
            .catch(resp => console.log(resp))
    }, [airlines.length])

    return (
        <Home>
            <Header>
                <h1>Flights</h1>
                <Subheader>Honest, unbiased airline reviews.</Subheader>
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home >
    )
}

export default Airlines;
