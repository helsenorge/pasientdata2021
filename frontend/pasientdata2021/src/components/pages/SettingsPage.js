import styled from "styled-components";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TextImgButton from "../buttons/TextImgButton";
import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import LandingPageCategory from "../boxes/LandingPageCategory";
import PopUpBox from "../boxes/PopUpBox";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: inherit;
    `

const Border = styled.div`
    border-width: thin;
    width: 100%;
    border-style: inset;
    `

const GreenBoxWrapper = styled(GreenBoxRoundedCorner)`
    justify-content: space-between;
`

const TopButtons = styled.div`
`

const BottomButtons = styled.div`

`

const RemoveMeButton = styled(TextImgButton)`
    color: #B23B3B;
`


function SettingsPage() {
    const [ButtonPopup, setButtonPopUp] = useState(false)
    const [LogoutPopup, setLogoutPopUp] = useState(false)
    const history = useHistory()




    function removeMe(){
        axios.delete('/User')
          .then(
            history.push("/login")
        );
    }

    function handleLogout() {
        localStorage.clear()
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('name'))
        history.push("/login");
      }

    return (
        <Wrapper className="Wrapper">
        <WhiteHeaderWrapper title="Innstillinger"/>
        <GreenBoxWrapper className="GreenBoxWrapper">
            <TopButtons>
                <LandingPageCategory title="Personlig">
                <TextImgButton title="Mine data" imgSrc="hard-drive.svg" onClick={()=> history.push("/userpage")}/>
                <TextImgButton title="Rediger profil" imgSrc="user.svg" />
                </LandingPageCategory>
            </TopButtons>
            <BottomButtons>
                <TextImgButton title="Logg ut" imgSrc="log-out.svg" onClick={()=> setLogoutPopUp(true)} />
                <PopUpBox trigger={LogoutPopup} setTrigger={setLogoutPopUp}>
                    <h3>Er du sikker du skal logge ut?</h3>
                    <TextImgButton title="Ja" imgSrc="log-out.svg" onClick={()=> handleLogout()} />
                </PopUpBox>
                <Border />
                <RemoveMeButton title="Slett meg" imgSrc="trash.svg" onClick={()=> setButtonPopUp(true)} />
                <PopUpBox trigger={ButtonPopup} setTrigger={setButtonPopUp}>
                    <h3>Er du sikker du skal bli slettet?</h3>
                    <RemoveMeButton title="Ja" imgSrc="trash.svg" onClick={()=> removeMe()} />
                </PopUpBox>
            </BottomButtons>
        </GreenBoxWrapper>
        </Wrapper>

)
}

export default SettingsPage
