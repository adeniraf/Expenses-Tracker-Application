export default function formatCurrency(number: number): string {
	// Convert the number to a string with commas
	const formattedString = parseFloat(number.toFixed(2)).toLocaleString(
		'en-US'
	)

	return formattedString
}
