"use client"
import { TaskView } from "@/redux/slices/task-component-slice"
import TaskComponent from "@/intities/ui/task-component/task-component"
import { useAppSelector } from "@/redux/hooks"
import style from "./task-column.module.scss"

interface TaskColumnProps {
  view: TaskView
  title: string
}

const TaskColumn = ({ view, title }: TaskColumnProps) => {
  const tasks = useAppSelector((state) =>
    state.taskComponentSlice.tasks.filter((t) => t.view === view)
  )
  return (
    <div className={style.columnWrapper}>
      <h2 className={style.columnTitle}>
        {title} ({tasks.length})
      </h2>
      <div className={style.tasksContainer}>
        {tasks.map((task) => (
          <TaskComponent key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default TaskColumn
