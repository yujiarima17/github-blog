import { device } from "../../../../utils/breakpoints";
import styled from "styled-components";
export const PostInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	flex: 1;
	height: 10rem;
	padding: 2rem;
	gap: 1rem;
	border-radius: 10px;
	background: ${(props) => props.theme.colors["base-profile"]};
	&:hover {
		border: 1px solid #3294f8;
	}
	@media ${device.md} {
		

	}
	transition: 1s;
`;
export const PostInfoHeader = styled.header`
	display: flex;
	justify-content: space-between;
`;
export const HeaderInfo = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	gap: 5px;
	color: ${(props) => props.theme.colors.blue};
	font: ${(props) => props.theme.fonts["Link"]};
	span {
		&::before {
			content: "\00a0\00a0";
		}
	}
`;
export const PostData = styled.div`
	display: flex;
	font: ${(props) => props.theme.fonts["Title L"]};
	color: ${(props) => props.theme.colors["base-title"]};
	flex-direction: column;
	gap: 0.5rem;
`;
export const PostDetailsContainer = styled.div`
	display: flex;
	justify-content: start;
	gap: 2rem;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-span"]};
	span.post-detail {
		display: flex;
		gap: 8px;
		align-items: center;
	}
`;
