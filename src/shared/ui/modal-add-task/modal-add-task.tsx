'use client'
import { motion, AnimatePresence } from 'framer-motion'
import style from './modal-task.module.scss'


const ModalAddTask = () => {
    return (
		<>
		<AnimatePresence>
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
				<div className={style.wrapperKrestModal}>
					<img className={style.krestIcon} src={'assets/img/plus.svg'} alt="" />
				</div>
			</motion.div>
			</motion.div>
		</AnimatePresence>
		</>
		)
}

export default ModalAddTask