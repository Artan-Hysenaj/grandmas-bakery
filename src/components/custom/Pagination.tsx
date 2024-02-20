import {
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
	Pagination as PaginationShadcn,
} from '@/components/ui/pagination';

interface PaginationProps {
	page: number;
	pageCount: number;
	setPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({ page, pageCount, setPage }: PaginationProps): JSX.Element {
	return (
		<PaginationShadcn className="mt-6">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious onClick={() => page > 1 && setPage(page - 1)} />
				</PaginationItem>
				{Array.from({ length: pageCount }).map((_, index) => {
					return (
						<PaginationItem key={index}>
							<PaginationLink onClick={() => setPage(index + 1)} isActive={index + 1 === page}>
								{index + 1}
							</PaginationLink>
						</PaginationItem>
					);
				})}

				<PaginationItem>
					<PaginationNext onClick={() => page + 1 <= pageCount && setPage(page + 1)} />
				</PaginationItem>
			</PaginationContent>
		</PaginationShadcn>
	);
}

export default Pagination;
