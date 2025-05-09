import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TaskView } from "./task-component-slice"

type modalTaskProps = {
  isOpen: boolean
  currentView: TaskView | null
}

const initialState: modalTaskProps = {
  isOpen: false,
  currentView: null,
}

const modalTaskSlice = createSlice({
  name: "modalTask",
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<TaskView>) => {
      state.isOpen = true
      state.currentView = action.payload
    },
    closeModal: (state) => {
      state.isOpen = false
      state.currentView = null
    },
  },
})

export const { openModal, closeModal } = modalTaskSlice.actions
export default modalTaskSlice.reducer
