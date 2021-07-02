
import styled from 'styled-components'
import TextImgButton from './buttons/TextImgButton'
import PopUpBox from './boxes/PopUpBox'
import { useState } from "react";


const FriendsBoxWrapper = styled.div`
    display: flex;
    font-size: 30px;
    align-items: center;
    height: 35px;
    margin: 20px 0px 15px 0px;

    mix-blend-mode: darken;
    border: none; 
`

const FriendsIcon = styled.img`
    margin-right: 10px;

`

const TitleText = styled.a`
    font-size: 25px;
    width: 260px;
    white-space: nowrap;
    overflow: hidden;  
    color: black;
`
const CustomTextImgButton = styled(TextImgButton)`
  font-size: 30px ;
`

const FriendsBox = ({imgPath, title, children, className, onClick}) => {
    const [ButtonPopup, setButtonPopUp] = useState(false);
    return (
        <>
        <FriendsBoxWrapper className={className}>
            {imgPath ? <FriendsIcon src={imgPath} alt="Icon" height ={30} /> : ""}
            <TitleText className={className}>{title}</TitleText>
            <TextImgButton imgSrc ="3-vertical-dots.svg" onClick={() => setButtonPopUp(true)}>
            </TextImgButton>
            <PopUpBox trigger = {ButtonPopup} setTrigger={setButtonPopUp}>
            <CustomTextImgButton imgSrc ="trash.svg" title = "Fjern Venn"></CustomTextImgButton>
            </PopUpBox>

        </FriendsBoxWrapper>
        </>
    )
}

export default FriendsBox;