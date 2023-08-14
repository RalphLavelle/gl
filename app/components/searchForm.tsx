'use client'
import styles from '../styles.module.scss'
 
export default function SearchForm() {

	const search = (event) => {
		const searchTerm = event.target.value;
		  if(searchTerm.length > 2) {
			alert(`Searching for ${searchTerm}...`);
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