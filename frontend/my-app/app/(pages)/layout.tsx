import classNames from 'classnames'
import Sidebar from '../components/Sidebar'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={
					'flex gap-2 justify-between h-screen w-screen bg-black overflow-hidden px-4 py-4'
				}>
				<Sidebar />
				<div className='flex w-full h-full'>{children}</div>
			</body>
		</html>
	)
}
