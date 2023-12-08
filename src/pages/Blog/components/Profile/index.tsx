import { ProfileContainer, ProfileImage } from "./styles";
import { ProfileData } from "./components/ProfileData";
import { UserContext } from "../../../../contexts/UserContext";
import { useContext } from "react";

export function Profile() {
	const { user } = useContext(UserContext);
	return (
		<ProfileContainer>
			<ProfileImage>
				<img src={user?.avatarUrl} alt="" />
			</ProfileImage>
			<ProfileData />
		</ProfileContainer>
	);
}
