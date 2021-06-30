
import styled from 'styled-components'

import ButtonBox from '../boxes/ButtonBox'
import TopBox from '../boxes/TopBox'

import LandingPageLink from '../buttons/LandingPageLink'

import LandingPageCategory from '../boxes/LandingPageCategory';

const Wrapper = styled.div`
  background-color: #d8d5d5;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const LandingPage = () => {
    return (
        <Wrapper className="Wrapper">
          <TopBox className="TopBox">
            Ola Normann
          </TopBox>

          <ButtonBox className="BottomBox">
            <LandingPageCategory title="TRENING">
              <LandingPageLink title="Mål" description="Se oversikt over dine mål" imgPath="goal.svg" />
              <LandingPageLink title="Aktivitet" description="Ha kontroll på aktiviteten din" imgPath="running.svg"/>
            </LandingPageCategory>

            <LandingPageCategory title="SOSIAL">
              <LandingPageLink title="Grupper" description="Administrer gruppene dine" imgPath="team.svg"/>
            </LandingPageCategory>
   
          </ButtonBox>

        </Wrapper>
    )
}

export default LandingPage;