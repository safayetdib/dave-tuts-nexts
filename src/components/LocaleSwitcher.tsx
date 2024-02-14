'use client';

import { usePathname } from 'next/navigation';

export function LocaleSwitcher() {
	const pathname = usePathname();

	function switchLocale(locale: string) {
		// e.g. '/en/about' or '/fr/contact'
		const newPath = `/${locale}${pathname}`;
		window.history.replaceState(null, '', newPath);
	}

	return (
		<div className='flex flex-col gap-4 border shadow p-4'>
			<h4 className='text-xl font-bold'>window.history.replaceState</h4>
			<button
				onClick={() => switchLocale('en')}
				className='border p-2'>
				English
			</button>
			<button
				onClick={() => switchLocale('fr')}
				className='border p-2'>
				French
			</button>
		</div>
	);
}
