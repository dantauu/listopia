import LeftMenuUi from "@/widgets/left-menu/ui"


export default function AdminLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className=''>
         <LeftMenuUi />
			<div className=''>
				{children}
			</div>
		</div>
	)
}
