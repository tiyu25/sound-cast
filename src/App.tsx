import { BrowserRouter } from "react-router"
import Router from "./router/Router"

function App() {
	return (
		<div style={{ height: '100vh', backgroundColor: 'var(--bg-color)', color: 'var(--basic-text-color)' }}>
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	)
}
export default App
