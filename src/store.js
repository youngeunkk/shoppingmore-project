import { configureStore, createSlice } from '@reduxjs/toolkit'

let cart = createSlice({
    name : 'option',
    initialState : [
      {id : 0, size : 'S', count : 1},
      {id : 1, size : 'M', count : 1},
      {id : 2, size : 'L', count : 1},
      {id : 3, size : 'XL', count : 1}
    ],
    reducers : {
      addCount(state, action) {
        let num = state.findIndex((a)=>{return a.id === action.payload})
        state[num].count++
      },
      subCount(state, action) {
        let num = state.findIndex((a)=>{return a.id === action.payload})
        state[num].count--
      }
    }
})

export let { addCount, subCount} = cart.actions

export default configureStore({
  reducer: {
    cart : cart.reducer
  }
}) 