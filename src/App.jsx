import { useCallback, useMemo, useState } from 'react'
import Item from '@/components/Item'
import Groups from '@/components/Groups'

export default () => {
  const fn = useCallback((type) => console.log(type), [])
  const [count, forceUpdate] = useState(0)
  return (
    <>
      <Groups>
        <Item name="React" callbackFn={fn} />
        <Item name="Node" callbackFn={fn} />
      </Groups>
      <button onClick={() => forceUpdate(count + 1)}>{count}</button>
    </>
  )
}
