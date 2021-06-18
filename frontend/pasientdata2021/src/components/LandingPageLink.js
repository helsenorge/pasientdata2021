import styled from 'styled-components'


const LandingPageLink = ({title, description}) => {

    const LandingPageLinkWrapper = styled.div`
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    `

    const TitleText = styled.b`
    `

    const DescriptionText = styled.a`
    `

    return (
        <LandingPageLinkWrapper className="LandingPageLinkWrapper">
            <TitleText>{title}</TitleText>
            <DescriptionText>{description}</DescriptionText>
        </LandingPageLinkWrapper>
    )
}

export default LandingPageLink;

