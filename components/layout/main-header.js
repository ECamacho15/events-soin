import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Eventos SOIN</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Buscar todos los eventos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
