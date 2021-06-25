

import styled from 'styled-components'
import ProgressGauge from './ProgressGauge'

const TopBoxWrapper = styled.div`
    background-color: #02A67F;
    height: 350px;
    width: 100%;
    display: flex;
    flex-direction: column;
`

const ImageBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin: auto;
`
    
const WhiteCurvedBox = styled.div`
    height: 60px;
    background-color: white;
    border-radius: 50px 50px 0px 0px;
    margin: 0px 10px -1px 10px;
`

const TopText = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
    color: #ffffff;
`

const TopBox = ({children}) => {
    return (
        <>
        <TopBoxWrapper className="TopBoxWrapper">
            <ImageBox className="ImageBox">
                <TopText>{children}</TopText>
                <ProgressGauge />
            </ImageBox>
            
            <WhiteCurvedBox className="WhiteCurvedBox"/>
        </TopBoxWrapper>
        </>
    )

}

export default TopBox;