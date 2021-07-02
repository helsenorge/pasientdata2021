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
    margin-right: 10px;
`

function TextImgButton({className, title, imgSrc, onClick}) {
    return (
        <TextImgButtonWrapper className={className}>
            <ButtonImg src={imgSrc} height={30} onClick={onClick} />
            {title}
        </TextImgButtonWrapper>
    )
}

export default TextImgButton
