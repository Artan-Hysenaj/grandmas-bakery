import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { useMemo, useState } from 'react';

import Pagination from '@/components/custom/Pagination';
import Promotions from '@/components/custom/Promotions';
import { Card } from '@/components/ui/card';

import { Pagination as PaginationType } from '@/types/Pagination';
import { Recipe } from '@/types/recipe';

const LIMIT = 9;

export const Component = function CakesList(): JSX.Element {
	const [page, setPage] = useState(1);

	// queries
	const { data } = useQuery<PaginationType<Recipe[]>>({
		queryKey: ['recipes', page],
		placeholderData: keepPreviousData,
		queryFn: async () =>
			fetch(`${import.meta.env.VITE_API_URL}/recipes?limit=${LIMIT}&skip=${(page - 1) * LIMIT}`).then((res) =>
				res.json()
			),
	});

	const pageCount = useMemo(() => Math.ceil(Number(data?.total) / LIMIT), [data?.total]);

	return (
		<div className="space-y-14 mb-20">
			<Promotions />
			<section className="mt-12">
				<h2 className="text-2xl font-semibold mb-6">Menu</h2>
				<div className="grid grid-cols-3 gap-4">
					{data?.recipes?.map((cake) => (
						<Card key={cake.id} className="rounded overflow-hidden w-full">
							<img
								alt={cake.name}
								className="w-full h-auto"
								height="150"
								width="150"
								src={cake.image}
								style={{
									aspectRatio: '150/150',
									objectFit: 'cover',
								}}
							/>
						</Card>
					))}
				</div>
				<Pagination page={page} pageCount={pageCount} setPage={setPage} />
			</section>
		</div>
	);
};
