import styled from "styled-components";
import UserInputField from "../inputFields/UserInputField";
import LoginButton from "../buttons/LoginButton";
import ArrowButton from "../buttons/ArrowButton";

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
  justify-content: bottom;
  background-color: #7BEFB2;
  padding: 10px 90px 130px 90px;
  border-radius: 0% 8% 0% 0%;
  width: auto;
`

const LoginButtonTheme = {
    marginTop: "40px"
}

const HeaderTitle = styled.a`
  font: comfortaa;
  font-size: 30px;
  color: black;
`

function AddFriendsPage() {
    
    return (
      <>
      <TopWrapper className ="TopWrapper">
        <HeaderTitle>
          <ArrowButton direction="left" />
            Legg til Venner
        </HeaderTitle>
      </TopWrapper>
      <BottomWrapper className="BottomWrapper">
        <UserInputField placeholder="Brukernavn" />
        <LoginButton classname theme={LoginButtonTheme}>Legg til</LoginButton>
      </BottomWrapper>
      </>
    )
}

export default AddFriendsPage;