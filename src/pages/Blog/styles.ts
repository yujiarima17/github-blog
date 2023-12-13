import styled from "styled-components";
import { device } from "../../utils/breakpoints";
export const BlogContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 2rem;
	width: 54rem;
	&:nth-child(2) {
		margin-top: 2rem;
		margin-bottom: 1rem;
	}
	@media ${device.md} {
		width: 100%;
		margin: 0;
		padding: 0 2rem;
	}
`;
