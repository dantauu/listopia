import LeftMenuUi from "@/widgets/left-menu/ui"
import style from './layout.module.scss'


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className={style.wrapper}>
         <LeftMenuUi />
			<div className={style.content}>
				{children}
			</div>
		</div>
	)
}
