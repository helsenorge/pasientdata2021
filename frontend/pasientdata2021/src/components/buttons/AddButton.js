import React from 'react'
import styled from 'styled-components'

const AddButtonWrapper = styled.input`
    height: 40px;
    font-size: 24px;
    justify-content: center;

    margin-top: ${props => props.theme.marginTop};
    background-color: ${props => props.theme.backgroundColor};
    mix-blend-mode: darken;
    border: none;
    background-color: transparent;
`

function AddButton({children, theme, imgPath}) {
    return (
        <AddButtonWrapper type="image" src="addIcon.svg" className="AddButton" theme={theme}>
            {children}
        </AddButtonWrapper>
    )
}

export default AddButton;