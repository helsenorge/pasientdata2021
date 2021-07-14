
import styled from 'styled-components'

const FriendsBoxWrapper = styled.div`
    display: flex;
    font-size: 30px;
    height: 35px;
    margin: 20px 0px 15px 0px;

    mix-blend-mode: darken;
    border: none; 
    font-family: 'Comfortaa';
`

const FriendsIcon = styled.img`
    margin-right: 10px;

`

const TitleText = styled.a`
    font-size: 25px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;  
    color: black;
`

const FriendsBox = ({imgPath, title, children, className, onClick}) => {
    return (
        <>
        <FriendsBoxWrapper className={className} onClick={onClick} >
            {imgPath ? <FriendsIcon src={imgPath} alt="Icon" height ={30} /> : ""}
            <TitleText>{title}</TitleText>
            {children}
        </FriendsBoxWrapper>
        </>
    )   
}

export default FriendsBox;