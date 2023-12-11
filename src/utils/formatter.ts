export function DateInDaysToNow(startDate: string) {
	const date = Date.parse(startDate);
	const dateInterval = Date.now() - date;
	// 1000 * 60 * 60 * 24 - 1 dia
	const differenceInDays = Math.round(dateInterval / (1000 * 60 * 60 * 24));
	return differenceInDays;
}
