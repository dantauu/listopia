import Link from "next/link"
import dataIcon from "../../../../public/data"
import style from './left-menu.module.scss'


const LeftMenu = () => {
    return (
			<div className={style.leftMenu}>
				<div className={style.wrapperLeftMenu}>
					{dataIcon.map(item => (
						<Link href={item.link} key={item.id} className='left__menu-item'>
							<img className={`${style.leftMenuIcon} 
                            ${item.id === 1 && style.set}`} 
                            src={item.img} 
                            key={item.id}
                            alt='' />
						</Link>
					))}
				</div>
			</div>
		)
}

export default LeftMenu