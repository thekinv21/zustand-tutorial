import { ReactQueryProvider } from './ReactQueryProvider'

interface IApplicationProvider {
	children: React.ReactNode
}

export function ApplicationProvider({ children }: IApplicationProvider) {
	return <ReactQueryProvider>{children}</ReactQueryProvider>
}
