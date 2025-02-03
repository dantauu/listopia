import { ContextModal } from "@/app/layout"
import { useContext } from "react"


const Modal = () => {
	const { openModal } = useContext(ContextModal)
    return (
		<>
		{openModal && (
			<div className='wrapper-modal'>
				<div className=''>
					<div className=''>
						<button>Добавить изображение</button>
					</div>
					<div className=''>
						<input type='text' placeholder='Название покупки' />
					</div>
					<div className=''>
						<input type='text' placeholder='Описание покупки' />
					</div>
				</div>
                <div className="">
                    <button>Добавить покупку</button>
                </div>
			</div>
		)}
		</>
		)
}

export default Modal