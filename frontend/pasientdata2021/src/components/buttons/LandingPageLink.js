import styled from 'styled-components'

const LandingPageLinkWrapper = styled.button`
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
`

const LandingPageLinkText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`

const TitleText = styled.b`
`

const DescriptionText = styled.a`
`

const LinkIcon = styled.img`
    width: 40px;
`

const LandingPageLink = ({title, description, imgPath, onClick}) => {

    return (
        <>
        <LandingPageLinkWrapper className="LandingPageLinkWrapper" onClick={onClick}>
            <LinkIcon src={imgPath} alt="Icon" />
            <LandingPageLinkText className="LandingPageLinkText">
                <TitleText>{title}</TitleText>
                { description ? <DescriptionText>{description}</DescriptionText> : "" }
            </LandingPageLinkText>
        </LandingPageLinkWrapper>
        </>
    )
}

export default LandingPageLink;

