import Link from 'next/link';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section>
			<div className='flex items-center gap-4 p-2'>
				<h2>Dashboard:</h2>
				<nav>
					<ul className='flex bg-gray-100 gap-4 p-2'>
						<li>
							<Link
								href='/'
								className='hover:underline'>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/dashboard'
								className='hover:underline'>
								Dashboard
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			{children}
		</section>
	);
}
