import React from 'react'
import styled from 'styled-components'

function UnderlineButton({children, theme}) {

    const UnderlineButton = styled.button`
        margin-left: auto;
        margin-right: auto;
        height: 30px;
        font-size: 24px;

        margin-top: ${props => props.theme.marginTop};
        background-color: ${props => props.theme.backgroundColor};
        mix-blend-mode: darken;
        border: none;
        border-bottom: 2px solid black;
        background-color: #7BEFB2;
    `
    
    return (
        <UnderlineButton className="LoginButton" theme={theme}>
            {children}
        </UnderlineButton>
    )
}

export default UnderlineButton
