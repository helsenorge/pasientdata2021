import styled from "styled-components";
import ArrowButton from "../buttons/ArrowButton";
import FriendsBox from "../FriendsBox";
import AddButton from "../buttons/AddButton";
import SettingsButton from "../buttons/SettingsButton";

function MyFriendsPage() {
    
    const TopWrapper = styled.div`
      height: 10%;
      display: flex;
      flex-direction: column;
      background-color: white;
      justify-content: top;
      padding: 10px 70px 20px 70px;
    `
    
    const BottomWrapper = styled.div`
      height: 100%;
      display: flex;
      flex-direction: column;
      background-color: #7BEFB2;
      border-radius: 0% 8% 0% 0%;
    `


    const H_title = styled.a`
      font: comfortaa;
      font-size: 30px;
      color: black;
    `

    
    return (
      <>
      <TopWrapper className ="TopWrapper">
        <H_title>
        <ArrowButton direction="left" />
          Mine Venner
        <AddButton></AddButton>
        </H_title>
      </TopWrapper>
      <BottomWrapper className="BottomWrapper">
        <FriendsBox imgPath ="person.svg" title="Torstein" >
          <SettingsButton/>
        </FriendsBox>
        <FriendsBox imgPath ="person.svg" title="Awalle" >
        <SettingsButton/>
        </FriendsBox>
        <FriendsBox imgPath ="person.svg" title="Ole Kristian er lege dette er en test slik er det" >
        <SettingsButton/>
        </FriendsBox>
      </BottomWrapper>
      </>
    )
}

export default MyFriendsPage;