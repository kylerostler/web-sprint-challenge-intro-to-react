import React from "react";
import styled from 'styled-components';


const StyledCharacter = styled.div`
border-radius: 1px;
border: 2px solid #b7410e;
padding: 8px;
background-color: #fffdd0;
`
// Write your Character component here
export default function Friend(props) {
    const { info, action } = props;

    return (
        <StyledCharacter>
            {info.name}
            <button onClick={() => action(info.id)}>
                See details
            </button>
        </StyledCharacter>
    )
}