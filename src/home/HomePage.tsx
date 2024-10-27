import { BearCounter } from './BearCounter'
import styles from './HomePage.module.scss'

export function HomePage() {
	return (
		<section className={styles.container}>
			<BearCounter />
		</section>
	)
}
