import styled from "styled-components"

import ArrowButton from "../buttons/ArrowButton"

const HeaderTitle = styled.a`
  font: comfortaa;
  font-size: 30px;
  color: black;
`

const Wrapper = styled.div`
  min-height: 70px;
  max-height: 70px;
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: center;
  padding: 0px 0px 0px 10px;
  margin-right: 120px;
`

const LargeArrowButton = styled(ArrowButton)`
  height: 20px;
`;

function WhiteHeaderWrapper({className, title}) {
    return (
      <Wrapper className={className}>
          <LargeArrowButton direction="left" />
        <HeaderTitle>
          {title}
        </HeaderTitle>
      </Wrapper>
    )
}

export default WhiteHeaderWrapper
