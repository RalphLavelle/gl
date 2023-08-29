'use client'
import { useState } from 'react';
import styles from '../styles.module.scss'

export default function Footer() {

	const [emailAddressRevealed, setEmailAddressRevealed] = useState(false);

	const showEmailAddress = () => {
		setEmailAddressRevealed(!emailAddressRevealed)
	}

	const email = "gavinlavelleart@gmail.com"

	return (
		<footer>
			{ emailAddressRevealed ? <div className={styles.emailBlock}>{ email }</div> : null }
			<div>
				<a href="https://twitter.com/GavinLavelle" target="_blank"><i className="fa-brands fa-x-twitter"></i></a> | <a href="https://www.flickr.com/photos/gavinlavelle" target="_blank"><i className="fa-brands fa-flickr"></i></a> | <button onClick={showEmailAddress}><i className="fa-regular fa-envelope"></i></button> | <a href="https://ralphlavelle.net" target="_blank">Site by RL</a>
			</div>
		</footer>
	)
}