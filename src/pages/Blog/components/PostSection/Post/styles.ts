import styled from "styled-components";
export const PostContainer = styled.div`
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	padding: 1rem 1rem;
	gap: 1rem;
	width: 26rem;
	height: 16rem;
	background: ${(props) => props.theme.colors["base-post"]};
	transition: 0.5s;
	&:hover {
		border: 2px solid #3a536b;
	}
`;
export const PostHeader = styled.header`
	display: flex;
	margin-top: 2rem;
	justify-content: center;
	span.title {
		display: flex;
		margin-left: -10px;
		width: 17rem;
		font: ${(props) => props.theme.fonts["Title M"]};
		color: ${(props) => props.theme.colors["base-title"]};
	}
	span.postDate {
		display: flex;
		text-align: start;
		font: ${(props) => props.theme.fonts["Text S"]};
		color: ${(props) => props.theme.colors["base-span"]};
	}
`;
export const PostContent = styled.div`
	display: flex;
	align-items: top;
	height: 6.5rem;
	text-overflow: ellipsis;
	width: 22rem;
	justify-content: center;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-text"]};
	overflow: hidden;
	margin: 0 auto;
	margin-bottom: 2rem;
`;
