import dataIcon from "../../../../public/data"
import style from './LeftMenu.module.scss'


const LeftMenu = () => {
    return (
			<div className={style.leftMenu}>
				<div className={style.wrapperLeftMenu}>
					{dataIcon.map(item => (
						<div className='left__menu-item'>
							<img className={style.leftMenuIcon} src={item.img} alt='' />
						</div>
					))}
				</div>
			</div>
		)
}

export default LeftMenu