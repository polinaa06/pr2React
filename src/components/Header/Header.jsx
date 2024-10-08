import s from './Header.module.css'

export function Header() {
    return(
        <header className={s.header}>
            <div className={s.nav}>
                <a href="">О нас</a>
                <a href="">Каталог</a>
                <a href="">Где нас найти</a>
            </div>

            <div className={s.logo}></div>

            <div className={s.buttons}>
                <button className={s.btn_black}>Регистрация</button>
                <button className={s.btn_blue}>Войти</button>
            </div>
        </header>
    )
}