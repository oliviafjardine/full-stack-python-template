import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/shared/Layout";
import Home from "./pages/Home";

const queryClient = new QueryClient();

const App = () => (
	<QueryClientProvider client={queryClient}>
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Layout>
		</Router>
	</QueryClientProvider>
);

export default App;
