import { useLayoutEffect } from 'react'

import { IUser, userStore } from '@/store/user.store'

import styles from './HomePage.module.scss'

export function UsersList() {
	const { users, fetchUsers } = userStore()

	useLayoutEffect(() => {
		fetchUsers()
	}, [])

	return (
		<div className={styles.content}>
			<h1> Stored Users Count: {users.length}</h1>

			<ul className='flex flex-col list-decimal'>
				{users.map((user: IUser) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	)
}
