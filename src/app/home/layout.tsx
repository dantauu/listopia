import LeftMenuUi from "@/widgets/left-menu/ui"
import style from './layout.module.scss'
import StoreProvider from "@/redux/store-proveder"


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
		<StoreProvider>
			<div className={style.wrapper}>
         	<LeftMenuUi />
				<div className={style.content}>
					{children}
				</div>
			</div>
		</StoreProvider>
		</>
	)
}
