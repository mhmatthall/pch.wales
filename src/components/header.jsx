// pch.wales common header component
import NavLink from "./navlink";
import Link from "next/link";

import style from "./header.module.scss";

export default function Header() {
  return (
    <header className={style.container}>
      <Link className={style.logo} href="/">
        <img src="/img/logo192.png" alt="pch.wales" />
        <div className={style.logoText}>
          <h1 className={style.title}>Person-Centred Cancer Care for Wales</h1>
          <h2 className={style.subtitle}>Matt Hall&apos;s PhD project</h2>
        </div>
      </Link>
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink className={style.button} href="/" exact>
              <h3>The project</h3>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.button} href="/team">
              <h3>The team</h3>
            </NavLink>
          </li>
          <li>
            <NavLink className={style.button} href="/resources">
              <h3>Resources</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}