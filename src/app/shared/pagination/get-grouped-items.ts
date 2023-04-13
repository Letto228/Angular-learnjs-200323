export function getGroupedItems<T>(items: T[], elementsSize: number): Array<T[]> {
	const paginationChanksLength = Math.ceil(items.length / elementsSize);

	return Array.from({length: paginationChanksLength}).map((_, index) => {
		const sliceStart = index * elementsSize;

		return items.slice(sliceStart, sliceStart + elementsSize);
	});
}
