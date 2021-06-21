import styled from 'styled-components'


const LandingPageLink = ({title, description, imgPath}) => {

    const LandingPageLinkWrapper = styled.div`
        display: flex;
        margin-bottom: 20px;
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

    return (
        <>
        <LandingPageLinkWrapper className="LandingPageLinkWrapper">
            <LinkIcon src={imgPath} alt="Icon" />
            <LandingPageLinkText className="LandingPageLinkText">
                <TitleText>{title}</TitleText>
                <DescriptionText>{description}</DescriptionText>
            </LandingPageLinkText>
        </LandingPageLinkWrapper>
        </>
    )
}

export default LandingPageLink;

