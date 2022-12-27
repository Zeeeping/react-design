import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  global: {
    name: 'Zep'
  }
}

const appSlice = createSlice({
  name: 'zep',
  initialState,
  reducers: {
    setApp(state, { payload }) {
      console.log(payload)

      state.global.name = payload
    }
  }
})

export const { setApp } = appSlice.actions
export default appSlice.reducer
