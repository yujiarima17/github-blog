import styled from "styled-components";
import { device } from "../../utils/breakpoints";
export const LayoutContainer = styled.div`
	max-width: 90rem;
	height: calc(100vh-10rem);
	margin: 0 auto;
	display: flex;
	flex-direction: column;
`;
export const MainContainer = styled.main`
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 0 auto;
	margin-top: -5rem;
	@media ${device.md} {
		width: 100%;
		margin-top: -3rem;
	}
	@media ${device.sm} {
		width: 100%;
		margin-top: -1rem;
	}
`;
