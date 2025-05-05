import LeftMenuUi from "@/widgets/left-menu/ui"
import style from "./layout.module.scss"
import Modals from "@/features/ui/modals/modals"
import React from "react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className={style.wrapper}>
        <LeftMenuUi />
        <div className={style.content}>{children}</div>
      </div>
      <Modals />
    </>
  )
}
