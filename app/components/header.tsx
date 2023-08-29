'use client'
import { useState } from 'react';
import styles from '../styles.module.scss'
import Link from 'next/link';
import { collectionManager } from './collectionManager'

export default function Header() {

	const [showSubMenu, setShowSubMenu] = useState(false);
	const collections = collectionManager.getCollections();

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
					<div className={styles.works}>
						<span>Works:</span>
						<ul>
							{ collections.map((c, i) => (
							<li key={c.id}><Link href={`/${c.slug}`}>{c.title}</Link></li>
							))}
						</ul>
					</div>
					<span><Link href="/about">About</Link></span>
					<span><Link href="/cv">CV</Link></span>
				</div>
			</div>
			{ showSubMenu ? <ul className={styles.smallDisplay}>
				<li className={styles.collections}>
					<h3>Works:</h3>
					{ collections.map((c, _) => (
						<Link href={`/${c.slug}`} key={c.id}>{c.title}</Link>
					))}
				</li>
				<li><h3><Link href="/about">About</Link></h3></li>
				<li><h3><Link href="/cv">CV</Link></h3></li>
			</ul> : null }
		</header>
	)
}