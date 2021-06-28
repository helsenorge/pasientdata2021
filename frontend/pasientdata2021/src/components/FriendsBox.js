
import styled from 'styled-components'

const FriendsBox = ({imgPath, title, children}) => {

    const FriendsBoxWrapper = styled.div`
        display: flex;
        margin-bottom: 20px;
        justify-content: center;
    `

    const TitleText = styled.a`
        font: comfortaa;
        font-size: 22px;
        margin-left: 40px;
        min-width: 150px;
        max-width: 200px;
        overflow: hidden;
        white-space: nowrap;
    `

    const FriendsIcon = styled.img`
        width: 30px;
        display: flex;
        flex-direction: column;
        margin-left: -100px;
    `


    return (
        <>
        <FriendsBoxWrapper className="FriendsBoxWrapper">
            <FriendsIcon src={imgPath} alt="Icon" />
            <TitleText>{title}</TitleText>
            {children}
        </FriendsBoxWrapper>
        </>
    )
}

export default FriendsBox;