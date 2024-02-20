import { Star } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

export const Component = function CakesList(): JSX.Element {
	return (
		<div className="grid md:grid-cols-2 items-start max-w-6xl gap-6 lg:gap-12 px-4 mx-auto py-6">
			<div className="flex flex-col gap-4 items-start">
				<div className="grid gap-4 items-start">
					<h1 className="font-bold text-3xl sm:text-4xl">Chocolate Croissant</h1>
					<div className="flex items-center gap-4">
						<div className="flex items-center gap-0.5">
							<Star className="w-5 h-5 fill-primary" />
							<Star className="w-5 h-5 fill-primary" />
							<Star className="w-5 h-5 fill-primary" />
							<Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
							<Star className="w-5 h-5 fill-muted stroke-muted-foreground" />
						</div>
					</div>
				</div>
				<form className="grid gap-4 md:gap-10">
					<div className="grid gap-2">
						<Label className="text-base" htmlFor="color">
							Color
						</Label>
						<RadioGroup className="flex items-center gap-2" defaultValue="chocolate" id="color">
							<Label
								className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
								htmlFor="color-chocolate">
								<RadioGroupItem id="color-chocolate" value="chocolate" />
								Chocolate
							</Label>
							<Label
								className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
								htmlFor="color-almond">
								<RadioGroupItem id="color-almond" value="almond" />
								Almond
							</Label>
							<Label
								className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
								htmlFor="color-plain">
								<RadioGroupItem id="color-plain" value="plain" />
								Plain
							</Label>
						</RadioGroup>
					</div>
					<div className="grid gap-2">
						<Label className="text-base" htmlFor="size">
							Size
						</Label>
						<RadioGroup className="flex items-center gap-2" defaultValue="single" id="size">
							<Label
								className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
								htmlFor="size-single">
								<RadioGroupItem id="size-single" value="single" />
								Single
							</Label>
							<Label
								className="border cursor-pointer rounded-md p-2 flex items-center gap-2 [&:has(:checked)]:bg-gray-100 dark:[&:has(:checked)]:bg-gray-800"
								htmlFor="size-double">
								<RadioGroupItem id="size-double" value="double" />
								Double
							</Label>
						</RadioGroup>
					</div>
					<div className="grid gap-2">
						<Label className="text-base" htmlFor="quantity">
							Quantity
						</Label>
						<Select defaultValue="1">
							<SelectTrigger className="w-24">
								<SelectValue placeholder="Select" />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="1">1</SelectItem>
								<SelectItem value="2">2</SelectItem>
								<SelectItem value="3">3</SelectItem>
								<SelectItem value="4">4</SelectItem>
								<SelectItem value="5">5</SelectItem>
							</SelectContent>
						</Select>
					</div>
					<Button size="lg">Add to cart</Button>
				</form>
				<Separator className="w-full" />
				<div className="grid gap-4 text-sm leading-loose">
					<p>
						The Chocolate Croissant is a delightful combination of flaky pastry and rich, velvety chocolate.
						Each bite offers a perfect balance of buttery, golden-brown layers and luscious, indulgent
						chocolate filling, making it an irresistible treat for pastry lovers of all ages.
					</p>
					<p>
						Our croissants are handcrafted by our expert bakers using only the finest ingredients, ensuring
						exceptional quality and flavor in every batch. Whether enjoyed with a morning coffee or as a
						sweet pick-me-up throughout the day, the Chocolate Croissant is sure to satisfy your cravings
						with its heavenly taste and elegant texture.
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-4 items-start">
				<img
					alt="Product Image"
					className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
					height={400}
					src="https://via.placeholder.com/400"
					width={400}
				/>
			</div>
		</div>
	);
};
