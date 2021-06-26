import styled from "styled-components"

import ArrowButton from "../buttons/ArrowButton"

import { useHistory } from "react-router"

const HeaderTitle = styled.a`
  font-family: "Comfortaa";
  font-size: 30px;
  color: black;
  font-weight: bold;
`

const Wrapper = styled.div`
  min-height: 70px;
  max-height: 70px;
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  padding: 0px 0px 0px 10px;
  margin-right: 100px;
`

function WhiteHeaderWrapper({className, title, children}) {
    const history = useHistory();

    return (
      <Wrapper className={className}>
          <ArrowButton direction="left" onClick={() => history.goBack()}/>
        <HeaderTitle>
          {title}
        </HeaderTitle>
        {children}
      </Wrapper>
    )
}

export default WhiteHeaderWrapper
