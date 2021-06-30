import styled from "styled-components"

const ColorArea = styled.div`
    width: inherit;
    height: 150px;
    background: linear-gradient(to bottom right, #fff 0%, #fff 50%, #7BEFB2 50%, #7BEFB2 100%);
` 
const Wrapper = styled.div`
    background-color: #f1f1f1;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Offset = styled.div`
    display: flex;
    height: 50px;
    background-color: #ffffff;
`

const TopImage = styled.img`
    margin-top: 0px;
    margin-left: 15px;
    max-width: 230px;
`

function WhiteCornerWrapper({children}) {



    return (
        <Wrapper className="Wrapper">
            <Offset className="WhiteOffset" />
                <ColorArea>
                    <TopImage src="nhn_logo.svg"></TopImage>
                </ColorArea>
                {children}
        </Wrapper>




    )
}

export default WhiteCornerWrapper
