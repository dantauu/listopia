import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { TaskView } from "./task-component-slice"


type modalTaskProps = {
   isOpen: boolean
   modalTypes: string | null
}

const initialState: modalTaskProps = {
   isOpen: false,
   modalTypes: null
}

const modalTaskSlice = createSlice({
   name: 'modalTask',
   initialState,
   reducers: {
      openModal: (state, action: PayloadAction<TaskView>) => {
         state.isOpen = true
         state.modalTypes = action.payload
      },
      closeModal: (state) => {
         state.isOpen = false
         state.modalTypes = null
      }
   }
})

export const { openModal, closeModal } = modalTaskSlice.actions
export default modalTaskSlice.reducer