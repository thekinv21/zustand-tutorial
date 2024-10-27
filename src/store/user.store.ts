import { create } from 'zustand'

export interface IUser {
	id: number
	name: string
	username: string
	email: string
	address: IAddress
	phone: string
	website: string
	company: ICompany
}

export interface IAddress {
	street: string
	city: string
	zipcode: string
	geo: {
		lat: string
		lng: string
	}
}

export interface ICompany {
	name: string
	catchPhrase: string
	bs: string
}

export interface IUserStore {
	users: IUser[]
	fetchUsers: () => void
}

export const userStore = create<IUserStore>(set => ({
	users: [] as IUser[],
	fetchUsers: async () => {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
		const items = await response.json()
		set({ users: items })
	}
}))
