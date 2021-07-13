import styled from "styled-components"

import ArrowButton from "../buttons/ArrowButton"

import { useHistory } from "react-router"

const HeaderTitle = styled.a`
  font-family: "Comfortaa";
  font-size: 30px;
  color: black;
  font-weight: bold;
  position: absolute;
`

const Wrapper = styled.div`
  min-height: 70px;
  max-height: 70px;
  display: flex;
  background-color: white;
  justify-content: space-around;
  align-items: center;
`

const CustomArrow = styled(ArrowButton)`
    margin-right: auto;
    margin-left: 10px;
`

function WhiteHeaderWrapper({className, title, children, arrowButtonPath}) {
    const history = useHistory();

    return (
      <Wrapper className={className}>
          { arrowButtonPath ? 
            <CustomArrow direction="left" onClick={() => history.push(arrowButtonPath)}/>
            : 
            <CustomArrow direction="left" onClick={() => history.goBack()}/>
          }
        <HeaderTitle>
          {title}
        </HeaderTitle>
        {children}
      </Wrapper>
    )
}


export default WhiteHeaderWrapper
