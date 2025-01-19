import addTaskBtnProps from "@/app/types/global"


const AddTaskBtn = ({
	addTaskColor,
	addTaskText,
	addTaskTextClass,
	addTaskWrapper,
}: addTaskBtnProps) => {
	return (
		<div className={addTaskWrapper}>
			<div className='add__task-item'>
				<div className={addTaskColor}></div>
			</div>
			<div className='add__task-text'>
				<p className={addTaskTextClass}>{addTaskText}</p>
			</div>
		</div>
	)
}

export default AddTaskBtn