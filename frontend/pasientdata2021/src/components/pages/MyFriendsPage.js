import styled from "styled-components";
import FriendsBox from "../FriendsBox";
import AddButton from "../buttons/AddButton";
import WhiteHeaderWrapper from "../boxes/WhiteHeaderWrapper";
import GreenBoxRoundedCorner from "../boxes/GreenBoxRoundedCorner";
import TextImgButton from "../buttons/TextImgButton";


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: inherit;
  width: inherit;
`


const GreenBoxWrapper = styled(GreenBoxRoundedCorner)`
  justify-content: top;
`
const CustomHeaderWrapper = styled(WhiteHeaderWrapper)`
  width: inherit;
  margin-left: -20px;
`


function MyFriendsPage() {  return (
  <Wrapper className ="Wrapper">
    <CustomHeaderWrapper title="Mine Venner"> <AddButton/> </CustomHeaderWrapper>
    <GreenBoxWrapper>
    <FriendsBox imgPath ="person.svg" title="Torstein" > <TextImgButton imgSrc ="3-vertical-dots.svg"></TextImgButton>
    </FriendsBox>
    <FriendsBox imgPath ="person.svg" title="Awalle" > <TextImgButton imgSrc ="3-vertical-dots.svg"></TextImgButton>
    </FriendsBox>
    <FriendsBox imgPath ="person.svg" title="Ole Kristian" > 
      <TextImgButton imgSrc ="3-vertical-dots.svg"></TextImgButton>
    </FriendsBox>
  </GreenBoxWrapper>
   
  </Wrapper>
)}
  

  
  

export default MyFriendsPage;