import styled from "styled-components";
import UserInputField from "../inputFields/UserInputField";
import LoginButton from "../buttons/LoginButton";
import ArrowButton from "../buttons/ArrowButton";

import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";

const LoginButtonTheme = {
    marginTop: "40px"
}


function AddFriendsPage() {
    return (
      <>
      <WhiteHeaderWrapper title="Legg til venner" />
      <GreenBoxRoundedCorner>
        <UserInputField placeholder="Brukernavn" />
        <LoginButton classname theme={LoginButtonTheme}>Legg til</LoginButton>
      </GreenBoxRoundedCorner>
      </>
    )
}

export default AddFriendsPage;