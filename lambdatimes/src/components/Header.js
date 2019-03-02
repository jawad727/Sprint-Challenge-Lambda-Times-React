import React from 'react';

import {Headerr} from './StyledComponents'
import {HeaderH1} from './StyledComponents'
import {HeaderDate} from './StyledComponents'
import {HeaderTemp} from './StyledComponents'

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Headerr>
      <HeaderDate className="date">MARCH 32, 2018</HeaderDate>
      <HeaderH1>Lambda Times</HeaderH1>
      <HeaderTemp className="temp">98°</HeaderTemp>
    </Headerr>
  )
}

export default Header