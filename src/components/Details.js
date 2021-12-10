import React, { useEffect, useState } from "react";
import Axios from 'axios';
import styled from 'styled-components';

const StyledDetails = styled.div`
border-radius: 1px;
border: 2px solid #b7410e;
padding: 8px;
background-color: #fffdd0;
`
// Write your Character component here
export default function Details(props) {
    const { characterId, close } = props;
    const [details, setDetails] = useState(null);

    useEffect(() => {
        Axios.get(`${characterId}`)
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
                <p>Gender: {details.gender}</p>
                <p>Height: {details.height}</p>
                <p>Mass: {details.mass}</p>
                <p>eye-color: {details.eye_color}</p>
                <p>skin color: {details.skin_color}</p>
                </>
            }
            <button onClick={close}>Close details</button>
        </StyledDetails>
    )
}