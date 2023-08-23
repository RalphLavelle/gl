'use client'
import { useState } from 'react';
import styles from '../styles.module.scss'
import Link from 'next/link';

export default function Header() {

	const [showSubMenu, setShowSubMenu] = useState(false);

	const toggleMenu = () => {
		setShowSubMenu(!showSubMenu);
	}

	return (
		<header>
			<div className={styles.mainDisplay}>
				<h1><Link href="/">Gavin Lavelle</Link></h1>
				<button type="button" className={styles.menuIcon} onClick={toggleMenu}>
					{ !showSubMenu ? <i className="fa-solid fa-bars"></i> : 
					<i className="fa-solid fa-xmark"></i> }
				</button>
				<div className={styles.headerItems}>
				<span><Link href="/about">About</Link></span>
				<span><Link href="/cv">CV</Link></span>
				</div>
			</div>
			{ showSubMenu ? <ul className={styles.smallDisplay}>
				<li><h3><Link href="/about">About</Link></h3></li>
				<li><h3><Link href="/cv">CV</Link></h3></li>
			</ul> : null }
		</header>
	)
}