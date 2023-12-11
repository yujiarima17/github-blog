import styled from "styled-components";
export const PostContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-text"]};
	text-align: start;
	padding: 40px 32px;
	width: 100%;
`;
export const PostContentText = styled.div``;
export const PostContentCode = styled.div``;
