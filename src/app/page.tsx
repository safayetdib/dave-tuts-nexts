import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
	title: 'Next Tuts | Home',
	description: 'Home Page',
};

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<h1 className='text-3xl font-bold'>Dave's Next.js Tuts</h1>
		</main>
	);
}
