import { BearCountLocaleStorage } from './BearCountLocaleStorage'
import styles from './HomePage.module.scss'

export function HomePage() {
	return (
		<section className={styles.container}>
			<BearCountLocaleStorage />
		</section>
	)
}
