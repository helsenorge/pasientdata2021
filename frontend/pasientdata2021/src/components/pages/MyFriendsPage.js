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
  margin-left: -17px;
`

const FriendsBoxCustom = styled(FriendsBox)`
  margin-left: 10px;
  width: 363px;
  font-weight: 600;
`

function MyFriendsPage() {  
  return (
  <Wrapper className ="Wrapper">
    <CustomHeaderWrapper title="Mine Venner"> <AddButton/> </CustomHeaderWrapper>
    <GreenBoxWrapper>
    <FriendsBoxCustom imgPath ="person.svg" title="Torstein" > 
    </FriendsBoxCustom>
    <FriendsBoxCustom imgPath ="person.svg" title="Awalle" > 
    </FriendsBoxCustom>
    <FriendsBoxCustom imgPath ="person.svg" title="Ole Kristian" > 
  </FriendsBoxCustom>
  </GreenBoxWrapper>
  </Wrapper>
)}
  

  
  

export default MyFriendsPage;