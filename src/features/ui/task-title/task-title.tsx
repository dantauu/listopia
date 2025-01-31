"use client"
import AddTaskText from '@/shared/ui/add-task-text/add-task-text'
import style from './task-title.module.scss'
import Button from '@/shared/ui/button/button'
import { useContext } from 'react'
import { ContextModal } from '@/app/layout'

const TaskTitle = () => {
	const { setOpenModal } = useContext(ContextModal)
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
								onClick={() => setOpenModal(true)}
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
							/>
						</div>
					</div>
				</div>
			</div>
		)
}


export default TaskTitle