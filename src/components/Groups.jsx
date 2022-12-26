import React, { isValidElement, memo, useCallback } from 'react'

const Groups = (props) => {
  console.log('Groups')
  const newChildren = []
  const otherChildren = []
  React.Children.forEach(props.children, (child) => {
    const { type, props } = child
    if (isValidElement(child) && type.displayName === 'Item' && !props.isHide) {
      newChildren.push(child)
    } else {
      otherChildren.push(child)
    }
  })

  return (
    <>
      <div>{newChildren}</div>
      <span>{otherChildren}</span>
    </>
  )
}

export default memo(Groups)
