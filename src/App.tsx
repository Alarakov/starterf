type Props = {
	enabled: boolean
}
const Hello = (props: Props) => {}
function App() {
	return (
		<>
			{Array(6)
				.fill(null)
				.map((item) => {
					return <div></div>
				})}
		</>
	)
}
export default App
