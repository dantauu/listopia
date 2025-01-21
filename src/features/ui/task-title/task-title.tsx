import AddTaskBtn from "@/shared/ui/add-task-text/add-task-text"
import style from './task-title.module.scss'

const TaskTitle = () => {
    return (
			<div className='container'>
				<div className={style.wrapperTitleTask}>
					<div className='title__task-item'>
						<AddTaskBtn
							addTaskColor={style.colorTask}
							addTaskText='Личные желания'
							addTaskTextClass={style.colorTaskText}
							addTaskWrapper={style.titleTaskWrapper}
						/>
					</div>
					<div className='title__task-item'>
						<AddTaskBtn
							addTaskColor={style.colorTask}
							addTaskText='Необходимые'
							addTaskTextClass={style.colorTaskText}
							addTaskWrapper={style.titleTaskWrapper}
						/>
					</div>
					<div className='title__task-item'>
						<AddTaskBtn
							addTaskColor={style.colorTask}
							addTaskText='Подарки'
							addTaskTextClass={style.colorTaskText}
							addTaskWrapper={style.titleTaskWrapper}
						/>
					</div>
				</div>
			</div>
		)
}


export default TaskTitle