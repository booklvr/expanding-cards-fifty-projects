import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { panelIsActive } from '../actions/panelActions'

const Panel = ({ id, title, backgroundImg, isActive }) => {
  const dispatch = useDispatch()

  const panelActive = useSelector((state) => state.panelActive)
  const { activeIndex } = panelActive

  // useEffect(() => {
  //   console.log('activeIndex', activeIndex)
  //   console.log('id', id)
  // }, [activeIndex])

  const onClickHandler = (e) => {
    dispatch(panelIsActive(e.target.id))
  }

  return (
    <div
      id={id}
      className={id === activeIndex ? 'panel active' : 'panel'}
      style={{ backgroundImage: `url(${backgroundImg})` }}
      onClick={(e) => onClickHandler(e)}
    >
      <h3>{title}</h3>
    </div>
  )
}

export default Panel
