import React from "react";
import styled from 'styled-components';


const StyledCharacter = styled.div`
border-radius: 1px;
border: 2px solid #b7410e;
padding: 8px;
background-color: #fffdd0;
font-size: 2rem;
margin-left: 30px;
margin-right: 30px;
button{
    margin: 5px;
    background-color: #b7410e;
    color: #fffdd0;
    border-radius: 3px;
}
`
// Write your Character component here
export default function Character(props) {
    const { info, action } = props;

    return (
        <StyledCharacter>
            {info.name}
            <button onClick={() => action(info.url)}>
                See details
            </button>
        </StyledCharacter>
    )
}