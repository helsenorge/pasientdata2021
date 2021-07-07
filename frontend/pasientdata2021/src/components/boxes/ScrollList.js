


import styled from "styled-components";

const Wrapper = styled.div`
    min-height: 90px;
    overflow: scroll;
`

function ScrollList({children}){
    return (
        <Wrapper>
            {children}
        </Wrapper>
    )
};

export default ScrollList;