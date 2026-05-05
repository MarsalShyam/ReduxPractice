import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice.js'
import taskReducer from '../tasks/taskSlice.js'

export const store = configureStore({
  reducer: {
    counter:counterReducer,
    tasks:taskReducer,
  },
})