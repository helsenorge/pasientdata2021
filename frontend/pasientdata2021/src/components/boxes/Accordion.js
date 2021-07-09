import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card"
import TextImgButton from "../buttons/TextImgButton";
import styled from "styled-components";
import ArrowButton from "../buttons/ArrowButton";



const CustomTextImgButton = styled(TextImgButton)`
  margin: 0px 0px 0px 0px;
  background-color: transparent;
  font-size:20px;
`

const StyledCard = styled(Card)`
display:flex;
font-family:"Comfortaa";
font-weight:bold;
color:#000000;
background-color: #7BEFB2;

`

const CardContainer = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
font-size: 19px;
font-weight:bold;
`


function AccordionComponent({eventKey, children, trashImg, profileImg, arrowImg, title, removeFunction}){
    return(
        
          <StyledCard className = "StyledCard">
                                 
            <Accordion.Toggle as={Card.Header} eventKey={eventKey}>
                <CardContainer>
                    <CustomTextImgButton imgSrc = {profileImg}/>                    
                    {children}
                    <ArrowButton direction="down"/>
                    
                </CardContainer>  
            </Accordion.Toggle>
                    
                         
            <Accordion.Collapse eventKey={eventKey}>
              <Card.Body>
                <CustomTextImgButton imgSrc={trashImg} title={title} onClick={removeFunction} />
              </Card.Body>
            </Accordion.Collapse>
         
          </StyledCard>
    )
}


export default AccordionComponent;