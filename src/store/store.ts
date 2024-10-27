import { create } from 'zustand'

interface IBearStore {
	bears: number
	increasePopulation: () => void
	removeAllBears: () => void
}

export const useBearStore = create<IBearStore>(set => ({
	// initial data
	bears: 0,

	// here is function who will be add bears
	increasePopulation: () => set(state => ({ bears: state.bears + 1 })),

	// here is function who will be remove all bears
	removeAllBears: () => set({ bears: 0 })
}))
