import React, { memo } from 'react'

const Groups = (props) => {
  console.log('Groups')
  return props.children
}

export default memo(Groups)
