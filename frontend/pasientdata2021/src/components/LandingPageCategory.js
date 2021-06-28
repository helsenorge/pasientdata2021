import styled from "styled-components";

const CategoryText = styled.div`
    color: #6c757d;
    margin-bottom: 10px;
`

const LandingPageCategory = ({title, children}) => {
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