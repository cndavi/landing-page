import React, { useRef } from 'react'
import { TitleProps } from '../../data/type/types'
import { StyledLineWrap, StyledTitleWrapper } from './Title.styled'

const Title: React.FC<TitleProps> = ({
  lineContent,
  lineContent2,
}): JSX.Element => {
  let line1 = useRef(null)
  let line2 = useRef(null)

  return (
    <StyledTitleWrapper>
      <StyledLineWrap>
        <div ref={(el: any) => (line1 = el)} className="line">
          {lineContent}
        </div>
      </StyledLineWrap>
      <StyledLineWrap>
        <div ref={(el: any) => (line2 = el)} className="line">
          {lineContent2}
        </div>
      </StyledLineWrap>
    </StyledTitleWrapper>
  )
}

export default Title
