/* SPDX-FileCopyrightText: 2014-present Kriasoft */

/* SPDX-License-Identifier: MIT */
import { ArrowLeft, Minus, Plus, Settings } from 'lucide-react';

import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Button } from '@/components/ui/button';

/**
 * The main application layout.
 */
export function MainLayout(): JSX.Element {
	const topLayoutComponent = <h2 className="text-[#424242] text-xl leading-6 font-bold">Home Brewery</h2>;
	const bottomLayoutComponent = (
		<div className="flex gap-10 fixed left-0 bottom-0 bg-gray-300 w-full p-4">
			<span className="flex justify-between w-full max-w-40">
				<Button size="icon" onClick={() => {}}>
					<Minus />
				</Button>
				<span className="text-2xl">{1}</span>
				<Button size="icon" onClick={() => {}}>
					<Plus />
				</Button>
			</span>
			<Button onClick={() => {}}>Add For 150 €</Button>
		</div>
	);
	return (
		<div className="container border py-4">
			<nav className="flex justify-between items-center mb-14 lg:mb-10">
				<div className="lg:hidden fixed inset-0 flex justify-between max-h-fit p-4 bg-gray-100">
					<div>
						<ArrowLeft />
					</div>
					<div>{topLayoutComponent}</div>
					<div>
						<Settings />
					</div>
				</div>
				<div className="hidden lg:block">
					<Link to={'/cakes'}>
						<h1 className="text-neutral-700 text-5xl font-normal font-['Sansita One']">Home Bakery</h1>
					</Link>
				</div>
				<ul className="hidden lg:flex justify-between items-center gap-4">
					<li>
						<a href="/cart">Cart</a>
					</li>
					<li>
						<a href="/account">Account</a>
					</li>
				</ul>
			</nav>
			<main className="lg:min-h-[calc(100vh-187px)]">
				<Suspense>
					<Outlet />
				</Suspense>
			</main>
			<footer>
				<div className="lg:hidden fixed left-0 bottom-0 w-full p-4 bg-gray-100">
					<div>{bottomLayoutComponent}</div>
				</div>
				<div className="hidden lg:flex justify-between items-center border-t pt-4 mt-8">
					<div>
						<p>Home Bakery</p>
						<p>123-456-7890</p>
					</div>
					<div>
						<p>1234 Main St</p>
						<p>City, State 12345</p>
					</div>
					<div>
						<p>Hours:</p>
						<p>Mon-Fri: 9am-5pm</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

/**
 * The minimal app layout to be used on pages such Login/Signup,
 * Privacy Policy, Terms of Use, etc.
 */
export function BaseLayout(): JSX.Element {
	return (
		<div className="container border">
			<nav>
				<ul>
					<li>
						<Link to="/login">Login</Link>
					</li>
					<li>
						<Link to="/register">Register</Link>
					</li>
				</ul>
			</nav>
			<Suspense>
				<Outlet />
			</Suspense>
		</div>
	);
}
