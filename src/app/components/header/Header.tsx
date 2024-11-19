import React from 'react';
import UserInfo from "@/app/components/user-info/UserInfo";
import Link from "next/link";
import Search from "@/app/components/search/Search";
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <UserInfo/>
            <ul>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/genres'}>Genres</Link>
                </li>
            </ul>
            <Search/>
        </div>
    );
};

export default Header;