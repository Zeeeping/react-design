import { memo } from 'react'

const Item = (props) => {
  console.log('Item')
  return (
    <div onClick={() => props.callbackFn(props.name)}>Name: {props.name}</div>
  )
}

export default memo(Item)
