'use client'
import { motion } from 'framer-motion'
import style from './modal-task.module.scss'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/redux/slices/modal-task-slice'
import { useAppSelector } from '@/redux/hooks'
import { useState } from 'react'
import { addTask } from '@/redux/slices/task-component-slice'


const ModalAddTask = () => {
	const dispatch = useDispatch()
	const currentView = useAppSelector((state) => state.modalTask.currentView)
	const [title, setTitle] = useState('')
	const [description, setDescription] = useState('')
	const [img, setImg] = useState<string | undefined>(undefined)
	const handleAdd = () => {
		if (currentView && title.trim()) {
			dispatch(addTask({
				title: title.trim(),
				description: description.trim(),
				image: img || undefined,
				view: currentView
			}))
			dispatch(closeModal())
			setTitle('')
			setDescription('')
			setImg('')
		}
	}
    return (
		<>
			<motion.div 
				className={style.fullWrapperModal}
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				transition={{duration: 0.3}}>
			<motion.div 
				className={style.wrapperModal}
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				transition={{duration: 0.3}}
				onClick={(e) => e.stopPropagation()}
				>
				<div className={style.wrapperInputBtn}>
					<div className=''>
						<input 
							type='text'
							className={style.inputItem} 
							onChange={(e) => setTitle(e.target.value)}
							placeholder='Название' />
					</div>
					<div className=''>
						<input 
							type='text'
							placeholder='Описание (к примеру дата покупки)'
							onChange={(e) => setDescription(e.target.value)}
							className={style.inputItem} />
					</div>
					<div className={style.addBtnImg}>
						<div className="">
							<button className={style.modalButton}>
								Добавить изображение
							</button>
						</div>
						<div className="">
							<img className={style.modalImg} 
							src={'/assets/img/add-image.svg'} alt="" />
						</div>
					</div>
				</div>
                <div className=''>
                    <button 
						  	onClick={handleAdd}
							disabled={!title.trim()}
						   className={style.modalAddBtn}>Добавить</button>
                </div>
				<div onClick={() => dispatch(closeModal())} className={style.wrapperKrestModal}>
					<img className={style.krestIcon} src={'/assets/img/plus.svg'} alt="" />
				</div>
			</motion.div>
			</motion.div>
		</>
		)
}

export default ModalAddTask