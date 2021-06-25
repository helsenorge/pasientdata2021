import React from 'react'
import styled from 'styled-components'


function ArrowButton({children, theme}) {

    const ArrowButton = styled.button`
        margin-left: auto;
        margin-right: auto;
        height: 30px;
        font-size: 50px;

        margin-top: ${props => props.theme.marginTop};
        background-color: ${props => props.theme.backgroundColor};
        mix-blend-mode: darken;
        border: none;
        border-bottom: none;
        background-color: white;
    `
    
    return (
        <ArrowButton className="ArrowButton" theme={theme}>
            {children}
        </ArrowButton>
    )
}
export default ArrowButton