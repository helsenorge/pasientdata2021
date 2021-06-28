import React from 'react'
import styled from 'styled-components'

const handleButtonDirection = direction => {
    switch (direction){
        case "up":
            return "rotate(-90deg)";
        case "down":
            return "rotate(90deg)";
        case "left":
            return "rotate(180deg)"; 
        default:           
            return "rotate(0deg)";
    }
};

const ArrowButtonStyle = styled.button`
    transform: ${({direction}) => handleButtonDirection(direction) };
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    `

function ArrowButton({direction}) {
    return (
        <ArrowButtonStyle direction={direction} className="ArrowButton">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z"/></svg>
        </ArrowButtonStyle>
    )
}
export default ArrowButton