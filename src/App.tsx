import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { UserProvider } from "./contexts/UserContext";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<UserProvider>
				<GlobalStyle />
				<BrowserRouter>
					<Router />
				</BrowserRouter>
			</UserProvider>
		</ThemeProvider>
	);
}
