import { useCallback, useEffect, useMemo, useState } from 'react'
import Item from '@/components/Item'
import Groups from '@/components/Groups'

export default () => {
  const [list, setList] = useState([{ name: 'Vue' }])
  const [count, setCount] = useState(0)
  const fn = useCallback((t) => console.log(t), [])
  const getList = async () => {
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            name: 'React'
          },
          {
            name: 'Node',
            hide: true
          }
        ])
      }, 2000)
    })
    setList(data)
  }

  useEffect(() => {
    getList()
  }, [])

  return (
    <>
      <Groups>
        <div>Header</div>
        {list.map((item) => (
          <Item
            key={item.name}
            name={item.name}
            callbackFn={fn}
            isHide={item.hide}
          />
        ))}
        <div>Footer</div>
      </Groups>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </>
  )
}
