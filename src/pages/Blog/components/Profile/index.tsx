import { ProfileContainer, ProfileImage } from "./styles";
import avatar from "../../../../assets/avatar.svg";
import { ProfileData } from "./components/ProfileData";

export function Profile() {
	return (
		<ProfileContainer>
			
			<ProfileImage>
				<img src={avatar} alt="" />
			</ProfileImage>
			<ProfileData />
		</ProfileContainer>
	);
}
