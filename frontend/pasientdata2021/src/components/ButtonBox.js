
import styled from 'styled-components'


const ButtonBox = ({children}) => {
    const ButtonBoxWrapper = styled.div`
      background-color: #FFFFFF;
      height: 350px;
      margin: 0 10px 0 10px;
      padding: 10px 10px 10px 10px;
      display: flex;
      flex-direction: column;
    `

    return (
        <ButtonBoxWrapper className="ButtonBoxWrapper">
            {children}
        </ButtonBoxWrapper>
    )
}

export default ButtonBox;