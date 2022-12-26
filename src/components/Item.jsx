import { memo } from 'react'

const Item = memo((props) => {
  console.log('Item')
  return (
    <div onClick={() => props.callbackFn(props.name)}>Name: {props.name}</div>
  )
})

Item.displayName = 'Item'

export default Item
