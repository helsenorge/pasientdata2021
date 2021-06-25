import styled from "styled-components";

const LandingPageCategory = ({title, children}) => {

    const CategoryText = styled.div`
        color: #6c757d;
        margin-bottom: 10px;
    `

    return (
        <>
        <CategoryText>
            {title}
        </CategoryText>
        {children}
        </>
    )
}

export default LandingPageCategory;