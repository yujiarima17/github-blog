import { HeaderContainer } from "./styles";
import coverImage from "../../assets/Cover.svg";
export function Header() {
	return (
		<HeaderContainer>
			<img src={coverImage} alt="" />
		</HeaderContainer>
	);
}
