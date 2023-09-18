// pch.wales common header component
import NavLink from "./navlink";

import style from "./header.module.scss";

export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.logo}>
        <img
          src="/img/logo192.png"
          alt="pch.wales logo"
        />
        <div className={style.logoText}>
          <h1 className={style.title}>Digital Person-Centred Cancer Care</h1>
          <h2 className={style.subtitle}>Matt Hall&apos;s PhD project</h2>
        </div>
      </div>
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink className={style.button} href="/" exact>The project</NavLink>
          </li>
          <li>
            <NavLink className={style.button} href="/team">The team</NavLink>
          </li>
          <li>
            <NavLink className={style.button} href="/resources">Resources</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}