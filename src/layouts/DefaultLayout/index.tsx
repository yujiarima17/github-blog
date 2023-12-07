import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer, MainContainer } from "./styles";
export function DefaultLayout() {
	return (
		<LayoutContainer>
			<Header />
			<MainContainer>
				<Outlet />
			</MainContainer>
		</LayoutContainer>
	);
}
