import styled from "styled-components";
import { device } from "../../../../utils/breakpoints";
export const ProfileContainer = styled.div`
	display: flex;
	span.link {
		display: flex;
		color: ${(props) => props.theme.colors.blue};
		top: 0;
		right: 0;
	}

	width: 100%;
	height: 13rem;
	justify-content: space-around;
	border-radius: 10px;
	align-items: center;
	background: ${(props) => props.theme.colors["base-profile"]};
	&:hover {
		border: 1px solid #3294f8;
	}
	transition: 1s;
	@media ${device.xl} {
		height: 10rem;
	}
	@media ${device.md} {
		width: fit-content;
		height: 15rem;
		flex-direction: column;
		margin: 0 auto;
	}
	@media ${device.sm} {
		width: 100%;
		gap: 5px;
	    justify-content: center;
		width: 50%;
		height: 11rem;
	}
`;
export const ProfileImage = styled.span`
	display: flex;
	border-radius: 8px;
	img {
		height: 9.25rem;
		width: 9.25rem;
	}
	@media ${device.xl} {
		img {
			height: 6.25rem;
			width: 6.25rem;
		}
	}
`;
