'use client'
import { motion } from 'framer-motion'
import style from './modal-task.module.scss'
import { useDispatch } from 'react-redux'
import { closeModal } from '@/redux/slices/modal-task-slice'
import { useState } from 'react'
import { addTask, TaskView } from '@/redux/slices/task-component-slice'

const ModalAddTask = ({ view }: { view: TaskView }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [img, setImg] = useState<string | undefined>(undefined)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = () => {
                setImg(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleAdd = () => {
        if (title.trim()) {
            dispatch(addTask({
                title: title.trim(),
                description: description.trim(),
                image: img,
                view: view
            }))
            dispatch(closeModal())
            setTitle('')
            setDescription('')
            setImg(undefined)
        }
    }

    return (
        <motion.div 
            className={style.fullWrapperModal}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.3}}
        >
            <motion.div 
                className={style.wrapperModal}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={style.wrapperInputBtn}>
                    <input 
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название"
                        className={style.inputItem}
                    />
                    <input 
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Описание"
                        className={style.inputItem}
                    />
                    {img ? null : (
                    <div className={style.addBtnImg}>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            id="imageUpload"
                            hidden
                        />
                        
                        <label htmlFor="imageUpload" className={style.modalButton}>
                            Добавить изображение
                        </label>
                    </div>
                    )}
                    <div className={style.imgWrapper}>
                        {img && <img src={img} className={style.previewImage} alt="Preview" />}
                    </div>
                </div>
                <button 
                    onClick={handleAdd}
                    disabled={!title.trim()}
                    className={style.modalAddBtn}
                >
                    Добавить
                </button>
                <div 
                    onClick={() => dispatch(closeModal())} 
                    className={style.wrapperKrestModal}
                >
                    <img className={style.krestIcon} src="/assets/img/plus.svg" alt="Close" />
                </div>
            </motion.div>
        </motion.div>
    )
}

export default ModalAddTask