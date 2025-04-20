"use client"

import { useAppSelector } from "@/redux/hooks"
import ModalAddTask from "@/shared/ui/modal-add-task/modal-add-task"
import { AnimatePresence } from "framer-motion"

const Modals = () => {
  const { isOpen, currentView } = useAppSelector((state) => state.modalTask)
  return (
    <>
      <AnimatePresence>
        {isOpen && currentView && (
          <div className="">
            {<ModalAddTask key={"task-modal"} view={currentView} />}
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Modals
