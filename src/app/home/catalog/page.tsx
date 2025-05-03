'use client'

import TaskTitleUi from '@/widgets/task-title/ui'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import style from './catalog.module.scss'

const CatalogPage = () => {
	const pathname = usePathname()
	const searchParams = useSearchParams()
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		setIsActive(true)
		setIsActive(false)
		const timeout = setTimeout(() => setIsActive(true), 0)

		return () => clearTimeout(timeout)
	}, [pathname, searchParams])

	return (
		<div className={`${style.pageTransition} ${isActive && style.active}`}>
			<TaskTitleUi />
		</div>
	)
}

export default CatalogPage
