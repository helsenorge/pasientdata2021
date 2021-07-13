import styled from 'styled-components'

const MainContainer = styled.div`
    height: 100vh;
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