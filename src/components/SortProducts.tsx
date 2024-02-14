'use client';

import { useSearchParams } from 'next/navigation';

export default function SortProducts() {
	const searchParams = useSearchParams();

	function updateSorting(sortOrder: string) {
		const params = new URLSearchParams(searchParams.toString());
		params.set('sort', sortOrder);
		window.history.pushState(null, '', `?${params.toString()}`);
	}

	return (
		<div className='flex flex-col gap-4 border shadow p-4'>
			<h4 className='text-xl font-bold'>window.history.pushState</h4>
			<button
				onClick={() => updateSorting('asc')}
				className='border p-2'>
				Sort Ascending
			</button>
			<button
				onClick={() => updateSorting('desc')}
				className='border p-2'>
				Sort Descending
			</button>
		</div>
	);
}
