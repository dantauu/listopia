import dataIcon from "../../../../public/data"
import style from './LeftMenu.module.scss'


const LeftMenu = () => {
    return (
        <div className="left__menu">
            {dataIcon.map((item) => (
                <div className="left__menu__item">
                    <div className={style.wrapperLeftMenu}></div>
                    <img className={style.leftMenuIcon} src={item.img} key={item.id} alt="" />
                </div>
            ))}
        </div>
    )
}

export default LeftMenu