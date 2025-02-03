import { ContextModal } from "@/app/layout"
import { useContext } from "react"
import style from './modal-task.module.scss'


const ModalAddTask = () => {
	const { openModal } = useContext(ContextModal)
    return (
		<>
		{openModal && (
			<div className={style.fullWrapperModal}>
			<div className={style.wrapperModal}>
				<div className={style.wrapperInputBtn}>
					<div className=''>
						<button className={style.modalButton}>Добавить изображение</button>
					</div>
					<div className=''>
						<input 
							className={style.inputItem} 
							type='text'
							placeholder='Название покупки' />
					</div>
					<div className=''>
						<input 
							type='text'
							placeholder='Описание покупки'
							className={style.inputItem} />
					</div>
				</div>
                <div className=''>
                    <button className={style.modalAddBtn}>Добавить покупку</button>
                </div>
			</div>
			</div>
		)}
		</>
		)
}

export default ModalAddTask