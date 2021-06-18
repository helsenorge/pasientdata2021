import styled from 'styled-components'
import Footer from './Footer'

const PageWrapper = ({children}) => {

    const MainContainer = styled.div`
        height: 736px;
        width: 414px;
    `

     return (
        <>
        <MainContainer className="MainContainer">
            {children}
        </MainContainer>
        </>
    )
}

export default PageWrapper;