import styled from "styled-components"

function WhiteCornerWrapper({children}) {

    const ColorArea = styled.div`
        width: inherit;
        height: 150px;
        background: linear-gradient(to bottom right, #fff 0%, #fff 50%, #7BEFB2 50%, #7BEFB2 100%);
    `

    return (
        <ColorArea>
            {children}
        </ColorArea>
    )
}

export default WhiteCornerWrapper
