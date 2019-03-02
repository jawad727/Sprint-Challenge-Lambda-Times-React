import React from 'react';
import {ContainerRight} from './StyledComponents'
import {ContainerCenter} from './StyledComponents'
import {ContainerLeft} from './StyledComponents'
import {Container} from './StyledComponents'
import {TopBarr} from './StyledComponents'
import {TopBarrSpan} from './StyledComponents'
import {ContainerLeftSpan} from './StyledComponents'
import {ContainerRightSpan} from './StyledComponents'
// import  from './StyledComponents'


// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBar = () => {
  return (
    <TopBarr>
      <Container>
        <ContainerLeft>
          <ContainerLeftSpan>TOPICS</ContainerLeftSpan><ContainerLeftSpan>SEARCH</ContainerLeftSpan>
        </ContainerLeft>
        <ContainerCenter>
          <TopBarrSpan>GENERAL</TopBarrSpan><TopBarrSpan>BROWNBAG</TopBarrSpan><TopBarrSpan>RANDOM</TopBarrSpan><TopBarrSpan>MUSIC</TopBarrSpan><TopBarrSpan>ANNOUNCEMENTS</TopBarrSpan>
        </ContainerCenter>
        <ContainerRight>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRight>
      </Container>
    </TopBarr>
  )
}

export default TopBar;