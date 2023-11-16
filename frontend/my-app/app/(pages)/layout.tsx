import Sidebar from '../../components/Sidebar'
import Topbar from '@/components/Topbar'

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<section className='bg-black p-4 md:flex md:gap-4 h-screen w-full'>
			<Topbar />
			<Sidebar />

			{children}
		</section>
	)
}
