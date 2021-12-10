import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import Axios from 'axios';

const StyledDetails = styled.div`
border-radius: 1px;
border: 2px solid #b7410e;
padding: 8px;
background-color: #fffdd0;
`
// Write your Character component here
export default function Friend(props) {
    const { characterId, close } = props;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        Axios.get(`https://swapi.dev/api/people`)
          .then(response => {
            setDetails(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }, [characterId])

    return (
        <StyledDetails>
            <h2>Details:</h2>
            {
                details && 
                <>
                <p>{details.name} was born in {details.birth_year}</p>
                <p>They are {details.gender}</p>
                <p>They appear in:</p>
                {/* <ul>
                    {
                        details.films.map((film, idx) => <li key={idx}>{film}</li>)
                    }
                </ul> */}
                </>
            }
            <button onclick={close}>Close details</button>
        </StyledDetails>
    )
}