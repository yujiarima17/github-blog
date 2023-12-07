import { HeaderContainer, Cover } from "./styles";
import coverImage from "../../assets/Cover.svg";
export function Header() {
	return (
		<HeaderContainer>
			<Cover>
				<img src={coverImage} alt="" />
			</Cover>
		</HeaderContainer>
	);
}
