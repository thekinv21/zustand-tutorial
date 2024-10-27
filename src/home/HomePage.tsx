import styles from './HomePage.module.scss'
import { UsersList } from './UsersList'

export function HomePage() {
	return (
		<section className={styles.container}>
			<UsersList />
		</section>
	)
}
