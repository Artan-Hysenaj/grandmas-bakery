import { useQuery } from '@tanstack/react-query';
import { ClockIcon, StarIcon, UsersIcon } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';

import { Pagination } from '@/types/Pagination';
import { Recipe } from '@/types/recipe';

export const Component = function CakesList(): JSX.Element {
	const { data } = useQuery<Pagination<Recipe[]>>({
		queryKey: [],
		queryFn: async () => fetch('https://dummyjson.com/recipes?limit=10').then((res) => res.json()),
	});

	console.log(data);

	return (
		<div className="space-y-14 mb-20">
			<section>
				<h2 className="text-2xl font-semibold mb-6">Promotions</h2>
				<br />
				<Carousel opts={{ active: true, align: 'start' }}>
					<CarouselContent>
						{data?.recipes?.map((cake) => (
							<CarouselItem key={cake.id} className="basis-10/12">
								<div className="grid grid-cols-2 gap-4">
									<Card className="w-full">
										<img
											alt={cake.name}
											className="w-full h-full rounded"
											height="200"
											width="300"
											src={cake.image}
											style={{
												aspectRatio: '300/200',
												objectFit: 'cover',
											}}
										/>
									</Card>
									<Card className="w-full">
										<CardHeader>
											<CardTitle>{cake.name}</CardTitle>
											<div className="flex items-center mt-1">
												<StarIcon className="text-yellow-400" />
												<span className="ml-1 text-sm text-gray-600">
													{cake.rating} ({cake.reviewCount} reviews)
												</span>
											</div>
											<p className="mt-2 text-sm text-gray-600">
												{cake.cuisine} - {cake.mealType.join(', ')}
											</p>
											<div className="flex mt-2 space-x-2">
												{cake.tags.map((tag) => (
													<Badge key={tag} variant="secondary">
														{tag}
													</Badge>
												))}
											</div>
										</CardHeader>
										<CardContent>
											<ul className="list-disc pl-4 mb-4">
												{cake.ingredients.slice(0, 5).map((ingredient) => (
													<li key={ingredient}>{ingredient}</li>
												))}
												...
											</ul>
											<div className="flex items-center space-x-2 mb-4">
												<ClockIcon className="text-gray-500" />
												<span>Prep: {cake.prepTimeMinutes}min</span>
												<ClockIcon className="text-gray-500" />
												<span>Cook: {cake.cookTimeMinutes}min</span>
												<UsersIcon className="text-gray-500" />
												<span>Servings: {cake.servings}</span>
											</div>
										</CardContent>
										<CardFooter className="flex justify-end">
											<Button>Order Now</Button>
										</CardFooter>
									</Card>
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
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
			</section>
		</div>
	);
};
