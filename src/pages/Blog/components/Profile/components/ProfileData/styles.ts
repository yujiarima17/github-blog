import styled from "styled-components";
import { device } from "../../../../../../utils/breakpoints";
export const ProfileDataContainer = styled.div`
	display: flex;
	position: relative;
	width: 38rem;
	flex-direction: column;
	align-items: start;
	row-gap: 1rem;
	a.link {
		text-decoration: none;
		display: flex;
		gap: 5px;
		align-items: center;
		position: absolute;
		color: ${(props) => props.theme.colors.blue};
		font: ${(props) => props.theme.fonts["Link"]};
		right: 0;
		top: 0;
		transition: 0.5s;
		&:hover {
			text-decoration: underline;
		}
	}
	@media ${device.md} {
		height: fit-content;
		align-items: center;
	}
	@media ${device.sm} {
		height: fit-content;
		width: 100%;
		align-items: center;
		row-gap: 0.5rem;
		a.link {
			position: relative;
		}
	}
`;
export const ProfileBio = styled.span`
	display: flex;
	font: ${(props) => props.theme.fonts["Text M"]};
	color: ${(props) => props.theme.colors["base-text"]};
	text-align: left;
	transition: display 0.5s;
	@media ${device.md} {
		height: fit-content;
		text-align: center;
	}
	@media ${device.sm} {
		display: none;
	}
`;
export const ProfileName = styled.span`
	display: flex;
	font: ${(props) => props.theme.fonts["Title L"]};
	color: ${(props) => props.theme.colors["base-title"]};
`;
export const ProfileInfoContainer = styled.div`
	display: flex;
	gap: 24px;
	transition: display 0.5s;
	@media ${device.sm} {
		display: none;
	}
`;
export const ProfileInfo = styled.span`
	display: flex;
	align-items: center;
	gap: 8px;
	color: ${(props) => props.theme.colors["base-subtitle"]};
	font: ${(props) => props.theme.fonts["Text M"]};
`;
