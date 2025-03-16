'use client'

import { useAppSelector } from "@/redux/hooks"
import ModalAddTask from "@/shared/ui/modal-add-task/modal-add-task"
import { AnimatePresence } from "framer-motion"


const Modals = () => {
   const { isOpen, modalTypes } = useAppSelector((state) => state.modalTask)
   return (
      <>
         <AnimatePresence>
            {isOpen && (
               <div className="">
                  {modalTypes === 'task-open-modal' && <ModalAddTask />}
               </div>
            )}
         </AnimatePresence>
      </>
   )
}

export default Modals