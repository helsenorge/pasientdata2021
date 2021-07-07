import styled from "styled-components";

const CategoryText = styled.div`
    color: #6c757d;
    margin-bottom: 10px;
`

const LandingPageCategory = ({title, children, className, id}) => {
    return (
        <>
        <CategoryText id={id} className = {className}>
            {title}
        </CategoryText>
        {children}
        </>
    )
}

export default LandingPageCategory;