import React, { Children } from 'react'
import styled from 'styled-components'
import TextImgButton from '../buttons/TextImgButton'

const PopUpBoxStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: inherit;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 1;
`
const PopUpInner = styled.div`
    position: relative;
    width: 100%;
    max-width: 640px;
    background-color:#7BEFB2 ;
`

const CloseButton = styled(TextImgButton)`
    font-size: 25px;
`


function PopUpBox(props) {
    return (props.trigger) ? (
        <PopUpBoxStyle className = "PopUpBox">
            <PopUpInner>
            {props.children}
            <CloseButton className = "CloseButton" imgSrc="x_icon.svg" title = "Avbryt" onClick={()=>props.setTrigger(false)}></CloseButton>
            </PopUpInner>
        </PopUpBoxStyle>
    ) : "";
}

export default PopUpBox
