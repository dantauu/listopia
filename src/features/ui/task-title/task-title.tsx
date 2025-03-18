"use client"
import AddTaskText from '@/shared/ui/add-task-text/add-task-text'
import style from './task-title.module.scss'
import Button from '@/shared/ui/button/button'
import CheckSwitch from '@/shared/ui/check-switch/check-switch'
import { useDispatch } from 'react-redux'
import { openModal } from '@/redux/slices/modal-task-slice'
import { useAppSelector } from '@/redux/hooks'
import { TaskView } from '@/redux/slices/task-component-slice'

const TaskTitle = () => {
	const dispatch = useDispatch()
    return (
			<div className=''>
				<CheckSwitch />
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
								<p className={style.count}>0</p>
							</div>
						</div>
						<div className=''>
							<Button
								wrapperBtn={style.wrapperBtnClass}
								imgClass={style.btnImgClass}
								btnImg='assets/img/plus.svg'
								btnClass={style.btnTextClass}
								btnText='Добавить'
								onClick={() => dispatch(openModal('task-open-modal'))}
							/>
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
								<p className={style.count}>0</p>
							</div>
						</div>
						<div className=''>
							<Button
								wrapperBtn={style.wrapperBtnClass}
								imgClass={style.btnImgClass}
								btnImg='assets/img/plus.svg'
								btnClass={style.btnTextClass}
								btnText='Добавить'
								onClick={() => dispatch(openModal('task-open-modal'))}
							/>
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
								<p className={style.count}>0</p>
							</div>
						</div>
						<div className=''>
							<Button
								wrapperBtn={style.wrapperBtnClass}
								imgClass={style.btnImgClass}
								btnImg='assets/img/plus.svg'
								btnClass={style.btnTextClass}
								btnText='Добавить'
								onClick={() => dispatch(openModal('task-open-modal'))}
							/>
						</div>
					</div>
				</div>
			</div>
		)
}


export default TaskTitle