
const Button = ({ BtnClass, BtnText, BtnImg, WrapperBtn }) => {
	return (
		<div className={WrapperBtn}>
			<div className=''>
				<img className={BtnClass} src={BtnImg} alt='' />
			</div>
			<div className=''>
				<button className=''>{BtnText}</button>
			</div>
		</div>
	)
}

export default Button
///assets/img/plus.svg