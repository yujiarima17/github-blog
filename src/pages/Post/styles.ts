import styled from "styled-components";
import { device } from "../../utils/breakpoints";
export const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 2rem;
	width: 54rem;
	@media ${device.md}{
		width: 100%;
		margin: 0;
		padding:0 2rem;
	};
`;
