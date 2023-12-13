import styled from "styled-components";
import { device } from "../../../../utils/breakpoints";
export const PostsSectionContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 2rem;
	grid-column-gap: 2rem;
	margin-top: 3rem;
	@media ${device.md} {
		grid-template-columns: 1fr;
		grid-column-gap: 0;
		width: 100%;
	}
`;

