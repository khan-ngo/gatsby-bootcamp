import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <header>
            <h1>
                <Link className={headerStyles.title} to='/'>
                Khanh Ngo
                </Link>
                </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} to="/">Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to="about">About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to="/blog">Blog</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header