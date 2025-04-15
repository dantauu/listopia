import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { v4 as uuidv4 } from "uuid"

export type TaskView = "Личные желания" | "Необходимые" | "Подарки"

export type TaskProps = {
  id: string
  title: string
  description: string
  image?: string
  view: TaskView
}

type TaskState = {
  tasks: TaskProps[]
}

const initialState: TaskState = {
  tasks: [],
}

const taskComponentSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<TaskProps, "id">>) => {
      const newTask: TaskProps = {
        id: uuidv4(),
        ...action.payload,
      }
      state.tasks.push(newTask)
    },
    moveTask: (
      state,
      action: PayloadAction<{ taskId: string; newView: TaskView }>
    ) => {
      const task = state.tasks.find((t) => t.id === action.payload.taskId)
      if (task) task.view = action.payload.newView
    },
  },
})

export const { addTask, moveTask } = taskComponentSlice.actions
export default taskComponentSlice.reducer
