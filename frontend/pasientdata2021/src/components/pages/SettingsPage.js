import styled from "styled-components";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TextImgButton from "../buttons/TextImgButton";

import LandingPageCategory from "../boxes/LandingPageCategory";

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
    return (
        <Wrapper className="Wrapper">
        <WhiteHeaderWrapper title="Innstillinger"/>
        <GreenBoxWrapper className="GreenBoxWrapper">
            <TopButtons>
                <LandingPageCategory title="Personlig">
                <TextImgButton title="Mine data" imgSrc="hard-drive.svg" />
                <TextImgButton title="Rediger profil" imgSrc="user.svg" />
                </LandingPageCategory>
            </TopButtons>
            <BottomButtons>
                <TextImgButton title="Logg ut" imgSrc="log-out.svg" />
                <Border />
                <RemoveMeButton title="Slett meg" imgSrc="trash.svg" />
            </BottomButtons>
        </GreenBoxWrapper>
        </Wrapper>
    )
}

export default SettingsPage
