import {
	ProfileBio,
	ProfileDataContainer,
	ProfileInfo,
	ProfileInfoContainer,
	ProfileName,
} from "./styles";
import { ArrowSquareUpRight } from "phosphor-react";
import { useContext } from "react";
import { UserContext } from "../../../../../../contexts/UserContext";

export function ProfileData() {
	const { user } = useContext(UserContext);
	return (
		<ProfileDataContainer>
			<ProfileName>{user?.username}</ProfileName>
			<ProfileBio>{user?.biography}</ProfileBio>
			<ProfileInfoContainer>
				<ProfileInfo>{user?.loginName}</ProfileInfo>
				<ProfileInfo>{user?.company}</ProfileInfo>
				<ProfileInfo> {`${user?.followers} seguidores`}</ProfileInfo>
			</ProfileInfoContainer>
		</ProfileDataContainer>
	);
}
