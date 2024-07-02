// Write your code here

import {EachDirectionBtn, DirectionBtn} from './styledComponents'

const GradientDirectionItem = props => {
  const {data, onClickDirection, activeBtn} = props
  const {directionId, value, displayText} = data

  const onClickDirectionBtn = () => {
    onClickDirection(directionId)
  }

  return (
    <EachDirectionBtn>
      <DirectionBtn
        type="button"
        value={value}
        onClick={onClickDirectionBtn}
        isActive={activeBtn}
      >
        {' '}
        {displayText}{' '}
      </DirectionBtn>
    </EachDirectionBtn>
  )
}

export default GradientDirectionItem
