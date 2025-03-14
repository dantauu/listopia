'use client'

import Link from "next/link"
import dataIcon from "../../../../public/data"
import style from './left-menu.module.scss'
import { useState } from "react"


const LeftMenu = () => {
	const [activePage, setActivePage] = useState<string>('/home/catalog')
	const handlePageSelect = (link: string) => {
		setActivePage(link)
	}
    return (
			<div className={style.leftMenu}>
				<div className={style.wrapperLeftMenu}>
					{dataIcon.map(item => (
						<Link 
						onClick={() => handlePageSelect(item.link)}
						href={item.link} 
						key={item.id} 
						className={`left__menu-item ${activePage === item.link && style.activePage}`}>
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