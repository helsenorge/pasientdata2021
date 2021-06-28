
import styled from "styled-components"

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #7BEFB2;
  border-radius: 0px 50px 0px 0px;
  padding: 20px 30px 20px 30px;
`

function GreenBoxRoundedCorner({children, className}) {
    return (
        <Wrapper className={className}>
            {children}
        </Wrapper>
    )
}

export default GreenBoxRoundedCorner
