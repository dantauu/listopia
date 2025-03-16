import { createSlice } from "@reduxjs/toolkit"


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
      openModal: (state, action) => {
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