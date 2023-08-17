'use client'
import { useState } from 'react';

export default function SearchForm() {

	const [emailAddressRevealed, setEmailAddressRevealed] = useState(false);

	const showEmailAddress = () => {
		setEmailAddressRevealed(!emailAddressRevealed)
	}

	return (
		<div>
			<a href="https://twitter.com/GavinLavelle" target="_blank"><i className="fa-brands fa-x-twitter"></i></a> | <a href="https://www.flickr.com/photos/gavinlavelle" target="_blank"><i class="fa-brands fa-flickr"></i></a> | <button onClick={showEmailAddress}><i class="fa-regular fa-envelope"></i></button> { emailAddressRevealed ? <span > gavinlavelleart@gmail.com </span> : null } | Site by <a href="https://ralphlavelle.net" target="_blank">RL</a>
		</div>
	)
}