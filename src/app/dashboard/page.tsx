import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import SortProducts from '@/components/SortProducts';

export default function Page() {
	return (
		<main className='flex min-h-screen flex-col items-center gap-8 p-24'>
			<h1 className='text-3xl font-bold'>Dashboard</h1>
			<SortProducts />
			<LocaleSwitcher />
		</main>
	);
}
