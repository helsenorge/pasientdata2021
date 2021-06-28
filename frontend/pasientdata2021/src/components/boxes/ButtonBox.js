
import styled from 'styled-components'

const ButtonBoxWrapper = styled.div`
    background-color: #FFFFFF;
    height: 350px;
    margin: 0 10px 0 10px;
    padding: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;
`

const ButtonBox = ({children}) => {
    return (
        <ButtonBoxWrapper className="ButtonBoxWrapper">
            {children}
        </ButtonBoxWrapper>
    )
}

export default ButtonBox;