type addTaskBtnProps = {
  addTaskColor: string
  addTaskText: string
  addTaskTextClass: string
  addTaskWrapper: string
}

type ButtonProps = {
  imgClass?: string
  btnText: string
  btnImg?: string
  wrapperBtn: string
  btnClass: string
  onClick?: () => void
}

type ModalProps = {
  openModal: boolean
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export { addTaskBtnProps, ButtonProps, ModalProps }
