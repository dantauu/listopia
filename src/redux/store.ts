import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalTask from './slices/modal-task-slice'

const reducers = combineReducers({
   modalTask
})

export const store = configureStore({
   reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch