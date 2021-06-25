import React from 'react'
import styled from 'styled-components'

function LoginButton({children, theme}) {

    const LoginButton = styled.button`
        width: 100%;
        height: 66px;

        margin-top: ${props => props.theme.marginTop};
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};

        mix-blend-mode: darken;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 5px;

        font-size: 20px;
    `
    
    return (
        <LoginButton className="LoginButton" theme={theme}>
            {children}
        </LoginButton>
    )
}

export default LoginButton
