"use client"
import AddTaskText from '@/shared/ui/add-task-text/add-task-text'
import style from './task-title.module.scss'
import Button from '@/shared/ui/button/button'
import CheckSwitch from '@/shared/ui/check-switch/check-switch'
import { useDispatch } from 'react-redux'
import { openModal } from '@/redux/slices/modal-task-slice'
import { useAppSelector } from '@/redux/hooks'
import { TaskView } from '@/redux/slices/task-component-slice'
import TaskColumn from '../task-column/task-column'

const columns: {
    view: TaskView;
    title: string;
    style: string;
}[] = [
    { 
        view: 'Личные желания', 
        title: 'Личные желания', 
        style: style.colorTaskRed 
    },
    { 
        view: 'Необходимые', 
        title: 'Необходимые', 
        style: style.colorTaskGreen 
    },
    { 
        view: 'Подарки', 
        title: 'Подарки', 
        style: style.colorTaskBlue 
    },
]

const TaskTitle = () => {
    const dispatch = useDispatch()

    return (
        <div className=''>
            <CheckSwitch />
            <div className={style.wrapperTitleTask}>
                {columns.map((column, index) => (
						<div key={index} className={style.mainWrapper}>
                    <TaskColumn 
                        key={column.view}
                        view={column.view}
                        title={column.title}
                    />
						  	<Button
                        wrapperBtn={style.wrapperBtnClass}
                        imgClass={style.btnImgClass}
                        btnImg='assets/img/plus.svg'
                        btnClass={style.btnTextClass}
                        btnText='Добавить'
                        onClick={() => dispatch(openModal(column.view))}/>
						  </div>
                ))}
            </div>
        </div>
    )
}

export default TaskTitle