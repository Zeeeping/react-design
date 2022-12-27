import store, { useDispatch, useSelector } from '@/redux'
import { setApp } from '@/redux/modules/app'
import { useEffect } from 'react'

export default () => {
  const dispatch = useDispatch()
  // const { name } = useSelector((state) => state.app.global)
  const { name } = store.getState().app.global
  useEffect(() => {
    console.log(name)
  }, [name])
  return <div onClick={() => dispatch(setApp('fajfoj'))}>{name}</div>
}
