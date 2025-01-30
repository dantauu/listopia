import { ButtonProps } from '@/app/types/global'

const Button = ({ imgClass, btnText, btnImg, wrapperBtn, btnClass }: ButtonProps) => {
	return (
		<div className={wrapperBtn}>
			<div className=''>
				<img className={imgClass} src={btnImg} alt='' />
			</div>
			<div className=''>
				<button className={btnClass}>{btnText}</button>
			</div>
		</div>
	)
}

export default Button