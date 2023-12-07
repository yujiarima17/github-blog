import styled from "styled-components";
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
`;
export const ProfileImage = styled.span`
	display: flex;
	border-radius: 8px;
	img {
		height: 148px;
		width: 148px;
	}
`;
