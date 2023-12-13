import styled from "styled-components";
import { device } from "../../utils/breakpoints";
export const HeaderContainer = styled.header`
	display: flex;
	border-radius: 6px;

	box-shadow:
		#14589c 0px 2px 1px,
		#14589c 0px 4px 2px,
		#14589c 0px 8px 4px,
		#14589c 0px 16px 8px,
		#14589c 0px 32px 16px;
	@media ${device.xl} {
		img {
			width: 100%;
		}
	}
	
`;
