import AddTaskText from '@/shared/ui/add-task-text/add-task-text'
import style from './task-title.module.scss'
import AddTaskBtn from '@/shared/ui/add-task-btn/add-task-btn'

const TaskTitle = () => {
    return (
			<div className='container'>
				<div className={style.wrapperTitleTask}>
					<div className={style.titleTaskItem}>
						<div className={style.taskTextCount}>
							<AddTaskText
								addTaskColor={style.colorTaskRed}
								addTaskText='Личные желания'
								addTaskTextClass={style.colorTaskText}
								addTaskWrapper={style.titleTaskWrapper}
							/>
							<div className={style.titleTaskCount}>
								<p>0</p>
							</div>
						</div>
						<div className=''>
							<AddTaskBtn />
						</div>
					</div>
					<div className={style.titleTaskItem}>
						<div className={style.taskTextCount}>
							<AddTaskText
								addTaskColor={style.colorTaskGreen}
								addTaskText='Необходимые'
								addTaskTextClass={style.colorTaskText}
								addTaskWrapper={style.titleTaskWrapper}
							/>
							<div className={style.titleTaskCount}>
								<p>0</p>
							</div>
						</div>
						<div className=''>
							<AddTaskBtn />
						</div>
					</div>
					<div className={style.titleTaskItem}>
						<div className={style.taskTextCount}>
							<AddTaskText
								addTaskColor={style.colorTaskBlue}
								addTaskText='Подарки'
								addTaskTextClass={style.colorTaskText}
								addTaskWrapper={style.titleTaskWrapper}
							/>
							<div className={style.titleTaskCount}>
								<p>0</p>
							</div>
						</div>
						<div className=''>
							<AddTaskBtn />
						</div>
					</div>
				</div>
			</div>
		)
}


export default TaskTitle