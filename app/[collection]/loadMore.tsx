'use client'
import styles from '../styles.module.scss'

import { useState } from 'react'
 
export default function LoadMore() {
	const [pageIndex, setPageIndex] = useState(0)

	const loading = () => {
		alert("loading...")
	}
 
	return (
		<div className={styles.loadMore}>
			<button onClick={loading}>Load more</button>
		</div>
	)
}