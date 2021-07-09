import styled from "styled-components"

const TextImgButtonWrapper = styled.button`
    height: 30px;
    font-size: 35px;
    display: flex;
    justify-content: center;
    align-items: center;

    mix-blend-mode: darken;
    border: none;
    background-color: #7BEFB2;
    margin: 20px 0px 15px 0px;
` 

const ButtonImg = styled.img`
`

function TextImgButton({className, title, imgSrc, onClick}) {
    return (
        <TextImgButtonWrapper className={className} onClick={onClick}>
            <ButtonImg src={imgSrc} height={30}  />
            {title}
        </TextImgButtonWrapper>
    )
}

export default TextImgButton
