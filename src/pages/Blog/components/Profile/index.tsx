import { ProfileContainer, ProfileImage } from "./styles";
import { ProfileData } from "./components/ProfileData";
import { UserContext } from "../../../../contexts/UserContext";
import { useContextSelector } from "use-context-selector";
export function Profile() {
	const user = useContextSelector(UserContext, (context) => {
		return context.user;
	});
	return (
		<ProfileContainer>
			<ProfileImage>
				<img src={user?.avatarUrl} alt="" />
			</ProfileImage>
			<ProfileData />
		</ProfileContainer>
	);
}
