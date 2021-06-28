import React from 'react'
import styled from 'styled-components'

const SettingsButtonWrapper = styled.input`
    height: 30px;
    margin-top: ${props => props.theme.marginTop};
    background-color: ${props => props.theme.backgroundColor};
`

function SettingsButton({children, theme}) {
    return (
        <SettingsButtonWrapper type="image" src ="3-vertical-dots.svg" className="SettingsButton" theme={theme}>
            {children}
        </SettingsButtonWrapper>
    )
}

export default SettingsButton;