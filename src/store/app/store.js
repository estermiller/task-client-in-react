import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../features/user/userSlice'
import taskSlice from '../features/task/taskSlice'

export const myStore = configureStore({
    reducer: {
      userSlice,
      taskSlice,
    }
  })