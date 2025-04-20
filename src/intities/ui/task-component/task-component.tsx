import { TaskProps } from "@/redux/slices/task-component-slice"
import style from "./task-component.module.scss"

const TaskComponent = ({ task }: { task: TaskProps }) => {
  return (
    <div className={style.taskCard}>
      <div className={style.taskTitle}>
        <h3 className={style.taskTitleInner}>{task.title}</h3>
      </div>
      {task.description && (
        <div className={style.description}>
          <p className={style.descriptionInner}>{task.description}</p>
        </div>
      )}
      {task.image && (
        <div className={style.image}>
          <img src={task.image} className={style.taskImage} alt="" />
        </div>
      )}
    </div>
  )
}

export default TaskComponent
