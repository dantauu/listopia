import AddTaskBtn from "@/shared/ui/add-task-text/add-task-text"
import style from './task-title.module.scss'
// import '../../../app/styles/index.scss'

const TaskTitle = () => {
    return (
			<div className='container'>
				<AddTaskBtn
					addTaskColor={style.colorTask}
					addTaskText='Личные желания'
					addTaskTextClass={style.colorTaskText}
                    addTaskWrapper={style.titleTaskWrapper}
				/>
			</div>
		)
}

export default TaskTitle