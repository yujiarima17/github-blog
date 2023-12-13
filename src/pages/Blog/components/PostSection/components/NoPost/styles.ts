import styled from "styled-components";
export const NoPostsContainer = styled.div`
	display: flex;
	color: ${(props) => props.theme.colors["base-span"]};
	font: ${(props) => props.theme.fonts["Title L"]};
	gap: 1rem;
	margin: 0 auto;
	margin-top: 3rem;
	flex-direction: column;
	align-items: center;
`;