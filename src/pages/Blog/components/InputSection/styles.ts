import styled from "styled-components";

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-top: 5rem;
`;
export const InputField = styled.input`
	display: flex;
	padding: 12px 16px;
	outline: 0;
	border-radius: 6px;
	border: 1px solid #1c2f41;
	text-align: left;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-text"]};
	transition: 0.5s;
	background: ${(props) => props.theme.colors["base-input"]};
	&::placeholder {
		color: ${(props) => props.theme.colors["base-label"]};
	}
	&:focus {
		border: 1px solid #3294f8;
	}
`;
export const InputHeader = styled.div`
	display: flex;
	justify-content: space-between;
	color: ${(props) => props.theme.colors["base-subtitle"]};
	font: ${(props) => props.theme.fonts["Title S"]};
`;
export const HeaderPostsNumber = styled.span`
	display: flex;
	color: ${(props) => props.theme.colors["base-span"]};
	font: ${(props) => props.theme.fonts["Text S"]};
	align-items: center;
`;
