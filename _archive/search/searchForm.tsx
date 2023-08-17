'use client'
import styles from '../styles.module.scss'
import { useRouter } from 'next/navigation'

export default function SearchForm() {

	const router = useRouter()

	const search = (event) => {
		const searchTerm = event.target.value;
		  if(searchTerm.length > 2) {
			router.push('/search?term=' + searchTerm)
		  }
	};
 
	return (
		<form>
			<div className={styles.searchIcon}>
			<i className="fa-solid fa-magnifying-glass"></i>
			</div>
			<input type="text" placeholder="Title, description, etc." onChange={search} />
		</form>
	)
}