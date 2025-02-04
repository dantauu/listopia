import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ContextModal } from '@/app/layout'
import style from './modal-task.module.scss'


const ModalAddTask = () => {
	const { openModal, setOpenModal } = useContext(ContextModal)
    return (
		<>
		<AnimatePresence>
		{openModal && (
			<motion.div 
				className={style.fullWrapperModal}
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				exit={{opacity: 0}}
				transition={{duration: 0.3}}
				onClick={() => setOpenModal(false)}>
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
							placeholder='Название покупки' />
					</div>
					<div className=''>
						<input 
							type='text'
							placeholder='Описание покупки'
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
							src={'assets/img/add-image.png'} alt="" />
						</div>
					</div>
				</div>
                <div className=''>
                    <button className={style.modalAddBtn}>Добавить покупку</button>
                </div>
				<div onClick={() => 
					setOpenModal(false)} className={style.wrapperKrestModal}>
					<img className={style.krestIcon} src={'assets/img/plus.svg'} alt="" />
				</div>
			</motion.div>
			</motion.div>
		)}
		</AnimatePresence>
		</>
		)
}

export default ModalAddTask