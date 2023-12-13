import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../../../../../../utils/breakpoints";
export const PostContainer = styled(Link)`
	display: flex;
	flex-direction: column;
	text-decoration: none;
	border-radius: 10px;
	padding: 0.08rem 1rem;
	gap: 1rem;
	width: 26rem;
	height: 16rem;
	background: ${(props) => props.theme.colors["base-post"]};
	&:hover {
		border: 2px solid #3a536b;
	}
	@media ${device.md} {
		margin: 0 auto;
	}
`;
export const PostHeader = styled.header`
	display: flex;
	margin-top: 2rem;
	justify-content: center;
	gap: 1rem;
	span.title {
		display: flex;
		text-align: start;
		margin-left: -10px;
		width: 17rem;
		text-align: right;
		flex: 1;
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
	text-align: left;
	width: 22rem;
	justify-content: center;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-text"]};
	overflow: hidden;
	margin: 0 auto;
	margin-bottom: 2rem;
`;
