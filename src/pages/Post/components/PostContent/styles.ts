import styled from "styled-components";
import Markdown from "react-markdown";

export const PostContentContainer = styled(Markdown)`
	display: flex;
	flex-direction: column;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-text"]};
	text-align: start;
	padding: 40px 32px;
	gap: 1rem;
	width: 100%;
	pre {
		display: flex;
		align-items: center;
		background: ${(props) => props.theme.colors["base-post"]};
		color: #d5dce3;
		border-radius: 6px;
		padding: 1rem;
	}
	code {
		background: transparent;
		width: fit-content;
		margin: 0 auto;
	}
`;
