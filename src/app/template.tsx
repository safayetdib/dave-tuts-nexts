import Link from 'next/link';

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<div className='flex items-center gap-4 p-2 border-y'>
				<h2>Template:</h2>
				<nav>
					<ul className='flex bg-sky-600 text-white gap-4 p-2'>
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
		</div>
	);
}
