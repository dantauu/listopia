import { combineReducers, configureStore } from "@reduxjs/toolkit"
import modalTask from "./slices/modal-task-slice"
import taskComponentSlice from "./slices/task-component-slice"

const reducers = combineReducers({
  modalTask,
  taskComponentSlice,
})

export const store = configureStore({
  reducer: reducers,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
