import React from 'react';
import UserInfo from "@/app/components/user-info/UserInfo";
import Link from "next/link";
import Search from "@/app/components/search/Search";
import styles from './Header.module.css'

const Header = async () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftCorner}>
                <UserInfo/>
                <ul className={styles.navMenu}>
                    <li>
                        <Link href={'/'} className={styles.navLink}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/genres'} className={styles.navLink}>Genres</Link>
                    </li>
                </ul>
            </div>
            <Search/>
        </div>
    );
};

export default Header;