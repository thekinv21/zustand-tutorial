import { useBearStore } from '@/store/store'

import styles from './HomePage.module.scss'

export function BearCounter() {
	const bearStore = useBearStore()

	return (
		<div className={styles.content}>
			<h1>Zustand Stored Bears: {bearStore.bears}</h1>

			<div className={styles.button_wrapper}>
				<button
					className={styles.remove_button}
					onClick={bearStore.removeAllBears}
				>
					Clear Bears
				</button>
				<button
					className={styles.add_button}
					onClick={bearStore.increasePopulation}
				>
					Add Bears
				</button>
			</div>
		</div>
	)
}