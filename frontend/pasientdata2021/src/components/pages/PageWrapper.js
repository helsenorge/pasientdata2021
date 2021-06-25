import styled from 'styled-components'

const MainContainer = styled.div`
    height: 736px;
    width: 414px;
`

const PageWrapper = ({children}) => {
     return (
        <>
        <MainContainer className="MainContainer">
            {children}
        </MainContainer>
        </>
    )
}

export default PageWrapper;