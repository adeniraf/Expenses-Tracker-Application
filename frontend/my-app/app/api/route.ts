export async function GET(request: Request) {
	const res = await fetch('http://localhost:5000/transactions/get-expenses')

	const data = await res.json()
	console.log(`Data: ${data}`)

	return Response.json(data)
}
