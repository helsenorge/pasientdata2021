
import styled from 'styled-components'

const FriendsBox = ({imgPath, title, children}) => {

    const FriendsBoxWrapper = styled.div`
        display: flex;
        font-size: 30px;
        justify-content: space-evenly;
        align-items: center;
        height: 35px;
        margin: 20px 0px 15px 0px;

        mix-blend-mode: darken;
        border: none; 
    `

    const FriendsIcon = styled.img`
        margin-right: 10px;

    `

    const TitleText = styled.a`
        font-size: 25px;
        width: 260px;
        white-space: nowrap;
        overflow: hidden;  
        color: black;
    `

    return (
        <>
        <FriendsBoxWrapper className="FriendsBoxWrapper">
            <FriendsIcon src={imgPath} alt="Icon" height ={30} />
            <TitleText>{title}</TitleText>
            {children}
        </FriendsBoxWrapper>
        </>
    )
}

export default FriendsBox;