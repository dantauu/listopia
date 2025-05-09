import style from "./check-switch.module.scss"

const CheckSwitch = () => {
  return (
    <label className={style.toggleSwitch}>
      <input type="checkbox" />
      <div className={style.toggleSwitchBackground}>
        <div className={style.toggleSwitchHandle}></div>
      </div>
    </label>
  )
}

export default CheckSwitch
