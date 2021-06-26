import React from 'react'
import styled from 'styled-components'

const UnderlineButtonWrapper = styled.button`
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

function UnderlineButton({children, theme, onClick}) {
    return (
        <UnderlineButtonWrapper className="LoginButton" theme={theme} onClick={onClick}>
            {children}
        </UnderlineButtonWrapper>
    )
}

export default UnderlineButton
