import styled from "styled-components";

export const ProfileDataContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	row-gap: 1rem;
`;
export const ProfileBio = styled.span`
	display: flex;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-text"]};
	text-align: left;
	width: 38rem;
`;
export const ProfileName = styled.span`
	display: flex;
	font: ${(props) => props.theme.fonts["Title L"]};
	color: ${(props) => props.theme.colors["base-title"]};
`;
export const ProfileInfoContainer = styled.div`
	display: flex;
	gap: 24px;
`;
export const ProfileInfo = styled.span`
	display: flex;
	gap: 8px;
	color: ${(props) => props.theme.colors["base-subtitle"]};
`;
