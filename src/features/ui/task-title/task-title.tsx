"use client"
import AddTaskText from '@/shared/ui/add-task-text/add-task-text'
import style from './task-title.module.scss'
import Button from '@/shared/ui/button/button'
import CheckSwitch from '@/shared/ui/check-switch/check-switch'
import { useDispatch } from 'react-redux'
import { openModal } from '@/redux/slices/modal-task-slice'
import { useAppSelector } from '@/redux/hooks'
import { TaskView } from '@/redux/slices/task-component-slice'

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
    const tasks = useAppSelector((state) => state.taskComponentSlice.tasks)

    return (
        <div className=''>
            <CheckSwitch />
            <div className={style.wrapperTitleTask}>
                {columns.map((column) => {
                    const filteredTasks = tasks.filter(t => t.view === column.view)
                    return (
                        <div key={column.view} className={style.titleTaskItem}>
                            <div className={style.taskTextCount}>
                                <AddTaskText
                                    addTaskColor={column.style}
                                    addTaskText={column.title}
                                    addTaskTextClass={style.colorTaskText}
                                    addTaskWrapper={style.titleTaskWrapper}
                                />
                                <div className={style.titleTaskCount}>
                                    <p className={style.count}>{filteredTasks.length}</p>
                                </div>
                            </div>
                            <div>
                                <Button
                                    wrapperBtn={style.wrapperBtnClass}
                                    imgClass={style.btnImgClass}
                                    btnImg='assets/img/plus.svg'
                                    btnClass={style.btnTextClass}
                                    btnText='Добавить'
                                    onClick={() => dispatch(openModal(column.view))}
                                />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TaskTitle