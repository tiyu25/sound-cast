import { BrowserRouter } from "react-router"
import Router from "./router/Router"
import { AuthProvider } from "./contexts/AuthContext"

function App() {
	return (
		<div style={{ height: '100vh', backgroundColor: 'var(--bg-color)', color: 'var(--basic-text-color)' }}>
			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</div>
	)
}
export default App
